'use client';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ClientLogo } from '@/components/ui/ClientLogo';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { clientLogos } from '@/components/data/content';

export function OurClients() {
  // Duplicate logos twice for seamless infinite scrolling
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <AnimatedSection>
          <SectionHeader title="Our Trusted" subtitle="Clients & Partners" align="center" />
          <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-lg mx-auto -mt-4">
            Trusted by leading retailers, supermarkets, and commercial brands across India
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite Single Row Ticker (Moving Left-to-Right) */}
      <div className="relative w-full overflow-hidden py-4 border-y border-gray-100 bg-gray-50/50">
        {/* Subtle Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-ltr flex items-center gap-8 lg:gap-12">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="w-40 sm:w-48 flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <ClientLogo imageSrc={client.imageSrc} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
