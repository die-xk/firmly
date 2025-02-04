import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import HelpPageLayout from '@/components/help/HelpPageLayout';
import HelpCTA from '@/components/help/HelpCTA';

export default function AskHelpPage() {
  return (
    <HelpPageLayout
      title="Ask: User Feedback & Surveys"
      description="Collect actionable feedback from your users through targeted surveys and feedback widgets to drive product improvements"
    >
      <div className="space-y-12">
        {/* On-site Surveys Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">On-site Surveys</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Target specific user segments with contextual surveys that achieve 40% higher response rates than traditional methods. Gather insights exactly when and where they matter most.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Trigger surveys based on user behavior or demographics',
                  'Customize appearance to match your brand',
                  'Choose from proven survey templates',
                  'Analyze responses with AI-powered sentiment analysis'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  Our smart targeting ensures surveys appear at the perfect moment, resulting in 40% higher response rates and more actionable feedback.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add survey demo image here */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Survey Demo Image
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Widgets Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Feedback Widgets</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add feedback widget demo here */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Feedback Widget Demo
              </div>
            </div>
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Collect visual feedback directly on your website or app with our intuitive feedback widgets. Setup takes just 5 minutes and provides immediate insights into user satisfaction.
              </p>
              <ul className="space-y-2 text-[#1c1c1c]/70">
                {[
                  'Visual point-and-click feedback collection',
                  'Emoji reactions for quick sentiment capture',
                  'Screenshot annotations from users',
                  'Instant notifications for negative feedback'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c] mb-2">Quick Setup</h4>
                <p className="text-[#1c1c1c]/70 text-sm">
                  Get started in 5 minutes with our no-code installation. Just paste a single line of code and start collecting feedback immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Micro-Surveys Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">Micro-Surveys</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-[#1c1c1c]/70">
                Achieve 80% completion rates with ultra-focused, single-question surveys that respect your users' time while delivering valuable insights.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#1c1c1c]/70">
                <li>One-click response options</li>
                <li>Context-aware survey triggering</li>
                <li>A/B test different questions</li>
                <li>Real-time response analytics</li>
              </ul>
              <div className="mt-6 p-4 bg-[#1c1c1c]/5 rounded-lg">
                <p className="text-[#1c1c1c]/70 text-sm">
                  By focusing on single, targeted questions, micro-surveys achieve 3x higher completion rates compared to traditional long-form surveys.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] bg-[#1c1c1c]/5 rounded-lg">
              {/* Add micro-survey demo here */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1c1c1c]/40">
                Micro-Survey Demo
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="mt-12 p-6 bg-[#1c1c1c]/5 rounded-xl">
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">40%</div>
              <p className="text-[#1c1c1c]/70">Higher response rates with targeted surveys</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">80%</div>
              <p className="text-[#1c1c1c]/70">Completion rate for micro-surveys</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1c1c1c] mb-2">5min</div>
              <p className="text-[#1c1c1c]/70">Average setup time for feedback widgets</p>
            </div>
          </div>
        </section>
      </div>
      <HelpCTA 
  title="Start Collecting Valuable User Feedback"
  description="Get actionable insights directly from your users to build better products."
  buttonText="Try It Free"
  benefit="Higher response rates"
  metric="40%"
/>
    </HelpPageLayout>
  );
} 