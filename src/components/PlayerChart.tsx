import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Player } from '../data/mockPlayers';
import { User, ShieldAlert, TrendingUp } from 'lucide-react';

interface PlayerChartProps {
  player: Player;
}

export default function PlayerChart({ player }: PlayerChartProps) {
  // Pitchers get a red line, hitters get a blue line
  const chartColor = player.position === 'SP' || player.position === 'RP' ? '#fb7185' : '#38bdf8'; 

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Profile Card */}
      <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <User className="h-5 w-5 text-slate-400" />
            <h3 className="text-xl font-bold text-slate-100">{player.name}</h3>
          </div>
          <div className="flex gap-3 text-sm text-slate-400 mb-4 font-mono">
            <span>{player.team}</span>
            <span>•</span>
            <span>{player.position}</span>
            <span>•</span>
            <span>AGE: {player.age}</span>
          </div>
          <div className="flex gap-3">
            <div className="bg-slate-900 rounded px-3 py-2 border border-slate-700 min-w-[80px]">
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{player.keyStat.label}</div>
              <div className="text-lg font-semibold text-slate-200">{player.keyStat.value}</div>
            </div>
            <div className="bg-slate-900 rounded px-3 py-2 border border-slate-700 min-w-[100px]">
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider flex items-center gap-1">
                <ShieldAlert className="h-3 w-3" /> RISK
              </div>
              <div className={`text-lg font-semibold ${
                player.injuryRisk === 'Low' ? 'text-emerald-400' :
                player.injuryRisk === 'Medium' ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {player.injuryRisk}
              </div>
            </div>
          </div>
        </div>
        
        {/* Trade Value Badge */}
        <div className="flex flex-col items-center justify-center bg-slate-900 h-16 w-16 rounded-full border-2 border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          <span className="text-2xl font-bold text-sky-400 font-mono">{player.tradeValue}</span>
          <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Value</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex-1 bg-slate-800 rounded-lg p-5 border border-slate-700 min-h-[300px] flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-slate-400" />
          <h3 className="font-semibold text-slate-200 text-sm">5-Week Moving Average ({player.keyStat.label})</h3>
        </div>
        <div className="flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%" className="absolute inset-0">
            <LineChart data={player.recentTrend} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="week" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={11} domain={['auto', 'auto']} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#f1f5f9' }}
                itemStyle={{ color: chartColor, fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                name={player.keyStat.label}
                stroke={chartColor} 
                strokeWidth={3}
                dot={{ r: 4, fill: '#1e293b', strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 0 }} 
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
