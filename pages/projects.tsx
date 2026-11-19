import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

const projectSectors = [
  {
    title: 'Modern Retail & Supermarkets',
    category: 'Retail Systems',
    headline: 'High-Density Merchandising for Departmental Stores',
    description:
      'Engineered for maximum weight capacity and visual clarity. UFI gondola systems and shopping trolleys allow grocery chains, departmental marts, and retail stores to optimize floor layout and inventory flow.',
    image: '/images/store/double-sided-gondola-rack.png',
    bgImage: '/images/backgrounds/supermarket-interior.jpg',
    link: '/products/store',
    highlights: ['100kg per tier load capacity', 'Modular aisle reconfiguration', 'Impact-resistant powder coating'],
  },
  {
    title: 'Schools, Colleges & Training Institutes',
    category: 'Education Systems',
    headline: 'Ergonomic Classrooms Built for Academic Longevity',
    description:
      'Campuses demand furniture that survives heavy daily student traffic without wobbling or surface degradation. Our welded steel benches and lockable student lockers deliver durability across generations of learners.',
    image: '/images/school/two-seater-classroom-bench.png',
    bgImage: '/images/backgrounds/classroom-modern.jpg',
    link: '/products/school',
    highlights: ['Posture-correct ergonomic wood curves', 'Integrated book and mesh racks', 'Heavy-gauge steel frames'],
  },
  {
    title: 'Hospitals, Clinics & Maternity Centers',
    category: 'Healthcare Systems',
    headline: 'Clinical Hygiene and Dependable Patient Support',
    description:
      'Healthcare settings demand absolute cleanliness and corrosion resistance. Our 9-step passivated obstetric beds and stainless medicine carts withstand chemical disinfectants and daily sanitization.',
    image: '/images/hospital/obstetric-delivery-bed.png',
    bgImage: '/images/backgrounds/hospital-room.jpg',
    link: '/products/hospital',
    highlights: ['Chemical passivation barrier', 'Smooth caster mobility with locks', 'Multi-section adjustments'],
  },
  {
    title: 'Corporate Offices & Workspaces',
    category: 'Workspace Systems',
    headline: 'Functional Executive Desks and Archival Security',
    description:
      'Balancing professional elegance with industrial stability. UFI provides corporate headquarters, banks, and legal offices with executive desks, ergonomic mesh task seating, and lockable storage cabinets.',
    image: '/images/office/executive-office-desk.png',
    bgImage: '/images/backgrounds/modern-office.jpg',
    link: '/products/office',
    highlights: ['Scratch-resistant laminate work surfaces', 'Perforated acoustic modesty panels', 'Three-point gang locks'],
  },
  {
    title: 'Contemporary Residential Spaces',
    category: 'Home Collection',
    headline: 'Durable Metal Craft for the Modern Home',
    description:
      'Bringing the durability of commercial metal manufacturing into living spaces. Termite-proof, humidity-proof, and designed with sleek industrial geometry that outlasts conventional wood furniture.',
    image: '/images/home/metal-sofa-set.png',
    bgImage: '/images/backgrounds/modern-living.jpg',
    link: '/products/home',
    highlights: ['100% termite and moisture-proof', 'Electrostatic satin blue/graphite finish', 'Easy-clean cushion integration'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Sectors & Environments | Universal Furniture Industries (UFI)</title>
        <meta
          name="description"
          content="Explore the five specialized industrial furniture sectors served by UFI Chitwan: retail supermarkets, educational campuses, healthcare clinics, corporate offices, and modern homes."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative section-padding border-b border-electricBlue/15 overflow-hidden">
          <div className="absolute inset-0 z-0 overlay-blue">
            <Image
              src="/images/backgrounds/factory-interior.jpg"
              alt="Industrial furniture manufacturing"
              fill
              className="object-cover opacity-15"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 section-container">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-label">COMMERCIAL & INSTITUTIONAL SECTORS</span>
              <h1 className="heading-display mt-2 text-balance">
                MADE FOR THE SPACES THAT MATTER.
              </h1>
              <p className="text-body-premium mt-4 max-w-2xl mx-auto">
                One manufacturing standard, five specialized sectors — proven across thousands of institutions throughout Nepal since 1990.
              </p>
            </div>
          </div>
        </section>

        {/* Sectors Grid / Editorial Showcase */}
        <section className="section-padding section-container space-y-16">
          {projectSectors.map((sector, idx) => (
            <div
              key={sector.category}
              className={`relative flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 card-strong card-strong-hover p-8 sm:p-10 overflow-hidden`}
            >
              {/* Sector Background */}
              <div className="absolute inset-0 z-0 rounded-card-xl overflow-hidden overlay-gradient">
                <Image
                  src={sector.bgImage}
                  alt={sector.title}
                  fill
                  className="object-cover opacity-12"
                  sizes="100vw"
                />
              </div>

              {/* Product Visual Presentation */}
              <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center bg-deepNavy/60 border border-electricBlue/15 rounded-card-xl p-6 overflow-hidden group">
                <div className="absolute top-3 left-4 text-caption font-mono uppercase text-electricBlue tracking-wider">
                  SECTOR REF: 0{idx + 1}
                </div>
                <div className="relative w-full h-56 sm:h-72 flex items-center justify-center">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Sector Content */}
              <div className="relative z-10 w-full lg:w-1/2 space-y-4">
                <div className="inline-block px-3 py-1 rounded-lg bg-industrial-card border border-electricBlue/20 text-electricBlue text-caption font-mono font-semibold uppercase">
                  {sector.category}
                </div>
                <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl">
                  {sector.title}
                </h2>
                <h3 className="heading-md text-sm sm:text-base font-semibold text-iceBlue">
                  {sector.headline}
                </h3>
                <p className="text-body-premium">
                  {sector.description}
                </p>

                {/* Key Sector Highlights */}
                <ul className="space-y-2 pt-2">
                  {sector.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-body-sm text-metallicSilver/90 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={sector.link}
                    className="w-full sm:w-auto btn-primary-sm text-center"
                  >
                    Explore {sector.category}
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto btn-secondary-sm text-center"
                  >
                    Inquire for Sector
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Note on Verification */}
          <div className="text-center card-base p-6 max-w-3xl mx-auto border-electricBlue/15">
            <p className="text-caption font-mono text-metallicSilver/60">
              UFI manufactures to customer-specified dimensional floor plans. All photos represent actual production lines manufactured at our Bharatpur, Chitwan plant.
            </p>
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