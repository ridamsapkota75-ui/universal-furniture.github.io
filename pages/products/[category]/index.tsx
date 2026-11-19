import React, { lazy, Suspense } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import NavBar from '../../../src/components/NavBar';
import Footer from '../../../src/components/Footer';
const Product3DViewer = lazy(() => import('../../../src/components/Product3DViewer'));
import { products, CATEGORIES, Product } from '../../../src/data/products';

interface Props {
  categoryInfo: {
    slug: string;
    name: string;
    shortName: string;
    headline: string;
    description: string;
    featuredProduct: string;
    image: string;
  };
  categoryProducts: Product[];
}

export default function CategoryOverviewPage({ categoryInfo, categoryProducts }: Props) {
  return (
    <>
      <Head>
        <title>{categoryInfo.name} | Universal Furniture Industries (UFI)</title>
        <meta name="description" content={categoryInfo.description} />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-industrial-base text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Category Hero Banner */}
        <section className="relative section-padding-sm border-b border-electricBlue/15 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-radial-glow" />
          <div className="relative section-container max-w-5xl text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              <span>SPECIALIZED SECTOR</span>
              <span>&bull;</span>
              <span>{categoryInfo.shortName}</span>
            </div>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl md:text-6xl tracking-tight">
              {categoryInfo.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-iceBlue font-medium">
              {categoryInfo.headline}
            </p>
            <p className="mt-4 text-body-sm sm:text-body text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              {categoryInfo.description}
            </p>
          </div>
        </section>

        {/* 5-Category Fast Navigation Switcher Tabs */}
        <section className="section-container -mt-6">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-2 px-2 card-base rounded-card-xl shadow-card backdrop-blur-xl">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  c.slug === categoryInfo.slug
                    ? 'bg-electricBlue text-white shadow-md shadow-electricBlue/30'
                    : 'text-metallicSilver hover:text-iceBlue hover:bg-deepNavy/60'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Interactive 3D Showcase for this Category */}
        <section className="section-padding section-container">
          <div className="grid lg:grid-cols-12 gap-8 items-center card-base rounded-card-xl p-6 sm:p-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-label">3D INTERACTIVE SHOWROOM</span>
              <h2 className="heading-section text-2xl sm:text-3xl">
                Inspect Real Geometry & Structure
              </h2>
              <p className="text-body-premium">
                Experience the structural steel framework, shelf placement, and powder-coated finish of UFI {categoryInfo.shortName} products in full 3D.
              </p>
              <div className="pt-2">
                <Link
                  href={`/contact?category=${categoryInfo.slug}`}
                  className="btn-primary-sm"
                >
                  Request Bulk Quotation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="viewer-container viewer-container-md">
                <Suspense fallback={<div className="viewer-canvas bg-industrial-deep rounded-card-xl flex items-center justify-center border border-electricBlue/15"><div className="flex flex-col items-center space-y-2"><div className="w-8 h-8 border-2 border-electricBlue border-t-transparent rounded-full animate-spin"></div><span className="text-caption font-mono uppercase tracking-wider text-metallicSilver/70">Loading 3D Studio...</span></div></div>}>
                  <Product3DViewer
                    slug={categoryInfo.featuredProduct}
                    category={categoryInfo.slug}
                    autoRotate={true}
                    className="viewer-canvas"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="section-padding section-container">
          <div className="flex items-center justify-between mb-8 border-b border-electricBlue/15 pb-4">
            <div>
              <h3 className="heading-section text-xl sm:text-2xl font-bold text-steelWhite">
                Manufactured Catalog Models
              </h3>
              <p className="text-caption-mono mt-1">
                Standard UFI configurations built to order in Chitwan
              </p>
            </div>
            <span className="text-caption font-mono text-electricBlue bg-industrial-card px-3 py-1 rounded border border-electricBlue/15">
              {categoryProducts.length} Models Verified
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.slug}
                className="group flex flex-col card-interactive overflow-hidden"
              >
                {/* Product Image Stage */}
                <div className="relative h-56 bg-deepNavy/60 flex items-center justify-center p-6 border-b border-electricBlue/10 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {product.featured && (
                    <span className="absolute top-3 left-4 text-caption font-mono uppercase font-bold tracking-wider bg-electricBlue text-white px-2.5 py-0.5 rounded-full shadow-md">
                      Flagship Model
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-label text-[10px] block mb-1">
                      {product.tagline}
                    </span>
                    <h4 className="heading-md text-lg font-bold text-steelWhite group-hover:text-electricBlue transition">
                      {product.name}
                    </h4>
                    <p className="text-body-sm text-metallicSilver/80 mt-2 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Top Spec Snippet */}
                  {product.specs && (
                    <div className="bg-deepNavy/60 border border-electricBlue/10 rounded-xl p-3 text-caption font-mono text-metallicSilver space-y-1">
                      {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-metallicSilver/50">{k}:</span>
                          <span className="text-iceBlue font-semibold truncate ml-2 max-w-[180px]">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                      className="flex-1 text-center btn-primary-sm"
                    >
                      View Details & Specs
                    </Link>
                    <Link
                      href={`/contact?category=${product.category}&product=${product.slug}`}
                      className="btn-secondary-sm"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((cat) => ({ params: { category: cat.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params?.category as string;
  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug);
  const categoryProducts = products.filter((p) => p.category === categorySlug);

  if (!categoryInfo) {
    return { notFound: true };
  }

  return {
    props: {
      categoryInfo,
      categoryProducts,
    },
  };
};