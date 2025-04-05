"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="group">
              <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                advo<span className="text-black">gue</span>
              </span>
            </Link>
            <p className="text-gray-600 text-lg max-w-md text-center md:text-left">
              Transform your business communications with our advanced AI voice agents.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
              >
                About
              </Link>
              <Link 
                href="https://www.linkedin.com/in/ananay-sharma-2b1b3b1b2/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-600 hover:text-[#0A66C2] transition-colors duration-200 group text-lg"
              >
                <FaLinkedin className="w-6 h-6 group-hover:text-[#0A66C2]" />
                <span>LinkedIn</span>
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <p className="text-gray-600 text-lg">Ready to transform your business?</p>
              <Link 
                href="/#booking" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-900 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center text-gray-600">
            © {new Date().getFullYear()} Advogue. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 