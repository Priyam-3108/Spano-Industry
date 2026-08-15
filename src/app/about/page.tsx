'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { IMAGES } from '@/components/data/images';
import { Factory, ShieldCheck, Cpu, Target, Eye, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[var(--color-spano-dark)] text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.about.main}
              alt="SPANO Industry Manufacturing Facility"
              className="w-full h-full object-cover object-center opacity-25"
            />
            {/* Gradient Overlay like homepage */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/90 via-[var(--color-spano-dark)]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/60 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-28 sm:pb-32">
            <div className="max-w-3xl">
              <AnimatedSection direction="left">
                <h1 className="font-heading uppercase text-white leading-[0.98] sm:leading-[0.96] text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
                  <span className="font-black">30 YEARS</span><br />
                  <span className="font-light whitespace-nowrap">OF RETAIL DISPLAY &amp;</span><br />
                  <span className="text-[var(--color-spano-bright)] font-black">RACKING EXCELLENCE</span>
                </h1>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 2. Company Story Section (Swapped to be first) */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimatedSection direction="left">
                  <SectionHeader
                    title="Our Company"
                    subtitle="Story & Journey"
                    subtitleFirst
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.1} direction="left">
                  <div className="space-y-4 text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                    <p>
                      With over <strong className="text-[var(--color-spano-dark)]">30 years of manufacturing experience</strong>, SPANO Industry has established itself as one of the most trusted names in retail display and storage infrastructure.
                    </p>
                    <p>
                      We specialize in crafting versatile supermarket racks, departmental store displays, custom wooden-metal fixtures, heavy-duty warehouse storage, and essential checkout accessories.
                    </p>
                    <p>
                      Our state-of-the-art facility in Surat combines automated sheet-metal processing, precision spot welding, and electrostatic powder coating to build racking systems that withstand heavy daily retail use.
                    </p>
                    <p>
                      We partner directly with supermarket chains, retail store owners, wholesalers, and interior architects to transform empty store spaces into highly profitable retail environments.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <StaticImage
                    src={IMAGES.about.facility}
                    alt="SPANO Industry Warehouse Storage Facility"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision Section (Swapped to be second) */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <SectionHeader
                title="Our Driving Purpose"
                subtitle="Mission & Vision"
                subtitleFirst
                align="center"
              />
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Mission Card */}
              <AnimatedSection delay={0.1}>
                <div className="relative group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80">
                  {/* Left Edge Accent Notch */}
                  <div className="absolute left-0 top-16 -translate-x-full w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-gray-300 group-hover:border-r-[#82bc00] transition-colors" />

                  {/* Architectural Top Icon Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-[var(--color-spano-dark)] flex items-center justify-center shadow-sm group-hover:bg-[#82bc00] group-hover:text-white transition-colors duration-300">
                      <Target size={28} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Core Purpose
                      </span>
                    </div>
                  </div>

                  {/* Architectural L-Frame Box */}
                  <div className="relative pl-6 pt-2 border-l-3 border-b-3 border-gray-300 group-hover:border-[#82bc00] transition-colors duration-500 pb-4 pr-2 rounded-bl-xl">
                    <h3 className="font-heading font-black text-3xl text-[#82bc00] tracking-tight mb-3 leading-[1.0]">
                      Mission
                    </h3>
                    <p className="text-[var(--color-spano-text)] text-base sm:text-lg leading-relaxed font-body">
                      To provide innovative and reliable retail display solutions that help businesses create better shopping experiences.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision Card */}
              <AnimatedSection delay={0.2}>
                <div className="relative group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80">
                  {/* Left Edge Accent Notch */}
                  <div className="absolute left-0 top-16 -translate-x-full w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-gray-300 group-hover:border-r-[#82bc00] transition-colors" />

                  {/* Architectural Top Icon Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-[var(--color-spano-dark)] flex items-center justify-center shadow-sm group-hover:bg-[#82bc00] group-hover:text-white transition-colors duration-300">
                      <Eye size={28} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Future Goal
                      </span>
                    </div>
                  </div>

                  {/* Architectural L-Frame Box */}
                  <div className="relative pl-6 pt-2 border-l-3 border-b-3 border-gray-300 group-hover:border-[#82bc00] transition-colors duration-500 pb-4 pr-2 rounded-bl-xl">
                    <h3 className="font-heading font-black text-3xl text-[#82bc00] tracking-tight mb-3 leading-[1.0]">
                      Vision
                    </h3>
                    <p className="text-[var(--color-spano-text)] text-base sm:text-lg leading-relaxed font-body">
                      To become a leading name in retail infrastructure by delivering high-performance racking systems with modern aesthetics and long-lasting quality.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Global CTA */}
        <CtaBanner />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

