import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactPageProps = {
  contactForm: ContactForm;
  onContactChange: (nextForm: ContactForm) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ContactPage = ({ contactForm, onContactChange, onSubmit }: ContactPageProps) => (
  <div>
    <section
      className="bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 68, 96, 0.75), rgba(0, 179, 171, 0.75)), url('/hero/hero1.jpg')"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-2xl">Nous sommes a votre ecoute</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="bg-gradient-to-br from-[#044460]/5 to-[#00b3ab]/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#044460]">Informations de contact</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-6 h-6 text-[#044460]" />
                </div>
                <div>
                  <div className="font-bold text-[#044460]">Telephone</div>
                  <div className="text-gray-600">+228 92 21 75 64</div>
                  <div className="text-gray-600">+228 90 87 37 22</div>
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
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-[#044460]" />
                </div>
                <div>
                  <div className="font-bold text-[#044460]">Adresse</div>
                  <div className="text-gray-600">Kara, Togo</div>
                </div>
              </div>
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
            <h2 className="text-2xl font-bold mb-6 text-[#044460]">Envoyez-nous un message</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                value={contactForm.name}
                onChange={(event) => onContactChange({ ...contactForm, name: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
              />
              <input
                type="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={(event) => onContactChange({ ...contactForm, email: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
              />
              <textarea
                placeholder="Votre message"
                rows={4}
                value={contactForm.message}
                onChange={(event) => onContactChange({ ...contactForm, message: event.target.value })}
                className="w-full p-3 border rounded-lg text-[#044460] placeholder:text-[#044460]/70 focus:outline-none focus:ring-2 focus:ring-[#00b3ab]"
              />
              <button
                onClick={onSubmit}
                className="w-full bg-[#044460] text-white py-3 rounded-lg font-bold hover:bg-[#044460] transition"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
