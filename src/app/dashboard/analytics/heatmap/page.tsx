'use client';

import { useState, useEffect } from 'react';
import HeatmapVisualization from '@/components/heatmap/HeatmapVisualization';
import HeatmapControls from '@/components/heatmap/HeatmapControls';
import { supabase } from '@/lib/supabase';
import { CodeBracketIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function HeatmapPage() {
  const [heatmapData, setHeatmapData] = useState<any[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [deviceFilter, setDeviceFilter] = useState<string>('all');
  const [timeRange, setTimeRange] = useState<string>('24h');
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchUrls();
    subscribeToHeatmapData();
    return () => {
      // Cleanup subscription
    };
  }, []);

  useEffect(() => {
    if (selectedUrl) {
      fetchHeatmapData();
    }
  }, [selectedUrl, deviceFilter, timeRange]);

  const fetchUrls = async () => {
    const { data, error } = await supabase
      .from('heatmap_data')
      .select('page_url')
      .distinct('page_url');
    
    if (data) {
      setUrls(data.map((item: { page_url: string }) => item.page_url));
    }
  };

  const fetchHeatmapData = async () => {
    setLoading(true);
    let query = supabase
      .from('heatmap_data')
      .select('*')
      .eq('page_url', selectedUrl);

    if (deviceFilter !== 'all') {
      query = query.eq('device_type', deviceFilter);
    }

    // Add time range filter
    const now = new Date();
    const timeFilters = {
      '24h': now.setHours(now.getHours() - 24),
      '7d': now.setDate(now.getDate() - 7),
      '30d': now.setDate(now.getDate() - 30),
    };

    if (timeRange in timeFilters) {
      query = query.gte('timestamp', new Date(timeFilters[timeRange as keyof typeof timeFilters]).toISOString());
    }

    const { data, error } = await query;
    
    if (data) {
      setHeatmapData(data);
    }
    setLoading(false);
  };

  const subscribeToHeatmapData = () => {
    const subscription = supabase
      .channel('heatmap_updates')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'heatmap_data',
      }, payload => {
        if (payload.new.page_url === selectedUrl) {
          setHeatmapData(current => [...current, payload.new]);
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  };

  const trackingScript = `
<script>
  (function() {
    const script = document.createElement('script');
    script.src = '${process.env.NEXT_PUBLIC_APP_URL}/tracking-script.js';
    script.async = true;
    document.head.appendChild(script);
  })();
</script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#1c1c1c]">User Interaction Heatmap</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.open('/tracking-script.js')}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Get Tracking Script
          </button>
        </div>
      </div>

      <HeatmapControls
        urls={urls}
        selectedUrl={selectedUrl}
        onUrlChange={setSelectedUrl}
        deviceFilter={deviceFilter}
        onDeviceFilterChange={setDeviceFilter}
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
      />

      {/* Usage Guide Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <CodeBracketIcon className="h-5 w-5 text-[#1c1c1c]" />
            <h3 className="font-semibold text-[#1c1c1c]">Implementation Guide</h3>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-medium text-[#1c1c1c] mb-2">1. Add the tracking script</h4>
            <div className="relative">
              <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto text-[#1c1c1c]">
                <code>{trackingScript}</code>
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 p-2 hover:bg-gray-200 rounded-md transition-colors"
              >
                {copied ? (
                  <CheckIcon className="h-5 w-5 text-[#1c1c1c]" />
                ) : (
                  <ClipboardIcon className="h-5 w-5 text-[#1c1c1c]" />
                )}
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#1c1c1c] mb-2">2. Privacy Compliance</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#1c1c1c]/70">
              <li>Add our cookie banner component to your site</li>
              <li>Sensitive data is automatically redacted</li>
              <li>GDPR and CCPA compliant tracking</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#1c1c1c] mb-2">3. View Your Data</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#1c1c1c]/70">
              <li>Data appears in real-time</li>
              <li>Filter by device type and time range</li>
              <li>Compare different pages and user segments</li>
            </ul>
          </div>

          <div className="bg-[#1c1c1c]/5 p-4 rounded-lg">
            <p className="text-sm text-[#1c1c1c]">
              Need help? Check out our{' '}
              <a href="/help/observe" className="underline hover:text-[#1c1c1c]/70">
                detailed documentation
              </a>{' '}
              or contact support.
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1c1c1c]" />
        </div>
      ) : (
        <HeatmapVisualization data={heatmapData} />
      )}
    </div>
  );
} 