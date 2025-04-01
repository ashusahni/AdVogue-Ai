"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-zinc-800 bg-black w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                SLICK.AI
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 md:w-3/4">
            <div>
              <h3 className="font-medium mb-4 text-sm uppercase text-zinc-500">
                Services
              </h3>
              <ul className="space-y-2">
                {["Inbound Calls", "Outbound Calls"].map((item, index) => (
                  <li key={`footer-service-${index}`}>
                    <Link
                      href="#"
                      className="text-zinc-400 hover:text-teal-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-sm uppercase text-zinc-500">
                Company
              </h3>
              <ul className="space-y-2">
                {["About", "Pricing", "Contact Us", "YouTube Channel"].map(
                  (item, index) => (
                    <li key={`footer-company-${index}`}>
                      <Link
                        href="#"
                        className="text-zinc-400 hover:text-teal-500 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-sm uppercase text-zinc-500">
                Legal
              </h3>
              <ul className="space-y-2">
                {["Privacy", "Terms"].map((item, index) => (
                  <li key={`footer-legal-${index}`}>
                    <Link
                      href="#"
                      className="text-zinc-400 hover:text-teal-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-zinc-800 mt-8">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} SLICK.AI All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 