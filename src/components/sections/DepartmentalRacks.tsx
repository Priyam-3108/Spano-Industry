import { SectionHeader } from '@/components/ui/SectionHeader';
import { RackOptionCard } from '@/components/ui/RackOptionCard';
import { FeatureList } from '@/components/ui/FeatureList';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IMAGES } from '@/components/data/images';

const rackTypes = [
  { name: 'Corner Rack', imageSrc: IMAGES.departmentalRacks.cornerRack },
  { name: 'Wall Mounted Unit', imageSrc: IMAGES.departmentalRacks.wallMounted },
];

const features = [
  'Strong metal construction',
  'High load-bearing capacity',
  'Adjustable shelves',
  'Premium powder-coated finish',
  'Easy installation & maintenance',
  'Space-saving modular design',
];

export function DepartmentalRacks() {
  return (
    <section id="departmental-racks" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <AnimatedSection direction="left">
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-body block mb-3">02</span>
              <SectionHeader title="Departmental" subtitle="Store Racks" />
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  {rackTypes.map((rack, i) => (
                    <RackOptionCard key={rack.name} imageSrc={rack.imageSrc} name={rack.name} delay={i * 0.12} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: features */}
          <AnimatedSection direction="right">
            <div className="sticky top-24">
              <div className="p-8 rounded-3xl bg-[var(--color-spano-dark)] text-white">
                <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-lg mb-6">Features</h3>
                <FeatureList items={features} light />
              </div>

              {/* Ideal for tags */}
              <div className="mt-6 p-6 rounded-3xl bg-[var(--color-spano-light)] border border-[var(--color-spano-bright)]/20">
                <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm mb-4">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {['Grocery', 'FMCG', 'Household Products', 'Beverages', 'Cosmetics', 'Stationery'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white text-[var(--color-spano-dark)] text-xs font-semibold border border-[var(--color-spano-bright)]/30 font-heading">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
