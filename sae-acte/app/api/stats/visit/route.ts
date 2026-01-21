import { createClient } from 'redis';
import { NextResponse, NextRequest } from 'next/server';

let client: any = null;

async function getRedisClient() {
    if (!client) {
        client = createClient({
            url: process.env.REDIS_URL
        });
        client.on('error', (err: any) => console.error('Redis Client Error', err));
        await client.connect();
    }
    return client;
}

export const GET = async (req: NextRequest) => {
    try {
        const redis = await getRedisClient();

        // 1. Incrémenter le compteur de vues TOTAL
        const views = await redis.incr("page_views");

        // 2. Gérer les utilisateurs EN LIGNE (Presence)
        const ip = req.headers.get('x-forwarded-for') || 'anonymous';
        const presenceKey = `presence:${ip}`;

        // On marque l'utilisateur comme présent pour 60 secondes
        await redis.set(presenceKey, 'active', {
            EX: 60
        });

        // 3. Compter les utilisateurs en ligne avec scanIterator (plus robuste pour node-redis v4)
        let onlineCount = 0;
        try {
            for await (const key of redis.scanIterator({
                MATCH: 'presence:*',
                COUNT: 100
            })) {
                onlineCount++;
            }
        } catch (scanError) {
            console.error("Erreur lors du scan:", scanError);
            onlineCount = 1; // Fallback par défaut
        }

        return NextResponse.json({
            views,
            online: Math.max(1, onlineCount)
        });
    } catch (error) {
        console.error("Erreur Redis Presence:", error);
        return NextResponse.json({ views: 0, online: 1 }, { status: 200 });
    }
};
