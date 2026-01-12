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
            <h2 className="text-3xl font-bold mb-4 text-[#044460]">Créer un espace pour relier les jeunes et femmes formés et les employeurs (stage, CDD, CDI).</h2>
            <p className="text-gray-700 text-lg mb-6">
              Trouver un stage, un emploi ou un talent n'a jamais été aussi simple.
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
            <button className="bg-[#044460] text-white px-6 py-3 rounded-full font-bold hover:bg-[#044460] transition w-full md:w-auto text-sm">
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
            <button className="bg-[#00b3ab] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00b3ab] transition w-full md:w-auto text-sm">
              Recruter un talent
            </button>
          </div>
        </div>

      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#044460] tracking-tight">Notre Valeur Ajoutée</h2>
          <SectionAccent className="mx-auto mt-4" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-[#00b3ab] p-10 text-white shadow-lg rounded-2xl">
            <h4 className="text-xl font-black mb-6 text-[#044460] tracking-tighter">Pour les Jeunes et Femmes</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Accès à des offres de stage et emploi
              </li>
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Coaching emploi et CV
              </li>
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Suivi et orientation professionnelle
              </li>
            </ul>
          </div>
          <div className="bg-[#00b3ab] p-10 text-white shadow-lg rounded-2xl">
            <h4 className="text-xl font-black mb-6 text-[#044460] tracking-tighter">Pour les Organisations</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Accès à une base de profils qualifiés
              </li>
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Gain de temps dans le recrutement
              </li>
              <li className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Garantie de profils formés par ACTE
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col items-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00b3ab]/10 flex items-center justify-center group-hover:bg-[#00b3ab] transition-colors duration-500">
                <Users className="h-8 w-8 text-[#00b3ab] group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div className="text-5xl font-black text-[#044460] mb-3 tracking-tighter">300+</div>
            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Jeunes inscrits</div>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col items-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#044460]/10 flex items-center justify-center group-hover:bg-[#044460] transition-colors duration-500">
                <Handshake className="h-8 w-8 text-[#044460] group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div className="text-5xl font-black text-[#044460] mb-3 tracking-tighter">25+</div>
            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Entreprises partenaires</div>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col items-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00b3ab]/10 flex items-center justify-center group-hover:bg-[#00b3ab] transition-colors duration-500">
                <Briefcase className="h-8 w-8 text-[#00b3ab] group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div className="text-5xl font-black text-[#044460] mb-3 tracking-tighter">80</div>
            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Jeunes déjà insérés</div>
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
