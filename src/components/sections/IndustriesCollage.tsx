'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { IMAGES } from '@/components/data/images';

const homeIndustries = [
  {
    number: '01',
    name: 'Supermarkets',
    desc: 'End-to-end gondola shelving, wall units, island aisles and checkout counters for full supermarket fit-outs.',
    imageSrc: IMAGES.industries.supermarkets,
    href: '/industries#supermarkets',
    spanClass: 'lg:col-span-1 lg:row-span-2 aspect-[3/4] lg:aspect-auto',
  },
  {
    number: '02',
    name: 'Grocery Stores',
    desc: 'Compact, high-density shelving optimised for quick-commerce and neighbourhood grocery formats.',
    imageSrc: IMAGES.industries.grocery,
    href: '/industries#grocery-stores',
    spanClass: 'lg:col-span-1 aspect-[4/3]',
  },
  {
    number: '03',
    name: 'Pharmacies & Medical',
    desc: 'Precision glass-and-steel display units built for healthcare retail environments.',
    imageSrc: IMAGES.industries.pharmacies,
    href: '/industries#pharmacies',
    spanClass: 'lg:col-span-1 lg:row-span-2 aspect-[3/4] lg:aspect-auto',
  },
  {
    number: '04',
    name: 'Fashion & Garments',
    desc: 'Modular clothing rails, perforated panel walls, and bespoke boutique display fixtures.',
    imageSrc: IMAGES.industries.garmentStores,
    href: '/industries#garment-stores',
    spanClass: 'lg:col-span-1 aspect-[4/3]',
  },
  {
    number: '05',
    name: 'Electronics Stores',
    desc: 'Sturdy open-bay shelving and locked display cabinets for high-value electronics retail.',
    imageSrc: IMAGES.industries.electronics,
    href: '/industries#electronics',
    spanClass: 'lg:col-span-2 aspect-[16/9] lg:aspect-[2/1]',
  },
  {
    number: '06',
    name: 'Warehouses',
    desc: 'Heavy-duty pallet racking, multi-tier mezzanine systems, and bulk storage solutions.',
    imageSrc: IMAGES.industries.warehouses,
    href: '/industries#warehouses',
    spanClass: 'lg:col-span-1 aspect-[16/9] lg:aspect-auto',
  },
];

export function IndustriesCollage() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[var(--color-spano-dark)] tracking-tight">
              Industries
            </h2>
            <p className="font-heading font-black text-3xl sm:text-4xl text-[var(--color-spano-bright)] tracking-tight">
              We Serve
            </p>
          </div>
        </AnimatedSection>

        {/* 6-Item Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {homeIndustries.map((ind, i) => (
            <AnimatedSection key={ind.number} delay={i * 0.08} className={ind.spanClass}>
              <Link
                href={ind.href}
                className="group relative block w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-200/80 min-h-[220px]"
              >
                {/* Background Image — zooms slightly on hover */}
                <StaticImage
                  src={ind.imageSrc}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient — deepens on hover to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Static top-left badge (always visible) */}
                <div className="absolute top-0 left-0 bg-[#82bc00] text-white px-4 py-2.5 rounded-br-2xl shadow-md z-10 min-w-[140px] max-w-[80%]">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-heading font-black text-xs text-white/90">{ind.number}</span>
                    <div className="h-0.5 w-8 bg-white/80" />
                  </div>
                  <h3 className="font-heading font-black text-sm sm:text-base text-white tracking-tight leading-tight">
                    {ind.name}
                  </h3>
                </div>

                {/* Hover details — slide up from bottom over the image */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <p className="text-white/90 text-xs font-body leading-relaxed mb-3 drop-shadow-md">
                    {ind.desc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-[var(--color-spano-bright)] drop-shadow-md">
                    Explore Solutions
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

          ))}
        </div>

        {/* View All Industries Link */}
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold text-xs rounded-xl transition-colors font-heading shadow-lg"
          >
            Explore All Industry Solutions
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
