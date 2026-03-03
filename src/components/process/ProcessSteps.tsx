import React from 'react';
import { cn } from '@/lib/utils';

export interface ProcessStepItem {
  badge: string;
  title: string;
  description?: string;
}

interface ProcessStepsProps {
  steps: ProcessStepItem[];
  className?: string;
  layout?: 'stack' | 'grid';
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  className,
  layout = 'stack',
}) => {
  return (
    <div
      className={cn(
        layout === 'stack' && 'space-y-4',
        layout === 'grid' && 'grid grid-cols-1 framer:grid-cols-3 gap-5',
        className
      )}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            'group bg-background border border-border rounded-2xl p-6 card-interactive',
            layout === 'grid' && 'text-center'
          )}
        >
          <div
            className={cn(
              'flex items-center gap-4 mb-3',
              layout === 'grid' && 'flex-col'
            )}
          >
            <span
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold shrink-0 transition-colors duration-200',
                layout === 'stack'
                  ? 'bg-surface text-foreground border border-border-strong group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20'
                  : 'bg-accent text-white'
              )}
            >
              {step.badge}
            </span>
            <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
          </div>
          {step.description && (
            <p className={cn(
              'text-muted text-[15px] leading-relaxed',
              layout === 'stack' && 'ps-14'
            )}>
              {step.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
