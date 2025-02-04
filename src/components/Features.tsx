'use client';

import { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  SparklesIcon, 
  ChartBarIcon,
  EnvelopeIcon,
  GiftIcon,
  RocketLaunchIcon,
  PlayCircleIcon,
  ChatBubbleLeftIcon,
  QuestionMarkCircleIcon,
  BoltIcon,
  MegaphoneIcon,
  LifebuoyIcon,
  CalculatorIcon,
  UserGroupIcon,

  CurrencyDollarIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

type Category = 'observe' | 'ask' | 'retain' | 'analyze' | 'grow';

const features = {
  observe: [
    {
      title: "Heatmaps",
      description: "Visual representations of user clicks, movements, and scrolls",
      icon: ChartBarIcon,
      metric: "98% accuracy",
      helpLink: "help.hotjar.com"
    },
    {
      title: "Session Recordings",
      description: "Watch real user sessions to identify pain points",
      icon: PlayCircleIcon,
      metric: "100% GDPR compliant",
      helpLink: "help.hotjar.com"
    }
  ],
  ask: [
    {
      title: "On-site Surveys",
      description: "Gather targeted feedback from specific user segments",
      icon: ChatBubbleLeftIcon,
      metric: "+40% response rate",
      helpLink: "help.hotjar.com"

    },
    {
      title: "Feedback Widgets",
      description: "Collect instant visual feedback from users",
      icon: SparklesIcon,
      metric: "5min setup",
      helpLink: "iodigital.com"
    },
    {
      title: "Micro-Surveys",
      description: "Quick 1-2 question in-app feedback collection",
      icon: QuestionMarkCircleIcon,
      metric: "80% completion",
      helpLink: null
    }
  ],
  retain: [
    {
      title: "AI Churn Predictions",
      description: "Predict and prevent user churn with AI insights",
      icon: BoltIcon,
      metric: "93% accuracy"
    },
    {
      title: "Omnichannel Campaigns",
      description: "Re-engage users across email, SMS, and in-app",
      icon: MegaphoneIcon,
      metric: "+45% engagement"
    },
    {
      title: "Loyalty Engine",
      description: "Turn users into advocates with rewards",
      icon: GiftIcon,
      metric: "3x referrals"
    },
    {
      title: "Onboarding Rescue",
      description: "Reduce drop-offs with smart onboarding flows",
      icon: LifebuoyIcon,
      metric: "+60% completion"
    }
  ],
  analyze: [
    {
      title: "SaaS Metrics Dashboard",
      description: "Track 11 key metrics in real-time",
      icon: ChartBarIcon,
      metric: "Real-time data"
    },
    {
      title: "Quick Ratio Calculator",
      description: "Measure growth efficiency vs churn",
      icon: CalculatorIcon,
      metric: "Daily updates"
    },
    {
      title: "Cohort Analysis",
      description: "Track behavior patterns over time",
      icon: UserGroupIcon,
      metric: "12-month history"
    },
    {
      title: "ROI Calculator",
      description: "Estimate revenue impact of retention",
      icon: CurrencyDollarIcon,
      metric: "Industry benchmarks"
    }
  ],
  grow: [
    {
      title: "Community Integration",
      description: "Build communities on Slack/Discord",
      icon: UsersIcon,
      metric: "+75% engagement"
    },
    {
      title: "Affiliate Program",
      description: "Turn users into salespeople",
      icon: GiftIcon,
      metric: "2x MRR growth"
    }
  ]
};

const categoryColors = {
  observe: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-white',
    shadow: 'shadow-black/10',
    highlight: 'bg-white/20'
  },
  ask: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-white',
    shadow: 'shadow-black/10',
    highlight: 'bg-white/20'
  },
  retain: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-white',
    shadow: 'shadow-black/10',
    highlight: 'bg-white/20'
  },
  analyze: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-white',
    shadow: 'shadow-black/10',
    highlight: 'bg-white/20'
  },
  grow: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-white',
    shadow: 'shadow-black/10',
    highlight: 'bg-white/20'
  }
};

const Features = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('observe');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] to-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1c1c1c] p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-[128px]" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")' }}>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Everything You Need to Fight Churn
              </h2>
              <p className="text-xl text-white/60 mt-4 max-w-3xl mx-auto">
                A complete toolkit to identify, predict, and prevent customer churn before it happens
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Categories */}
              <div className="lg:w-1/3 space-y-4">
                {(Object.keys(features) as Category[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300
                      ${activeCategory === category 
                        ? 'bg-white/10 border-white/20 text-white shadow-lg transform -translate-y-1' 
                        : 'bg-white/5 backdrop-blur-sm border-white/10 text-white/70 hover:border-white/20'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                                    ${activeCategory === category 
                                      ? categoryColors[category].bg 
                                      : 'bg-[#1c1c1c]/5'}`}>
                        {category === 'observe' && <MagnifyingGlassIcon className="h-6 w-6" />}
                        {category === 'ask' && <SparklesIcon className="h-6 w-6" />}
                        {category === 'retain' && <RocketLaunchIcon className="h-6 w-6" />}
                        {category === 'analyze' && <ChartBarIcon className="h-6 w-6" />}
                        {category === 'grow' && <GiftIcon className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold capitalize mb-1">
                          {category}
                        </h3>
                        <p className="text-sm opacity-80">
                          {category === 'observe' && "Identify at-risk accounts early"}
                          {category === 'ask' && "Forecast churn before it happens"}
                          {category === 'retain' && "Convert challenges into opportunities"}
                          {category === 'analyze' && "Track key metrics"}
                          {category === 'grow' && "Expand your business"}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column - Feature Cards */}
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-6">
                  {features[activeCategory].map((feature, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10
                               hover:border-white/20 transition-all duration-300"
                      onMouseEnter={() => setHoveredFeature(feature.title)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      {/* Feature content */}
                      <div className="relative space-y-4">
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                                        ${categoryColors[activeCategory].bg}`}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <span className={`text-sm font-semibold px-3 py-1 rounded-full
                                         ${hoveredFeature === feature.title 
                                           ? `${categoryColors[activeCategory].highlight} text-white` 
                                           : 'bg-white/50 backdrop-blur-sm'}`}>
                            {feature.metric}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm opacity-80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 