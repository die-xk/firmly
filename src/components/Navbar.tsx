'use client'    

import { useState } from 'react';
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import FeaturesDropdown from './navbar/FeaturesDropdown';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-[100] border-b border-[#1c1c1c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#1c1c1c]">
              Firmly
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <div className="relative z-[101]">
                  <FeaturesDropdown />
                </div>
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link 
                href="/sign-up" 
                className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] px-3 py-2 text-sm font-medium"
              >
                Sign up
              </Link>
              <SignInButton mode="modal">
                <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1c1c1c]/90 transition-colors">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[#1c1c1c]/10 max-w-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <SignedOut>
            <div className="border-t border-[#1c1c1c]/10 pt-4 mt-4">
              <Link
                href="/sign-up"
                className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] block px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
              <SignInButton mode="modal">
                <button className="w-full text-left text-[#1c1c1c]/70 hover:text-[#1c1c1c] px-3 py-2 text-base font-medium">
                  Sign in
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 