'use client';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ClipboardList, Ruler, PenTool, Factory, Truck, ShieldCheck, type LucideIcon } from 'lucide-react';

interface ProcessStepItem {
  number: string;
  title: string;
  isTopText: boolean;
  icon: LucideIcon;
}

const steps: ProcessStepItem[] = [
  { number: '01', title: 'Requirement\nUnderstanding', isTopText: true, icon: ClipboardList },
  { number: '02', title: 'Store Measurement\n& Planning', isTopText: false, icon: Ruler },
  { number: '03', title: 'Design & Layout\nDevelopment', isTopText: true, icon: PenTool },
  { number: '04', title: 'Manufacturing', isTopText: false, icon: Factory },
  { number: '05', title: 'Delivery &\nInstallation', isTopText: true, icon: Truck },
  { number: '06', title: 'Final Quality\nInspection', isTopText: false, icon: ShieldCheck },
];

export function OurProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative rounded-3xl bg-[var(--color-spano-dark)] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-white/10">
          {/* Decorative background glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--color-spano-bright)]/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--color-spano-mid)]/10 blur-3xl pointer-events-none" />

          {/* Header */}
          <AnimatedSection>
            <div className="mb-14 lg:mb-20">
              <h2 className="font-heading leading-[0.96] sm:leading-[0.94] text-white">
                <span className="font-light normal-case block text-2xl sm:text-3xl text-[var(--color-spano-bright)] tracking-tight mb-1">
                  Our
                </span>
                <span className="font-extrabold uppercase block text-4xl sm:text-5xl text-white tracking-tight">
                  PROCESS
                </span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Desktop Timeline (Alternating Top/Bottom) */}
          <div className="hidden lg:block relative my-12">
            {/* Horizontal Timeline Line (draws in on scroll) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-white/10">
              <motion.div
                className="h-full bg-[var(--color-spano-bright)]/60 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={step.number} delay={index * 0.08}>
                    <div className="group flex flex-col items-center text-center relative h-64 justify-between">
                      {/* Top Content */}
                      <div className="h-24 flex flex-col items-center justify-end gap-2 pb-2">
                        {step.isTopText ? (
                          <>
                            <div className="w-8 h-8 rounded-full bg-white/10 text-[var(--color-spano-bright)] flex items-center justify-center group-hover:bg-[var(--color-spano-bright)]/20 group-hover:scale-110 transition-all duration-300">
                              <Icon size={16} />
                            </div>
                            <p className="font-heading font-bold text-sm text-white leading-snug whitespace-pre-line">
                              {step.title}
                            </p>
                          </>
                        ) : (
                          <span className="font-heading font-black text-3xl text-[var(--color-spano-bright)]">
                            {step.number}
                          </span>
                        )}
                      </div>

                      {/* Middle Vertical Tick + Node */}
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-0.5 h-5 bg-[var(--color-spano-bright)]" />
                        <div className="w-9 h-9 rounded-full bg-[var(--color-spano-bright)] text-[var(--color-spano-dark)] flex items-center justify-center shadow-lg shadow-[var(--color-spano-bright)]/30 border-2 border-white/20 font-heading font-black text-sm group-hover:scale-125 group-hover:shadow-[var(--color-spano-bright)]/60 transition-all duration-300">
                          {step.number}
                        </div>
                        <div className="w-0.5 h-5 bg-[var(--color-spano-bright)]" />
                      </div>

                      {/* Bottom Content */}
                      <div className="h-24 flex flex-col items-center justify-start gap-2 pt-2">
                        {!step.isTopText ? (
                          <>
                            <p className="font-heading font-bold text-sm text-white leading-snug whitespace-pre-line">
                              {step.title}
                            </p>
                            <div className="w-8 h-8 rounded-full bg-white/10 text-[var(--color-spano-bright)] flex items-center justify-center group-hover:bg-[var(--color-spano-bright)]/20 group-hover:scale-110 transition-all duration-300">
                              <Icon size={16} />
                            </div>
                          </>
                        ) : (
                          <span className="font-heading font-black text-3xl text-[var(--color-spano-bright)]">
                            {step.number}
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Timeline (Stack View) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[var(--color-spano-bright)]/40 sm:hidden" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={index * 0.08}>
                  <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[var(--color-spano-bright)]/30 transition-all duration-300">
                    <div className="relative w-12 h-12 rounded-xl bg-[var(--color-spano-bright)] text-[var(--color-spano-dark)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--color-spano-dark)] border-2 border-white/20 text-white text-[10px] font-heading font-black flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base leading-snug whitespace-pre-line">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
