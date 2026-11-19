import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-industrial-deep border-t border-electricBlue/15 text-metallicSilver section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-electricBlue/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-electricBlue/40 bg-darkBlue/80 flex items-center justify-center p-0.5">
                <Image
                  src="/images/logo/ufi-logo.png"
                  alt="UFI Chitwan"
                  width={38}
                  height={38}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-steelWhite tracking-tight text-lg sm:text-xl">
                  UNIVERSAL FURNITURE INDUSTRIES
                </span>
                <p className="text-caption font-mono uppercase tracking-widest text-electricBlue">
                  PRECISION METAL FURNITURE • SINCE 1990
                </p>
              </div>
            </Link>

            <p className="text-body-sm text-metallicSilver/70 max-w-sm leading-relaxed">
              Precision metal furniture manufacturing facility based in Chitwan, Nepal.
              Serving departmental marts, schools, hospitals, corporate workspaces, and homes across Nepal with signature 9-step chemical powder coating.
            </p>

            <div className="pt-2 flex items-center space-x-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-lg bg-industrial-card text-caption font-mono text-iceBlue border border-electricBlue/15">
                Chitwan, Nepal
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-industrial-card text-caption font-mono text-iceBlue border border-electricBlue/15">
                Est. 1990
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-label mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-body-sm">
              <li>
                <Link href="/" className="hover:text-electricBlue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-electricBlue transition">
                  About UFI
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-electricBlue transition">
                  9-Step Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-electricBlue transition">
                  Projects & Sectors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-electricBlue transition">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-label mb-4">
              Sectors
            </h4>
            <ul className="space-y-2.5 text-body-sm">
              <li>
                <Link href="/products/store" className="hover:text-electricBlue transition">
                  Retail Systems
                </Link>
              </li>
              <li>
                <Link href="/products/school" className="hover:text-electricBlue transition">
                  Education Systems
                </Link>
              </li>
              <li>
                <Link href="/products/hospital" className="hover:text-electricBlue transition">
                  Healthcare Systems
                </Link>
              </li>
              <li>
                <Link href="/products/office" className="hover:text-electricBlue transition">
                  Workspace Systems
                </Link>
              </li>
              <li>
                <Link href="/products/home" className="hover:text-electricBlue transition">
                  Home Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-label mb-4">
              Factory & Office
            </h4>
            <div className="space-y-3 text-body-sm">
              <p className="leading-snug">
                Bharatpur-07, Srijana Tole,<br />
                Chitwan, Bagmati Province, Nepal
              </p>
              <p>
                <span className="text-label">Phone:</span>
                <a href="tel:+9779855053857" className="text-iceBlue hover:text-electricBlue font-semibold transition mt-1 block">
                  +977-9855053857
                </a>
              </p>

              {/* Direct Buttons: WhatsApp & Official Facebook */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/9779855053857"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp Chat with UFI"
                  className="inline-flex items-center space-x-1.5 text-caption font-medium text-white bg-green-700/80 hover:bg-green-600 px-3 py-1.5 rounded-lg border border-green-500/25 transition shadow-sm"
                >
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.facebook.com/ufichitwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit official UFI Facebook page (opens in new tab)"
                  className="inline-flex items-center space-x-1.5 text-caption font-medium text-white bg-[#1877F2]/90 hover:bg-[#1877F2] px-3 py-1.5 rounded-lg border border-blue-400/25 transition shadow-sm group"
                >
                  <svg className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Connected Social Block */}
        <div className="pt-10 pb-8 border-t border-electricBlue/10 mt-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-label block mb-2">
              STAY CONNECTED WITH UFI
            </span>
            <p className="text-body-sm text-metallicSilver/70 mb-6">
              Follow our latest products, projects and company updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/ufichitwan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow UFI on Facebook (opens in new tab)"
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-900/30 hover:shadow-blue-800/40 hover:-translate-y-0.5 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Follow UFI on Facebook</span>
              </a>

              <a
                href="https://wa.me/9779855053857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-sm tracking-wide transition shadow-xl shadow-green-900/30 hover:-translate-y-0.5"
              >
                <span>WhatsApp: +977-9855053857</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-caption text-metallicSilver/50 gap-4">
          <p>© {year} Universal Furniture Industries (UFI). All rights reserved.</p>
          <div className="flex items-center space-x-5 flex-wrap">
            <a
              href="https://ufichitwan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-iceBlue transition"
            >
              ufichitwan.com
            </a>
            <a
              href="https://www.facebook.com/ufichitwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 hover:text-iceBlue transition group text-metallicSilver/70"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span>Facebook Official</span>
            </a>
            <span className="text-metallicSilver/30">Chitwan, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}