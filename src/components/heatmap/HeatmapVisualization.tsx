'use client';

import { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';


interface HeatmapVisualizationProps {
  data: any[];
}

export default function HeatmapVisualization({ data }: HeatmapVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heatmapRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !heatmapRef.current) {
      heatmapRef.current = h337.create({
        container: containerRef.current,
        radius: 25,
        maxOpacity: 0.6,
        minOpacity: 0,
        blur: 0.75,
      });
    }
  }, []);

  useEffect(() => {
    if (heatmapRef.current && data.length > 0) {
      const points = data.map(point => ({
        x: Math.floor(point.x_percent * containerRef.current!.offsetWidth / 100),
        y: Math.floor(point.y_percent * containerRef.current!.offsetHeight / 100),
        value: point.intensity || 1,
      }));

      heatmapRef.current.setData({
        max: Math.max(...data.map(p => p.intensity || 1)),
        data: points,
      });
    }
  }, [data]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      {data.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Select a page to view heatmap data
        </div>
      )}
    </div>
  );
} 