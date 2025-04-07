import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = '', width = 1000, height = 200 }: LogoProps) {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        src="/images/advogue ai new logo transparent png.png"
        alt="advogue.ai logo"
        fill
        style={{ 
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          filter: 'contrast(1.1) brightness(1.1)'
        }}
        priority
        quality={100}
      />
    </div>
  );
} 