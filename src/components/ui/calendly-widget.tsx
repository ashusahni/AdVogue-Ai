"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="booking" className="w-full bg-zinc-950 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Schedule a Demo
        </h2>
        <div 
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-2xl bg-zinc-900"
          data-url="https://calendly.com/ananay-advogueai?hide_gdpr_banner=1&background_color=09090b&text_color=ffffff&primary_color=14b8a6"
          style={{ 
            minWidth: "320px", 
            height: "650px",
          }}
        />
      </div>
    </div>
  );
} 