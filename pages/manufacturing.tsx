import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { manufacturingSteps } from '../src/components/ManufacturingTimeline';

export default function ManufacturingPage() {
  return (
    <>
      <Head>
        <title>The 9-Step Powder Coating Process | Universal Furniture Industries</title>
        <meta
          name="description"
          content="Explore UFI's 9-step chemical metal surface pre-treatment process in Chitwan, Nepal. Degreasing, pickling, phosphating, and passivation for anti-corrosion furniture."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite pt-24 sm:pt-28">
        {/* Hero Banner */}
        <section className="relative section-padding border-b border-electricBlue/15 overflow-hidden">
          <div className="absolute inset-0 z-0 overlay-blue">
            <Image
              src="/images/backgrounds/factory-welding.jpg"
              alt="Metal welding and fabrication"
              fill
              className="object-cover opacity-15"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 section-container">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-label">PRECISION MANUFACTURING • CHITWAN FACILITY</span>
              <h1 className="heading-display mt-2 text-balance">
                PRECISION IN EVERY PROCESS.
              </h1>
              <p className="text-body-premium mt-4 max-w-2xl mx-auto">
                Quality isn&apos;t an accident. It is engineered into every single metal surface through our rigorous chemical immersion pre-treatment facility.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Process Overview Introduction */}
        <section className="section-padding section-container">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="card-interactive p-6">
              <span className="text-label">01 / SUBSTRATE CLEANSING</span>
              <h3 className="heading-md text-xl font-bold mt-2 mb-2">Total Degreasing & Scale Removal</h3>
              <p className="text-body-sm text-metallicSilver/80">
                Alkaline baths strip away rolling lubricants, followed by controlled acid pickling to eliminate surface rust down to the bare molecular iron matrix.
              </p>
            </div>
            <div className="card-interactive p-6">
              <span className="text-label">02 / CRYSTALLINE BONDING</span>
              <h3 className="heading-md text-xl font-bold mt-2 mb-2">Phosphate Conversion Layer</h3>
              <p className="text-body-sm text-metallicSilver/80">
                Immersed in a chemical phosphating conversion bath, bare metal grows a micro-crystalline coating that mechanically anchors the powder coat.
              </p>
            </div>
            <div className="card-interactive p-6">
              <span className="text-label">03 / CORROSION SEAL</span>
              <h3 className="heading-md text-xl font-bold mt-2 mb-2">Chemical Passivation</h3>
              <p className="text-body-sm text-metallicSilver/80">
                A non-chromic passivation rinse seals microscopic grain boundaries, locking out humidity, sweat, detergents, and hospital sterilizers.
              </p>
            </div>
          </div>

          {/* Detailed 9 Steps Cards Sequence */}
          <div className="space-y-5">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-label">THE 9 STAGES IN DETAIL</span>
              <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl mt-1">
                From Raw Sheet Metal to Lasting Protection
              </h2>
            </div>

            <div className="space-y-4">
              {manufacturingSteps.map((step) => (
                <div
                  key={step.step}
                  className="card-base card-hover flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8"
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-deepNavy border border-electricBlue/30 flex items-center justify-center">
                      <span className="text-xl font-mono font-extrabold text-electricBlue">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 flex-wrap">
                        <h3 className="heading-md text-xl sm:text-2xl font-bold text-steelWhite">
                          {step.name}
                        </h3>
                        <span className="text-caption font-mono bg-deepNavy px-2.5 py-0.5 rounded border border-electricBlue/20 text-iceBlue">
                          {step.chemical}
                        </span>
                      </div>
                      <p className="mt-2 text-body-sm text-metallicSilver max-w-3xl leading-relaxed">
                        {step.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="md:text-right flex-shrink-0 bg-deepNavy/60 px-4 py-3 rounded-xl border border-electricBlue/15">
                    <span className="block text-caption font-mono uppercase text-electricBlue">
                      Process Parameters
                    </span>
                    <span className="text-mono text-sm font-bold text-iceBlue block">
                      {step.specs.temp} • {step.specs.duration}
                    </span>
                    <span className="text-caption font-mono text-metallicSilver/60 block mt-0.5">
                      {step.specs.ph}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Table */}
          <div className="mt-16 card-strong p-6 sm:p-10">
            <h3 className="heading-section text-xl sm:text-2xl font-bold text-steelWhite mb-6 text-center">
              Manufacturing Durability Standard Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-electricBlue/15 text-caption font-mono uppercase text-metallicSilver/60">
                    <th className="py-3 px-4">Evaluation Metric</th>
                    <th className="py-3 px-4 text-red-400">Ordinary Untreated Spray Painting</th>
                    <th className="py-3 px-4 text-electricBlue font-bold">UFI 9-Step Powder Coating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-electricBlue/10 text-body-sm text-metallicSilver">
                  <tr>
                    <td className="py-4 px-4 font-medium text-steelWhite">Pre-Treatment</td>
                    <td className="py-4 px-4 text-red-300">Dry rag wipe or single wash</td>
                    <td className="py-4 px-4 text-iceBlue font-medium">Full 9-step chemical immersion sequence</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-steelWhite">Paint Adhesion</td>
                    <td className="py-4 px-4 text-red-300">Surface peel with light scuffing</td>
                    <td className="py-4 px-4 text-iceBlue font-medium">Micro-crystalline phosphate chemical anchor</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-steelWhite">Humidity & Rust Resistance</td>
                    <td className="py-4 px-4 text-red-300">Rust blooms within 6–12 months in monsoon</td>
                    <td className="py-4 px-4 text-iceBlue font-medium">Chemical passivation resists decades of monsoon</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-steelWhite">Cleanability & Hygiene</td>
                    <td className="py-4 px-4 text-red-300">Attacked by disinfectant solvents</td>
                    <td className="py-4 px-4 text-iceBlue font-medium">Compatible with hospital and clinical cleaning protocols</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-12 text-center">
            <h3 className="heading-section text-2xl font-bold text-steelWhite mb-3">
              Need Institutional or Bulk Metal Furniture?
            </h3>
            <p className="text-body-premium max-w-xl mx-auto mb-6">
              Talk directly with our manufacturing engineers in Chitwan to discuss custom dimensions, load ratings, and project lead times.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Factory Pricing & Specs
            </Link>
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