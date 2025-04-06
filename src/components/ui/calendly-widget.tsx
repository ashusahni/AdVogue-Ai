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
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const initializeCalendly = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        try {
          // Clear any existing widgets first
          const existingWidget = document.querySelector('.calendly-inline-widget');
          if (existingWidget) {
            existingWidget.innerHTML = '';
          }

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
          // Retry initialization if under max retries
          if (retryCount < maxRetries) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
              initializeCalendly();
            }, 1000); // Wait 1 second before retrying
          }
        }
      } else if (retryCount < maxRetries) {
        // If Calendly is not available yet, retry
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeCalendly();
        }, 1000);
      }
    };

    // Initialize when script is loaded
    if (isScriptLoaded) {
      initializeCalendly();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        try {
          window.Calendly.destroyBadgeWidget();
          const existingWidget = document.querySelector('.calendly-inline-widget');
          if (existingWidget) {
            existingWidget.innerHTML = '';
          }
        } catch (error) {
          console.error('Error cleaning up Calendly:', error);
        }
      }
    };
  }, [pathname, isScriptLoaded, retryCount]);

  return (
    <div className="w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptLoaded(true);
          setRetryCount(0); // Reset retry count when script loads
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