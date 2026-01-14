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
  const [activeIndex, setActiveIndex] = useState(0);
  const heroImages = images ?? [
    '/hero/heureuse-femme-d-affaires-afro-americaine-travaillant-sur-un-pave-tactile-au-bureau.jpg',
    '/hero/equipe.png',
    '/hero/reunion-d-affaires-dans-un-cafe.jpg'
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  const wrapperClasses = align === 'left' ? 'max-w-4xl text-left' : 'max-w-3xl mx-auto text-center';
  const eyebrowClasses = align === 'left' ? 'mb-4 inline-block' : 'mb-6 flex justify-center';

  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Layers with Transitions & Zoom */}
      {heroImages.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${idx === activeIndex ? 'animate-ken-burns' : ''
              }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
          {/* Premium Blue-to-Teal Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#044460]/95 via-[#044460]/75 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={wrapperClasses}>
            {/* Slide-in Content */}
            <div className="animate-slide-up">
              {eyebrow && <div className={eyebrowClasses}>{eyebrow}</div>}
              <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight drop-shadow-sm">
                {title}
              </h1>
              <div className="space-y-4 mb-8">
                {lines.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={`text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
              {children && <div className="pt-4">{children}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Indicators (Matching Image) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`transition-all duration-500 rounded-full ${index === activeIndex
                ? 'w-10 h-2 bg-gradient-to-r from-[#044460] to-[#00b3ab] shadow-[0_0_15px_rgba(4,68,96,0.3)]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ken-burns {
          animation: ken-burns 10s linear infinite alternate;
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
