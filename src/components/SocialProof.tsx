'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  SparklesIcon,
  ClockIcon,
  ChartBarIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';

const testimonials = [
  {
    quote: "Using Firmly, we reduced churn by 22% in 3 months and grew referrals by 40%.",
    author: "Sarah Chen",
    role: "CEO",
    company: "DataStack",
    metric: "+22% retention",
    color: "from-blue-50 to-indigo-50"
  },
  {
    quote: "The AI predictions helped us save $50K in annual revenue by preventing high-value churns.",
    author: "Michael Torres",
    role: "Head of Growth",
    company: "SaaSify",
    metric: "$50K saved",
    color: "from-indigo-50 to-blue-50"
  },
  {
    quote: "Best investment we made this year. Firmly paid for itself in the first month.",
    author: "Emma Wright",
    role: "Founder",
    company: "DevFlow",
    metric: "3x ROI",
    color: "from-blue-50 to-indigo-50"
  }
];

const quizSteps = [
  {
    question: "What's your monthly recurring revenue (MRR)?",
    options: ["$10k-50k", "$50k-200k", "$200k-1M", "$1M+"],
    valueMap: [30000, 125000, 600000, 2000000],
    color: "from-blue-50 to-indigo-50"
  },
  {
    question: "What's your current monthly churn rate?",
    options: ["1-3%", "3-5%", "5-10%", "10%+"],
    valueMap: [0.02, 0.04, 0.075, 0.12],
    color: "from-indigo-50 to-blue-50"
  },
  {
    question: "How many customers do you have?",
    options: ["10-50", "51-200", "201-1000", "1000+"],
    valueMap: [30, 125, 600, 2000],
    color: "from-blue-50 to-indigo-50"
  }
];

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [mouseMovements, setMouseMovements] = useState(0);
  const [featureClicks, setFeatureClicks] = useState<{ [key: string]: number }>({
    'Revenue Input': 0,
    'Churn Input': 0,
    'Customer Input': 0
  });

  useEffect(() => {
    // Track scroll percentage
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / documentHeight) * 100);
      setScrollPercentage(Math.min(percentage, 100));
    };

    // Track time on site
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    // Track mouse movements
    const handleMouseMove = () => {
      setMouseMovements(prev => prev + 1);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleQuizAnswer = (valueIndex: number) => {
    // Track feature usage
    if (quizStep === 0) {
      setFeatureClicks(prev => ({ ...prev, 'Revenue Input': prev['Revenue Input'] + 1 }));
    } else if (quizStep === 1) {
      setFeatureClicks(prev => ({ ...prev, 'Churn Input': prev['Churn Input'] + 1 }));
    } else {
      setFeatureClicks(prev => ({ ...prev, 'Customer Input': prev['Customer Input'] + 1 }));
    }

    const newAnswers = [...answers, quizSteps[quizStep].valueMap[valueIndex]];
    if (quizStep < quizSteps.length - 1) {
      setAnswers(newAnswers);
      setQuizStep(prev => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setFeatureClicks(prev => ({ ...prev, 'Quiz Started': prev['Quiz Started'] + 1 }));
  };

  const calculateLoss = () => {
    const mrr = answers[0];
    const churnRate = answers[1];
    const monthlyLoss = mrr * churnRate;
    return monthlyLoss.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
  };

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
            <div className="text-center mb-16 space-y-2">
              <SparklesIcon className="h-8 w-8 mx-auto text-white/70" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Trusted by SaaS Teams Like Yours
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side - Testimonials and Quiz */}
              <div className="lg:w-2/3">
                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto mb-12">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className={`bg-gradient-to-r ${testimonials[currentTestimonial].color} 
                                  rounded-2xl p-8 border border-white/50 shadow-xl transition-all duration-500`}>
                      <div className="absolute -top-3 -right-3 bg-white px-4 py-2 rounded-full shadow-lg">
                        <span className="font-semibold text-[#1c1c1c]">
                          {testimonials[currentTestimonial].metric}
                        </span>
                      </div>
                      
                      <p className="text-xl text-[#1c1c1c] mb-6 leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-white/50 flex items-center justify-center">
                            <span className="text-lg font-bold text-[#1c1c1c]">
                              {testimonials[currentTestimonial].author[0]}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1c1c1c]">
                              {testimonials[currentTestimonial].author}
                            </p>
                            <p className="text-sm text-[#1c1c1c]/70">
                              {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={prevTestimonial}
                            className="p-2 hover:bg-white/50 rounded-full transition-all"
                          >
                            <ChevronLeftIcon className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={nextTestimonial}
                            className="p-2 hover:bg-white/50 rounded-full transition-all"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quiz Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    How Much Is Churn Costing You?
                  </h3>


                  {!showResult ? (
                    <div>
                      <p className="text-lg mb-6 text-white">{quizSteps[quizStep].question}</p>
                      <div className="grid grid-cols-2 gap-4">

                        {quizSteps[quizStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuizAnswer(index)}
                            className="p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/80 
                                     transition-all text-left font-medium border border-white/50 text-[#1c1c1c]"
                          >
                            {option}
                          </button>

                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-6">
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                        <p className="text-lg text-[#1c1c1c]/70">
                          You're losing approximately
                        </p>
                        <p className="text-4xl font-bold text-[#1c1c1c] mt-2">
                          {calculateLoss()} monthly
                        </p>
                      </div>
                      <button className="bg-[#1c1c1c] text-white px-8 py-4 rounded-xl 
                                       font-semibold hover:bg-[#1c1c1c]/90 transition-all
                                       transform hover:scale-105">
                        Book a Demo to Fix It →
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Engagement Metrics */}
              <div className="lg:w-1/3 space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Live Engagement Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ChartBarIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-white">Page Scroll</span>
                      </div>
                      <span className="font-semibold text-white">{scrollPercentage}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-white">Time on Site</span>
                      </div>
                      <span className="font-semibold text-white">
                        {Math.floor(timeOnSite / 60)}m {timeOnSite % 60}s
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CursorArrowRaysIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-white">Interactions</span>
                      </div>
                      <span className="font-semibold text-white">{mouseMovements}</span>
                    </div>
                  </div>
                </div>

                {/* Feature Usage Tracking */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Feature Usage Tracking
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(featureClicks).map(([feature, count]) => (
                      <div key={feature} className="flex items-center justify-between">
                        <span className="text-white">{feature}</span>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 bg-white/50 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 transition-all duration-500"
                              style={{ width: `${Math.min(count * 25, 100)}%` }}
                            />
                          </div>
                          <span className="font-semibold text-white min-w-[2rem]">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-white/70">
                    Just like this demo tracks your interactions, Firmly monitors feature usage 
                    patterns to identify engagement trends and predict churn risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 