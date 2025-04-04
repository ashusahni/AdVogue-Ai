"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-32 h-8">
                <Image
                  src="/images/advogue-logo.png"
                  alt="Advogue AI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-600 max-w-sm">
              Transform your business communications with our advanced AI voice agents. Experience the future of customer service today.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm uppercase text-slate-700">
              Company
            </h3>
            <ul className="space-y-2">
              {["About", "Pricing", "Contact Us", "YouTube Channel"].map(
                (item, index) => (
                  <li key={`footer-company-${index}`}>
                    <Link
                      href="#"
                      className="text-slate-600 hover:text-black transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm uppercase text-slate-700">
              Legal
            </h3>
            <ul className="space-y-2">
              {["Privacy", "Terms"].map((item, index) => (
                <li key={`footer-legal-${index}`}>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-200 mt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Advogue AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 