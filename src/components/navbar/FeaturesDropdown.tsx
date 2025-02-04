'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { features, categoryIcons, categoryDescriptions } from '../NewFeatures';

export default function FeaturesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-[#1c1c1c]/70 hover:text-[#1c1c1c] px-3 py-2 text-sm font-medium transition-colors"
      >
        Features
        <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-[480px] bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(features).map(([category, items]) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <div key={category} className="p-3 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1c1c1c] capitalize">
                        {category.toLowerCase()}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1 ml-11">
                    {items.map((feature) => (
                      <li key={feature.title}>
                        <Link
                          href={feature.helpLink}
                          className="text-sm text-gray-600 hover:text-gray-900"
                          onClick={() => setIsOpen(false)}
                        >
                          {feature.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 