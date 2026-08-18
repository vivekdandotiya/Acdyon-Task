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
  const gradId = `acdyonFavGrad_${idSuffix}`;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#0F172A" />
      {/* Sleek Executive AcdyOn Pathway Monogram */}
      <path d="M16 6L7.5 23.5H12L16 15.5L20 23.5H24.5L16 6Z" fill={`url(#${gradId})`} />
      <circle cx="16" cy="15.5" r="2" fill="#60A5FA" />
      <path d="M10.5 18H21.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id={gradId} x1="16" y1="6" x2="16" y2="23.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
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
