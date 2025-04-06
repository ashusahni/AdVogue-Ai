"use client";

import React from 'react';
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Calendly: any;
  }
}

export function CalendlyWidget() {
  const pathname = usePathname();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const initializeCalendly = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/ananay-advogueai/30min',
            parentElement: document.getElementsByClassName('calendly-inline-widget')[0],
            prefill: {},
            utm: {},
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            backgroundColor: 'ffffff'
          });
        } catch (error) {
          console.error('Error initializing Calendly:', error);
        }
      }
    };

    // Only initialize if script is loaded
    if (isScriptLoaded) {
      initializeCalendly();
    }

    return () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        try {
          window.Calendly.destroyBadgeWidget();
        } catch (error) {
          console.error('Error cleaning up Calendly:', error);
        }
      }
    };
  }, [pathname, isScriptLoaded]);

  return (
    <div className="w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptLoaded(true);
        }}
      />
      <div 
        className="calendly-inline-widget" 
        style={{ 
          minWidth: "320px", 
          height: "700px",
          border: "none"
        }}
        data-url="https://calendly.com/ananay-advogueai/30min"
      ></div>
    </div>
  );
} 