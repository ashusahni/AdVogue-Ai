"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/ananay-advogueai?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=000000&initial_event_url=https://calendly.com/ananay-advogueai/ai-agent-demo";

export function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Function to click the AI Agent Demo option
    const clickAIAgentDemo = () => {
      const interval = setInterval(() => {
        // Try to find the AI Agent Demo button by its text content
        const buttons = document.querySelectorAll('button');
        const aiDemoButton = Array.from(buttons).find(button => 
          button.textContent?.includes('AI Agent Demo')
        );
        
        if (aiDemoButton) {
          aiDemoButton.click();
          clearInterval(interval);
        }
      }, 1000); // Check every second

      // Clear interval after 10 seconds to prevent infinite checking
      setTimeout(() => clearInterval(interval), 10000);
    };

    // Wait for widget to load then click AI Agent Demo
    script.onload = () => {
      setTimeout(clickAIAgentDemo, 2000); // Increased wait time to 2s for widget to fully initialize
    };

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
          data-url={CALENDLY_URL}
          style={{ 
            minWidth: "320px", 
            height: "650px",
          }}
        />
      </div>
    </div>
  );
} 