import React from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface CityCardProps {
  city: string;
  name: string;
  metric: string;
  imageSrc: string;
}

export const CityCard: React.FC<CityCardProps> = ({
  city,
  name,
  metric,
  imageSrc,
}) => {
  return (
    <Link
      href={`/areas/${city}`}
      className="group relative block overflow-hidden rounded-2xl aspect-[4/5] bg-surface card-interactive focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 810px) 50vw, 300px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 start-0 end-0 p-6">
        <h3 className="text-white text-xl font-bold mb-1 tracking-tight">
          {name}
        </h3>
        <p className="text-white/80 text-sm font-medium">{metric}</p>
      </div>
    </Link>
  );
};
