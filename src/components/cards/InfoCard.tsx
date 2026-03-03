import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group relative bg-background border border-border rounded-2xl p-8 card-interactive overflow-hidden flex flex-col h-full',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header: Icon + Title (Problem) */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-500 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          <div>
            <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mb-1 opacity-80">The Pain</p>
            <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-subtle mb-6 group-hover:bg-border transition-colors duration-300" />

        {/* Body: Solution */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 size={16} className="text-accent fill-accent/10" />
            <p className="text-[11px] font-bold text-accent uppercase tracking-wider">The Atlas Fix</p>
          </div>
          <p className="text-muted text-[15px] leading-relaxed group-hover:text-foreground transition-colors duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
