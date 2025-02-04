'use client';

import { useState, useEffect } from 'react';

const ROICalculator = () => {
  const [mrr, setMrr] = useState<string>('');
  const [savings, setSavings] = useState<string>('0');
  const [yearlySavings, setYearlySavings] = useState<string>('0');

  const calculateSavings = (value: string) => {
    const numericMrr = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericMrr)) {
      return {
        monthly: '0',
        yearly: '0'
      };
    }
    
    const monthlySavings = (numericMrr * 0.2);
    const annual = monthlySavings * 12;
    
    return {
      monthly: monthlySavings.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }),
      yearly: annual.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    };
  };

  useEffect(() => {
    const result = calculateSavings(mrr);
    setSavings(result.monthly || '0');
    setYearlySavings(result.yearly || '0');
  }, [mrr]);



  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#1c1c1c]/10 w-full max-w-xl">
      <h3 className="text-2xl font-semibold mb-6 text-[#1c1c1c]">
        Calculate Your Savings
      </h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="mrr" className="block text-base font-medium text-[#1c1c1c] mb-2">
            Current Monthly Revenue
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-[#1c1c1c]/60">$</span>
            </div>
            <input
              type="text"
              name="mrr"
              id="mrr"
              className="block w-full pl-8 pr-24 py-4 bg-white border-2 border-[#1c1c1c]/10 rounded-xl 
                       focus:ring-2 focus:ring-[#1c1c1c] focus:border-[#1c1c1c] transition-all
                       placeholder-[#1c1c1c]/40 text-lg"
              placeholder="10,000"
              value={mrr}
              onChange={(e) => setMrr(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-[#1c1c1c]/60">/ month</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="bg-[#1c1c1c]/5 rounded-xl p-6">
            <p className="text-sm text-[#1c1c1c]/60 mb-2">Monthly Savings</p>
            <p className="text-2xl font-bold text-[#1c1c1c]">
              {savings}
            </p>
          </div>
          <div className="bg-[#1c1c1c]/5 rounded-xl p-6">
            <p className="text-sm text-[#1c1c1c]/60 mb-2">Yearly Savings</p>
            <p className="text-2xl font-bold text-[#1c1c1c]">
              {yearlySavings}
            </p>
          </div>
        </div>

        <button className="w-full bg-[#1c1c1c] text-white px-6 py-4 rounded-xl 
                         text-lg font-semibold hover:bg-[#1c1c1c]/90 transition-all 
                         transform hover:scale-[1.02] hover:shadow-lg">
          See How It Works →
        </button>
      </div>
    </div>
  );
};

export default ROICalculator; 