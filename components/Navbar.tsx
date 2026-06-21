"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`absolute top-0 w-full z-[60] transition-colors duration-300 ${isOpen ? 'bg-transparent border-none' : 'bg-black/20 border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              {pathname === '/' && (
                <div className={`font-medium text-sm text-white uppercase tracking-wider ${isOpen ? 'hidden md:block' : ''}`}>
                  Licensed & Insured
                </div>
              )}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-white hover:text-[#009961] transition-colors uppercase tracking-wider">Home</Link>
              <Link href="/about" className="text-sm font-medium text-white hover:text-[#009961] transition-colors uppercase tracking-wider">About Us</Link>
              <Link href="/services" className="text-sm font-medium text-white hover:text-[#009961] transition-colors uppercase tracking-wider">Services</Link>
              <Link href="/contact" className="text-sm font-medium text-white hover:text-[#009961] transition-colors uppercase tracking-wider">Contact Us</Link>
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                className="text-white hover:text-[#009961]"
                aria-label="Open menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[55] bg-[#08520e] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-[#009961] transition-colors uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-[#009961] transition-colors uppercase tracking-wider"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-[#009961] transition-colors uppercase tracking-wider"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-[#009961] transition-colors uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
