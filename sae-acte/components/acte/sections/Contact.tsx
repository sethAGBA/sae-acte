import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import HeroCarousel from '../HeroCarousel';
import SectionAccent from '../SectionAccent';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactPageProps = {
  contactForm: ContactForm;
  onContactChange: (nextForm: ContactForm) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  status: string;
};

const ContactPage = ({ contactForm, onContactChange, onSubmit, status }: ContactPageProps) => (
  <div>
    <HeroCarousel
      title="Contactez-nous"
      lines={['Nous sommes a votre ecoute']}
      images={[
        '/hero/scene-de-bureau-avec-ordinateur-portable.jpg',
        '/hero/heureuse-femme-d-affaires-afro-americaine-travaillant-sur-un-pave-tactile-au-bureau.jpg',
        '/hero/affilies-collaborant-dans-un-espace-de-travail-haut-de-gamme-pour-determiner-l-allocation-des-ressources.jpg'
      ]}
    />

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="bg-gradient-to-br from-[#044460]/5 to-[#00b3ab]/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#044460]">Informations de contact</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-6 h-6 text-[#044460]" />
                </div>
                <div>
                  <div className="font-bold text-[#044460]">Telephone</div>
                  <div className="text-gray-600">+228 92 21 75 64</div>
                  <div className="text-gray-600">+228 98 00 07 59</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-6 h-6 text-[#044460]" />
                </div>
                <div>
                  <div className="font-bold text-[#044460]">Email</div>
                  <div className="text-gray-600">es.actes@gmail.com</div>
                </div>
              </div>
              <a 
                href="https://share.google/ZVRZFzAppg4q1svWK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#00b3ab] transition-colors">
                  <MapPin className="w-6 h-6 text-[#044460] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-[#044460]">Adresse</div>
                  <div className="text-gray-600 group-hover:text-[#00b3ab] transition-colors underline decoration-[#00b3ab]/30 underline-offset-4">Kara, Togo</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:es.actes@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#044460] text-white px-5 py-2 font-semibold"
              >
                <Mail className="h-4 w-4" />
                Ecrire un mail
              </a>
              <a
                href="tel:+22892217564"
                className="inline-flex items-center gap-2 rounded-full border border-[#044460]/30 px-5 py-2 text-[#044460] font-semibold"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#044460]/10 shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#044460]">Envoyez-nous un message</h2>
            <form 
              action="https://formspree.io/f/mjggvkzp" 
              method="POST"
              className="space-y-4"
              onSubmit={(e) => {
                if (onSubmit) {
                  e.preventDefault();
                  onSubmit(e);
                }
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={contactForm.name}
                onChange={(event) => onContactChange({ ...contactForm, name: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={(event) => onContactChange({ ...contactForm, email: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
                required
              />
              <textarea
                name="message"
                placeholder="Votre message"
                rows={4}
                value={contactForm.message}
                onChange={(event) => onContactChange({ ...contactForm, message: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#044460] text-white py-3 rounded-lg font-bold hover:bg-[#044460] transition"
              >
                Envoyer
              </button>
              {status && (
                <p className={`text-center text-sm font-semibold mt-4 ${status.includes('erreur') || status.includes('Oops') ? 'text-red-500' : 'text-[#00b3ab]'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Section Map */}
    <section className="pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[450px] w-full rounded-3xl overflow-hidden border border-[#044460]/10 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31631.792440182663!2d1.1714444582967262!3d9.549416666014457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102f195d80000001%3A0xc47e335559d80c0!2sKara!5e0!3m2!1sfr!2stg!4v1705060000000!5m2!1sfr!2stg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Cabinet ACTe"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
