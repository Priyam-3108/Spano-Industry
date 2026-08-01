import { StaticImage } from './StaticImage';
import { AnimatedSection } from './AnimatedSection';

interface IndustryCardProps {
  number: string;
  label: string;
  imageSrc: string;
  delay?: number;
}

export function IndustryCard({ number, label, imageSrc, delay = 0 }: IndustryCardProps) {
  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
        <div className="aspect-[4/3] overflow-hidden">
          <StaticImage
            src={imageSrc}
            alt={label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-spano-bright)] text-white text-xs font-bold font-heading shadow">
            {number}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-heading font-semibold text-white text-sm leading-tight">{label}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
