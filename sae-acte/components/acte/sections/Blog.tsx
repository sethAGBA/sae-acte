import React from 'react';
import { ArrowUpRight, BookOpen, Lightbulb, MessageSquareText } from 'lucide-react';
import HeroCarousel from '../HeroCarousel';
import SectionAccent from '../SectionAccent';

const BlogPage = () => (
  <div>
    <HeroCarousel
      title="Blog ACTE"
      lines={['Conseils, interviews et inspiration pour avancer.']}
      eyebrow={(
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold">
          <BookOpen className="h-4 w-4" />
          Actualités & bonnes pratiques
        </div>
      )}
      images={[
        '/hero/scene-de-bureau-avec-ordinateur-portable.jpg',
        '/hero/portrait-de-jolie-femme-cubaine-presentant-les-informations-statistiques-a-son-patron-meconnaissable.jpg',
        '/hero/les-femmes-d-affaires-parlant-pres-du-bureau-pendant-une-pause-cafe-dans-le-couloir-de-la-grande-societe.jpg'
      ]}
    />

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-12">
          <div className="rounded-3xl bg-gradient-to-br from-[#044460] via-[#00b3ab]/40 to-[#044460] text-white p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                <Lightbulb className="h-5 w-5" />
              </div>
              <span className="text-sm uppercase tracking-wide text-white/80">Inspiration ACTE</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Les parcours qui transforment des idées en carrières</h2>
            <SectionAccent align="left" className="mb-6" />
            <p className="text-white/90 mb-8">
              Découvrez des portraits, des réussites et des retours d'expérience de talents formés par ACTE.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-[#044460] px-6 py-3 font-bold hover:bg-white/90 transition">
              Lire les histoires
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-3xl border border-[#044460]/15 p-8 bg-[#00b3ab]/5">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareText className="h-5 w-5 text-[#00b3ab]" />
              <span className="text-sm uppercase tracking-wide text-[#044460]">Focus</span>
            </div>
            <h3 className="text-xl font-bold text-[#044460] mb-3">Culture digitale</h3>
            <p className="text-gray-600 mb-6">
              IA, data, communication et nouveaux métiers : restez à jour avec nos analyses.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full border border-[#044460]/30 px-5 py-2 text-[#044460] font-semibold hover:border-[#044460]/60 transition">
              Explorer les articles
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Leadership & employabilité',
              desc: 'Les compétences humaines qui font la différence sur le marché.',
              tag: 'Leadership'
            },
            {
              title: 'Communication pro',
              desc: 'Construire une présence claire et crédible en ligne.',
              tag: 'Communication'
            },
            {
              title: 'Entrepreneuriat',
              desc: 'Passer de l\'idée à l\'exécution avec méthode.',
              tag: 'Business'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#044460]/10 p-6 hover:shadow-md transition">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#00b3ab] mb-3">
                {item.tag}
              </div>
              <h4 className="text-lg font-bold text-[#044460] mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="inline-flex items-center gap-2 text-[#044460] font-semibold">
                Lire
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BlogPage;
