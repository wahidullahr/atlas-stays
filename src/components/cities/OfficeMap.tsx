'use client';

import React, { useState, useEffect } from 'react';

interface CityInfo {
  key: string;
  name: string;
  metric: string;
}

interface OfficeMapProps {
  cities: CityInfo[];
  regionLabels: {
    europe: string;
    europeCities: string;
    morocco: string;
    moroccoCities: string;
  };
}

const OFFICES: Record<string, [number, number]> = {
  oslo:       [59.91, 10.75],
  london:     [51.51, -0.12],
  tangier:    [35.77, -5.80],
  casablanca: [33.57, -7.59],
  marrakech:  [31.63, -8.00],
  agadir:     [30.43, -9.60],
};

const EUROPE_CITIES = ['oslo', 'london'];
const AFRICA_CITIES = ['tangier', 'casablanca', 'marrakech', 'agadir'];

const EUROPE_CENTER: [number, number] = [57.0, 5.0];
const EUROPE_ZOOM = 5;

const AFRICA_CENTER: [number, number] = [32.8, -7.5];
const AFRICA_ZOOM = 6;

const TILE_URL = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

interface RegionMapProps {
  cities: CityInfo[];
  filterKeys: string[];
  center: [number, number];
  zoom: number;
  hoveredCity: string | null;
  onHover: (key: string | null) => void;
}

function RegionMap({ cities, filterKeys, center, zoom, hoveredCity, onHover }: RegionMapProps) {
  const [ready, setReady] = useState(false);
  const [modules, setModules] = useState<{
    MapContainer: React.ComponentType<Record<string, unknown>>;
    TileLayer: React.ComponentType<Record<string, unknown>>;
    Marker: React.ComponentType<Record<string, unknown>>;
    CircleMarker: React.ComponentType<Record<string, unknown>>;
    L: typeof import('leaflet');
  } | null>(null);

  useEffect(() => {
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([rl, L]) => {
      setModules({
        MapContainer: rl.MapContainer as unknown as React.ComponentType<Record<string, unknown>>,
        TileLayer: rl.TileLayer as unknown as React.ComponentType<Record<string, unknown>>,
        Marker: rl.Marker as unknown as React.ComponentType<Record<string, unknown>>,
        CircleMarker: rl.CircleMarker as unknown as React.ComponentType<Record<string, unknown>>,
        L: L as typeof import('leaflet'),
      });
      setReady(true);
    });
  }, []);

  if (!ready || !modules) {
    return (
      <div className="w-full h-full bg-surface rounded-2xl animate-pulse flex items-center justify-center">
        <div className="text-muted text-sm">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, CircleMarker, L } = modules;

  const createIcon = (name: string, isActive: boolean) =>
    L.divIcon({
      className: '',
      iconSize: [40, 82],
      iconAnchor: [20, 82],
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;width:max-content;transform:translateX(calc(-50% + 20px));transition:transform 0.2s;${isActive ? 'transform:translateX(calc(-50% + 20px)) translateY(-4px) scale(1.12);' : ''}">
          <span style="font-size:13px;font-weight:700;color:#0a0a0a;background:white;padding:4px 12px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);white-space:nowrap;margin-bottom:6px;">${name}</span>
          <svg width="34" height="44" viewBox="0 0 34 44" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
            <path d="M17,44 C17,44 0,27 0,17 C0,7.61 7.61,0 17,0 C26.39,0 34,7.61 34,17 C34,27 17,44 17,44 Z" fill="#059669"/>
            <circle cx="17" cy="15.5" r="6" fill="white"/>
          </svg>
        </div>
      `,
    });

  const filtered = cities.filter((c) => filterKeys.includes(c.key));

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
      {filtered.map((city) => {
        const pos = OFFICES[city.key];
        if (!pos) return null;
        const isActive = hoveredCity === city.key;

        return (
          <React.Fragment key={city.key}>
            <CircleMarker
              center={pos}
              radius={isActive ? 28 : 22}
              pathOptions={{
                color: '#059669',
                fillColor: '#059669',
                fillOpacity: isActive ? 0.18 : 0.1,
                weight: isActive ? 2 : 1.5,
                opacity: isActive ? 0.6 : 0.35,
              }}
            />
            <Marker
              position={pos}
              icon={createIcon(city.name, isActive)}
              eventHandlers={{
                mouseover: () => onHover(city.key),
                mouseout: () => onHover(null),
              }}
            />
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
}

export const OfficeMap: React.FC<OfficeMapProps> = ({ cities, regionLabels }) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 framer:grid-cols-2 gap-4 framer:gap-6">
      {/* Europe */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5 px-1">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground tracking-tight">{regionLabels.europe}</h3>
          <span className="text-[12px] framer:text-[13px] text-muted font-medium">{regionLabels.europeCities}</span>
        </div>
        <div className="relative w-full aspect-square framer:aspect-square rounded-2xl framer:rounded-3xl overflow-hidden border border-border/15 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <RegionMap
            cities={cities}
            filterKeys={EUROPE_CITIES}
            center={EUROPE_CENTER}
            zoom={EUROPE_ZOOM}
            hoveredCity={hoveredCity}
            onHover={setHoveredCity}
          />
        </div>
      </div>

      {/* Africa / Morocco */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5 px-1">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground tracking-tight">{regionLabels.morocco}</h3>
          <span className="text-[12px] framer:text-[13px] text-muted font-medium">{regionLabels.moroccoCities}</span>
        </div>
        <div className="relative w-full aspect-square framer:aspect-square rounded-2xl framer:rounded-3xl overflow-hidden border border-border/15 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <RegionMap
            cities={cities}
            filterKeys={AFRICA_CITIES}
            center={AFRICA_CENTER}
            zoom={AFRICA_ZOOM}
            hoveredCity={hoveredCity}
            onHover={setHoveredCity}
          />
        </div>
      </div>
    </div>
  );
};
