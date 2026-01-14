'use client';

import React, { useState } from 'react';
import { CheckCircle, ChevronDown, X } from 'lucide-react';
import HeroCarousel from '../HeroCarousel';
import SectionAccent from '../SectionAccent';
import { formations, acteStats, testimonials, partners } from '../data';

const ACTEPage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedFormation, setSelectedFormation] = useState<typeof formations[0] | null>(null);

  return (
    <div>
      <HeroCarousel
        title="ACTE"
        lines={[
          'Appui en Compétences et en Transformation pour l\'Employabilité des Jeunes et Femmes'
        ]}
        images={[
          '/hero/le-candidat-s-adresse-au-directeur-de-l-embauche.jpg',
          '/hero/un-homme-a-l-interview-enthousiaste-pour-l-opportunite-d-emploi-donne-des-reponses-detaillees.jpg',
          '/hero/homme-se-presentant-aux-employeurs-lors-de-l-entretien-d-embauche-au-bureau.jpg'
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#044460]">Nos Formations Orientées Métiers</h2>
          <SectionAccent className="mb-8" />

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
                        <button
                          className="border border-[#044460] text-[#044460] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#044460]/10 transition"
                          onClick={() => setSelectedFormation(formation)}
                        >
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
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Nos chiffres en disent</h2>
          <SectionAccent className="mb-8" />
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
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Ils nous ont fait confiance</h2>
          <SectionAccent className="mb-8" />
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
                    className={`w-full object-contain ${['LEVEL UP TOGO', 'ECOLABTOGO', 'CRE COMMUNICATION', 'TOGO DATA LAB', 'TILTULAB', "N'DEWONE_KONDJI", 'EZAD BTP', 'Segal family foundation'].includes(partner.name)
                        ? 'h-32'
                        : 'h-16'
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
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#044460]">Témoignages</h2>
          <SectionAccent className="mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">“{item.quote}”</p>
                    <div className="font-bold text-[#044460]">{item.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#044460]">Contactez-nous</h2>
          <SectionAccent className="mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Prêt à booster vos compétences ou celles de vos équipes ? Écrivons la suite ensemble.
          </p>
          <button className="bg-[#044460] text-white px-8 py-3 rounded-full font-bold hover:bg-[#044460] transition">
            Nous contacter
          </button>
        </div>
      </section>

      {/* Modal Détails Formation */}
      {selectedFormation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#044460]/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedFormation(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="h-6 w-6 text-[#044460]" />
            </button>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#044460] mb-2 pr-12">
                {selectedFormation.category}
              </h3>
              {(selectedFormation as any).duree && (
                <p className="text-[#00b3ab] font-bold mb-4 tracking-wide uppercase text-sm">
                  Durée : {(selectedFormation as any).duree}
                </p>
              )}
              <div className="h-1.5 w-20 bg-[#00b3ab] rounded-full mb-8"></div>

              <div className="space-y-8">
                {selectedFormation.objectif && (
                  <div>
                    <h4 className="text-lg font-bold text-[#044460] mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00b3ab] rounded-full"></span>
                      Objectif
                    </h4>
                    <p className="text-gray-700 leading-relaxed bg-[#f4fbfa] p-4 rounded-2xl border border-[#00b3ab]/10">
                      {selectedFormation.objectif}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-[#044460] mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00b3ab] rounded-full"></span>
                    Contenu détaillé
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedFormation.items.map((item) => (
                      <div key={item} className="flex items-start space-x-2 group">
                        <CheckCircle className="w-5 h-5 text-[#00b3ab] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedFormation.importance && (
                  <div>
                    <h4 className="text-lg font-bold text-[#044460] mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00b3ab] rounded-full"></span>
                      Importance de la formation
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "{selectedFormation.importance}"
                    </p>
                  </div>
                )}

                {selectedFormation.debouches && (
                  <div>
                    <h4 className="text-lg font-bold text-[#044460] mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00b3ab] rounded-full"></span>
                      Débouchés & secteurs
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {selectedFormation.debouches.map((debouche) => (
                        <li key={debouche} className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="w-2 h-2 bg-[#00b3ab] rounded-full shadow-[0_0_8px_rgba(0,179,171,0.5)]"></span>
                          {debouche}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(selectedFormation as any).resultats && (
                  <div>
                    <h4 className="text-lg font-bold text-[#044460] mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00b3ab] rounded-full"></span>
                      Résultats attendus
                    </h4>
                    <ul className="space-y-3">
                      {(selectedFormation as any).resultats.map((result: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#00b3ab] mt-0.5 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <button
                  className="w-full bg-[#044460] text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#044460]/20 transition-all duration-300 transform active:scale-[0.98]"
                  onClick={() => setSelectedFormation(null)}
                >
                  J'ai compris, je m'inscris
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ACTEPage;
