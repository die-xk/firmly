'use client';

import { useState } from 'react';
import { 
  ArrowPathIcon, 
  XCircleIcon, 
  BanknotesIcon, 
  ArrowRightIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const problems = [
  {
    title: "Late Detection",
    description: "Most companies only discover churn risks after users have already decided to leave",
    icon: ArrowPathIcon,
    link: "https://hbr.org/2016/05/reducing-customer-churn-with-predictive-analytics",
    source: "Harvard Business Review",
    stat: "60% too late"
  },
  {
    title: "Missed Signals",
    description: "Key warning signs get lost in data noise, leading to preventable customer losses",
    icon: XCircleIcon,
    link: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying",
    source: "McKinsey",
    stat: "45% missed"
  },
  {
    title: "Revenue Impact",
    description: "Every churned customer costs 5-25x more to replace than retain",
    icon: BanknotesIcon,
    link: "https://www.forrester.com/blogs/customer-retention-is-the-new-growth-2023-predictions",
    source: "Forrester",
    stat: "5-25x cost"
  }
];

const ProblemStatement = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <ChartBarIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">72%</span> of SaaS companies lose revenue to preventable churn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identify and fix these common problems before they impact your bottom line
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200
                       hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative corner lines */}
              <div className="absolute top-0 left-0 w-4 h-px bg-gray-100 group-hover:w-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute top-0 left-0 w-px h-4 bg-gray-100 group-hover:h-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute top-0 right-0 w-4 h-px bg-gray-100 group-hover:w-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute top-0 right-0 w-px h-4 bg-gray-100 group-hover:h-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute bottom-0 left-0 w-4 h-px bg-gray-100 group-hover:w-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute bottom-0 left-0 w-px h-4 bg-gray-100 group-hover:h-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute bottom-0 right-0 w-4 h-px bg-gray-100 group-hover:w-8 group-hover:bg-blue-100 transition-all" />
              <div className="absolute bottom-0 right-0 w-px h-4 bg-gray-100 group-hover:h-8 group-hover:bg-blue-100 transition-all" />

              <div className="relative space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 
                                group-hover:bg-blue-50 transition-colors">
                    <problem.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full
                                 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {problem.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
                <a 
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 
                           transition-colors group-hover:text-blue-600"
                >
                  <span>Read more on {problem.source}</span>
                  <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement; 