import React from 'react';
import Link from 'next/link';
import { Facebook, Music, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4 text-[#00b3ab]">SAE ACTE</h3>
          <p className="text-gray-400">Votre partenaire stratégique de développement</p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.facebook.com/share/1CUnfk1FQm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00b3ab] transition"><Facebook size={20} /></a>
            <a href="https://www.tiktok.com/@cabinet.acte?_t=ZS-8wGsdl7QYjd&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00b3ab] transition"><Music size={20} /></a>
            <a href="https://www.instagram.com/cabinet.acte?igsh=ZmJsZG0xaG1sZzV5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00b3ab] transition"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/dr-richard-kangni-kueviakoe-514371119" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00b3ab] transition"><Linkedin size={20} /></a>
          </div>
        </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'ACTE', href: '/acte' },
                { label: 'SAE', href: '/sae' },
                { label: 'Insertion', href: '/insertion' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <div className="space-y-2 text-gray-400">
            <div>Formation</div>
            <div>Accompagnement</div>
            <div>Conseil</div>
            <div>Insertion</div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-400">
            <a 
              href="https://share.google/ZVRZFzAppg4q1svWK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-white transition-colors"
            >
              <MapPin size={18} className="text-[#00b3ab] mt-1 flex-shrink-0" />
              <span>Kara, Togo</span>
            </a>
            <div>+228 92 21 75 64</div>
            <div>+228 98 00 07 59</div>
            <div>es.actes@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        © 2025 SAE ACTE. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
