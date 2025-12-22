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
    <section className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-2xl">Nous sommes à votre écoute</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#044460]">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#044460]" />
                <div>
                  <div className="font-bold text-[#044460]">Téléphone</div>
                  <div className="text-gray-600">+228 92 21 75 64</div>
                  <div className="text-gray-600">+228 90 87 37 22</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#044460]" />
                <div>
                  <div className="font-bold text-[#044460]">Email</div>
                  <div className="text-gray-600">es.actes@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#044460]" />
                <div>
                  <div className="font-bold text-[#044460]">Adresse</div>
                  <div className="text-gray-600">Kara, Togo</div>
                </div>
              </div>
            </div>
          </div>

          <div>
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
