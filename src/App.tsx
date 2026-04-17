import { useState, useMemo } from 'react';
import { mockPlayers } from './data/mockPlayers';
import type { Player } from './data/mockPlayers';
import { Activity } from 'lucide-react';
import FilterBar from './components/FilterBar';
import PlayerGrid from './components/PlayerGrid';
import PlayerChart from './components/PlayerChart';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(mockPlayers[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('All');

  // Filter the players based on search text and dropdown selection
  const filteredPlayers = useMemo(() => {
    return mockPlayers.filter((player) => {
      const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const isPitcher = player.position === 'SP' || player.position === 'RP';
      const isHitter = !isPitcher;
      
      let matchesPosition = true;
      if (positionFilter === 'Pitcher') matchesPosition = isPitcher;
      if (positionFilter === 'Hitter') matchesPosition = isHitter;

      return matchesSearch && matchesPosition;
    });
  }, [searchQuery, positionFilter]);

  return (
    <div className="min-h-screen p-6 font-sans">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between border-b border-slate-700 pb-4">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-sky-400" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">
            Atlantis <span className="text-sky-400">War Room</span>
          </h1>
        </div>
        <div className="text-sm text-slate-400 font-mono flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          STATUS: TRADE DEADLINE ACTIVE
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[calc(100vh-120px)]">
        
        {/* Left Column: Filters and Data Grid */}
        <div className="lg:col-span-2 flex flex-col gap-4 bg-[var(--color-terminal-panel)] p-4 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Target Acquisition Board</h2>
          
          <FilterBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            positionFilter={positionFilter}
            setPositionFilter={setPositionFilter}
          />
          
          <PlayerGrid 
            players={filteredPlayers}
            selectedPlayerId={selectedPlayer.id}
            onSelectPlayer={setSelectedPlayer}
          />
        </div>

        {/* Right Column: Deep Dive Profile & Charts */}
        <div className="bg-[var(--color-terminal-panel)] p-4 rounded-xl border border-slate-700 shadow-xl flex flex-col gap-4 overflow-hidden">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Executive Profile</h2>
          
          <PlayerChart player={selectedPlayer} />
        </div>

      </div>
    </div>
  );
}

export default App;
