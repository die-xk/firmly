'use client';

import { CheckCircleIcon, PlayCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] to-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1c1c1c] p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[128px]" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")' }}>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <SparklesIcon className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">LIMITED TIME OFFER</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Ready to Turn Churn into Your Growth Engine?
            </h2>
            
            <p className="text-center text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              Join 150+ SaaS companies already reducing churn by up to 20% with our AI-powered platform
            </p>

            <div className="max-w-xl mx-auto mb-12 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="space-y-4">
                {[
                  { text: '14-day free trial, cancel anytime', highlight: 'FREE TRIAL' },
                  { text: 'Setup in minutes with no code required', highlight: 'EASY SETUP' },
                  { text: '24/7 priority support and onboarding', highlight: 'SUPPORT' }
                ].map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <CheckCircleIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-semibold text-green-400">{feature.highlight}</span>
                      <p className="text-white/80 font-medium">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
              <button className="bg-white text-[#1c1c1c] px-8 py-4 rounded-xl text-lg font-semibold 
                               hover:bg-white/90 transition-all transform hover:scale-105 hover:shadow-lg
                               w-full sm:w-auto relative group overflow-hidden">
                <span className="relative z-10">Start My Free Trial →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white 
                              transform group-hover:translate-x-full transition-transform duration-300" />
              </button>
              
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg 
                               font-semibold border-2 border-white/10 hover:border-white/20 
                               transition-all w-full sm:w-auto text-white
                               bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <PlayCircleIcon className="h-6 w-6" />
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 