import { Search, Filter } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  positionFilter: string;
  setPositionFilter: (val: string) => void;
}

export default function FilterBar({ searchQuery, setSearchQuery, positionFilter, setPositionFilter }: FilterBarProps) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search player name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-800 border border-slate-600 rounded py-2 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-sky-500 transition-colors"
        />
      </div>
      <div className="relative w-48">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
          className="w-full bg-slate-800 border border-slate-600 rounded py-2 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-sky-500 appearance-none cursor-pointer"
        >
          <option value="All">All Positions</option>
          <option value="Hitter">Hitters (INF, OF, C)</option>
          <option value="Pitcher">Pitchers (SP, RP)</option>
        </select>
      </div>
    </div>
  );
}
