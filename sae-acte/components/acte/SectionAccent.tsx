import React from 'react';

type SectionAccentProps = {
  align?: 'center' | 'left';
  className?: string;
};

const SectionAccent = ({ align = 'center', className = '' }: SectionAccentProps) => (
  <div
    className={`flex items-center gap-3 ${
      align === 'left' ? 'justify-start' : 'justify-center'
    } ${className}`}
    aria-hidden="true"
  >
    <div className="h-0.5 w-16 origin-center bg-[#00b3ab] animate-[accentLine_2.8s_ease-in-out_infinite]" />
    <div className="h-2 w-2 rounded-full bg-[#00b3ab] animate-[accentDot_2s_ease-in-out_infinite]" />
    <div
      className="h-0.5 w-16 origin-center bg-[#00b3ab] animate-[accentLine_2.8s_ease-in-out_infinite]"
      style={{ animationDelay: '0.3s' }}
    />
  </div>
);

export default SectionAccent;
