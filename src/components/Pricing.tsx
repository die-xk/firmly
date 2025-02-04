'use client';

import { useState } from 'react';
import { 
  CheckIcon, 
  InformationCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

type Feature = {
  name: string;
  tooltip: string;
  included: ('starter' | 'growth' | 'enterprise')[];
};

const features: Feature[] = [
  {
    name: "AI Risk Scoring",
    tooltip: "Predict which users might churn using behavioral patterns and engagement metrics",
    included: ['growth', 'enterprise']
  },
  {
    name: "Omnichannel Campaigns",
    tooltip: "Send personalized win-back campaigns via email, in-app notifications, and more",
    included: ['starter', 'growth', 'enterprise']
  },
  {
    name: "Customer Health Tracking",
    tooltip: "Monitor user engagement, feature adoption, and satisfaction scores",
    included: ['starter', 'growth', 'enterprise']
  },
  {
    name: "Advanced Analytics",
    tooltip: "Deep dive into churn patterns, cohort analysis, and revenue impact",
    included: ['growth', 'enterprise']
  },
  {
    name: "Custom Integration",
    tooltip: "Connect with your existing tools and customize the platform to your needs",
    included: ['enterprise']
  }
];

const plans = [
  {
    name: "Starter",
    price: "$299",
    id: 'starter',
    description: "Perfect for small SaaS companies looking to reduce churn",
    cta: "Start Free Trial",
    color: "from-blue-50 to-purple-50"
  },
  {
    name: "Growth",
    price: "$599",
    id: 'growth',
    description: "For scaling teams ready to optimize retention",
    cta: "Start Free Trial",
    color: "from-purple-50 to-pink-50",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    id: 'enterprise',
    description: "For large MRR companies with complex needs",
    cta: "Book a Demo",
    color: "from-pink-50 to-blue-50"
  }
];

const Pricing = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16 space-y-2">
        <SparklesIcon className="h-8 w-8 mx-auto text-[#1c1c1c]/70" />
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c]">
          Simple Pricing, Proven ROI
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative bg-gradient-to-r ${plan.color} rounded-2xl p-8 border border-white/50 shadow-xl
                      ${plan.popular ? 'transform md:-translate-y-4' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 -right-3 bg-[#1c1c1c] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-[#1c1c1c] mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-[#1c1c1c]">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-[#1c1c1c]/70">/month</span>}
            </div>
            <p className="text-[#1c1c1c]/70 mb-6">{plan.description}</p>

            <button className={`w-full ${plan.popular ? 'bg-[#1c1c1c]' : 'bg-[#1c1c1c]/80'} 
                             text-white px-6 py-3 rounded-xl font-semibold 
                             hover:bg-[#1c1c1c]/90 transition-all transform hover:scale-105`}>
              {plan.cta} →
            </button>

            {/* Show initial 3 features */}
            <div className="mt-8 space-y-4">
              {features.slice(0, 3).map((feature) => (
                <div 
                  key={feature.name}
                  className="flex items-start gap-2"
                >
                  {feature.included.includes(plan.id as any) ? (
                    <CheckIcon className="h-5 w-5 text-[#1c1c1c]" />
                  ) : (
                    <span className="h-5 w-5" />
                  )}
                  <span className="text-[#1c1c1c]/80">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Expandable section */}
            {expandedPlan === plan.id && (
              <div className="mt-4 space-y-4">
                {features.slice(3).map((feature) => (
                  <div 
                    key={feature.name}
                    className="flex items-start gap-2 group relative"
                    onMouseEnter={() => setActiveTooltip(feature.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {feature.included.includes(plan.id as any) ? (
                      <CheckIcon className="h-5 w-5 text-[#1c1c1c]" />
                    ) : (
                      <span className="h-5 w-5" />
                    )}
                    <span className="text-[#1c1c1c]/80 flex items-center gap-1">
                      {feature.name}
                      <InformationCircleIcon className="h-4 w-4 opacity-50" />
                    </span>
                    
                    {activeTooltip === feature.name && (
                      <div className="absolute left-0 bottom-full mb-2 w-64 bg-white p-4 rounded-xl shadow-lg
                                    border border-[#1c1c1c]/10 text-sm text-[#1c1c1c]/70 z-10">
                        {feature.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* See more / See less button */}
            <button
              onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
              className="w-full text-center mt-4 text-sm text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors"
            >
              {expandedPlan === plan.id ? '← See less' : 'See all features →'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 