import { SectionHeader } from '@/components/ui/SectionHeader';
import { ClientLogo } from '@/components/ui/ClientLogo';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { clients } from '@/components/data/content';

export function OurClients() {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-[var(--color-spano-light)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader title="Our" subtitle="Clients" align="center" />
          <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-lg mx-auto -mt-4 mb-10">
            Trusted by leading retailers and brands across India
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <AnimatedSection key={client.id} delay={i * 0.05}>
              <ClientLogo imageSrc={client.imageSrc} alt={client.alt} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
