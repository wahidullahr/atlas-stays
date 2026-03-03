'use client';

import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  children: React.ReactNode;
  label?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeKey,
  onChange,
  children,
  label = 'Tabs',
}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const currentIndex = tabs.findIndex((t) => t.key === activeKey);
      let nextIndex = currentIndex;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = currentIndex <= 0 ? tabs.length - 1 : currentIndex - 1;
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = currentIndex >= tabs.length - 1 ? 0 : currentIndex + 1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = tabs.length - 1;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChange(tabs[currentIndex].key);
        return;
      } else {
        return;
      }

      setFocusedIndex(nextIndex);
      onChange(tabs[nextIndex].key);
    },
    [activeKey, onChange, tabs]
  );

  return (
    <div className="w-full">
      <div
        ref={tabListRef}
        role="tablist"
        aria-label={label}
        className="inline-flex p-1 bg-surface rounded-xl overflow-x-auto max-w-full border border-border"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => {
          const isSelected = activeKey === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={isSelected ? 'true' : 'false'}
              aria-controls={`panel-${tab.key}`}
              tabIndex={isSelected ? 0 : -1}
              className={cn(
                'px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2',
                isSelected
                  ? 'bg-foreground text-background [box-shadow:var(--shadow-card)]'
                  : 'text-muted hover:text-foreground'
              )}
              onClick={() => {
                onChange(tab.key);
                setFocusedIndex(index);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        id={`panel-${activeKey}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeKey}`}
        className="mt-10"
      >
        {children}
      </div>
    </div>
  );
};
