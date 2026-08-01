import { StaticImage } from './StaticImage';
import { AnimatedSection } from './AnimatedSection';

interface RackOptionCardProps {
  imageSrc: string;
  name: string;
  delay?: number;
}

export function RackOptionCard({ imageSrc, name, delay = 0 }: RackOptionCardProps) {
  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2">
        <div className="aspect-[3/4] overflow-hidden">
          <StaticImage
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/90 via-[var(--color-spano-dark)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading font-bold text-white text-lg leading-tight">{name}</h3>
          <div className="mt-2 h-0.5 w-8 bg-[var(--color-spano-bright)] rounded-full" />
        </div>
      </div>
    </AnimatedSection>
  );
}
