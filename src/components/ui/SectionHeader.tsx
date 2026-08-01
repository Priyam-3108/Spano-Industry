interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  number,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
      {number && (
        <span
          className={`inline-block text-xs font-bold tracking-widest mb-3 px-2 py-1 rounded-full border ${
            light
              ? 'border-white/30 text-white/70'
              : 'border-[var(--color-spano-bright)]/40 text-[var(--color-spano-bright)]'
          }`}
        >
          {number}
        </span>
      )}
      <h2
        className={`font-heading font-bold leading-tight ${
          light ? 'text-white' : 'text-[var(--color-spano-dark)]'
        }`}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
      >
        {title}
        <br />
        <span
          className={`${
            light
              ? 'text-[var(--color-spano-bright)]'
              : 'text-[var(--color-spano-bright)]'
          }`}
        >
          {subtitle}
        </span>
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        } bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)]`}
      />
    </div>
  );
}
