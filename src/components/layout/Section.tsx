import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, container = true, className, ...props }) => {
  return (
    <section
      className={cn(
        "py-[80px] framer:py-[140px]",
        className
      )}
      {...props}
    >
      {container ? <Container>{children}</Container> : children}
    </section>
  );
};
