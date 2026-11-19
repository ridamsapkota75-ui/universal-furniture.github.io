import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Universal Furniture Industries (UFI) Chitwan</title>
        <meta
          name="description"
          content="Universal Furniture Industries has been manufacturing metal furniture in Chitwan, Nepal since 1990. Learn about our 34+ years of industrial precision, values, and manufacturing heritage."
        />
        <link rel="canonical" href="https://ufichitwan.com/about/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ufichitwan.com/about/" />
        <meta property="og:title" content="About Us | Universal Furniture Industries (UFI) Chitwan" />
        <meta property="og:description" content="Universal Furniture Industries has been manufacturing metal furniture in Chitwan, Nepal since 1990. Learn about our 34+ years of industrial precision, values, and manufacturing heritage." />
        <meta property="og:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Universal Furniture Industries (UFI) Chitwan" />
        <meta name="twitter:description" content="Universal Furniture Industries has been manufacturing metal furniture in Chitwan, Nepal since 1990. Learn about our 34+ years of industrial precision, values, and manufacturing heritage." />
        <meta name="twitter:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite">
        {/* Hero Section */}
        <section className="relative section-padding border-b border-electricBlue/15 overflow-hidden">
          <div className="absolute inset-0 z-0 overlay-dark">
            <Image
              src="/images/backgrounds/team-industrial.jpg"
              alt="Industrial manufacturing team"
              fill
              className="object-cover opacity-15"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 section-container">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-label">CHITWAN, NEPAL • ESTABLISHED 1990</span>
              <h1 className="heading-display mt-2 text-balance">
                BUILT ON EXPERIENCE.<br />
                <span className="text-gradient-electric">
                  DRIVEN BY ENGINEERING.
                </span>
              </h1>
              <p className="text-body-premium mt-4 max-w-2xl mx-auto">
                Universal Furniture Industries has manufactured metal furniture from a single Chitwan facility for over three decades — every piece built to the same 9-step durability standard.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Heritage Metrics Bar */}
        <section className="bg-industrial-elevated border-b border-electricBlue/15 py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-electricBlue/10">
              <div className="pt-6 md:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-electricBlue tracking-tight">
                  1990
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-metallicSilver mt-2 block">
                  Established in Chitwan, Nepal
                </span>
                <p className="text-caption text-metallicSilver/50 mt-1">Operating continuously for 34+ years</p>
              </div>

              <div className="pt-6 md:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-electricBlue tracking-tight">
                  34+
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-metallicSilver mt-2 block">
                  Years of Manufacturing
                </span>
                <p className="text-caption text-metallicSilver/50 mt-1">Specialized cold-rolled steel fabrication</p>
              </div>

              <div className="pt-6 md:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-electricBlue tracking-tight">
                  10,000+
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-metallicSilver mt-2 block">
                  Institutional Installations
                </span>
                <p className="text-caption text-metallicSilver/50 mt-1">Marts, schools, wards & offices across Nepal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story & Manufacturing Philosophy */}
        <section className="section-padding section-container">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-label">OUR HERITAGE</span>
              <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl mt-1 mb-5">
                Furniture That Works. Solutions That Drive Your Business.
              </h2>
              <div className="space-y-4 text-body-premium">
                <p>
                  Founded in 1990 in Bharatpur-07, Chitwan, Universal Furniture Industries began with a commitment to solve a persistent problem across Nepal: furniture that rusted quickly in the monsoon climate and buckled under heavy institutional use.
                </p>
                <p>
                  By establishing our own in-house 9-step chemical dip pre-treatment and electrostatic powder-coating facility, we transformed metal furniture from temporary fixtures into multi-decade investments for departmental stores, schools, clinical centers, and workplaces.
                </p>
                <p>
                  Today, UFI remains rooted in Chitwan, serving customers from local businesses in Narayangarh to government hospitals and nationwide retail chains across all provinces.
                </p>
              </div>
            </div>

            {/* Technical Factory Factsheet Box */}
            <div className="card-strong p-6 sm:p-8">
              <h3 className="heading-md text-lg font-bold text-iceBlue mb-5 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
                <span>Verified Manufacturing Facts</span>
              </h3>
              <div className="space-y-4 text-caption font-mono text-metallicSilver divide-y divide-electricBlue/10">
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Business Name</span>
                  <span className="text-steelWhite font-medium">Universal Furniture Industries (UFI)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Facility Location</span>
                  <span className="text-steelWhite font-medium">Bharatpur-07, Srijana Tole, Chitwan</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Specialization</span>
                  <span className="text-steelWhite font-medium">Precision Metal Furniture</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Coating Process</span>
                  <span className="text-steelWhite font-medium">9-Step Phosphated Powder Coat</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Primary Market</span>
                  <span className="text-steelWhite font-medium">Nepal Nationwide</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/50">Telephone</span>
                  <span className="text-electricBlue font-bold">+977-9855053857</span>
                </div>
              </div>
            </div>
          </div>

          {/* Four Core Values */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-label">OUR CORE COMMITMENTS</span>
              <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl mt-1">
                Four Pillars of UFI Craftsmanship
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  01
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">BUILT TO LAST</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  High-quality cold-rolled steel and chemical passivated finishes engineered for long-lasting structural performance.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  02
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">SMART DESIGN</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Functional, modular, and space-saving engineering tailored to real departmental store aisles and institutional rooms.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  03
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">PREMIUM QUALITY</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Finely crafted welding, rounded safety corners, and electrostatic curing for maximum safety, strength, and reliability.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  04
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">TRUSTED PARTNER</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Committed to straightforward factory pricing, honest lead times, on-time delivery, and long-term customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Band */}
          <div className="mt-20 text-center card-strong p-8 sm:p-12">
            <h3 className="heading-section text-2xl sm:text-3xl font-bold text-steelWhite mb-3">
              Equip Your Facility with Proven Metal Furniture
            </h3>
            <p className="text-body-premium max-w-lg mx-auto mb-6">
              Connect with our Chitwan works office for product catalogs, custom dimensional orders, and volume quotation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request Quotation
              </Link>
              <a
                href="tel:+9779855053857"
                className="btn-secondary"
              >
                Call: +977-9855053857
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}