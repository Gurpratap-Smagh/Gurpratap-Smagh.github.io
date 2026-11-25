import { useEffect, useState } from 'react';
import { CredentialsFooter } from './components/CredentialsFooter';
import { HomeHub } from './components/HomeHub';
import { Navbar } from './components/Navbar';
import { PhotoLightbox } from './components/PhotoLightbox';
import { WorkDetailPage } from './components/WorkDetailPage';
import { PhotoItem } from './data/types';

function parseRoute(): { view: 'home' | 'detail'; slug: string | null } {
  const raw = window.location.hash.replace(/^#/, '');
  const match = raw.match(/^\/work\/([^/?#]+)/);
  if (match) {
    return { view: 'detail', slug: decodeURIComponent(match[1]) };
  }
  return { view: 'home', slug: null };
}

export function App() {
  const [route, setRoute] = useState(parseRoute);
  const [lightboxState, setLightboxState] = useState<{
    photos: PhotoItem[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goHome = (section?: 'pinned' | 'archive') => {
    window.location.hash = '/';
    setRoute({ view: 'home', slug: null });
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openEntry = (slug: string) => {
    window.location.hash = `/work/${encodeURIComponent(slug)}`;
    setRoute({ view: 'detail', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (photos: PhotoItem[], index: number) => {
    setLightboxState({ photos, index });
  };

  return (
    <div className="flex min-h-screen flex-col bg-navy text-ink">
      <Navbar isDetailPage={route.view === 'detail'} onGoHome={goHome} />
      <main className="flex-1">
        {route.view === 'home' ? (
          <HomeHub onOpenEntry={openEntry} />
        ) : (
          <WorkDetailPage
            slug={route.slug ?? 'l7-honeypot-engine'}
            onBackToArchive={() => goHome('archive')}
            onOpenEntry={openEntry}
            onOpenLightbox={openLightbox}
          />
        )}
      </main>
      <CredentialsFooter />

      {lightboxState && (
        <PhotoLightbox
          photos={lightboxState.photos}
          index={lightboxState.index}
          onClose={() => setLightboxState(null)}
          onChangeIndex={(nextIndex) =>
            setLightboxState((prev) => (prev ? { ...prev, index: nextIndex } : null))
          }
        />
      )}
    </div>
  );
}

export default App;
