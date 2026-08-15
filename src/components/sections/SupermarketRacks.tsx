import { SectionHeader } from '@/components/ui/SectionHeader';
import { RackOptionCard } from '@/components/ui/RackOptionCard';
import { FeatureList } from '@/components/ui/FeatureList';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { IMAGES } from '@/components/data/images';

const rackOptions = [
  { name: 'Wall Unit With Back Panel', imageSrc: IMAGES.supermarketRacks.wallUnit },
  { name: 'Double Side Rack', imageSrc: IMAGES.departmentalRacks.wallMounted },
  { name: 'End Cap', imageSrc: IMAGES.displayRacks.cornerRack },
];

const idealFor = [
  'Grocery & FMCG Products',
  'Household Products',
  'Beverages',
  'Cosmetics',
  'Stationery',
];

export function SupermarketRacks() {
  return (
    <section id="supermarket-racks" className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40">
      {/* Full-bleed banner */}
      <div className="relative h-64 lg:h-80 overflow-hidden mb-16">
        <StaticImage
          src={IMAGES.supermarketRacks.fullBleed}
          alt="SPANO Supermarket Racks"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection direction="left">
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-2">01</span>
              <h2 className="font-heading leading-[0.96] sm:leading-[0.94] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                <span className="font-extrabold uppercase block">SUPERMARKET</span>
                <span className="font-light normal-case block text-[var(--color-spano-bright)] text-[0.85em]">Racks</span>
              </h2>
              <p className="text-white/60 text-sm mt-1 font-body italic">Quality · Design · Precision</p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-[var(--color-spano-text)] text-base leading-relaxed max-w-3xl font-body mb-12">
            Our supermarket racks are designed to create organized, attractive, and customer-friendly retail spaces. Perfect for supermarkets, grocery stores, mini marts, and departmental outlets.
          </p>
        </AnimatedSection>

        {/* Rack Options */}
        <AnimatedSection>
          <SectionHeader title="Rack" subtitle="Options" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {rackOptions.map((rack, i) => (
            <RackOptionCard key={rack.name} imageSrc={rack.imageSrc} name={rack.name} delay={i * 0.1} />
          ))}
        </div>

        {/* Ideal For */}
        <AnimatedSection>
          <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100">
            <SectionHeader title="Ideal" subtitle="For" />
            <FeatureList items={idealFor} columns={2} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
