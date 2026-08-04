import { SectionHeader } from '@/components/ui/SectionHeader';
import { IndustryCard } from '@/components/ui/IndustryCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { seoIndustries } from '@/components/data/content';

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader title="Industries" subtitle="We Serve" />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {seoIndustries.slice(0, 8).map((industry, i) => (
            <IndustryCard
              key={industry.id}
              number={`0${i + 1}`}
              label={industry.name}
              imageSrc={industry.imageSrc}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
