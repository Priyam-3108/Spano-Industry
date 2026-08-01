import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from '@/components/ui/ProductCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { products, processSteps } from '@/components/data/content';

export function ProductsOverview() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[var(--color-spano-light)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <SectionHeader
            title="We Are Manufacturer"
            subtitle="& Supplier of:"
            align="center"
          />
        </AnimatedSection>

        {/* Products grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              anchor={product.anchor}
              delay={i * 0.07}
            />
          ))}
        </div>

        {/* Our Process */}
        <div className="mt-24">
          <AnimatedSection>
            <SectionHeader title="Our" subtitle="Process" align="center" />
          </AnimatedSection>

          {/* Process timeline */}
          <div className="mt-10 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gradient-to-r from-[var(--color-spano-bright)]/30 via-[var(--color-spano-bright)] to-[var(--color-spano-bright)]/30" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Circle */}
                    <div className="relative mb-4 w-20 h-20 rounded-full bg-white border-2 border-[var(--color-spano-bright)]/30 group-hover:border-[var(--color-spano-bright)] shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10">
                      <span className="font-heading font-black text-2xl text-[var(--color-spano-dark)]">{step.number}</span>
                    </div>
                    <p className="font-heading font-semibold text-[var(--color-spano-dark)] text-xs leading-snug whitespace-pre-line">
                      {step.title}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
