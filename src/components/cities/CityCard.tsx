import React from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

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
      className="group relative block overflow-hidden rounded-xl framer:rounded-2xl aspect-4/3 framer:aspect-3/2 bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 810px) 50vw, 50vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-s-0 inset-e-0 p-3 framer:p-5">
        <div className="flex items-center gap-1.5 framer:gap-2 mb-0.5 framer:mb-1">
          <MapPin className="w-3 h-3 framer:w-3.5 framer:h-3.5 text-accent shrink-0" />
          <h3 className="text-white text-[14px] framer:text-[18px] font-bold tracking-tight">
            {name}
          </h3>
        </div>
        <p className="text-white/70 text-[11px] framer:text-[14px] leading-snug">{metric}</p>
      </div>
    </Link>
  );
};
