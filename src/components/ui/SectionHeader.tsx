interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  number?: string;
  align?: 'left' | 'center';
  light?: boolean;
  subtitleFirst?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  number,
  align = 'left',
  light = false,
  subtitleFirst = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
      {number && (
        <span
          className={`inline-block text-xs font-bold tracking-widest mb-3 px-2 py-1 rounded-full border ${light
            ? 'border-white/30 text-white/70'
            : 'border-[var(--color-spano-bright)]/40 text-[var(--color-spano-bright)]'
            }`}
        >
          {number}
        </span>
      )}
      <h2
        className={`font-heading leading-[0.96] sm:leading-[0.94] tracking-tight text-fluid-section ${light ? 'text-white' : 'text-[var(--color-spano-dark)]'
          }`}
      >
        {subtitleFirst ? (
          <>
            <span className="font-light normal-case block text-[var(--color-spano-bright)] text-[0.85em]">
              {title}
            </span>
            <span className={`font-extrabold uppercase block ${light ? 'text-white' : 'text-[var(--color-spano-dark)]'}`}>
              {subtitle}
            </span>
          </>
        ) : (
          <>
            <span className="font-extrabold uppercase block">{title}</span>
            <span className="font-light normal-case block text-[var(--color-spano-bright)] text-[0.85em]">
              {subtitle}
            </span>
          </>
        )}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full ${align === 'center' ? 'mx-auto' : ''
          } bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)]`}
      />
    </div>
  );
}
