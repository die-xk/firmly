'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-[#1c1c1c]/10 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheckIcon className="h-6 w-6 text-[#1c1c1c]/70" />
          <p className="text-sm text-[#1c1c1c]/70">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="/privacy" className="underline hover:text-[#1c1c1c]">Learn more</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="bg-[#1c1c1c] text-white px-6 py-2 rounded-xl text-sm font-semibold 
                     hover:bg-[#1c1c1c]/90 transition-all"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-6 py-2 rounded-xl text-sm font-semibold text-[#1c1c1c]/70 
                     hover:bg-[#1c1c1c]/5 transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 