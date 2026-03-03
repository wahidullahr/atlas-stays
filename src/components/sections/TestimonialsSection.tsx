import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { Camera, ClipboardCheck, Clock, HeadphonesIcon } from 'lucide-react';

export const TestimonialsSection = () => {
  const t = useTranslations('Home');
  const trustT = useTranslations('Trust');

  const items = [
    {
      icon: <Camera size={24} strokeWidth={1.8} />,
      title: trustT('proofs.report'),
      description: 'Visual documentation after every turnover so you see exactly what happened.',
    },
    {
      icon: <ClipboardCheck size={24} strokeWidth={1.8} />,
      title: trustT('proofs.checklist'),
      description: 'Systematic quality control ensures nothing gets missed between guests.',
    },
    {
      icon: <Clock size={24} strokeWidth={1.8} />,
      title: trustT('proofs.response'),
      description: 'Defined SLAs with escalation paths for every type of issue.',
    },
    {
      icon: <HeadphonesIcon size={24} strokeWidth={1.8} />,
      title: 'Dedicated support for remote owners',
      description: 'Your single point of contact for everything property-related.',
    },
  ];

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow={t('testimonialsEyebrow')}
          title={t('testimonialsTitle')}
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-2xl p-7 card-interactive text-center"
            >
              <div className="mb-5 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
