import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'mb-12 framer:mb-16',
        centered && 'text-center mx-auto max-w-[640px]',
        className
      )}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {description && (
        <p className="body-muted mt-4 max-w-[520px]">{centered ? '' : ''}{description}</p>
      )}
    </div>
  );
};
