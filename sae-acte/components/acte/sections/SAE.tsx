import React from 'react';
import { Award } from 'lucide-react';
import { entrepreneurServices, partners } from '../data';

const SAEPage = () => (
  <div>
    <section
      className="bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 68, 96, 0.75), rgba(0, 179, 171, 0.75)), url('/hero/hero1.jpg')"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">SAE-ACTE</h1>
        <p className="text-2xl mb-4">Une idée en une entreprise</p>
        <p className="text-xl mb-4">Nous créons des entreprises innovantes, résilientes, sociales</p>
        <p className="text-lg mb-8">Tech – énergie – santé - agrobusiness</p>
        <button className="bg-white text-[#044460] px-8 py-3 rounded-full font-bold hover:bg-white/90 transition">
          Positionne-toi pour un accompagnement
        </button>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#044460]">Nos programmes d'accompagnement</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#044460]/5 to-[#00b3ab]/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#044460]">Préincubation</h3>
            <p className="text-gray-700 mb-4">Structurer votre idée et votre business model</p>
            <div className="text-2xl font-bold text-[#044460]">3 mois</div>
          </div>

          <div className="bg-gradient-to-br from-[#00b3ab]/5 to-[#00b3ab]/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#044460]">Incubation</h3>
            <p className="text-gray-700 mb-4">Formation + accompagnement technique et financier</p>
            <div className="text-2xl font-bold text-[#044460]">1 à 6 mois</div>
          </div>

          <div className="bg-gradient-to-br from-[#00b3ab]/5 to-[#00b3ab]/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#044460]">Post-incubation</h3>
            <p className="text-gray-700 mb-4">Suivi, visibilité et mentorat après lancement</p>
            <div className="text-2xl font-bold text-[#044460]">3 mois</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#044460] text-white px-8 py-3 rounded-full font-bold hover:bg-[#044460] transition">
            Postuler à un accompagnement
          </button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#044460]">Nos Services pour Entrepreneurs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {entrepreneurServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <Award className="w-8 h-8 text-[#044460] flex-shrink-0" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#044460]">Nos Résultats</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#044460]/5 rounded-lg">
            <div className="text-4xl font-bold text-[#044460] mb-2">80+</div>
            <div className="text-gray-700">Entrepreneurs accompagnés</div>
          </div>
          <div className="p-8 bg-[#00b3ab]/5 rounded-lg">
            <div className="text-4xl font-bold text-[#044460] mb-2">25</div>
            <div className="text-gray-700">Projets lancés</div>
          </div>
          <div className="p-8 bg-[#00b3ab]/5 rounded-lg">
            <div className="text-4xl font-bold text-[#044460] mb-2">10</div>
            <div className="text-gray-700">Financements obtenus</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
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
  </div>
);

export default SAEPage;
