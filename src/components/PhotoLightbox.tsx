import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, MapPin, Calendar } from 'lucide-react';
import { PhotoItem } from '../data/types';

interface PhotoLightboxProps {
  photos: PhotoItem[];
  index: number;
  onClose: () => void;
  onChangeIndex: (idx: number) => void;
}

export function PhotoLightbox({ photos, index, onClose, onChangeIndex }: PhotoLightboxProps) {
  const photo = photos[index];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && photos.length > 1) {
        onChangeIndex((index + 1) % photos.length);
      }
      if (e.key === 'ArrowLeft' && photos.length > 1) {
        onChangeIndex((index - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, photos.length, onClose, onChangeIndex]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-rule bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-rule bg-sand/70 px-4 py-3">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink">
            <span className="rounded bg-forest-soft px-2 py-0.5 font-semibold text-forest">
              {index + 1} / {photos.length}
            </span>
            <span className="inline-flex items-center gap-1 text-rust">
              <MapPin className="h-3.5 w-3.5" />
              {photo.location}
            </span>
            <span className="inline-flex items-center gap-1 text-muted">
              <Calendar className="h-3.5 w-3.5" />
              {photo.date}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-rule bg-surface p-1.5 text-ink transition hover:border-rust hover:text-rust"
            aria-label="Close photo viewer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative flex max-h-[75vh] items-center justify-center bg-ink/95 p-2">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[70vh] w-auto rounded object-contain"
          />

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onChangeIndex((index - 1 + photos.length) % photos.length)}
                className="absolute left-3 rounded-full border border-rule bg-surface/90 p-2 text-ink transition hover:border-forest hover:text-forest"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onChangeIndex((index + 1) % photos.length)}
                className="absolute right-3 rounded-full border border-rule bg-surface/90 p-2 text-ink transition hover:border-forest hover:text-forest"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="border-t border-rule bg-surface px-5 py-3">
          <p className="text-sm text-ink">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}
