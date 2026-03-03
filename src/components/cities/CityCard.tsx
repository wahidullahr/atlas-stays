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
      className="group relative block overflow-hidden rounded-2xl aspect-3/2 bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 810px) 50vw, 300px"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-s-0 inset-e-0 p-5">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <h3 className="text-white text-[17px] framer:text-[18px] font-bold tracking-tight">
            {name}
          </h3>
        </div>
        <p className="text-white/70 text-[13px] framer:text-[14px]">{metric}</p>
      </div>
    </Link>
  );
};
