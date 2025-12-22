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
import { services, stats } from '../data';

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

  return (
    <div>
      <section className="bg-gradient-to-br from-[#044460] via-[#00b3ab] to-[#044460] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">SAE ACTE</h1>
          <p className="text-2xl mb-4">Votre partenaire stratégique de développement</p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nous vous outillons et vous formons dans les domaines clés du business.
          </p>
          <button className="bg-[#00b3ab] text-white px-8 py-3 rounded-full font-bold hover:bg-[#00b3ab] transition">
            Découvrir nos services
          </button>
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#044460]">Notre Promesse</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Nous croyons qu'une entreprise performante repose sur deux piliers essentiels :
            une gestion financière solide et une planification/communication digitale.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Notre promesse : vous accompagner jusqu'à l'atteinte de vos objectifs.
          </p>

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
          Accéder au formulaire
        </button>
      </div>
    </section>
    </div>
  );
};

export default AccueilPage;
