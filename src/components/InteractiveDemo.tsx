'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  CursorArrowRaysIcon,
  ChatBubbleLeftIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

const quizSteps = [
  {
    question: "What's your monthly recurring revenue (MRR)?",
    options: ["$10k-50k", "$50k-200k", "$200k-1M", "$1M+"],
    valueMap: [30000, 125000, 600000, 2000000]
  },
  {
    question: "What's your current monthly churn rate?",
    options: ["1-3%", "3-5%", "5-10%", "10%+"],
    valueMap: [0.02, 0.04, 0.075, 0.12]
  },
  {
    question: "How many customers do you have?",
    options: ["10-50", "51-200", "201-1000", "1000+"],
    valueMap: [30, 125, 600, 2000]
  }
];

const InteractiveDemo = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [mouseMovements, setMouseMovements] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [mouseTrail, setMouseTrail] = useState<{ x: number; y: number }[]>([]);
  const [featureClicks, setFeatureClicks] = useState({
    'Revenue Input': 0,
    'Churn Input': 0,
    'Customer Input': 0,
  });
  const componentRef = useRef<HTMLDivElement>(null);
  const trailTimeout = useRef<NodeJS.Timeout>();
  const [sessionId] = useState(() => uuidv4());

  // Track scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((window.scrollY / scrollHeight) * 100);
      setScrollPercentage(percentage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on site
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track mouse movements
  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMovements(prev => prev + 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show feedback after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeedback(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Track mouse movement over the component
  useEffect(() => {
    const component = componentRef.current;
    if (!component) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = component.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMouseTrail(prev => [...prev, { x, y }].slice(-50)); // Keep last 50 points

      // Clear previous timeout
      if (trailTimeout.current) {
        clearTimeout(trailTimeout.current);
      }

      // Set new timeout to clear trail after 2 seconds of no movement
      trailTimeout.current = setTimeout(() => {
        setMouseTrail([]);
      }, 2000);
    };

    component.addEventListener('mousemove', handleMouseMove);
    return () => {
      component.removeEventListener('mousemove', handleMouseMove);
      if (trailTimeout.current) {
        clearTimeout(trailTimeout.current);
      }
    };
  }, []);

  const handleQuizAnswer = async (valueIndex: number) => {
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
      const monthlyLoss = newAnswers[0] * newAnswers[1];
      await saveQuizResponse(monthlyLoss);
      await saveUserInteractions();
    }
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

  const saveQuizResponse = async (monthlyLoss: number) => {
    try {
      await supabase.from('quiz_responses').insert({
        mrr: answers[0],
        churn_rate: answers[1],
        customer_count: answers[2],
        monthly_loss: monthlyLoss
      });
    } catch (error) {
      console.error('Error saving quiz response:', error);
    }
  };

  const saveUserInteractions = async () => {
    try {
      await supabase.from('user_interactions').insert({
        session_id: sessionId,
        scroll_percentage: scrollPercentage,
        time_on_site: timeOnSite,
        mouse_movements: mouseMovements,
        feature_clicks: featureClicks
      });
    } catch (error) {
      console.error('Error saving user interactions:', error);
    }
  };

  const handleFeedback = async (rating: number, text: string) => {
    try {
      await supabase.from('user_interactions').update({
        feedback_rating: rating,
        feedback_text: text
      }).eq('session_id', sessionId);
      setShowFeedback(false);
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  return (
    <section className="bg-white relative" ref={componentRef}>
      {/* Mouse Trail SVG - Updated positioning */}
      <svg 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible'
        }}
      >
        {mouseTrail.map((point, i) => {
          const nextPoint = mouseTrail[i + 1];
          if (!nextPoint) return null;
          return (
            <line
              key={i}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-opacity duration-300"
            />
          );
        })}
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Quiz */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How Much Is Churn Costing You?
              </h2>

              {!showResult ? (
                <div>
                  <p className="text-lg mb-6 text-gray-700">{quizSteps[quizStep].question}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {quizSteps[quizStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        className="p-4 bg-white rounded-xl hover:bg-gray-50 transition-all text-left font-medium border border-gray-200 text-gray-900 hover:border-gray-300 hover:shadow-md"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="bg-white rounded-xl p-8 border border-gray-200">
                    <p className="text-lg text-gray-600">
                      You're losing approximately
                    </p>
                    <p className="text-4xl font-bold text-gray-900 mt-2">
                      {calculateLoss()} monthly
                    </p>
                  </div>
                  <button 
                    className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Book a Demo to Fix It →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Metrics */}
          <div className="lg:w-1/3 space-y-6">
            {/* Live Engagement Metrics */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Live Engagement Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Page Scroll</span>
                  </div>
                  <span className="font-semibold text-gray-900">{scrollPercentage}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Time on Site</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {Math.floor(timeOnSite / 60)}m {timeOnSite % 60}s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CursorArrowRaysIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Interactions</span>
                  </div>
                  <span className="font-semibold text-gray-900">{mouseMovements}</span>
                </div>
              </div>
            </div>

            {/* Feature Usage Tracking */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Feature Usage Tracking
              </h3>
              <div className="space-y-3">
                {Object.entries(featureClicks).map(([feature, count]) => (
                  <div key={feature} className="flex items-center justify-between">
                    <span className="text-gray-700">{feature}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 transition-all duration-500"
                          style={{ width: `${Math.min(count * 25, 100)}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900 min-w-[2rem]">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm text-gray-600">
                Just like this demo tracks your interactions, Firmly monitors feature usage 
                patterns to identify engagement trends and predict churn risk.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="fixed bottom-8 right-8 max-w-sm bg-white rounded-2xl border border-gray-200 shadow-lg p-6 animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <ChatBubbleLeftIcon className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Quick Feedback</h3>
              </div>
              <button 
                onClick={() => setShowFeedback(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              How likely are you to recommend this calculator to a colleague?
            </p>
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-600"
                  onClick={() => handleFeedback(i + 1, '')}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <textarea
              placeholder="Any additional feedback? (optional)"
              className="w-full p-3 rounded-lg border border-gray-200 text-sm"
              rows={3}
            />
          </div>
        )}
      </div>

      {/* Add keyframes for animation */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default InteractiveDemo; 