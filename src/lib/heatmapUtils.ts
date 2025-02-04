export const HEATMAP_CONSTANTS = {
  THROTTLE_DELAY: 100, // ms
  MAX_POINTS: 10000,   // Maximum data points to display
  RADIUS: 25,         // Heatmap point radius
  MAX_OPACITY: 0.6,   // Maximum opacity for hottest areas
  BLUR: 0.75         // Blur factor for smoother visualization
};

export function aggregateHeatmapData(data: any[]) {
  return data.reduce((acc, point) => {
    const key = `${Math.round(point.x_percent)}-${Math.round(point.y_percent)}`;
    if (!acc[key]) {
      acc[key] = { ...point, intensity: 0 };
    }
    acc[key].intensity += point.intensity || 1;
    return acc;
  }, {});
} 