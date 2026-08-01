import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  light?: boolean;
  columns?: 1 | 2;
}

export function FeatureList({ items, light = false, columns = 1 }: FeatureListProps) {
  return (
    <ul
      className={`grid gap-y-3 gap-x-6 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-spano-bright)]/20 flex items-center justify-center">
            <Check
              className="text-[var(--color-spano-bright)]"
              size={12}
              strokeWidth={3}
            />
          </span>
          <span
            className={`text-sm leading-snug ${
              light ? 'text-white/85' : 'text-[var(--color-spano-text)]'
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
