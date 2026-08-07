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
        {/* 1. Hero Section (2-Column: Cover Image on Left, Content on Right) */}
        <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          {/* Subtle background glow circles */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--color-spano-bright)]/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[var(--color-spano-lime)]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Home Cover Image */}
              <div className="lg:col-span-5">
                <AnimatedSection direction="left">
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5 backdrop-blur-md">
                    <div className="aspect-[4/3] lg:aspect-[3/4] relative w-full overflow-hidden">
                      <StaticImage
                        src={IMAGES.about.main}
                        alt="SPANO Industry Manufacturing Facility Exterior"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] flex items-center justify-center flex-shrink-0 text-[var(--color-spano-bright)] shadow-md">
                          <Award size={22} />
                        </div>
                        <div>
                          <p className="font-heading font-black text-sm text-white">30+ Years Legacy</p>
                          <p className="font-body text-xs text-white/80">Retail Racking &amp; Storage Leader</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Hero Content */}
              <div className="lg:col-span-7">
                <AnimatedSection direction="right">
                  {/* Top Glassmorphic Pill Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-spano-bright)]/15 border border-[var(--color-spano-bright)]/30 backdrop-blur-md mb-5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)] animate-pulse" />
                    <span className="text-[var(--color-spano-bright)] text-xs font-heading font-black tracking-widest uppercase">
                      About SPANO Industry
                    </span>
                  </div>

                  <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5">
                    30 Years of Retail Display &amp; Racking Excellence
                  </h1>

                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-body mb-8">
                    Dedicated to engineering strong, beautiful, and space-efficient retail display systems that elevate shopping experiences and maximize store productivity across India.
                  </p>

                  {/* Highlights Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="font-heading font-black text-lg text-[var(--color-spano-bright)]">
                        <AnimatedCounter target={30} suffix="+" duration={2000} /> Years
                      </p>
                      <p className="font-body text-xs text-white/70">Manufacturing Experience</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="font-heading font-black text-lg text-[var(--color-spano-bright)]">
                        <AnimatedCounter target={12} suffix="+" duration={2000} />
                      </p>
                      <p className="font-body text-xs text-white/70">Major Retail Clients</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="font-heading font-black text-lg text-[var(--color-spano-bright)]">Surat, IN</p>
                      <p className="font-body text-xs text-white/70">Advanced Production Hub</p>
                    </div>
                  </div>

                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Mission & Vision Section (Creative Architectural Frame Design matching user sketch) */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <SectionHeader
                title="Our Driving Purpose"
                subtitle="Mission & Vision"
                align="center"
              />
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Mission Card */}
              <AnimatedSection delay={0.1}>
                <div className="relative group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80">
                  {/* Left Edge Accent Notch (from user sketch) */}
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

                  {/* Architectural L-Frame Box (matching user sketch) */}
                  <div className="relative pl-6 pt-2 border-l-3 border-b-3 border-gray-300 group-hover:border-[#82bc00] transition-colors duration-500 pb-4 pr-2 rounded-bl-xl">
                    <h3 className="font-heading font-black text-3xl text-[#82bc00] tracking-tight mb-3">
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
                  {/* Left Edge Accent Notch (from user sketch) */}
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

                  {/* Architectural L-Frame Box (matching user sketch) */}
                  <div className="relative pl-6 pt-2 border-l-3 border-b-3 border-gray-300 group-hover:border-[#82bc00] transition-colors duration-500 pb-4 pr-2 rounded-bl-xl">
                    <h3 className="font-heading font-black text-3xl text-[#82bc00] tracking-tight mb-3">
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

        {/* 3. Company Story Section */}
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

        {/* 4. Manufacturing & Quality Commitment Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Manufacturing Facility"
                subtitle="& Quality Commitment"
                align="center"
              />
              <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
                Engineered in Surat with high-precision sheet metal processing and strict structural safety standards.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Factory, num: '01', title: 'Surat Manufacturing Hub', desc: 'Spread across multiple production bays in Kamrej NH-8, equipped with hydraulic presses, roll forming lines, and CNC benders.' },
                { icon: Cpu, num: '02', title: 'Electrostatic Powder Coating', desc: 'Multi-stage chemical pre-treatment and automatic powder coating plant ensuring scratch-proof, rust-resistant, matte finish durability.' },
                { icon: ShieldCheck, num: '03', title: 'Strict Load Testing', desc: 'Every shelf bracket, upright post, and beam connector undergoes rigorous load capacity verification before dispatch.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <div className="relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center overflow-hidden group">
                      <span className="absolute -top-3 -right-1 font-heading font-black text-7xl text-[var(--color-spano-light)] group-hover:text-[var(--color-spano-bright)]/15 transition-colors select-none leading-none">
                        {item.num}
                      </span>
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                        <Icon size={28} />
                      </div>
                      <h4 className="relative font-heading font-bold text-[var(--color-spano-dark)] text-lg mb-2">{item.title}</h4>
                      <p className="relative text-[var(--color-spano-text)] text-sm leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
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

