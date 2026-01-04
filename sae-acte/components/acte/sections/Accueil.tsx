'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Briefcase,
  Calculator,
  FolderKanban,
  Globe,
  Megaphone,
  Scale,
  Users,
  ClipboardCheck
} from 'lucide-react';
import HeroCarousel from '../HeroCarousel';
import SectionAccent from '../SectionAccent';
import { services, stats, partners, valeurs } from '../data';

type AccueilProps = {
  expandedService: string | null;
  onToggleService: (id: string) => void;
  onContactClick: () => void;
};

const AccueilPage = ({ expandedService, onToggleService, onContactClick }: AccueilProps) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showPourquoiActe, setShowPourquoiActe] = useState(true);
  const [counts, setCounts] = useState(() =>
    stats.map(() => 0)
  );

  const parsedStats = useMemo(
    () =>
      stats.map((stat) => {
        const numeric = Number(stat.number.replace(/\\D/g, '')) || 0;
        const suffix = stat.number.replace(/[\\d\\s]/g, '');
        return { ...stat, numeric, suffix };
      }),
    []
  );

  useEffect(() => {
    if (!statsRef.current || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimated) {
          return;
        }

        setHasAnimated(true);
        const start = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCounts(
            parsedStats.map((stat) => Math.round(stat.numeric * progress))
          );
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, parsedStats]);

  const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    expertise: Calculator,
    fiscale: Scale,
    sociale: Users,
    rh: Users,
    marketing: Megaphone,
    digital: Globe,
    audit: ClipboardCheck,
    projet: FolderKanban
  };
  return (
    <div>
      <HeroCarousel
        title={
          <>
            Appui En Compétences<br />
            Et En Transformation Pour<br />
            L'employabilité Des Jeunes
          </>
        }
        align="left"
        images={[
          '/hero/heureuse-femme-d-affaires-afro-americaine-travaillant-sur-un-pave-tactile-au-bureau.jpg',
          '/hero/equipe.png',
          '/hero/reunion-d-affaires-dans-un-cafe.jpg'
        ]}
      >
        <button
          className="bg-white text-[#008080] px-7 py-2.5 rounded-md font-semibold text-base hover:bg-gray-100 transition shadow-lg"
          onClick={() => setShowPourquoiActe((prev) => !prev)}
          aria-expanded={showPourquoiActe}
        >
          POURQUOI ACTE?
        </button>
      </HeroCarousel>

      {showPourquoiActe && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl border border-[#00b3ab]/20 bg-[#f4fbfa] p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#044460] mb-4">
                Pourquoi ACTE
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ACTE est un projet dédié au renforcement des compétences des jeunes et des femmes,
                à leur insertion professionnelle et au développement socio-économique.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                À travers des formations pratiques, un accompagnement en ligne et en présentiel
                et une approche orientée compétences, mindset et impact, ACTE prépare les jeunes
                à s&apos;adapter aux exigences du marché du travail, à saisir les opportunités du
                numérique et à devenir acteurs de leur avenir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">Notre approche est basée sur :</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                <li>des formations pratiques adaptées aux réalités locales ;</li>
                <li>un accompagnement en présentiel et en ligne ;</li>
                <li>des ateliers interactifs, études de cas et mises en situation réelles ;</li>
                <li>le mentorat, le coaching et le suivi post-formation ;</li>
                <li>une approche par projet.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Objectif annuel : former 500 jeunes dont 40 % de femmes avec une insertion allant
                jusqu&apos;à 50 %.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[#044460]">NOTRE VISION</h2>
              <p className="text-gray-700 leading-relaxed">
                Un monde où chaque jeune et femmes grâce aux compétences numériques, managériales et
                entrepreneuriales s’épanouit et devient acteur du succès, moteur de changement et du
                développement socio-économique.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[#044460]">NOTRE MISSION</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous renforçons les compétences des jeunes et femmes au Togo pour réduire le chômage et
                favoriser le développement socio-économique.
              </p>
            </div>
          </div>
        </div>
      </section>

   <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#044460]">
              Nos Domaines d'Expertise
            </h2>
            <SectionAccent className="mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              ACTE accompagne les jeunes et les femmes à travers des formations pratiques et adaptées aux besoins du marché.
            </p>
            <p className="text-base text-[#00b3ab] font-semibold">
              Cliquez sur un domaine pour découvrir ce qu'il présente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] ?? Briefcase;
              const isOpen = expandedService === service.id;
              return (
                <button
                  key={service.id}
                  className={`group text-left bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'ring-4 ring-[#00b3ab]/30 shadow-2xl scale-105' 
                      : 'shadow-lg hover:shadow-2xl hover:scale-105'
                  }`}
                  onClick={() => onToggleService(service.id)}
                  type="button"
                >
                  {service.image && (
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#044460]/80 via-[#044460]/40 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg">
                          <Icon className="h-6 w-6 text-[#00b3ab]" />
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-[#044460] group-hover:text-[#00b3ab] transition-colors">
                      {service.name}
                    </h3>
                    <p className={`text-sm text-gray-600 leading-relaxed ${isOpen ? '' : 'line-clamp-3'}`}>
                      {service.desc}
                    </p>
                    
                    <div className="mt-4 flex items-center text-[#00b3ab] font-semibold text-sm">
                      <span className="group-hover:translate-x-1 transition-transform">
                        {isOpen ? 'Voir moins' : 'En savoir plus'}
                      </span>
                      <svg 
                        className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* <div className="mt-16 bg-gradient-to-r from-[#00b3ab]/10 via-[#044460]/10 to-[#00b3ab]/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#044460] mb-4">
              Une approche complète et personnalisée
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              Nos formations combinent théorie et pratique, avec des projets concrets, du mentorat individualisé et un suivi post-formation pour garantir votre réussite professionnelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="bg-white px-6 py-3 rounded-full shadow-md text-[#044460]">
                ✓ Formations certifiantes
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md text-[#044460]">
                ✓ Accompagnement personnalisé
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md text-[#044460]">
                ✓ Projets réels
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md text-[#044460]">
                ✓ Suivi post-formation
              </span>
            </div> */}
            
          {/* </div> */}
        </div>
      </section>
{/* NOS VALEURS */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex items-center justify-center">
            <img
              src="/hero/asset%20cube%201.png"
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute left-0 -translate-x-8 h-20 w-20 object-contain z-10"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#044460]">Nos Valeurs</h2>
              <SectionAccent className="mb-8" />
            </div>
            <img
              src="/hero/asset%20cube%202.png"
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute right-0 translate-x-8 h-20 w-20 object-contain z-10"
            />
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {valeurs.map((valeur, idx) => {
              const Icon = valeurIcons[valeur.icon as keyof typeof valeurIcons];
              return (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-lg mb-2 text-[#044460]">{valeur.title}</h3>
                  <p className="text-sm text-gray-600">{valeur.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gradient-to-br from-[#044460] via-[#055570] to-[#044460] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00b3ab] rounded-lg transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              {/* <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Ce qui nous guide
              </span> */}
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/hero/asset%20cube%201.png"
                alt=""
                aria-hidden="true"
                className="hidden md:block absolute left-0 -translate-x-24 h-52 w-52 object-contain"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nos Valeurs
              </h2>
              <img
                src="/hero/asset%20cube%202.png"
                alt=""
                aria-hidden="true"
                className="hidden md:block absolute right-0 translate-x-24 h-52 w-52 object-contain scale-110"
              />
            </div>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#00b3ab] to-transparent"></div>
            </div>
            {/* <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Des principes fondamentaux qui façonnent notre approche et guident chacune de nos actions
            </p> */}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {valeurs.map((valeur, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-white/20 hover:scale-105"
              >
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[#044460] transition-colors text-center">
                  {valeur.title}
                </h3>
                <p className="text-sm text-white/80 group-hover:text-gray-700 transition-colors leading-relaxed text-center">
                  {valeur.desc}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00b3ab] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#00b3ab] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          {/* <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b3ab] to-[#008b85] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#044460] to-[#055570] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b3ab] to-[#008b85] border-2 border-white"></div>
              </div> */}
              {/* <p className="text-white font-semibold">
                Des valeurs incarnées par toute notre équipe
              </p> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Notre Promesse</h2>
          <SectionAccent className="mb-6" />
          <p className="text-xl text-gray-700">
            Former et accompagner chaque jeune et femme vers l'emploi et/ou l'auto-emploi.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Nos chiffres en disent</h2>
          <SectionAccent className="mb-8" />
          <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mt-12">
            {parsedStats.map((stat, idx) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#044460] mb-2">
                  {counts[idx]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Ils nous ont fait confiance</h2>
          <SectionAccent className="mb-8" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Des organisations locales et internationales nous font confiance pour
            accompagner les talents et les entrepreneurs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="border border-gray-200 bg-white rounded-lg px-4 py-6 text-sm font-semibold text-[#044460] flex items-center justify-center"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`w-full object-contain ${
                      partner.name === 'LEVEL UP TOGO' ? 'h-16' : 'h-12'
                    }`}
                    loading="lazy"
                  />
                ) : (
                  partner.name
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Contactez-nous</h2>
          <SectionAccent className="mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Parlons de vos besoins et de la meilleure façon de vous accompagner.
          </p>
          <button
            className="bg-[#044460] text-white px-8 py-3 rounded-full font-bold hover:bg-[#044460] transition"
            onClick={onContactClick}
          >
            Nous Contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccueilPage;
