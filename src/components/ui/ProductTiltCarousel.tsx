'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare } from 'lucide-react';
import { StaticImage } from '@/components/ui/StaticImage';
import { EnquireModal } from '@/components/ui/EnquireModal';

export interface ProductCarouselItem {
  title: string;
  imageSrc: string;
  href: string;
  desc: string;
}

interface ProductTiltCarouselProps {
  items: ProductCarouselItem[];
}

export function ProductTiltCarousel({ items }: ProductTiltCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  // 3D tilt state for active card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const mouseStartX = useRef<number>(0);
  const mouseHasDragged = useRef<boolean>(false);

  const total = items.length;

  // Auto rotation effect
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    mouseHasDragged.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 10) {
      mouseHasDragged.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleMouseLeaveStage = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Helper to calculate circular index offset from active slide
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;
    return diff;
  };

  return (
    <div
      className="relative w-full py-4 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Coverflow Stage */}
      <div
        className={`relative h-[460px] sm:h-[500px] lg:h-[520px] w-full flex items-center justify-center overflow-hidden ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ perspective: '1400px' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeaveStage}
      >
        <div
          className="relative w-full max-w-6xl h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {items.map((item, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 2;

            const isActive = offset === 0;

            // --- 3D Coverflow Transform Calculations ---
            // Center card: flat, big, front
            // Side cards: tilted strongly like book pages, moved aside, smaller
            const translateX = isActive
              ? 0
              : offset * 280; // How far apart side cards spread

            const translateZ = isActive
              ? 60 // Push center card toward viewer
              : absOffset === 1
              ? -80  // First adjacent cards recede
              : -180; // Far cards recede more

            const rotateY = isActive
              ? 0
              : offset < 0
              ? 55  // Left cards tilt: open toward right
              : -55; // Right cards tilt: open toward left

            const scale = isActive ? 1 : absOffset === 1 ? 0.82 : 0.68;
            const cardOpacity = !isVisible ? 0 : isActive ? 1 : absOffset === 1 ? 0.85 : 0.45;
            const zIndex = !isVisible ? -1 : isActive ? 50 : absOffset === 1 ? 30 : 10;
            const filterBlur = absOffset >= 2 ? 'blur(3px)' : 'none';

            // Shadow intensity based on position
            const shadowIntensity = isActive
              ? '0 25px 60px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.05)'
              : absOffset === 1
              ? '0 15px 35px -8px rgba(0,0,0,0.25)'
              : '0 8px 20px -6px rgba(0,0,0,0.15)';

            return (
              <div
                key={item.title}
                onClick={() => !isActive && isVisible && !mouseHasDragged.current && setActiveIndex(index)}
                onMouseMove={(e) => {
                  if (!isActive) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / (rect.width / 2);
                  const dy = (e.clientY - cy) / (rect.height / 2);
                  setTilt({ x: dy * -10, y: dx * 10 });
                }}
                onMouseLeave={() => isActive && setTilt({ x: 0, y: 0 })}
                className={`absolute transition-[opacity,filter,box-shadow] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isActive ? 'cursor-default' : isVisible ? 'cursor-pointer' : ''
                }`}
                style={{
                  width: 'clamp(280px, 32vw, 370px)',
                  transform: isActive
                    ? `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale}) perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    : `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: isActive
                    ? 'transform 0.12s ease-out, opacity 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.7s, box-shadow 0.7s'
                    : 'transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.7s, filter 0.7s, box-shadow 0.7s',
                  opacity: cardOpacity,
                  zIndex,
                  filter: filterBlur,
                  transformStyle: 'preserve-3d',
                  boxShadow: isVisible ? shadowIntensity : 'none',
                  borderRadius: '1.5rem',
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                {/* Card */}
                <div className="relative rounded-3xl bg-white border border-gray-200/60 overflow-hidden group flex flex-col h-[410px] sm:h-[450px]">
                  {/* Image Container */}
                  <div className="relative h-52 sm:h-60 w-full bg-[var(--color-spano-light)] overflow-hidden">
                    <StaticImage
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Active badge with shimmer */}
                    {isActive && (
                      <div className="absolute top-4 left-4 bg-[var(--color-spano-bright)] text-white text-[10px] font-heading font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                        ★ Featured
                      </div>
                    )}

                    </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--color-spano-dark)] group-hover:text-[var(--color-spano-bright)] transition-colors leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-spano-text)] text-xs leading-relaxed font-body line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-[var(--color-spano-dark)] hover:text-[var(--color-spano-bright)] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </Link>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProductForQuote(item.title);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-spano-bright)]/10 hover:bg-[var(--color-spano-bright)] text-[var(--color-spano-dark)] hover:text-white font-bold text-[11px] font-heading rounded-lg transition-colors"
                      >
                        <MessageSquare size={12} />
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3D Reflection/Shadow underneath */}
                {isActive && (
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full opacity-30"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls & Pagination */}
      <div className="mt-6 flex items-center justify-center gap-6 max-w-xl mx-auto px-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-[var(--color-spano-dark)] hover:text-white text-[var(--color-spano-dark)] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
            aria-label="Previous product"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-[var(--color-spano-dark)] hover:text-white text-[var(--color-spano-dark)] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
            aria-label="Next product"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === activeIndex
                  ? 'w-8 h-2.5 bg-[var(--color-spano-bright)] shadow-md'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quote Modal */}
      {selectedProductForQuote && (
        <EnquireModal
          isOpen={!!selectedProductForQuote}
          onClose={() => setSelectedProductForQuote(null)}
          defaultProduct={selectedProductForQuote}
        />
      )}
    </div>
  );
}
