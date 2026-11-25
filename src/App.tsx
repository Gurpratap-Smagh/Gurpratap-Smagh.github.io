import { useEffect, useState } from 'react';
import { AcademiaAndWriting } from './components/AcademiaAndWriting';
import { CredentialsFooter } from './components/CredentialsFooter';
import { CtfTrackRecord } from './components/CtfTrackRecord';
import { HomeIndex } from './components/HomeIndex';
import { AppRoute, Navbar } from './components/Navbar';
import { PhotoLightbox } from './components/PhotoLightbox';
import { WorkExplorer } from './components/WorkExplorer';
import { PhotoItem, WorkTag } from './data/types';

function parseHashRoute(): { route: AppRoute; tag: WorkTag | null } {
  const raw = window.location.hash.replace(/^#/, '');
  const [pathPart, queryPart] = raw.split('?');
  let route: AppRoute = 'home';
  if (pathPart.startsWith('/work')) route = 'work';
  else if (pathPart.startsWith('/ctfs')) route = 'ctfs';
  else if (pathPart.startsWith('/academia')) route = 'academia';

  let tag: WorkTag | null = null;
  if (queryPart) {
    const params = new URLSearchParams(queryPart);
    const t = params.get('tag') as WorkTag | null;
    if (t) tag = t;
  }
  return { route, tag };
}

export function App() {
  const initial = parseHashRoute();
  const [route, setRoute] = useState<AppRoute>(initial.route);
  const [workInitialTag, setWorkInitialTag] = useState<WorkTag | null>(initial.tag);
  const [lightboxState, setLightboxState] = useState<{
    photos: PhotoItem[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHashRoute();
      setRoute(parsed.route);
      setWorkInitialTag(parsed.tag);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (target: AppRoute, tag?: WorkTag) => {
    const hash =
      target === 'home'
        ? '/'
        : target === 'work' && tag
          ? `/work?tag=${encodeURIComponent(tag)}`
          : `/${target}`;
    window.location.hash = hash;
    setWorkInitialTag(tag ?? null);
    setRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (photos: PhotoItem[], index: number) => {
    setLightboxState({ photos, index });
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar route={route} onNavigate={(r) => navigate(r)} />
      <main className="flex-1">
        {route === 'home' && <HomeIndex onOpenLightbox={openLightbox} onNavigate={navigate} />}
        {route === 'work' && (
          <WorkExplorer
            key={workInitialTag ?? 'all'}
            initialTag={workInitialTag}
            onOpenLightbox={openLightbox}
          />
        )}
        {route === 'ctfs' && <CtfTrackRecord />}
        {route === 'academia' && <AcademiaAndWriting onOpenLightbox={openLightbox} />}
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
