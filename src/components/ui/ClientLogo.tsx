import { StaticImage } from './StaticImage';

interface ClientLogoProps {
  imageSrc: string;
  alt: string;
}

export function ClientLogo({ imageSrc, alt }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-spano-bright)]/30 transition-all duration-300 group">
      <StaticImage
        src={imageSrc}
        alt={alt}
        className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
      />
    </div>
  );
}
