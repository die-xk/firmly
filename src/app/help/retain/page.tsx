import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import HelpPageLayout from '@/components/help/HelpPageLayout';
import HelpCTA from '@/components/help/HelpCTA';

export default function RetainHelpPage() {
  return (
    <HelpPageLayout
      title="Retain: AI-Powered Churn Prevention"
      description="Predict and prevent customer churn with AI insights, smart engagement campaigns, and targeted retention strategies"
    >
      <div className="space-y-12">
        {/* AI Churn Predictions Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">AI Churn Predictions</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Leverage advanced machine learning to identify at-risk customers before they churn. Our AI model achieves 93% accuracy in predicting customer churn, giving you time to intervene.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Real-time risk scoring for all customers',
                  'Early warning system for behavior changes',
                  'Automated risk level categorization',
                  'Customizable prediction thresholds'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our AI model continuously learns from your data, improving its prediction accuracy over time and adapting to your unique business patterns.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add AI prediction dashboard demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                AI Prediction Dashboard Demo
              </div>
            </div>
          </div>
        </section>

        {/* Omnichannel Campaigns Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Omnichannel Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add campaign manager demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Campaign Manager Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Engage users across multiple channels with personalized retention campaigns that achieve 45% higher engagement rates than single-channel approaches.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Synchronized messaging across email, SMS, and in-app',
                  'Smart timing optimization for each channel',
                  'Personalized content based on user behavior',
                  'A/B testing for campaign optimization'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Campaign Performance</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our omnichannel approach ensures your message reaches users through their preferred channels, resulting in 45% higher engagement rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loyalty Engine Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Loyalty Engine</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Transform your users into brand advocates with a powerful loyalty program that drives referrals and increases customer lifetime value.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Customizable reward tiers and benefits',
                  'Automated referral tracking and rewards',
                  'Gamification elements to drive engagement',
                  'Integration with existing loyalty programs'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Companies using our Loyalty Engine see an average 3x increase in referrals and 40% higher customer lifetime value.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add loyalty program demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Loyalty Program Demo
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Rescue Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Onboarding Rescue</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add onboarding flow demo */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Onboarding Flow Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Reduce new user drop-offs with intelligent onboarding flows that adapt to user behavior and ensure key feature adoption.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Smart progress tracking and notifications',
                  'Personalized onboarding paths',
                  'Interactive product tours and tooltips',
                  'Success milestone celebrations'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Proven Results</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our smart onboarding flows increase completion rates by 60% and significantly improve long-term user retention.
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
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">93%</div>
              <p className="text-[#1c1c1c]/70">Churn prediction accuracy</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">45%</div>
              <p className="text-[#1c1c1c]/70">Higher engagement rates</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">3x</div>
              <p className="text-[#1c1c1c]/70">Increase in referrals</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">60%</div>
              <p className="text-[#1c1c1c]/70">Better onboarding completion</p>
            </div>
          </div>
        </section>
      </div>
      <HelpCTA 
  title="Stop Churn Before It Happens"
  description="Use AI-powered predictions to identify and retain at-risk customers."
  buttonText="Prevent Churn Now"
  benefit="Churn prediction accuracy"
  metric="93%"
/>
    </HelpPageLayout>
  );
} 