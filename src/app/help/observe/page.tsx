import Image from 'next/image';
import HelpPageLayout from '@/components/help/HelpPageLayout';
import Footer from '@/components/Footer';
import HelpCTA from '@/components/help/HelpCTA';

export default function ObserveHelpPage() {
  return (
    <HelpPageLayout
      title="Observe: User Behavior Analytics"
      description="Understand how users interact with your product through visual analytics and session recordings to make data-driven decisions"
    >
      <div className="space-y-12">
        {/* Heatmaps Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Heatmaps</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Heatmaps transform complex user behavior data into intuitive visual insights, helping you optimize your UI and boost conversion rates by up to 30%.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#1c1c1c]/70">
                <li>Identify high-engagement areas to optimize content placement</li>
                <li>Discover unused UI elements that can be removed or improved</li>
                <li>Compare behavior patterns across different devices</li>
                <li>Track the effectiveness of UI changes in real-time</li>
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our heatmaps update in real-time and maintain 98% accuracy across all device types, giving you the most reliable data for your UI optimization decisions.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add demo heatmap image here */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Heatmap Demo Image
              </div>
            </div>
          </div>
        </section>

        {/* Session Recordings Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Session Recordings</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add session recording player here */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Session Recording Player
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Session recordings provide unparalleled insights into user behavior, helping you identify and fix usability issues before they impact your bottom line. Our customers see an average 25% reduction in support tickets after implementing session recordings.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#1c1c1c]/70">
                <li>Understand user journeys and identify drop-off points</li>
                <li>Diagnose and reproduce bugs with full context</li>
                <li>Validate product decisions with real user behavior</li>
                <li>Improve onboarding by watching new user sessions</li>
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Privacy First</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  All recordings are automatically scrubbed of sensitive data and comply with GDPR requirements. Personal information, input fields, and custom elements are automatically redacted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="mt-12 p-6 bg-[#1c1c1c]/5 rounded-xl">
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">30%</div>
              <p className="text-[#1c1c1c]/70">Average conversion rate improvement after UI optimization</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">25%</div>
              <p className="text-[#1c1c1c]/70">Reduction in customer support tickets</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">2x</div>
              <p className="text-[#1c1c1c]/70">Faster time to resolve UX issues</p>
            </div>
          </div>
        </section>
      </div>
      // Add before closing HelpPageLayout
<HelpCTA 
  title="Ready to Understand Your Users Better?"
  description="Get deep insights into user behavior and make data-driven decisions to improve your product."
  buttonText="Start Free Trial"
  benefit="Average conversion rate improvement"
  metric="30%"
/>
    </HelpPageLayout>
    
  );
} 