'use client';
import { useState, useCallback } from 'react';

interface StaticImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function StaticImage({
  src,
  alt,
  className = '',
  priority = false,
  style,
}: StaticImageProps) {
  const [loaded, setLoaded] = useState(false);

  // On a fresh SSR page load, a cached image can finish loading before React
  // hydrates and attaches onLoad, so that event is missed and the image would
  // stay invisible forever. The ref callback runs at mount and catches that case.
  const checkAlreadyLoaded = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete) setLoaded(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={checkAlreadyLoaded}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'low'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      style={style}
    />
  );
}
