import React, { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import NavBar from '../../../src/components/NavBar';
import Footer from '../../../src/components/Footer';
import { products, Product, CATEGORIES } from '../../../src/data/products';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailPage({ product, relatedProducts }: Props) {
  const [selectedTier, setSelectedTier] = useState<string>(product.options?.tiers?.[0] || '');
  const [selectedFinish, setSelectedFinish] = useState<string>(product.options?.finishes?.[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>(product.options?.sizes?.[0] || '');

  const whatsappMessage = encodeURIComponent(
    `Hello UFI Chitwan, I am inquiring about factory pricing and specifications for the "${product.name}" (${product.categoryTitle}).`
  );

  return (
    <>
      <Head>
        <title>{product.name} | Universal Furniture Industries (UFI)</title>
        <meta name="description" content={product.description} />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Breadcrumbs */}
        <div className="section-container py-4">
          <nav className="flex items-center space-x-2 text-caption font-mono text-metallicSilver/60">
            <Link href="/" className="hover:text-iceBlue transition">
              Home
            </Link>
            <span>/</span>
            <Link href={`/products/${product.category}`} className="hover:text-iceBlue transition">
              {product.categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-electricBlue font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>

        {/* Product Showcase Section */}
        <section className="section-padding section-container">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Product Photo Viewport */}
            <div className="lg:col-span-7 space-y-4">
              {/* Manufactured in Chitwan */}
              <span className="text-caption font-mono text-metallicSilver/50 hidden sm:inline-block pr-2">
                Manufactured in Chitwan
              </span>

              {/* Product Photo Display */}
              <div className="relative">
                {product.images && product.images.length > 0 ? (
                  <div className="viewer-container viewer-container-lg">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="viewer-container viewer-container-lg bg-industrial-deep rounded-card-xl flex items-center justify-center border border-electricBlue/15">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-deepNavy/60 rounded-full flex items-center justify-center mx-auto mb-3 border border-electricBlue/20">
                        <span className="text-caption font-mono text-metallicSilver/50 text-2xl" aria-hidden="true">!</span>
                      </div>
                      <p className="text-caption font-mono text-metallicSilver/60">{product.name}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-caption font-mono text-metallicSilver/60 px-2">
                <span>9-Step Chemical Powder Coated Steel</span>
                <span>Chitwan Factory Direct</span>
              </div>
            </div>

            {/* Right Column: Product Information & Quotation Configurator */}
            <div className="lg:col-span-5 space-y-5">
              <div className="card-strong p-6 sm:p-8 space-y-5">
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-industrial-card border border-electricBlue/20 text-electricBlue text-caption font-mono font-semibold uppercase mb-2">
                    {product.categoryTitle}
                  </div>
                  <h1 className="heading-section text-2xl sm:text-3xl font-extrabold text-steelWhite">
                    {product.name}
                  </h1>
                  <p className="heading-md text-sm text-iceBlue mt-1">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-body-premium">
                  {product.description}
                </p>

                {/* Optional Configuration Selectors (Tier, Finish, Size) */}
                {product.options && (
                  <div className="space-y-4 pt-2 border-t border-electricBlue/10">
                    {product.options.tiers && (
                      <div>
                        <label className="form-label">
                          Tier Configuration
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {product.options.tiers.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTier(t)}
                              className={`px-3 py-2 rounded-xl text-caption font-mono text-left transition border ${
                                selectedTier === t
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow-md'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/15 hover:border-electricBlue/40'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.finishes && (
                      <div>
                        <label className="form-label">
                          Electrostatic Finish
                        </label>
                        <div className="space-y-1.5">
                          {product.options.finishes.map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => setSelectedFinish(f)}
                              className={`w-full px-3 py-2 rounded-xl text-caption font-mono text-left transition border ${
                                selectedFinish === f
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow-md'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/15 hover:border-electricBlue/40'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.sizes && (
                      <div>
                        <label className="form-label">
                          Standard Dimensions
                        </label>
                        <div className="space-y-1.5">
                          {product.options.sizes.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSelectedSize(s)}
                              className={`w-full px-3 py-2 rounded-xl text-caption font-mono text-left transition border ${
                                selectedSize === s
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow-md'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/15 hover:border-electricBlue/40'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Primary CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-electricBlue/10">
                  <Link
                    href={`/contact?category=${product.category}&product=${product.slug}`}
                    className="w-full btn-primary text-center"
                  >
                    Request Official Price Quote
                  </Link>

                  <a
                    href={`https://wa.me/9779855053857?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 btn-secondary text-center"
                  >
                    <span>WhatsApp Factory Inquiry</span>
                  </a>
                </div>

                <div className="text-caption font-mono text-metallicSilver/50 text-center">
                  Factory delivery across all provinces of Nepal &bull; Phone: +977-9855053857
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="section-padding section-container">
          <div className="card-strong p-6 sm:p-10">
            <h3 className="heading-section text-xl sm:text-2xl font-bold text-steelWhite mb-6 flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
              <span>Technical Engineering Specifications</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-deepNavy/60 border border-electricBlue/10"
                >
                  <span className="text-caption font-mono text-metallicSilver/60 uppercase">
                    {label}
                  </span>
                  <span className="text-mono text-sm font-semibold text-iceBlue mt-1 sm:mt-0">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products in this Category */}
        {relatedProducts.length > 0 && (
          <section className="section-padding section-container">
            <div className="flex items-center justify-between mb-8 border-b border-electricBlue/15 pb-4">
              <h3 className="heading-section text-xl sm:text-2xl font-bold text-steelWhite">
                Related {product.categoryTitle}
              </h3>
              <Link
                href={`/products/${product.category}`}
                className="text-caption font-mono text-electricBlue hover:underline"
              >
                View Category Catalog &rarr;
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.category}/${rel.slug}`}
                  className="group card-interactive flex flex-col justify-between p-6"
                >
                  <div className="relative h-40 w-full bg-deepNavy/60 rounded-xl mb-4 p-4 flex items-center justify-center">
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-label text-[10px] block mb-1">
                      {rel.tagline}
                    </span>
                    <h4 className="heading-md text-base font-bold text-steelWhite group-hover:text-electricBlue transition">
                      {rel.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({
    params: { category: p.category, slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};