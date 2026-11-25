import { useState } from 'react';
import { CertificationsBand } from './components/CertificationsBand';
import { CredentialsFooter } from './components/CredentialsFooter';
import { EntryDetailModal } from './components/EntryDetailModal';
import { EventLog } from './components/EventLog';
import { Navbar } from './components/Navbar';
import { ProofReel } from './components/ProofReel';
import { SkillProofTree } from './components/SkillProofTree';
import { SplitHero } from './components/SplitHero';
import { UnifiedArchive } from './components/UnifiedArchive';
import { PortfolioEntry, ProjectCategory, SkillNodeId } from './data/portfolioEntries';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All' | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNodeId | null>(null);
  const [activeEntry, setActiveEntry] = useState<PortfolioEntry | null>(null);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSkill(null);
  };

  const openCategoryFromHero = (category: ProjectCategory) => {
    setSelectedSkill(null);
    setSelectedCategory(category);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 30);
  };

  const selectSkillFromTree = (skill: SkillNodeId | null) => {
    setSelectedSkill(skill);
    if (skill !== null) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <SplitHero
          onOpenHackathons={() => openCategoryFromHero('Hackathons')}
          onOpenCtfs={() => openCategoryFromHero('CTF Competitions')}
        />
        <ProofReel onSelectEntry={setActiveEntry} />
        <CertificationsBand />
        <SkillProofTree selectedSkill={selectedSkill} onSelectSkill={selectSkillFromTree} />
        <UnifiedArchive
          selectedCategory={selectedCategory}
          selectedSkill={selectedSkill}
          onSelectCategory={setSelectedCategory}
          onClearFilters={clearFilters}
          onSelectEntry={setActiveEntry}
        />
        <EventLog />
      </main>
      <CredentialsFooter />

      {activeEntry && (
        <EntryDetailModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      )}
    </div>
  );
}

export default App;
