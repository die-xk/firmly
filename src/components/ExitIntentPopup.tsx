'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // Cursor moves to top of window
        !hasShown // Haven't shown popup yet
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-[calc(100vw-2rem)] relative animate-fade-in">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <DocumentTextIcon className="h-8 w-8 text-[#1c1c1c]" />
          <span className="text-sm font-medium text-[#1c1c1c]/60">FREE RESOURCE</span>
        </div>

        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-3">
          Wait! Get Our 7-Day Churn Rescue Playbook – Free
        </h2>
        
        <p className="text-[#1c1c1c]/70 mb-6">
          Actionable strategies we used to help SaaSify reduce churn by 27% in 2 weeks. Delivered via email.
        </p>

        <div className="bg-[#1c1c1c]/5 rounded-xl p-3 sm:p-4 mb-6">
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <span className="text-[#1c1c1c]/70">✓</span>
              <span className="text-[#1c1c1c]/70">7 proven email templates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#1c1c1c]/70">✓</span>
              <span className="text-[#1c1c1c]/70">Onboarding checklist</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#1c1c1c]/70">✓</span>
              <span className="text-[#1c1c1c]/70">3 "win-back" campaign scripts</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-[#1c1c1c]/10 
                     focus:ring-2 focus:ring-[#1c1c1c] focus:border-[#1c1c1c] text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#1c1c1c] text-white px-6 py-3 rounded-xl 
                     font-semibold hover:bg-[#1c1c1c]/90 transition-all"
          >
            Send Me the Playbook →
          </button>
        </form>

        <p className="text-xs text-center text-[#1c1c1c]/60 mt-4">
          Used by 150+ SaaS teams. Don't miss these proven tactics.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup; 