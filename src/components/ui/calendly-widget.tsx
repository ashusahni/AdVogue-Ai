"use client";

import Script from "next/script";

export function CalendlyWidget() {
  return (
    <div className="w-full">
      <div 
        className="calendly-inline-widget rounded-3xl overflow-hidden"
        data-url="https://calendly.com/ananay-advogueai?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=000000&hide_event_type_details=1"
        style={{ 
          minWidth: "320px", 
          height: "750px",
          border: "none",
        }}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
} 