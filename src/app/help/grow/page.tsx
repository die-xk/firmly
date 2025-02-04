import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import HelpPageLayout from '@/components/help/HelpPageLayout';
import HelpCTA from '@/components/help/HelpCTA';

export default function GrowHelpPage() {
  return (
    <HelpPageLayout
      title="Grow: Community-Driven Growth"
      description="Transform your users into advocates and accelerate growth through community building and affiliate partnerships"
    >
      <div className="space-y-12">
        {/* Community Integration Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Community Integration</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Build thriving communities on Slack and Discord that drive 75% higher user engagement. Connect your users and turn them into passionate advocates for your product.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'One-click Slack/Discord integration',
                  'Automated member onboarding flows',
                  'Community analytics dashboard',
                  'Engagement automation tools'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Communities built with our platform see 75% higher engagement rates and 3x more user-generated content than traditional approaches.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add community dashboard demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Community Dashboard Demo
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Program Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Affiliate Program</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add affiliate program demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Affiliate Program Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Transform your users into a powerful sales force with our automated affiliate program. Companies using our platform see an average 2x increase in MRR growth through affiliate referrals.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Automated commission tracking and payouts',
                  'Custom affiliate portals and dashboards',
                  'Marketing resource library for affiliates',
                  'Performance analytics and insights'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Proven Growth</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our affiliate program management tools have helped companies achieve 2x MRR growth through strategic partnerships and automated referral tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Resources Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Growth Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Access a comprehensive library of growth resources, templates, and strategies to accelerate your community-driven growth initiatives.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Ready-to-use campaign templates',
                  'Community management playbooks',
                  'Growth strategy workshops',
                  'Expert consultation sessions'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our resource library is continuously updated with the latest growth strategies and best practices from successful SaaS companies.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add resources library demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Resources Library Demo
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="mt-12 p-6 bg-[#1c1c1c]/5 rounded-xl">
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">75%</div>
              <p className="text-[#1c1c1c]/70">Higher community engagement</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">2x</div>
              <p className="text-[#1c1c1c]/70">MRR growth via affiliates</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">3x</div>
              <p className="text-[#1c1c1c]/70">More user-generated content</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">24/7</div>
              <p className="text-[#1c1c1c]/70">Community support</p>
            </div>
          </div>
        </section>
      </div>
      <HelpCTA 
  title="Accelerate Your Growth"
  description="Build thriving communities and turn your users into powerful advocates."
  buttonText="Start Growing"
  benefit="Community engagement increase"
  metric="75%"
/>
    </HelpPageLayout>
  );
} 