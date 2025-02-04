'use client';

import { CheckCircleIcon, ChartBarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ROICalculator from './ROICalculator';

const features = [
  { text: "Reduce churn by up to 20%", icon: ChartBarIcon },
  { text: "AI-powered user behavior analysis", icon: SparklesIcon },
  { text: "Engage users before they leave", icon: UserGroupIcon },
];

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
        {/* Left Column - Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1c1c1c] leading-tight">
            <span className="text-[#1c1c1c]">
              Predict, Retain, and Grow
            </span>
          </h1>
          
          <p className="text-xl text-[#1c1c1c]/70">
            Turn at-risk users into loyal advocates using behavioral AI, smart engagement campaigns, and community-powered rewards. Get started risk-free for 14 days.
          </p>
          
          <div className="space-y-4">
            <button className="bg-[#1c1c1c] text-white px-8 py-4 rounded-xl text-lg font-semibold 
                             hover:bg-[#1c1c1c]/90 transition-all transform hover:scale-105 hover:shadow-lg">
              Start Your Free Trial →
            </button>
            <p className="text-sm text-[#1c1c1c]/70 flex items-center justify-center lg:justify-start space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-[#1c1c1c]" />
              <span>No credit card required. Join 150+ SaaS companies saving 20%+ MRR</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <feature.icon className="h-6 w-6 text-[#1c1c1c]" />
                <span className="text-base text-[#1c1c1c]/70">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Calculator */}
        <div className="flex-1 mt-12 lg:mt-0">
          <ROICalculator />
        </div>
      </div>
    </div>
  );
};

export default Hero; 