import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import HelpPageLayout from '@/components/help/HelpPageLayout';
import HelpCTA from '@/components/help/HelpCTA';

export default function AnalyzeHelpPage() {
  return (
    <HelpPageLayout
      title="Analyze: Data-Driven Decision Making"
      description="Track key metrics, analyze growth efficiency, and measure the ROI of your retention strategies with real-time analytics"
    >
      <div className="space-y-12">
        {/* SaaS Metrics Dashboard Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">SaaS Metrics Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Monitor 11 essential SaaS metrics in real-time through an intuitive dashboard designed for actionable insights. Make data-driven decisions with confidence.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Real-time MRR and ARR tracking',
                  'Customer acquisition metrics',
                  'Churn rate analysis and trends',
                  'Revenue forecasting and projections'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Get instant visibility into your key performance indicators with automated data collection and real-time updates.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add metrics dashboard demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Metrics Dashboard Demo
              </div>
            </div>
          </div>
        </section>

        {/* Quick Ratio Calculator Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Quick Ratio Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add calculator demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Quick Ratio Calculator Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Measure your growth efficiency against churn with our Quick Ratio calculator. Get daily updates and benchmarks to ensure sustainable growth.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Automated daily ratio calculations',
                  'Industry benchmark comparisons',
                  'Growth efficiency trends',
                  'Custom alert thresholds'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Daily Insights</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Stay on top of your growth metrics with daily updates and automated alerts when ratios fall below target thresholds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cohort Analysis Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Cohort Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Track user behavior patterns over time with sophisticated cohort analysis. Identify trends and optimize your retention strategies with 12 months of historical data.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'User segmentation by acquisition date',
                  'Retention curve analysis',
                  'Feature adoption tracking',
                  'Revenue patterns by cohort'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Understand user behavior patterns across different time periods to make informed product and marketing decisions.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add cohort analysis demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Cohort Analysis Demo
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">ROI Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add ROI calculator demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                ROI Calculator Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Calculate the potential revenue impact of your retention strategies with our advanced ROI calculator. Make informed decisions about your retention investments.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Revenue impact projections',
                  'Cost-benefit analysis tools',
                  'Industry benchmark comparisons',
                  'Custom scenario modeling'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Data-Driven Decisions</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Make confident investment decisions with accurate ROI projections based on your actual data and industry benchmarks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="mt-12 p-6 bg-[#1c1c1c]/5 rounded-xl">
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">11+</div>
              <p className="text-[#1c1c1c]/70">Key metrics tracked</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">12mo</div>
              <p className="text-[#1c1c1c]/70">Historical data analysis</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">24/7</div>
              <p className="text-[#1c1c1c]/70">Real-time monitoring</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">100%</div>
              <p className="text-[#1c1c1c]/70">Data accuracy</p>
            </div>
          </div>
        </section>
      </div>
      <HelpCTA 
  title="Make Data-Driven Decisions"
  description="Get real-time insights into your key metrics and optimize your growth strategy."
  buttonText="Start Analyzing"
  benefit="Key metrics tracked in real-time"
  metric="11+"
/>
    </HelpPageLayout>
  );
}