import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'compact' | 'symbol';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? '/logo-transportes-reyes-white.svg' : '/logo-transportes-reyes.svg';

  // Compact variant: circular / rounded icon badge with truck and water drop
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#00AEEF] p-1 shadow-md flex items-center justify-center flex-shrink-0">
          <img
            src="/favicon.svg"
            alt="Transportes Reyes Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="leading-tight">
          <span className="block text-[10px] uppercase tracking-widest font-extrabold text-[#00AEEF]">
            Transportes
          </span>
          <span className={`text-xl font-black italic tracking-tight ${isDark ? 'text-white' : 'text-[#0B3D91]'}`}>
            Reyes
          </span>
        </div>
      </div>
    );
  }

  // Symbol only variant
  if (variant === 'symbol') {
    const sizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-20 h-20',
      xl: 'w-28 h-28',
    };
    return (
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <img
          src="/favicon.svg"
          alt="Transportes Reyes Emblema"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Horizontal variant (optimized for navbar and footer)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative h-12 sm:h-14 w-auto flex items-center">
          <img
            src={logoSrc}
            alt="Transportes Reyes - Servicio de Agua Potable y Tratada"
            className="h-12 sm:h-14 w-auto max-w-[220px] sm:max-w-[260px] object-contain object-left transition-transform group-hover:scale-105"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  // Full master logo variant
  const fullSizeClasses = {
    sm: 'max-w-[220px]',
    md: 'max-w-[320px]',
    lg: 'max-w-[420px]',
    xl: 'max-w-[540px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="Transportes Reyes - Pipas de Agua Potable y Tratada"
        className={`w-full ${fullSizeClasses[size]} object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
