import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShieldCheck, Award, Layers, Wrench, Clock, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '30+ Years Industry Expertise',
    desc: 'Decades of specialized engineering and manufacturing experience in retail racking and storage.',
  },
  {
    icon: Layers,
    title: 'Space & Layout Optimization',
    desc: 'Customized store layout designs to maximize product display density and customer footfall flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Heavy-Duty Steel Construction',
    desc: 'High-grade prime steel structure with superior load-bearing strength and anti-corrosive powder finish.',
  },
  {
    icon: Wrench,
    title: 'Modular & Scalable Design',
    desc: 'Easy-to-adjust shelf heights, modular extensions, and tool-free reconfigurations as your business grows.',
  },
  {
    icon: Clock,
    title: 'Timely Manufacturing & Delivery',
    desc: 'In-house production capabilities ensuring strict quality control and on-time project completion.',
  },
  {
    icon: Sparkles,
    title: 'Turnkey Retail Solutions',
    desc: 'End-to-end service from initial store measurements to final quality inspection and installation.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            title="Why Choose"
            subtitle="SPANO Industry"
            subtitleFirst
            align="center"
          />
          <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
            Delivering precision-engineered retail display systems that combine aesthetic elegance with long-lasting structural strength.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="relative p-5 rounded-2xl bg-[var(--color-spano-light)]/60 hover:bg-white border border-gray-100 hover:border-[var(--color-spano-bright)]/30 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden flex items-center gap-4">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-spano-mid)] to-[var(--color-spano-bright)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center shadow-md group-hover:shadow-[var(--color-spano-bright)]/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-base mb-0">
                    {item.title}
                  </h3>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
