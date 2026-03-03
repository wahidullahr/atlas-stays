export interface PricingPackage {
  key: string;
  includes: string[];
}

export const pricingPackages: Record<string, PricingPackage> = {
  starter: {
    key: 'starter',
    includes: ['Turnover cleaning', 'Inspection checklist', 'Photo report'],
  },
  care: {
    key: 'care',
    includes: ['Everything in Starter', 'Linen coordination', 'Restocking'],
  },
  full: {
    key: 'full',
    includes: ['Revenue-based %', 'Guest messaging optional', 'Priority escalation'],
  },
  custom: {
    key: 'custom',
    includes: ['Villas / multi-units', 'Custom schedule', 'Dedicated supervisor'],
  },
};
