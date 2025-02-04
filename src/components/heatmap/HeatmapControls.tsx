interface HeatmapControlsProps {
  urls: string[];
  selectedUrl: string;
  onUrlChange: (url: string) => void;
  deviceFilter: string;
  onDeviceFilterChange: (device: string) => void;
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

export default function HeatmapControls({
  urls,
  selectedUrl,
  onUrlChange,
  deviceFilter,
  onDeviceFilterChange,
  timeRange,
  onTimeRangeChange,
}: HeatmapControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg border border-gray-200">
      <select
        value={selectedUrl}
        onChange={(e) => onUrlChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="">Select a page</option>
        {urls.map((url) => (
          <option key={url} value={url}>
            {url}
          </option>
        ))}
      </select>

      <select
        value={deviceFilter}
        onChange={(e) => onDeviceFilterChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="all">All Devices</option>
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
        <option value="tablet">Tablet</option>
      </select>

      <select
        value={timeRange}
        onChange={(e) => onTimeRangeChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="24h">Last 24 Hours</option>
        <option value="7d">Last 7 Days</option>
        <option value="30d">Last 30 Days</option>
        <option value="all">All Time</option>
      </select>
    </div>
  );
} 