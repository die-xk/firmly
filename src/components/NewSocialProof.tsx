'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "Using Firmly, we reduced churn by 22% in 3 months and grew referrals by 40%.",
    author: "Sarah Chen",
    role: "CEO",
    company: "DataStack",
    metric: "+22% retention",
    rating: 5
  },
  {
    quote: "The AI predictions helped us save $50K in annual revenue by preventing high-value churns.",
    author: "Michael Torres",
    role: "Head of Growth",
    company: "SaaSify",
    metric: "$50K saved",
    rating: 5
  },
  {
    quote: "Best investment we made this year. Firmly paid for itself in the first month.",
    author: "Emma Wright",
    role: "Founder",
    company: "DevFlow",
    metric: "3x ROI",
    rating: 5
  }
];

const NewSocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center mb-16">
          <SparklesIcon className="h-8 w-8 mx-auto text-gray-400 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Leading SaaS Teams
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join 150+ companies already reducing churn and growing faster with Firmly
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          {/* Navigation Buttons - Hidden on mobile */}
          <button 
            onClick={previousTestimonial}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full border border-gray-200 
                     hover:bg-gray-50 transition-all z-10"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full border border-gray-200 
                     hover:bg-gray-50 transition-all z-10"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-400" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600">
                {testimonials[currentTestimonial].metric}
              </span>
            </div>

            <blockquote className="text-2xl font-medium text-gray-900 mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </div>
              </div>
              <img 
                src={`/logos/${testimonials[currentTestimonial].company.toLowerCase()}.svg`}
                alt={testimonials[currentTestimonial].company}
                className="h-8 w-auto opacity-50"
              />
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all
                  ${currentTestimonial === index ? 'bg-gray-900 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSocialProof; 