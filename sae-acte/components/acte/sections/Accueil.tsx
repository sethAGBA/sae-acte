'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Briefcase,
  Calculator,
  FolderKanban,
  Globe,
  Lightbulb,
  Megaphone,
  Scale,
  ShieldCheck,
  Target,
  Users,
  ClipboardCheck
} from 'lucide-react';
import { services, stats, partners, valeurs } from '../data';

type AccueilProps = {
  expandedService: string | null;
  onToggleService: (id: string) => void;
  onContactClick: () => void;
};

const AccueilPage = ({ expandedService, onToggleService, onContactClick }: AccueilProps) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
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
  const valeurIcons = {
    collaboration: Users,
    engagement: Target,
    integrite: ShieldCheck,
    innovation: Lightbulb,
    inclusion: Globe
  } as const;

  return (
    <div>
      <section
        className="bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 68, 96, 0.75), rgba(0, 179, 171, 0.75)), url('/hero/hero1.jpg')"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6"> ACTE</h1>
          <p className="text-2xl mb-4">
            Appui En Compétences Et En Transformation Pour L’employabilité Des Jeunes
          </p>
          <p className="text-xl font-semibold">POURQUOI ACTE ?</p>
          {/* <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nous vous outillons et vous formons dans les domaines clés du business.
          </p> */}
          {/* <button className="bg-[#00b3ab] text-white px-8 py-3 rounded-full font-bold hover:bg-[#00b3ab] transition">
            Découvrir nos services
          </button> */}
        </div>
      </section>

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#044460]">Nos Domaines d'Expertise</h2>
          <p className="text-center text-gray-600 mb-10">
            Cliquez sur un domaine pour découvrir ce qu'il présente.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] ?? Briefcase;
              const isOpen = expandedService === service.id;
              return (
                <button
                  key={service.id}
                  className={`text-left bg-white p-6 rounded-lg shadow-md transition ${
                    isOpen ? 'ring-2 ring-[#00b3ab]/40 shadow-lg' : 'hover:shadow-xl'
                  }`}
                  onClick={() => onToggleService(service.id)}
                  type="button"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00b3ab]/10">
                      <Icon className="h-5 w-5 text-[#00b3ab]" />
                    </span>
                    <h3 className="font-bold text-[#044460]">{service.name}</h3>
                  </div>
                  <p className={`text-sm text-gray-600 ${isOpen ? '' : 'line-clamp-2'}`}>
                    {service.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#044460]">Nos Valeurs</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {valeurs.map((valeur, idx) => {
              const Icon = valeurIcons[valeur.icon as keyof typeof valeurIcons];
              return (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-[#00b3ab]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#044460]">{valeur.title}</h3>
                  <p className="text-sm text-gray-600">{valeur.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Notre Promesse</h2>
          <p className="text-xl text-gray-700">
            Former et accompagner chaque jeune et femme vers l'emploi et/ou l'auto-emploi.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#044460]">Nos chiffres en disent</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-[#044460]">Ils nous ont fait confiance</h2>
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
                    className="h-12 w-full object-contain"
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
          <h2 className="text-3xl font-bold mb-6 text-[#044460]">Contactez-nous</h2>
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
