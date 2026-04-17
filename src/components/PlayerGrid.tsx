import type { Player } from '../data/mockPlayers';

interface PlayerGridProps {
  players: Player[];
  selectedPlayerId: string;
  onSelectPlayer: (player: Player) => void;
}

export default function PlayerGrid({ players, selectedPlayerId, onSelectPlayer }: PlayerGridProps) {
  return (
    <div className="overflow-x-auto border border-slate-700 rounded-lg bg-slate-800/50 flex-1">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-800 text-xs uppercase text-slate-400 border-b border-slate-700 sticky top-0">
          <tr>
            <th className="px-4 py-3">Player</th>
            <th className="px-4 py-3">Pos</th>
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3">Age</th>
            <th className="px-4 py-3">Key Stat</th>
            <th className="px-4 py-3">Injury Risk</th>
            <th className="px-4 py-3">Trade Value</th>
          </tr>
        </thead>
        <tbody>
          {players.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-slate-500">No players found matching filters.</td>
            </tr>
          ) : (
            players.map((player) => (
              <tr
                key={player.id}
                onClick={() => onSelectPlayer(player)}
                className={`cursor-pointer border-b border-slate-700/50 hover:bg-slate-700 transition-colors ${
                  selectedPlayerId === player.id ? 'bg-slate-700 border-l-2 border-l-sky-400' : 'border-l-2 border-l-transparent'
                }`}
              >
                <td className="px-4 py-3 font-medium text-slate-100">{player.name}</td>
                <td className="px-4 py-3">{player.position}</td>
                <td className="px-4 py-3">{player.team}</td>
                <td className="px-4 py-3">{player.age}</td>
                <td className="px-4 py-3">
                  <span className="text-slate-500 text-xs mr-1">{player.keyStat.label}:</span>
                  <span className="text-slate-200">{player.keyStat.value}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    player.injuryRisk === 'Low' ? 'bg-emerald-500/20 text-emerald-400' :
                    player.injuryRisk === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-rose-500/20 text-rose-400'
                  }`}>
                    {player.injuryRisk}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700">
                      <div
                        className="bg-sky-400 h-full rounded-full"
                        style={{ width: `${player.tradeValue}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono">{player.tradeValue}</span>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
