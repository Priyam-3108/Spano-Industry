import { SectionHeader } from '@/components/ui/SectionHeader';
import { RackOptionCard } from '@/components/ui/RackOptionCard';
import { FeatureList } from '@/components/ui/FeatureList';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IMAGES } from '@/components/data/images';

const displayTypes = [
  { name: 'Wooden & Metal Combination', imageSrc: IMAGES.customSolutions.woodenMetal },
  { name: 'Glass Display Units', imageSrc: IMAGES.customSolutions.glassDisplay },
  { name: 'Hanging & Hook Systems', imageSrc: IMAGES.customSolutions.hangingSystem },
  { name: 'Slotted Rack', imageSrc: IMAGES.customSolutions.slottedRack },
];

const services = [
  'Store Layout Planning',
  'Space Planning Consultation',
  'Customized Rack Manufacturing',
  'Modular Fixture Design',
  'Product-Specific Display Units',
  'Premium Finish Options',
  'Color & Branding Matching',
  'Complete Store Setup Assistance',
];

export function CustomSolutions() {
  return (
    <section id="custom-solutions" className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + services */}
          <div>
            <AnimatedSection direction="left">
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-3">04</span>
              <SectionHeader title="Customized Retail" subtitle="Solutions" />
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="left">
              <p className="text-[var(--color-spano-text)] text-base leading-relaxed font-body mb-8">
                Every retail business has unique requirements. We specialize in customized racking and fixture solutions designed according to your store layout, product category, branding, and customer experience goals. From compact retail outlets to large-format supermarkets, we help businesses create practical and visually impactful retail spaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="p-7 rounded-2xl bg-white shadow-md border border-gray-100">
                <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm mb-5 uppercase tracking-wide">Our Customization Services</h3>
                <FeatureList items={services} columns={2} />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: product cards */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {displayTypes.map((type, i) => (
                <RackOptionCard key={type.name} imageSrc={type.imageSrc} name={type.name} delay={i * 0.1} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
