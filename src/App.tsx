import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstitutionalShowcase } from './components/InstitutionalShowcase';
import { SkillProofMatrix } from './components/SkillProofMatrix';
import { ArchitectureDossier } from './components/ArchitectureDossier';
import { FieldStories } from './components/FieldStories';
import { ProjectGrid } from './components/ProjectGrid';
import { WriteupsFeed } from './components/WriteupsFeed';
import { CredentialsFooter } from './components/CredentialsFooter';
import { PhotoLightbox } from './components/PhotoLightbox';
import { PhotoItem } from './data/types';

export function App() {
  const [lightboxState, setLightboxState] = useState<{
    photos: PhotoItem[];
    index: number;
  } | null>(null);

  const openLightbox = (photos: PhotoItem[], index: number) => {
    setLightboxState({ photos, index });
  };

  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <Navbar />
      <main>
        <Hero onOpenLightbox={openLightbox} />
        <InstitutionalShowcase onOpenLightbox={openLightbox} />
        <SkillProofMatrix onOpenLightbox={openLightbox} />
        <ArchitectureDossier onOpenLightbox={openLightbox} />
        <FieldStories onOpenLightbox={openLightbox} />
        <ProjectGrid onOpenLightbox={openLightbox} />
        <WriteupsFeed />
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
