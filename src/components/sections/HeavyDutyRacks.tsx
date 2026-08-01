import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureList } from '@/components/ui/FeatureList';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { IMAGES } from '@/components/data/images';

const applicationAreas = [
  'Warehouses',
  'Industrial Storage',
  'Distribution Centers',
  'Back-End Retail Storage',
  'Manufacturing Units',
  'Spare Parts Storage',
  'Bulk Inventory Management',
];

const accessories = [
  { name: 'Shopping Trolleys', imageSrc: IMAGES.accessories.trolleys },
  { name: 'Dum Bin', imageSrc: IMAGES.accessories.dumBin },
  { name: 'Broom Stand', imageSrc: IMAGES.accessories.broomStand },
  { name: 'Cash Counter', imageSrc: IMAGES.accessories.cashCounter },
];

export function HeavyDutyRacks() {
  return (
    <section id="heavy-duty-racks" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heavy Duty section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <StaticImage
                src={IMAGES.heavyDuty.warehouseRack}
                alt="Heavy Duty Storage Racks"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection direction="right">
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-3">05</span>
              <SectionHeader title="Heavy Duty &" subtitle="Storage Racks" />
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="right">
              <p className="text-[var(--color-spano-text)] text-base leading-relaxed font-body mb-8">
                Our heavy-duty storage racks are designed for warehouses, stock rooms, industrial facilities, and bulk storage applications. Manufactured using high-quality steel and precision engineering, these systems provide superior load-bearing capacity and long-term durability.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="p-6 rounded-2xl bg-[var(--color-spano-light)] border border-[var(--color-spano-bright)]/20">
                <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm mb-5 uppercase tracking-wide">Application Areas</h3>
                <FeatureList items={applicationAreas} />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Accessories & Supporting Components */}
        <AnimatedSection>
          <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-3">06</span>
          <SectionHeader title="Accessories &" subtitle="Supporting Components" />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {accessories.map((acc, i) => (
            <AnimatedSection key={acc.name} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-[var(--color-spano-light)]">
                  <StaticImage
                    src={acc.imageSrc}
                    alt={acc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-heading font-semibold text-[var(--color-spano-dark)] text-sm">{acc.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
