import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, X } from 'lucide-react';
import { PhotoItem } from '../data/types';

interface PhotoLightboxProps {
  photos: PhotoItem[];
  index: number;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function PhotoLightbox({ photos, index, onClose, onChangeIndex }: PhotoLightboxProps) {
  const current = photos[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChangeIndex((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onChangeIndex((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index, photos.length, onClose, onChangeIndex]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-hairline bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
            <span className="rounded bg-elevated px-2 py-0.5 text-teal-bright">
              {index + 1} / {photos.length}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-gold-humber" />
              {current.location}
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              {current.date}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-hairline bg-elevated p-1.5 text-slate-300 hover:border-teal-forensic hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative flex min-h-[260px] flex-1 items-center justify-center bg-obsidian p-2 sm:p-4">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[68vh] w-auto rounded-md object-contain"
          />

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onChangeIndex((index - 1 + photos.length) % photos.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-panel/90 p-2 text-slate-200 transition hover:border-teal-forensic hover:text-teal-bright"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onChangeIndex((index + 1) % photos.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-panel/90 p-2 text-slate-200 transition hover:border-teal-forensic hover:text-teal-bright"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="border-t border-hairline bg-panel px-5 py-3">
          <p className="text-sm text-slate-200">{current.caption}</p>
        </div>
      </div>
    </div>
  );
}
