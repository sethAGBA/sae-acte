'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AccueilPage from '@/components/acte/sections/Accueil';

export default function Page() {
  const router = useRouter();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <AccueilPage
      expandedService={expandedService}
      onToggleService={(id) =>
        setExpandedService((current) => (current === id ? null : id))
      }
      onContactClick={() => router.push('/contact')}
    />
  );
}
