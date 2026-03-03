import React from 'react';
import { cn } from '@/lib/utils';

interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  label: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  label,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center justify-center p-6 framer:p-8 bg-background border border-border rounded-2xl text-center card-interactive',
        className
      )}
      {...props}
    >
      <div className="mb-4 text-foreground p-3 bg-surface rounded-xl transition-all duration-200 group-hover:bg-accent/10 group-hover:text-accent">
        {icon}
      </div>
      <span className="text-sm font-semibold text-foreground tracking-tight">{label}</span>
    </div>
  );
};
