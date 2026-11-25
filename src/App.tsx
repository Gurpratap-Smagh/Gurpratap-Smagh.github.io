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
import { Pillar, PortfolioEntry, SkillNodeId } from './data/portfolioEntries';

export function App() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | 'All' | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNodeId | null>(null);
  const [activeEntry, setActiveEntry] = useState<PortfolioEntry | null>(null);

  const clearFilters = () => {
    setSelectedPillar(null);
    setSelectedSkill(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <SplitHero />
        <ProofReel onSelectEntry={setActiveEntry} />
        <CertificationsBand />
        <SkillProofTree selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
        <UnifiedArchive
          selectedPillar={selectedPillar}
          selectedSkill={selectedSkill}
          onSelectPillar={setSelectedPillar}
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
