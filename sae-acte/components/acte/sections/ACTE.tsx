'use client';

import React, { useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { formations, acteStats, testimonials, partners } from '../data';

const ACTEPage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div>
      <section
        className="bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 68, 96, 0.75), rgba(0, 179, 171, 0.75)), url('/hero/hero2.jpg.avif')"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">ACTE</h1>
          <p className="text-2xl mb-4">Appui en Compétences et en Transformation </p>
          <p className="text-xl">Pour L'employabilité des Jeunes</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#044460]">Nos Formations Orientées Métiers</h2>

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
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button className="border border-[#044460] text-[#044460] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#044460]/10 transition">
                          Voir plus
                        </button>
                        <button className="bg-[#044460] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#044460] transition">
                          S'inscrire
                        </button>
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
