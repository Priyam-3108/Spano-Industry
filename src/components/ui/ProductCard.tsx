import { AnimatedSection } from './AnimatedSection';
import { StaticImage } from './StaticImage';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  anchor: string;
  delay?: number;
}

export function ProductCard({ imageSrc, title, anchor, delay = 0 }: ProductCardProps) {
  return (
    <AnimatedSection delay={delay} direction="up">
      <a
        href={anchor}
        className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
        aria-label={`View ${title}`}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <StaticImage
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-heading font-semibold text-[var(--color-spano-dark)] text-sm leading-tight group-hover:text-[var(--color-spano-mid)] transition-colors">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-1 text-[var(--color-spano-bright)] text-xs font-medium">
            <span>Learn more</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </AnimatedSection>
  );
}
