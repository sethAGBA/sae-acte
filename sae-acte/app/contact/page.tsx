'use client';

import React, { useState } from 'react';
import ContactPage from '@/components/acte/sections/Contact';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Page() {
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
      const response = await fetch(event.currentTarget.action, {
        method: event.currentTarget.method,
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
    <ContactPage
      contactForm={contactForm}
      onContactChange={setContactForm}
      onSubmit={handleContactSubmit}
      status={status}
    />
  );
}
