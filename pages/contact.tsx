import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

// ──────────────────────────────────────────────────────────────
// Form backend: Local API route (/api/contact) with file storage
// ──────────────────────────────────────────────────────────────

export default function ContactPage() {
  const router = useRouter();
  const { category: queryCategory, product: queryProduct } = router.query;

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    category: '',
    quantity: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const [inquiryRef, setInquiryRef] = useState<string>('');

  useEffect(() => {
    if (queryCategory && typeof queryCategory === 'string') {
      setFormData((prev) => ({ ...prev, category: queryCategory }));
    }
    if (queryProduct && typeof queryProduct === 'string') {
      const formattedModel = queryProduct.replace(/-/g, ' ').toUpperCase();
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry for model: ${formattedModel}. Please provide pricing, lead time, and specifications.`,
      }));
    }
  }, [queryCategory, queryProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedback(data.message || 'Inquiry registered successfully.');
        setInquiryRef(data.inquiryId || '');
        setFormData({
          fullName: '',
          organization: '',
          phone: '',
          email: '',
          category: '',
          quantity: '',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedback(data.error || 'Failed to submit inquiry. Please check your inputs.');
      }
    } catch (err) {
      setStatus('error');
      setFeedback('Network connection error. Please call +977-9855053857 directly.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact & Quotation | Universal Furniture Industries (UFI) Chitwan</title>
        <meta
          name="description"
          content="Request a quotation for supermarket gondola racks, school desks, hospital beds, and office furniture from UFI Chitwan, Nepal. Phone: +977-9855053857."
        />
        <link rel="canonical" href="https://ufichitwan.com/contact/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ufichitwan.com/contact/" />
        <meta property="og:title" content="Contact & Quotation | Universal Furniture Industries (UFI) Chitwan" />
        <meta property="og:description" content="Request a quotation for supermarket gondola racks, school desks, hospital beds, and office furniture from UFI Chitwan, Nepal. Phone: +977-9855053857." />
        <meta property="og:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact & Quotation | Universal Furniture Industries (UFI) Chitwan" />
        <meta name="twitter:description" content="Request a quotation for supermarket gondola racks, school desks, hospital beds, and office furniture from UFI Chitwan, Nepal. Phone: +977-9855053857." />
        <meta name="twitter:image" content="https://ufichitwan.com/images/logo/ufi-logo.png" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Header */}
        <section className="relative section-padding-sm border-b border-electricBlue/15 overflow-hidden">
          <div className="absolute inset-0 z-0 overlay-dark">
            <Image
              src="/images/backgrounds/modern-office.jpg"
              alt="Modern workspace"
              fill
              className="object-cover opacity-15"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 section-container">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-label">CHITWAN WORKS • ESTIMATION DESK</span>
              <h1 className="heading-display mt-2 text-balance">
                LET&apos;S BUILD SOMETHING BETTER.
              </h1>
              <p className="text-body-premium mt-4 max-w-2xl mx-auto">
                Whether you&apos;re outfitting a single office or fitting out an entire hospital ward or supermarket, our engineering team in Chitwan is ready to provide precise factory estimates.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Direct Contact & Factory Verification */}
            <div className="lg:col-span-5 space-y-7">
              <div className="card-strong p-6 sm:p-8">
                <h3 className="heading-md text-xl font-bold text-steelWhite mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
                  <span>Factory & Works Office</span>
                </h3>

                <div className="space-y-5 text-body-sm text-metallicSilver">
                  <div>
                    <span className="text-label">Manufacturer</span>
                    <p className="text-steelWhite font-medium text-base mt-1">
                      Universal Furniture Industries (UFI)
                    </p>
                  </div>

                  <div>
                    <span className="text-label">Factory Address</span>
                    <p className="text-steelWhite leading-snug mt-1">
                      Bharatpur-07, Srijana Tole,<br />
                      Chitwan, Bagmati Province, Nepal
                    </p>
                  </div>

                  <div>
                    <span className="text-label">Direct Telephone</span>
                    <a
                      href="tel:+9779855053857"
                      className="text-lg font-mono font-bold text-iceBlue hover:text-electricBlue transition mt-1 block"
                    >
                      +977-9855053857
                    </a>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href="https://wa.me/9779855053857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary"
                    >
                      Chat on WhatsApp (+977-9855053857)
                    </a>

                    <a
                      href="https://www.facebook.com/ufichitwan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with UFI on Facebook (opens in new tab)"
                      className="w-full btn-secondary"
                    >
                      Follow on Facebook (@ufichitwan)
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Information / Directions Box */}
              <div className="card-strong p-6">
                <h4 className="heading-sm text-sm font-mono uppercase tracking-wider text-iceBlue font-bold mb-3">
                  Location & Delivery Logistics
                </h4>
                <p className="text-body-sm text-metallicSilver/70 leading-relaxed mb-4">
                  Strategically located in Bharatpur, Chitwan — Nepal&apos;s central commercial hub. We manage secure freight delivery for departmental stores, universities, and hospitals across East, Central, and Western Nepal.
                </p>
                <div className="rounded-xl overflow-hidden border border-electricBlue/15 bg-deepNavy/60 h-40 flex items-center justify-center text-center p-4">
                  <div>
                    <span className="block font-mono text-xs text-electricBlue font-bold">
                      GPS: 27.6668721° N, 84.4262832° E
                    </span>
                    <span className="text-caption text-metallicSilver/50 mt-1 block">
                      Bharatpur-07, Srijana Tole, Chitwan
                    </span>
                    <a
                      href="https://maps.google.com/?q=27.6668721,84.4262832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-caption font-mono text-iceBlue underline hover:text-electricBlue"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Quotation Form */}
            <div className="lg:col-span-7">
              <div className="card-strong p-6 sm:p-8 backdrop-blur-xl">
                <div className="mb-7">
                  <h3 className="heading-section text-2xl font-bold text-steelWhite">
                    Official Quotation & Project Inquiry
                  </h3>
                  <p className="text-body-sm text-metallicSilver mt-1">
                    Fill out the specifications below. All submissions are directly assigned to an estimation engineer in Chitwan.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="card-base p-8 text-center space-y-4 border-green-500/30 bg-green-500/5">
                    <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400 text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="heading-md text-xl font-bold text-steelWhite">
                      Inquiry Registered Successfully
                    </h4>
                    <p className="text-body-sm text-metallicSilver max-w-md mx-auto">
                      {feedback}
                    </p>
                    {inquiryRef && (
                      <div className="inline-block px-4 py-2 rounded-lg bg-industrial-card font-mono text-xs text-electricBlue border border-electricBlue/30">
                        REFERENCE CODE: {inquiryRef}
                      </div>
                    )}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="btn-primary-sm"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-caption font-mono">
                        {feedback}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">
                          Full Name <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Adhikari"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="form-label">
                          Organization / Company <span className="text-metallicSilver/40">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. Chitwan Mart / School / Hospital"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">
                          Phone Number <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +977-98XXXXXXXX"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="form-label">
                          Email Address <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. procurement@domain.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">
                          Product Category <span className="text-electricBlue">*</span>
                        </label>
                        <select
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select Category...</option>
                          <option value="store">Store & Supermarket Furniture (Retail Systems)</option>
                          <option value="school">School & Institutional Furniture (Education Systems)</option>
                          <option value="hospital">Hospital & Clinical Furniture (Healthcare Systems)</option>
                          <option value="office">Office & Corporate Furniture (Workspace Systems)</option>
                          <option value="home">Home & Residential Furniture (Home Collection)</option>
                          <option value="custom">Custom Metal Fabrication / Project Specification</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">
                          Estimated Quantity / Scope
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 20 Gondolas / 100 Desks"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        Inquiry & Dimensions Details <span className="text-electricBlue">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your space requirements, shelf tier needs, required delivery date or project location in Nepal..."
                        className="form-textarea"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? 'Recording Inquiry in Chitwan...' : 'Send Inquiry to Factory'}
                      </button>
                    </div>

                    <div className="text-caption font-mono text-metallicSilver/50 text-center space-y-1.5">
                      <p className="text-metallicSilver/70">
                        Direct factory quotation &bull; No middleman markups &bull; Verified response within 24 business hours
                      </p>
                      <p>
                        Or bypass the form entirely:{' '}
                        <a href="https://wa.me/9779855053857" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                          WhatsApp
                        </a>
                        {' • '}
                        <a href="tel:+9779855053857" className="text-electricBlue hover:underline">
                          +977-9855053857
                        </a>
                        {' • '}
                        <a href="mailto:info@ufichitwan.com" className="text-electricBlue hover:underline">
                          Email
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
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