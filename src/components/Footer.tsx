'use client';

import { 
  TwitterIcon, 
  LinkedInIcon, 
  GitHubIcon 
} from '@/components/icons/SocialIcons';

const footerLinks = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  resources: [
    { name: 'Community', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'API', href: '#' }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Firmly</h3>
            <p className="text-white/70 text-sm mb-4">
              Turn churn into your most powerful growth engine with AI-powered retention.
            </p>
            <div className="flex space-x-4">
              <TwitterIcon className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
              <LinkedInIcon className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
              <GitHubIcon className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} 
                       className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-white/70 text-sm">
            © 2024 Firmly. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 