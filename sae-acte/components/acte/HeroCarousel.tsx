'use client';

import React, { useEffect, useState } from 'react';

type HeroCarouselProps = {
  title: React.ReactNode;
  lines?: string[];
  align?: 'left' | 'center';
  eyebrow?: React.ReactNode;
  children?: React.ReactNode;
  images?: string[];
};

const HeroCarousel = ({
  title,
  lines = [],
  align = 'center',
  eyebrow,
  children,
  images
}: HeroCarouselProps) => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const heroImages = images ?? [
    '/hero/heureuse-femme-d-affaires-afro-americaine-travaillant-sur-un-pave-tactile-au-bureau.jpg',
    '/hero/equipe.png',
    '/hero/reunion-d-affaires-dans-un-cafe.jpg'
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  const wrapperClasses = align === 'left' ? 'max-w-xl' : 'max-w-3xl mx-auto text-center';
  const eyebrowClasses = align === 'left' ? 'mb-6' : 'mb-6 flex justify-center';

  return (
    <section
      className="relative bg-cover bg-right text-white py-24 md:py-32"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 128, 128, 0.7), rgba(0, 128, 128, 0.7)), url('${heroImages[activeHeroIndex]}')`
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={wrapperClasses}>
          {eyebrow && <div className={eyebrowClasses}>{eyebrow}</div>}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          {lines.map((line, index) => (
            <p
              key={`${line}-${index}`}
              className={`text-sm md:text-base text-white/90 ${index === lines.length - 1 ? 'mb-6' : 'mb-3'}`}
            >
              {line}
            </p>
          ))}
          {children}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`rounded-full transition ${
              index === activeHeroIndex
                ? 'h-2.5 w-2.5 bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_0_0_5px_rgba(255,255,255,0.6),0_0_0_8px_rgba(255,255,255,0.35)]'
                : 'h-3 w-3 bg-yellow-400'
            }`}
            onClick={() => setActiveHeroIndex(index)}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
