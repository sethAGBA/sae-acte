import React from 'react';

const InsertionPage = () => (
  <div>
    <section className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Insertion Professionnelle</h1>
        <p className="text-2xl">Trouver un stage, un emploi ou un talent n'a jamais été aussi simple</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#044460]">Comment ça marche ?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#044460]/5 rounded-lg">
            <div className="w-16 h-16 bg-[#044460] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold text-lg mb-4 text-[#044460]">Le jeune s'inscrit</h3>
            <p className="text-gray-600">Crée son profil professionnel complet</p>
          </div>

          <div className="text-center p-8 bg-[#00b3ab]/5 rounded-lg">
            <div className="w-16 h-16 bg-[#044460] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold text-lg mb-4 text-[#044460]">Le recruteur consulte</h3>
            <p className="text-gray-600">Accède à la base de talents qualifiés</p>
          </div>

          <div className="text-center p-8 bg-[#00b3ab]/5 rounded-lg">
            <div className="w-16 h-16 bg-[#044460] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold text-lg mb-4 text-[#044460]">ACTE facilite</h3>
            <p className="text-gray-600">Mise en relation et suivi d'intégration</p>
          </div>
        </div>

        <div className="text-center mt-12 space-x-4">
          <button className="bg-[#044460] text-white px-8 py-3 rounded-full font-bold hover:bg-[#044460] transition">
            Je suis un jeune - Créer mon profil
          </button>
          <button className="bg-[#00b3ab] text-white px-8 py-3 rounded-full font-bold hover:bg-[#00b3ab] transition">
            Je suis une entreprise - Recruter
          </button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#044460]">Notre Valeur Ajoutée</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-bold text-[#044460] mb-2">300+</div>
            <div className="text-gray-700">Jeunes inscrits</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#044460] mb-2">25</div>
            <div className="text-gray-700">Entreprises partenaires</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#044460] mb-2">80</div>
            <div className="text-gray-700">Jeunes insérés professionnellement</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default InsertionPage;
