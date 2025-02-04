import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HelpCTAProps {
  title: string;
  description: string;
  buttonText: string;
  benefit: string;
  metric: string;
}

export default function HelpCTA({ title, description, buttonText, benefit, metric }: HelpCTAProps) {
  return (
    <section className="mt-20 p-8 bg-[#1c1c1c] rounded-2xl text-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-white/70 text-lg">{description}</p>
        
        <div className="bg-white/10 rounded-xl p-4 inline-block">
          <p className="text-2xl font-bold text-white mb-1">{metric}</p>
          <p className="text-white/70 text-sm">{benefit}</p>
        </div>

        <div>
          <button className="inline-flex items-center px-8 py-4 bg-white text-[#1c1c1c] rounded-xl font-semibold 
                           hover:bg-white/90 transition-all transform hover:scale-105">
            {buttonText}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
} 