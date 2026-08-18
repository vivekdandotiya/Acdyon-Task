import React from 'react';

interface AcdyonLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AcdyonLogoIcon: React.FC<{ className?: string; idSuffix?: string }> = ({
  className = 'w-6 h-6',
  idSuffix = 'nav',
}) => {
  const gradId = `acdyonLogoGrad_${idSuffix}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      {/* Sleek Geometric Lightning / Pathway Mark matching brand visual */}
      <path
        d="M14 2L3.5 13H11.5L9.5 22L20.5 11H12.5L14 2Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
};

export const AcdyonLogo: React.FC<AcdyonLogoProps> = ({
  className = '',
  showText = true,
  textClassName = 'text-lg font-bold tracking-tight text-navy-950',
  size = 'md',
}) => {
  const iconSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <AcdyonLogoIcon className={iconSize} />

      {showText && (
        <div className="flex items-center space-x-1.5">
          <span className={textClassName}>AcdyOn</span>
          <span className="text-sm font-medium text-slate-500">Pathway AI</span>
        </div>
      )}
    </div>
  );
};
