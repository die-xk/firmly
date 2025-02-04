import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Footer from '@/components/Footer';

type HelpPageLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const HelpPageLayout = ({ title, description, children }: HelpPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-[#1c1c1c]/70 hover:text-[#1c1c1c] mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Features
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-[#1c1c1c] mb-4">{title}</h1>
          <p className="text-xl text-[#1c1c1c]/70">{description}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPageLayout; 