import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">SAE ACTE</h3>
          <p className="text-gray-400">Votre partenaire stratégique de développement</p>
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
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white">
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
            <div>Kara, Togo</div>
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
