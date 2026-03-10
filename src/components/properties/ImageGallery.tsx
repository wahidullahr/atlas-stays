'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Grid2x2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200';

type Props = {
  images: string[];
  alt: string;
};

export function ImageGallery({ images, alt }: Props) {
  const t = useTranslations('PropertyDetail');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());

  const getImageSrc = useCallback(
    (index: number) =>
      failedIndices.has(index) ? FALLBACK_IMAGE : images[index],
    [failedIndices, images]
  );

  const handleImageError = useCallback((index: number) => {
    setFailedIndices((prev) => new Set(prev).add(index));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prev = useCallback(
    () => setActiveIndex((i) => (i > 0 ? i - 1 : images.length - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i < images.length - 1 ? i + 1 : 0)),
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [lightboxOpen, closeLightbox, prev, next]);

  const thumbs = images.slice(1, 5);

  return (
    <>
      {/* Grid layout */}
      <div className="relative rounded-2xl framer:rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 framer:grid-cols-[1.2fr_1fr] gap-1.5 framer:gap-2">
          {/* Hero image */}
          <button
            type="button"
            onClick={() => openLightbox(0)}
            aria-label={`${alt} — ${t('all_photos')}`}
            className="relative aspect-4/3 framer:aspect-auto framer:row-span-2 w-full bg-surface cursor-pointer overflow-hidden group"
          >
            <Image
              src={getImageSrc(0)}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 810px) 60vw, 100vw"
              priority
              unoptimized
              onError={() => handleImageError(0)}
            />
          </button>

          {/* Thumbnails — 2x2 grid */}
          {thumbs.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLightbox(i + 1)}
              aria-label={`${alt} ${i + 2}`}
              className="relative hidden framer:block aspect-3/2 w-full bg-surface cursor-pointer overflow-hidden group"
            >
              <Image
                src={getImageSrc(i + 1)}
                alt={`${alt} ${i + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 810px) 25vw, 50vw"
                unoptimized
                onError={() => handleImageError(i + 1)}
              />
            </button>
          ))}
        </div>

        {/* "All photos" button */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 inset-e-4 framer:bottom-5 framer:inset-e-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-sm text-foreground text-[13px] framer:text-[14px] font-semibold shadow-lg hover:bg-white transition-all cursor-pointer"
        >
          <Grid2x2 className="w-4 h-4" />
          {t('all_photos')} ({images.length})
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 framer:px-8 py-4 shrink-0">
            <span className="text-white/70 text-[14px] font-medium tabular-nums">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label={t('close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center px-4 framer:px-20 pb-4">
            <button
              type="button"
              onClick={prev}
              className="absolute inset-s-3 framer:inset-s-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
              aria-label={t('prev_photo')}
            >
              <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
            </button>

            <div className="relative w-full max-w-[1100px] aspect-3/2 mx-auto">
              <Image
                src={getImageSrc(activeIndex)}
                alt={`${alt} ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
                unoptimized
                onError={() => handleImageError(activeIndex)}
              />
            </div>

            <button
              type="button"
              onClick={next}
              className="absolute inset-e-3 framer:inset-e-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
              aria-label={t('next_photo')}
            >
              <ChevronRight className="w-6 h-6 rtl:rotate-180" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="shrink-0 px-4 framer:px-8 pb-4 overflow-x-auto">
            <div className="flex gap-2 justify-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`${alt} ${i + 1}`}
                  className={`relative w-16 h-12 framer:w-20 framer:h-14 rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all ${
                    i === activeIndex
                      ? 'ring-2 ring-white opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={getImageSrc(i)}
                    alt={`${alt} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    unoptimized
                    onError={() => handleImageError(i)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
