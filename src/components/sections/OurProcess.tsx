'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface ProcessStepItem {
  number: string;
  title: string;
  isTopText: boolean;
}

const steps: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Requirement\nUnderstanding',
    isTopText: true,
  },
  {
    number: '02',
    title: 'Store Measurement\n& Planning',
    isTopText: false,
  },
  {
    number: '03',
    title: 'Design & Layout\nDevelopment',
    isTopText: true,
  },
  {
    number: '04',
    title: 'Manufacturing',
    isTopText: false,
  },
  {
    number: '05',
    title: 'Delivery &\nInstallation',
    isTopText: true,
  },
  {
    number: '06',
    title: 'Final Quality\nInspection',
    isTopText: false,
  },
];

export function OurProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with Dark Green Background matching brochure */}
        <div className="relative rounded-3xl bg-[var(--color-spano-dark)] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <AnimatedSection>
            <div className="mb-14 lg:mb-20">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight block mb-1">
                Our
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
                Process
              </h2>
            </div>
          </AnimatedSection>

          {/* Desktop Timeline (Alternating Top/Bottom) */}
          <div className="hidden lg:block relative my-12">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-spano-bright)]/60 -translate-y-1/2" />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.08}>
                  <div className="flex flex-col items-center text-center relative h-64 justify-between">
                    {/* Top Content */}
                    <div className="h-24 flex items-end justify-center">
                      {step.isTopText ? (
                        <p className="font-heading font-bold text-sm text-white leading-snug whitespace-pre-line">
                          {step.title}
                        </p>
                      ) : (
                        <span className="font-heading font-black text-3xl text-[var(--color-spano-bright)]">
                          {step.number}
                        </span>
                      )}
                    </div>

                    {/* Middle Vertical Tick Line */}
                    <div className="w-0.5 h-12 bg-[var(--color-spano-bright)] my-2 relative">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm" />
                    </div>

                    {/* Bottom Content */}
                    <div className="h-24 flex items-start justify-center">
                      {!step.isTopText ? (
                        <p className="font-heading font-bold text-sm text-white leading-snug whitespace-pre-line">
                          {step.title}
                        </p>
                      ) : (
                        <span className="font-heading font-black text-3xl text-[var(--color-spano-bright)]">
                          {step.number}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline (Stack View) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[var(--color-spano-bright)]/40 sm:hidden" />
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-spano-bright)] text-[var(--color-spano-dark)] font-heading font-black text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base leading-snug whitespace-pre-line">
                      {step.title}
                    </h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
