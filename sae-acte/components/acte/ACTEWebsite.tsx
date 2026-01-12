'use client';

import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AccueilPage from './sections/Accueil';
import ACTEPage from './sections/ACTE';
import SAEPage from './sections/SAE';
import InsertionPage from './sections/Insertion';
import BlogPage from './sections/Blog';
import ContactPage from './sections/Contact';
import { type NavTab } from './data';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const ACTEWebsite = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string>('');

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Envoi en cours...');

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mjggvkzp', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Merci pour votre message ! Nous vous contacterons bientôt.');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        const result = await response.json();
        if (result && result.errors) {
          setStatus(result.errors.map((error: any) => error.message).join(", "));
        } else {
          setStatus("Oops! Une erreur s'est produite lors de l'envoi.");
        }
      }
    } catch (error) {
      setStatus("Oops! Une erreur technique s'est produite.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobile={() => setMobileMenuOpen((prev) => !prev)}
      />

      <main>
        {activeTab === 'accueil' && (
          <AccueilPage
            expandedService={expandedService}
            onToggleService={(id) =>
              setExpandedService((current) => (current === id ? null : id))
            }
            onContactClick={() => setActiveTab('contact')}
          />
        )}
        {activeTab === 'acte' && <ACTEPage />}
        {activeTab === 'sae' && <SAEPage />}
        {activeTab === 'insertion' && <InsertionPage />}
        {activeTab === 'blog' && <BlogPage />}
        {activeTab === 'contact' && (
          <ContactPage
            contactForm={contactForm}
            onContactChange={setContactForm}
            onSubmit={handleContactSubmit}
            status={status}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ACTEWebsite;
