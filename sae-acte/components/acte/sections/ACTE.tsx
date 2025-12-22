'use client';

import React, { useState } from 'react';
import { CheckCircle, ChevronDown, Globe, Lightbulb, ShieldCheck, Target, Users } from 'lucide-react';
import { formations, valeurs, acteStats, testimonials } from '../data';

const ACTEPage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const valeurIcons = {
    collaboration: Users,
    engagement: Target,
    integrite: ShieldCheck,
    innovation: Lightbulb,
    inclusion: Globe
  } as const;

  return (
    <div>
      <section className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">ACTE</h1>
          <p className="text-2xl mb-4">Appui En Compétences Et En Transformation</p>
          <p className="text-xl">Pour L'employabilité Des Jeunes</p>
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
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#044460]">Notre Promesse</h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            Former et accompagner chaque jeune et femme vers l'emploi et/ou l'auto-emploi.
          </p>

          <h3 className="text-2xl font-bold text-center mb-8 text-[#044460]">Nos Formations Orientées Métiers</h3>

          <div className="grid gap-6">
            {formations.map((formation) => {
              const isOpen = expandedCategory === formation.category;
              return (
                <div key={formation.category} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() =>
                      setExpandedCategory((current) =>
                        current === formation.category ? null : formation.category
                      )
                    }
                  >
                    <span className="text-lg font-bold text-[#044460]">{formation.category}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#044460] transition ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        {formation.items.map((item) => (
                          <div key={item} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#00b3ab] mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#044460]">Nos chiffres en disent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {acteStats.map((stat) => (
              <div key={stat.label} className="bg-[#044460]/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#044460] mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#044460]">Ils nous ont fait confiance</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Des entreprises et institutions nous confient la montée en compétences de leurs talents.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#044460]">Ce que disent nos étudiants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">“{item.quote}”</p>
                <div className="font-bold text-[#044460]">{item.name}</div>
                <div className="text-sm text-gray-600">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#044460]">Contactez-nous</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Prêt à booster vos compétences ou celles de vos équipes ? Écrivons la suite ensemble.
          </p>
          <button className="bg-[#044460] text-white px-8 py-3 rounded-full font-bold hover:bg-[#044460] transition">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default ACTEPage;
