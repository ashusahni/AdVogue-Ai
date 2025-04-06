"use client";

import React from 'react';
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Calendly: any;
  }
}

export function CalendlyWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Only initialize if Calendly script is loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/ananay-advogueai/30min?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: document.getElementsByClassName('calendly-inline-widget')[0],
      });
    }
  }, [pathname]); // Re-run when pathname changes

  return (
    <div className="w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/ananay-advogueai/30min?hide_event_type_details=1&hide_gdpr_banner=1',
              parentElement: document.getElementsByClassName('calendly-inline-widget')[0],
            });
          }
        }}
      />
      <div 
        className="calendly-inline-widget" 
        style={{ minWidth: "320px", height: "700px" }}
        data-auto-load="false"
      ></div>
    </div>
  );
} 