import React, { lazy, Suspense } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import VideoShowcase from '../src/components/VideoShowcase';
import ManufacturingTimeline from '../src/components/ManufacturingTimeline';
import Footer from '../src/components/Footer';
import { CATEGORIES, products } from '../src/data/products';
const Hero3D = lazy(() => import('../src/components/Hero3D'));

const categoryBackgrounds: Record<string, string> = {
  store: '/images/backgrounds/supermarket-interior.jpg',
  school: '/images/backgrounds/classroom-modern.jpg',
  hospital: '/images/backgrounds/hospital-room.jpg',
  office: '/images/backgrounds/modern-office.jpg',
  home: '/images/backgrounds/modern-living.jpg',
};

export default function HomePage() {
  const flagshipProducts = products.filter((p) => p.featured);
  const canonicalUrl = 'https://ufichitwan.com/';

  return (
    <>
      <Head>
        <title>Universal Furniture Industries | Metal Furniture Manufacturer Chitwan, Nepal</title>
        <meta
          name="description"
          content="Precision metal furniture manufacturer in Chitwan, Nepal since 1990. Supermarket gondola racks, school desks, hospital beds, executive office furniture, and home furniture with 9-step powder coating."
        />
        <meta
          name="keywords"
          content="furniture manufacturer Nepal, metal furniture Chitwan, supermarket rack Nepal, school bench Nepal, hospital bed Nepal, office desk Nepal, powder coated furniture"
        />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Universal Furniture Industries | Metal Furniture Manufacturer Chitwan, Nepal" />
        <meta property="og:description" content="Precision metal furniture manufacturer in Chitwan, Nepal since 1990. Supermarket gondola racks, school desks, hospital beds, executive office furniture, and home furniture with 9-step powder coating." />
        <meta property="og:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Universal Furniture Industries | Metal Furniture Manufacturer Chitwan, Nepal" />
        <meta name="twitter:description" content="Precision metal furniture manufacturer in Chitwan, Nepal since 1990. Supermarket gondola racks, school desks, hospital beds, executive office furniture, and home furniture with 9-step powder coating." />
        <meta name="twitter:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Universal Furniture Industries (UFI)',
            url: 'https://ufichitwan.com/',
            logo: 'https://ufichitwan.com/images/logo/ufi-logo.png',
            description: 'Precision metal furniture manufacturer in Chitwan, Nepal since 1990.',
            foundingDate: '1990',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Bharatpur-07, Srijana Tole',
              addressLocality: 'Chitwan',
              addressRegion: 'Bagmati Province',
              addressCountry: 'NP',
            },
            telephone: '+977-9855053857',
            sameAs: [
              'https://www.facebook.com/ufichitwan/',
            ],
          })}
        </script>
        {/* Structured Data: VideoObject for company film */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'UFI Manufacturing Facility Overview',
            description: 'Watch how Universal Furniture Industries engineers precision metal furniture from raw steel to finished product in our Chitwan manufacturing facility.',
            uploadDate: '2024-01-01',
            contentUrl: 'https://ufichitwan.com/videos/ufi-advertisement.mp4',
            thumbnailUrl: 'https://ufichitwan.com/videos/ufi-video-poster.jpg',
          })}
        </script>
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite">
        {/* 1. Cinematic 3D Hero Section */}
        <Suspense fallback={
          <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-industrial-base">
            <div className="absolute inset-0 z-0 overlay-dark">
              <Image
                src="/images/backgrounds/hero-factory.jpg"
                alt="UFI Manufacturing Facility"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electricBlue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-royalBlue/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 section-container px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center pointer-events-none">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-darkBlue/80 border border-electricBlue/40 backdrop-blur-md mb-6 pointer-events-auto shadow-lg animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
                <span className="text-caption font-mono tracking-widest uppercase text-iceBlue font-medium">
                  UNIVERSAL FURNITURE INDUSTRIES | EST. 1990
                </span>
              </div>
              <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.08] drop-shadow-md animate-fade-in-up delay-100 text-balance">
                ENGINEERED FOR<br />
                <span className="text-gradient-electric">EVERY SPACE.</span>
              </h1>
              <p className="mt-6 text-body sm:text-body-lg text-metallicSilver/90 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                Precision-manufactured metal furniture for businesses, institutions, and modern living. Trusted since 1990 in Chitwan, Nepal.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto animate-fade-in-up delay-300">
                <Link className="w-full sm:w-auto btn-primary" href="/#collections">EXPLORE OUR PRODUCTS</Link>
                <Link className="w-full sm:w-auto btn-secondary" href="/contact">REQUEST A QUOTE</Link>
              </div>
            </div>
          </section>
        }>
          <Hero3D />
        </Suspense>

        {/* 2. Verified Manufacturing Metrics Strip */}
        <section className="bg-industrial-elevated border-y border-electricBlue/20 py-12 relative z-10">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center divide-y sm:divide-y-0 sm:divide-x divide-electricBlue/15">
              <div className="pt-6 sm:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-steelWhite tracking-tight">
                  1990
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Established in Chitwan
                </span>
                <p className="text-caption text-metallicSilver/60 mt-1">Over three decades of manufacturing continuity</p>
              </div>

              <div className="pt-6 sm:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-steelWhite tracking-tight">
                  34+
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Years of Engineering
                </span>
                <p className="text-caption text-metallicSilver/60 mt-1">Specialized cold-rolled steel & electrostatic coating</p>
              </div>

              <div className="pt-6 sm:pt-0">
                <span className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-steelWhite tracking-tight">
                  10,000+
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Institutional Installations
                </span>
                <p className="text-caption text-metallicSilver/60 mt-1">Marts, schools, hospitals & offices across Nepal</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Five Specialized Industry Environments */}
        <section id="collections" className="section-padding section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-label">FIVE SPECIALIZED CATEGORIES</span>
            <h2 className="heading-display mt-2 text-balance">
              ENGINEERED FOR EVERY SPACE.
            </h2>
            <p className="text-body-premium mt-4 max-w-2xl mx-auto">
              One manufacturing standard, five specialized categories — from high-traffic supermarket retail floors to hygienic hospital wards and modern residences.
            </p>
          </div>

          <div className="space-y-10">
            {CATEGORIES.map((cat, idx) => {
              const catProds = products.filter((p) => p.category === cat.slug);
              return (
                <div
                  key={cat.slug}
                  className="relative card-strong card-strong-hover overflow-hidden group"
                >
                  {/* Category Environmental Photographic Background */}
                  <div className="absolute inset-0 z-0 pointer-events-none overlay-dark">
                    <Image
                      src={categoryBackgrounds[cat.slug] || '/images/backgrounds/factory-interior.jpg'}
                      alt={cat.name}
                      fill
                      className="object-cover opacity-12 group-hover:opacity-18 transition-opacity duration-700"
                      sizes="100vw"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 justify-between border-b border-electricBlue/10 pb-8 mb-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-label bg-industrial-card px-3 py-1 rounded-lg border border-electricBlue/20">
                            CATEGORY 0{idx + 1}
                          </span>
                          <span className="text-mono text-xs text-metallicSilver/60 uppercase">
                            {cat.shortName}
                          </span>
                        </div>
                        <h3 className="heading-section text-2xl sm:text-3xl lg:text-4xl">
                          {cat.name}
                        </h3>
                        <p className="text-body-premium mt-2 text-iceBlue font-medium italic max-w-xl">
                          &ldquo;{cat.headline}&rdquo;
                        </p>
                        <p className="text-body-sm text-metallicSilver mt-3 max-w-2xl leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <Link
                        href={`/products/${cat.slug}`}
                        className="flex-shrink-0 btn-primary-sm"
                      >
                        Explore {cat.name}
                      </Link>
                    </div>

                    {/* Horizontal Product Showcase Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {catProds.map((prod) => (
                        <Link
                          key={prod.slug}
                          href={`/products/${prod.category}/${prod.slug}`}
                          className="group card-interactive flex flex-col justify-between p-6"
                        >
                          <div className="relative h-40 w-full bg-deepNavy/60 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <span className="text-label text-[10px] block mb-1">
                              {prod.tagline}
                            </span>
                            <h4 className="heading-md text-base font-bold text-steelWhite group-hover:text-electricBlue transition">
                              {prod.name}
                            </h4>
                            <span className="text-caption-mono mt-2 inline-flex items-center space-x-1">
                              <span>View Details & Specs</span>
                              <span>&rarr;</span>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Official Company Advertisement Video */}
        <VideoShowcase
          title="DISCOVER THE UFI DIFFERENCE"
          subtitle="OFFICIAL COMPANY FILM"
          description="Watch how Universal Furniture Industries engineers precision metal furniture from raw steel to finished product in our Chitwan manufacturing facility."
          videoSrc="/videos/ufi-advertisement.mp4"
          posterSrc="/videos/ufi-video-poster.jpg"
        />

        {/* 5. Interactive 9-Step Manufacturing Process */}
        <section className="section-padding relative overflow-hidden border-y border-electricBlue/15">
          <div className="absolute inset-0 z-0 overlay-blue">
            <Image
              src="/images/backgrounds/metal-fabrication.jpg"
              alt="Metal fabrication process"
              fill
              className="object-cover opacity-15"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10">
            <div className="section-container">
              <ManufacturingTimeline />
            </div>
          </div>
        </section>

        {/* 6. Company Introduction & Heritage */}
        <section className="section-padding relative overflow-hidden">
          <div className="section-container">
            {/* Editorial Showcase with Large Factory Photography */}
            <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest">
                  <span>ESTABLISHED 1990</span>
                  <span>&bull;</span>
                  <span>BHARATPUR-07, CHITWAN</span>
                </div>
                <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Engineered in Chitwan.<br />
                  <span className="text-gradient-electric">
                    Trusted Since 1990.
                  </span>
                </h2>
                <p className="text-body-premium">
                  Universal Furniture Industries (UFI) has operated from our central Bharatpur, Chitwan manufacturing facility for over 34 years. Every piece of steel furniture leaves our plant chemically degreased, phosphated, passivated, and electrostatic powder coated to withstand Nepal&apos;s harshest monsoons and decades of institutional use.
                </p>

                {/* Verified Metrics Counter Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-electricBlue/15">
                  <div>
                    <span className="block font-display font-extrabold text-2xl sm:text-3xl text-steelWhite">1990</span>
                    <span className="text-mono text-xs uppercase text-electricBlue block mt-0.5">Founded</span>
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-2xl sm:text-3xl text-steelWhite">34+</span>
                    <span className="text-mono text-xs uppercase text-electricBlue block mt-0.5">Years Active</span>
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-2xl sm:text-3xl text-steelWhite">10k+</span>
                    <span className="text-mono text-xs uppercase text-electricBlue block mt-0.5">Institutions</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="btn-primary-sm"
                  >
                    Explore Our Company Story
                  </Link>
                </div>
              </div>

              {/* Large Factory Editorial Photography Card */}
              <div className="lg:col-span-6">
                <div className="relative h-80 sm:h-[420px] rounded-card-xl overflow-hidden border border-electricBlue/25 shadow-card-strong group">
                  <Image
                    src="/images/backgrounds/factory-interior.jpg"
                    alt="UFI Chitwan Metal Furniture Manufacturing Plant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/90 via-deepNavy/30 to-transparent" />

                  {/* Floating Caption Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-deepNavy/85 border border-electricBlue/25 backdrop-blur-md flex items-center justify-between text-caption font-mono">
                    <div>
                      <span className="text-steelWhite font-bold block">UFI Industrial Manufacturing Plant</span>
                      <span className="text-metallicSilver/60">Bharatpur-07, Srijana Tole, Chitwan, Nepal</span>
                    </div>
                    <span className="text-electricBlue font-semibold px-2.5 py-1 rounded bg-darkBlue/80 border border-electricBlue/25">
                      Active Facility
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Core Pillars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  01
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">BUILT TO LAST</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  High-quality cold-rolled steel materials for long-lasting structural performance across all seasons.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  02
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">SMART DESIGN</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Functional, modular, and space-saving engineering for real retail aisles, wards, and study halls.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  03
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">PREMIUM QUALITY</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Finely crafted welding, rounded safety corners, and rigorous quality inspection before dispatch.
                </p>
              </div>

              <div className="card-interactive p-6">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/30 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-4">
                  04
                </div>
                <h4 className="heading-md text-base font-bold text-steelWhite mb-2">TRUSTED PARTNER</h4>
                <p className="text-body-sm text-metallicSilver/80 leading-relaxed">
                  Direct factory relationship, honest lead times, on-time freight dispatch, and dependable after-sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Partner Feedback (Verified website records attribution) */}
        <section className="section-padding relative overflow-hidden border-t border-electricBlue/15">
          <div className="absolute inset-0 bg-radial-glow" />
          <div className="relative z-10">
            <div className="section-container">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-label">INSTITUTIONAL PARTNERSHIP</span>
                <h2 className="heading-section text-2xl sm:text-3xl mt-1">
                  Trusted by Nepal Industry & Institutions
                </h2>
                <p className="text-caption-mono mt-2">
                  Archival partner feedback preserved from ufichitwan.com
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="card-base card-hover p-6 flex flex-col justify-between">
                  <p className="text-body-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;UFI&apos;s gondola racks have been in our stores for over five years with no rust or wear. The powder coating holds up beautifully even in harsh weather.&rdquo;
                  </p>
                  <div className="pt-3 mt-3 border-t border-electricBlue/10 text-caption font-mono">
                    <span className="text-iceBlue font-bold block">Rajesh K.C.</span>
                    <span className="text-metallicSilver/50">Procurement Manager, Central Department Store</span>
                  </div>
                </div>

                <div className="card-base card-hover p-6 flex flex-col justify-between">
                  <p className="text-body-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;The school desks they supplied are still in perfect condition after three years of heavy daily use. Best investment we made for our campus.&rdquo;
                  </p>
                  <div className="pt-3 mt-3 border-t border-electricBlue/10 text-caption font-mono">
                    <span className="text-iceBlue font-bold block">Sita Tamang</span>
                    <span className="text-metallicSilver/50">Principal, Green Valley School</span>
                  </div>
                </div>

                <div className="card-base card-hover p-6 flex flex-col justify-between">
                  <p className="text-body-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;Professional, reliable, and on-time delivery. UFI&apos;s hospital beds meet all our durability requirements and then some.&rdquo;
                  </p>
                  <div className="pt-3 mt-3 border-t border-electricBlue/10 text-caption font-mono">
                    <span className="text-iceBlue font-bold block">Dr. Manish Shrestha</span>
                    <span className="text-metallicSilver/50">Medical Director, Regional Hospital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Bottom Quotation & Direct Contact Banner */}
        <section className="section-padding bg-radial-glow-top border-t border-electricBlue/20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-label">START YOUR PROJECT IN CHITWAN</span>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-1 tracking-tight">
              LET&apos;S BUILD SOMETHING BETTER.
            </h2>
            <p className="text-body-premium max-w-xl mx-auto mt-4">
              Contact our engineering and sales office in Bharatpur-07, Srijana Tole, Chitwan for volume estimation, custom drawings, and delivery timelines.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-primary"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/9779855053857"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-sm tracking-wider uppercase transition shadow-xl shadow-green-600/30"
              >
                WhatsApp: +977-9855053857
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