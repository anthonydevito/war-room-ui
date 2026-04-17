export interface Player {
  id: string;
  name: string;
  position: 'SP' | 'RP' | 'INF' | 'OF' | 'C';
  team: string;
  age: number;
  tradeValue: number; // 0-100 scale
  keyStat: { label: string; value: string };
  injuryRisk: 'Low' | 'Medium' | 'High';
  recentTrend: { week: string; value: number }[];
}

export const mockPlayers: Player[] = [
  {
    id: "p1",
    name: "Garrett Crochet",
    position: "SP",
    team: "CHW",
    age: 26,
    tradeValue: 92,
    keyStat: { label: "ERA", value: "2.85" },
    injuryRisk: "Medium",
    recentTrend: [
      { week: "Wk 1", value: 3.10 }, { week: "Wk 2", value: 2.95 }, 
      { week: "Wk 3", value: 2.80 }, { week: "Wk 4", value: 2.85 }, { week: "Wk 5", value: 2.75 }
    ]
  },
  {
    id: "p2",
    name: "Luis Robert Jr.",
    position: "OF",
    team: "CHW",
    age: 28,
    tradeValue: 88,
    keyStat: { label: "wRC+", value: "135" },
    injuryRisk: "High",
    recentTrend: [
      { week: "Wk 1", value: 120 }, { week: "Wk 2", value: 125 }, 
      { week: "Wk 3", value: 130 }, { week: "Wk 4", value: 128 }, { week: "Wk 5", value: 135 }
    ]
  },
  {
    id: "p3",
    name: "Mason Miller",
    position: "RP",
    team: "OAK",
    age: 27,
    tradeValue: 95,
    keyStat: { label: "K/9", value: "15.2" },
    injuryRisk: "Medium",
    recentTrend: [
      { week: "Wk 1", value: 14.1 }, { week: "Wk 2", value: 14.8 }, 
      { week: "Wk 3", value: 15.0 }, { week: "Wk 4", value: 14.9 }, { week: "Wk 5", value: 15.2 }
    ]
  },
  {
    id: "p4",
    name: "Vladimir Guerrero Jr.",
    position: "INF",
    team: "TOR",
    age: 26,
    tradeValue: 85,
    keyStat: { label: "wRC+", value: "142" },
    injuryRisk: "Low",
    recentTrend: [
      { week: "Wk 1", value: 130 }, { week: "Wk 2", value: 135 }, 
      { week: "Wk 3", value: 138 }, { week: "Wk 4", value: 140 }, { week: "Wk 5", value: 142 }
    ]
  },
  {
    id: "p5",
    name: "Ryan Helsley",
    position: "RP",
    team: "STL",
    age: 31,
    tradeValue: 80,
    keyStat: { label: "SV", value: "32" },
    injuryRisk: "Low",
    recentTrend: [
      { week: "Wk 1", value: 25 }, { week: "Wk 2", value: 27 }, 
      { week: "Wk 3", value: 29 }, { week: "Wk 4", value: 30 }, { week: "Wk 5", value: 32 }
    ]
  },
  {
    id: "p6",
    name: "Brent Rooker",
    position: "OF",
    team: "OAK",
    age: 30,
    tradeValue: 75,
    keyStat: { label: "OPS", value: ".920" },
    injuryRisk: "Low",
    recentTrend: [
      { week: "Wk 1", value: 0.850 }, { week: "Wk 2", value: 0.875 }, 
      { week: "Wk 3", value: 0.890 }, { week: "Wk 4", value: 0.910 }, { week: "Wk 5", value: 0.920 }
    ]
  },
  {
    id: "p7",
    name: "Jazz Chisholm Jr.",
    position: "INF",
    team: "NYY",
    age: 27,
    tradeValue: 82,
    keyStat: { label: "wRC+", value: "115" },
    injuryRisk: "Medium",
    recentTrend: [
      { week: "Wk 1", value: 105 }, { week: "Wk 2", value: 108 }, 
      { week: "Wk 3", value: 110 }, { week: "Wk 4", value: 112 }, { week: "Wk 5", value: 115 }
    ]
  },
  {
    id: "p8",
    name: "Max Scherzer",
    position: "SP",
    team: "TEX",
    age: 41,
    tradeValue: 60,
    keyStat: { label: "ERA", value: "3.95" },
    injuryRisk: "High",
    recentTrend: [
      { week: "Wk 1", value: 3.50 }, { week: "Wk 2", value: 3.65 }, 
      { week: "Wk 3", value: 3.80 }, { week: "Wk 4", value: 3.90 }, { week: "Wk 5", value: 3.95 }
    ]
  }
];
