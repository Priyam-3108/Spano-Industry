import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { IMAGES } from '@/components/data/images';
import { CheckCircle2, Factory, ShieldCheck, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SPANO Industry | Modern Retail Racking Solutions',
  description:
    'Learn about SPANO Industry’s 30-year journey in manufacturing high-performance retail display racks, supermarket shelving, and industrial storage systems in Surat, India.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="relative pt-28 pb-20 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-3 font-heading">
                About SPANO Industry
              </span>
              <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-5xl max-w-2xl">
                30 Years of Retail Display &amp; Racking Excellence
              </h1>
              <p className="mt-4 text-white/70 text-base max-w-xl font-body">
                Dedicated to engineering strong, beautiful, and space-efficient retail display systems that elevate shopping experiences across India.
              </p>
            </AnimatedSection>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[var(--color-spano-bright)]/10" />
        </section>

        {/* Company Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimatedSection direction="left">
                  <SectionHeader title="Our Company" subtitle="Story & Journey" />
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <StaticImage
                    src={IMAGES.about.main}
                    alt="SPANO Industry Manufacturing Facility"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-16 bg-[var(--color-spano-light)]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-3xl bg-white shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-2xl mb-3">Our Mission</h3>
                  <p className="text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                    To manufacture innovative, durable, and space-optimizing retail display solutions that enable businesses to showcase products effectively, improve store ergonomics, and drive higher sales conversions.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-8 rounded-3xl bg-white shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-spano-dark)] text-2xl mb-3">Our Vision</h3>
                  <p className="text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                    To become India’s premier retail infrastructure manufacturer, recognized for architectural design excellence, heavy-duty structural reliability, and customer-first store setup assistance.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Manufacturing & Quality */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Manufacturing Facility"
                subtitle="& Quality Commitment"
                align="center"
              />
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Factory,
                  title: 'Surat Manufacturing Hub',
                  desc: 'Spread across multiple production bays in Kamrej NH-8, equipped with hydraulic presses, roll forming lines, and CNC benders.',
                },
                {
                  icon: Cpu,
                  title: 'Electrostatic Powder Coating',
                  desc: 'Multi-stage chemical pre-treatment and automatic powder coating plant ensuring scratch-proof, rust-resistant, matte finish durability.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Strict Load Testing',
                  desc: 'Every shelf bracket, upright post, and beam connector undergoes rigorous load capacity verification before dispatch.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <div className="p-8 rounded-2xl bg-[var(--color-spano-light)]/50 border border-gray-100 text-center h-full">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--color-spano-dark)] text-[var(--color-spano-bright)] flex items-center justify-center mx-auto mb-5">
                        <Icon size={28} />
                      </div>
                      <h4 className="font-heading font-bold text-[var(--color-spano-dark)] text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[var(--color-spano-text)] text-sm leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* CTA */}
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
