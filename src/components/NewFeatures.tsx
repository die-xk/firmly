'use client';

import { useState } from 'react';
import { 
  EyeIcon, 
  VideoCameraIcon,
  ChatBubbleLeftIcon,
  SparklesIcon,
  UserGroupIcon,
  BoltIcon,
  MegaphoneIcon,
  GiftIcon,
  LifebuoyIcon,
  ChartBarIcon,
  CalculatorIcon,
  DocumentChartBarIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  ShareIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

type Category = 'OBSERVE' | 'ASK' | 'ENGAGE' | 'RETAIN' | 'ANALYZE' | 'GROW';

const features = {
  OBSERVE: [
    {
      title: "Heatmaps",
      description: "Visual representations of user clicks, movements, and scrolls on your website pages to identify areas of interest or confusion.",
      icon: EyeIcon,
      helpLink: "/help/observe#heatmaps"
    },
    {
      title: "Session Recordings",
      description: "Recordings of individual user sessions to observe navigation patterns and pinpoint user pain points.",
      icon: VideoCameraIcon,
      helpLink: "/help/observe#session-recordings"
    }
  ],
  ASK: [
    {
      title: "On-site Surveys",
      description: "Customizable surveys targeted to specific users anywhere on your website/mobile site to gather feedback about their experience.",
      icon: ChatBubbleLeftIcon,
      helpLink: "/help/ask#on-site-surveys"
    },
    {
      title: "Feedback Widgets",
      description: "Live widgets for users to provide instant visual feedback, helping you identify issues and growth opportunities.",
      icon: SparklesIcon,
      helpLink: "/help/ask#feedback-widgets"
    },
    {
      title: "Micro-Surveys",
      description: "1–2 question in-app surveys to gather quick feedback and improve user experience.",
      icon: QuestionMarkCircleIcon,
      helpLink: "/help/ask#micro-surveys"
    }
  ],
  ENGAGE: [
    {
      title: "Chatbots",
      description: "AI-powered chatbots to assist users with common questions and issues, improving customer satisfaction and reducing support costs.",
      icon: ChatBubbleLeftIcon,
      helpLink: "HELP.HOTJAR.COM"
    },
    {
      title: "In-App Messages",
      description: "Send targeted in-app messages to users to improve engagement and retention.",
      icon: SparklesIcon,
      helpLink: "HELP.HOTJAR.COM"
    }
  ],
  RETAIN: [
    {
      title: "AI Churn Predictions",
      description: "Predict and prevent user churn with AI insights",
      icon: BoltIcon,
      helpLink: "/help/retain#ai-churn-predictions"
    },
    {
      title: "Omnichannel Campaigns",
      description: "Re-engage users across email, SMS, and in-app",
      icon: MegaphoneIcon,
      helpLink: "/help/retain#omnichannel-campaigns"
    },
    {
      title: "Loyalty Engine",
      description: "Turn users into advocates with rewards",
      icon: GiftIcon,
      helpLink: "/help/retain#loyalty-engine"
    },
    {
      title: "Onboarding Rescue",
      description: "Reduce drop-offs with smart onboarding flows",
      icon: LifebuoyIcon,
      helpLink: "/help/retain#onboarding-rescue"
    }
  ],
  ANALYZE: [
    {
      title: "SaaS Metrics Dashboard",
      description: "Track 11 key metrics in real-time",
      icon: ChartBarIcon,
      helpLink: "/help/analyze#saas-metrics-dashboard"
    },
    {
      title: "Quick Ratio Calculator",
      description: "Measure growth efficiency vs churn",
      icon: CalculatorIcon,
      helpLink: "/help/analyze#quick-ratio-calculator"
    },
    {
      title: "Cohort Analysis",
      description: "Track behavior patterns over time",
      icon: UserGroupIcon,
      helpLink: "/help/analyze#cohort-analysis"
    },
    {
      title: "ROI Calculator",
      description: "Estimate revenue impact of retention",
      icon: CurrencyDollarIcon,
      helpLink: "/help/analyze#roi-calculator"
    }
  ],
  GROW: [
    {
      title: "Community Integration",
      description: "Build communities on Slack/Discord",
      icon: UsersIcon,
      helpLink: "/help/grow#community-integration"
    },
    {
      title: "Affiliate Program",
      description: "Turn users into salespeople",
      icon: GiftIcon,
      helpLink: "/help/grow#affiliate-program"
    }
  ]
};

const categoryIcons = {
  OBSERVE: EyeIcon,
  ASK: ChatBubbleLeftIcon,
  ENGAGE: UserGroupIcon,
  RETAIN: SparklesIcon,
  ANALYZE: ChartBarIcon,
  GROW: BoltIcon
};

const categoryDescriptions = {
  OBSERVE: "Identify at-risk accounts early",
  ASK: "Gather actionable feedback",
  ENGAGE: "Connect with your users",
  RETAIN: "Prevent customer churn",
  ANALYZE: "Track key metrics",
  GROW: "Expand your business"
};

const NewFeatures = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('OBSERVE');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
          A complete toolkit to identify, predict, and prevent customer churn before it happens
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Why settle for one tool, when you can have it all? Give your team the tools they need to deliver experiences that convert, every time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Categories */}
          <div className="lg:w-64 space-y-2">
            {Object.keys(features).map((category) => {
              const IconComponent = categoryIcons[category as Category];
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as Category)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all
                    ${selectedCategory === category 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center
                    ${selectedCategory === category ? 'bg-gray-200' : 'bg-gray-50'}`}>
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-medium">{category}</span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {categoryDescriptions[category as Category]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right content - Features */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {features[selectedCategory].map((feature) => (
                <div
                  key={feature.title}
                  className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 
                           hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                      {feature.helpLink && (
                        <Link 
                          href={feature.helpLink}
                          className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          Learn more →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { features, categoryIcons, categoryDescriptions };

export default NewFeatures; 