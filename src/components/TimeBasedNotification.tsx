'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

const TimeBasedNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    mrr: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 max-w-md w-[calc(100vw-2rem)] sm:w-full z-40 animate-slide-in">
      <div className="bg-white rounded-2xl shadow-xl border border-[#1c1c1c]/10 overflow-hidden">
        {/* Header - Always visible */}
        {isExpanded ? (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 flex items-start justify-between">
            <div className="flex gap-4">
              <DocumentChartBarIcon className="h-7 w-7 text-[#1c1c1c]" />
              <div>
                <h3 className="font-semibold text-lg text-[#1c1c1c] mb-1">
                  Free Custom Churn Audit
                </h3>
                <p className="text-[#1c1c1c]/70">
                  See Your Top 3 Retention Risks
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-[#1c1c1c]/40 hover:text-[#1c1c1c]/60 p-1"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DocumentChartBarIcon className="h-6 w-6 text-[#1c1c1c]" />
              <span className="font-medium text-[#1c1c1c]">
                Free Custom Churn Audit
              </span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-[#1c1c1c]/40 hover:text-[#1c1c1c]/60 p-1"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="p-4 sm:p-8">
            <p className="text-[#1c1c1c]/70 text-lg mb-6">
              Let our AI analyze your current setup and email you a personalized report.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-[#1c1c1c]/70">Work Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-[#1c1c1c]/10 
                           focus:ring-2 focus:ring-[#1c1c1c] focus:border-[#1c1c1c] text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#1c1c1c]/70">Company Name</label>
                <input
                  type="text"
                  placeholder="Your company"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#1c1c1c]/10 
                           focus:ring-2 focus:ring-[#1c1c1c] focus:border-[#1c1c1c]"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#1c1c1c]/70">Monthly Revenue (optional)</label>
                <input
                  type="text"
                  placeholder="$0,000"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#1c1c1c]/10 
                           focus:ring-2 focus:ring-[#1c1c1c] focus:border-[#1c1c1c]"
                  value={formData.mrr}
                  onChange={(e) => setFormData(prev => ({ ...prev, mrr: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1c1c1c] text-white px-6 py-4 rounded-xl 
                         text-lg font-semibold hover:bg-[#1c1c1c]/90 transition-all
                         transform hover:scale-[1.02] mt-6"
              >
                Get My Free Audit →
              </button>
            </form>
          </div>
        )}

        {/* Expand Button - Only visible when not expanded */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full p-5 text-center text-[#1c1c1c] hover:bg-[#1c1c1c]/5 
                     font-medium transition-colors text-lg"
          >
            Get My Free Audit →
          </button>
        )}
      </div>
    </div>
  );
};

export default TimeBasedNotification; 