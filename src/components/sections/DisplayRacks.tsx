import { SectionHeader } from '@/components/ui/SectionHeader';
import { RackOptionCard } from '@/components/ui/RackOptionCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IMAGES } from '@/components/data/images';
import { Palette, Ruler, Link2, Tag, Lightbulb } from 'lucide-react';

const displayTypes = [
  { name: 'Garment & Fashion Displays', imageSrc: IMAGES.displayRacks.garmentDisplay },
  { name: 'Gift & Stationery Displays', imageSrc: IMAGES.displayRacks.giftStationery },
  { name: 'Corner Rack', imageSrc: IMAGES.displayRacks.cornerRack },
  { name: 'Wall Mounted Unit', imageSrc: IMAGES.displayRacks.wallMounted },
];

const customizationOptions = [
  { label: 'Color Options', Icon: Palette },
  { label: 'Shelf Sizes', Icon: Ruler },
  { label: 'Product Hooks & Accessories', Icon: Link2 },
  { label: 'Branding Integration', Icon: Tag },
  { label: 'Lighting Compatibility', Icon: Lightbulb },
];

export function DisplayRacks() {
  return (
    <section id="display-racks" className="py-20 lg:py-28 bg-[var(--color-spano-dark)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-3">03</span>
          <div className="mb-2">
            <h2 className="font-heading font-bold text-white leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Display Racks &{' '}
              <span className="text-[var(--color-spano-bright)]">Retail Fixtures</span>
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)]" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-white/65 text-base leading-relaxed max-w-3xl font-body mt-6 mb-12">
            An effective retail display directly impacts customer engagement and purchasing decisions. Our display racks are crafted to highlight products beautifully while maintaining durability and functionality. We provide customized display systems for various retail categories, helping businesses create premium and organized shopping environments.
          </p>
        </AnimatedSection>

        {/* Display types grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {displayTypes.map((type, i) => (
            <RackOptionCard key={type.name} imageSrc={type.imageSrc} name={type.name} delay={i * 0.08} />
          ))}
        </div>

        {/* Customization Options */}
        <AnimatedSection>
          <div className="p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <SectionHeader title="Customization" subtitle="Options" light />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {customizationOptions.map((opt, i) => (
                <AnimatedSection key={opt.label} delay={i * 0.08}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/8 hover:bg-white/12 transition-colors border border-white/10">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--color-spano-bright)]/20 flex items-center justify-center">
                      <opt.Icon size={14} className="text-[var(--color-spano-bright)]" />
                    </span>
                    <span className="text-white/80 text-sm font-semibold font-heading">{opt.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
