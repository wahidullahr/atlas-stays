export interface Problem {
  key: string;
  icon: string; // Lucide icon name or similar
}

export const problems: Problem[] = [
  { key: 'reliability', icon: 'ShieldCheck' },
  { key: 'damage', icon: 'AlertTriangle' },
  { key: 'support', icon: 'Phone' },
  { key: 'keys', icon: 'Key' },
  { key: 'visibility', icon: 'Eye' },
];
