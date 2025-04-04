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
    <div id="booking" className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-8">
          Schedule a Demo
        </h2>
        <div 
          className="calendly-inline-widget rounded-card overflow-hidden shadow-2xl bg-white"
          data-url="https://calendly.com/ananay-advogueai?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=000000"
          style={{ 
            minWidth: "320px", 
            height: "650px",
          }}
        />
      </div>
    </div>
  );
} 