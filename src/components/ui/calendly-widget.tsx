"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function CalendlyWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any existing Calendly instances
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append a new script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/ananay-advogueai/30min?hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: document.getElementsByClassName('calendly-inline-widget')[0],
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (existingScript) {
        existingScript.remove();
      }
      if (window.Calendly) {
        delete window.Calendly;
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return (
    <div className="w-full">
      <div 
        className="calendly-inline-widget" 
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
} 