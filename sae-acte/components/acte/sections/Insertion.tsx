import React from 'react';
import { Briefcase, Building2, GraduationCap, Handshake, UserRound, Users } from 'lucide-react';
import HeroCarousel from '../HeroCarousel';
import SectionAccent from '../SectionAccent';

const InsertionPage = () => (
  <div>
    <HeroCarousel
      title="Insertion Professionnelle"
      lines={["Trouver un stage, un emploi ou un talent n'a jamais été aussi simple"]}
      images={[
        '/hero/les-femmes-d-affaires-parlant-pres-du-bureau-pendant-une-pause-cafe-dans-le-couloir-de-la-grande-societe.jpg',
        '/hero/equipe-de-collegues-afro-americains-analysant-des-rapports-de-vente-sur-des-documents-travaillant-sur-une-strategie-financiere-pour-la-croissance-de-l-entreprise-employes-de-l-entreprise-travaillant-en-equipe.jpg',
        '/hero/reunion-d-affaires-dans-un-cafe.jpg'
      ]}
    />

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#044460]">Un pont entre talents et employeurs</h2>
            <p className="text-gray-700 text-lg mb-6">
              Nous connectons les jeunes formés aux entreprises pour des stages, CDD ou CDI,
              avec un suivi concret jusqu'à l'intégration.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-full bg-[#044460]/10 px-4 py-2 text-[#044460]">
                <GraduationCap className="h-5 w-5" />
                <span className="font-semibold">Profils qualifiés</span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-[#00b3ab]/15 px-4 py-2 text-[#044460]">
                <Briefcase className="h-5 w-5 text-[#00b3ab]" />
                <span className="font-semibold">Opportunités ciblées</span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-[#044460]/10 px-4 py-2 text-[#044460]">
                <Handshake className="h-5 w-5" />
                <span className="font-semibold">Suivi d'intégration</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#044460]/5 to-[#00b3ab]/15 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#044460] mb-6">Comment ça marche ?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-[#044460] text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-[#044460]">Le jeune s'inscrit</h4>
                  <p className="text-gray-600">Crée son profil professionnel complet.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-[#044460] text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-[#044460]">Le recruteur consulte</h4>
                  <p className="text-gray-600">Accède à la base de talents qualifiés.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-[#044460] text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-[#044460]">ACTE facilite</h4>
                  <p className="text-gray-600">Mise en relation et suivi d'intégration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#044460]/15 p-6">
            <div className="flex items-center gap-3 mb-4">
              <UserRound className="h-6 w-6 text-[#00b3ab]" />
              <h3 className="text-xl font-bold text-[#044460]">Je suis un jeune</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Créez un profil qui valorise vos compétences, expériences et objectifs.
            </p>
            <button className="bg-[#044460] text-white px-6 py-3 rounded-full font-bold hover:bg-[#044460] transition w-full md:w-auto">
              Créer mon profil
            </button>
          </div>
          <div className="rounded-2xl border border-[#00b3ab]/20 p-6 bg-[#00b3ab]/5">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-[#044460]" />
              <h3 className="text-xl font-bold text-[#044460]">Je suis une entreprise</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Accédez rapidement à des profils ciblés et suivez leur intégration.
            </p>
            <button className="bg-[#00b3ab] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00b3ab] transition w-full md:w-auto">
              Recruter un talent
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#044460]">Notre Valeur Ajoutée</h2>
        <SectionAccent className="mb-8" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-[#00b3ab]" />
            </div>
            <div className="text-5xl font-bold text-[#044460] mb-2">300+</div>
            <div className="text-gray-700">Jeunes inscrits</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <Handshake className="h-10 w-10 text-[#00b3ab]" />
            </div>
            <div className="text-5xl font-bold text-[#044460] mb-2">25</div>
            <div className="text-gray-700">Entreprises partenaires</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <Briefcase className="h-10 w-10 text-[#00b3ab]" />
            </div>
            <div className="text-5xl font-bold text-[#044460] mb-2">80</div>
            <div className="text-gray-700">Jeunes insérés professionnellement</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-3">Mise à disposition de talents</h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Pour bénéficier d'un profil compétent pour votre entreprise, cliquez et laissez-nous vous proposer
              des candidats adaptés.
            </p>
          </div>
          <button className="bg-white text-[#044460] px-6 py-3 rounded-full font-bold hover:bg-white/90 transition">
            Accéder au lien ACTE
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default InsertionPage;
