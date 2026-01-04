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

  const handleContactSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('Message envoyé ! Nous vous contacterons bientôt.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <ContactPage
      contactForm={contactForm}
      onContactChange={setContactForm}
      onSubmit={handleContactSubmit}
    />
  );
}
