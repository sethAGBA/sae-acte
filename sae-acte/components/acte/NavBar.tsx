'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { navTabs, type NavTab } from './data';

type NavBarProps = {
  activeTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
  mobileMenuOpen?: boolean;
  onToggleMobile?: () => void;
};

const NavBar = ({ activeTab, onTabChange, mobileMenuOpen, onToggleMobile }: NavBarProps) => {
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const pathname = usePathname();
  const derivedActiveTab = pathname === '/' ? 'accueil' : (pathname.split('/')[1] ?? 'accueil');
  const currentTab = activeTab ?? derivedActiveTab;
  const isMobileMenuOpen = mobileMenuOpen ?? internalMobileOpen;
  const toggleMobile = onToggleMobile ?? (() => setInternalMobileOpen((open) => !open));
  const handleTabClick = (tab: NavTab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    if (isMobileMenuOpen) {
      toggleMobile();
    }
  };

  const tabHref = (tab: string) => (tab === 'accueil' ? '/' : `/${tab}`);

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      {/* Top bar avec contacts et réseaux sociaux */}
      <div className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+22892217564" className="flex items-center gap-2 hover:text-white/80 transition">
              <Phone size={16} />
              <span>+228 92 21 75 64 / 98 00 07 59</span>
            </a>
            <span className="text-white/60">|</span>
            <a href="mailto:es.actes@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition">
              <Mail size={16} />
              <span>es.actes@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com" className="hover:text-white/80 transition"><Facebook size={18} /></a>
            <span className="text-white/60">|</span>
            <a href="https://twitter.com" className="hover:text-white/80 transition"><Twitter size={18} /></a>
            <span className="text-white/60">|</span>
            <a href="https://instagram.com" className="hover:text-white/80 transition"><Instagram size={18} /></a>
            <span className="text-white/60">|</span>
            <a href="https://linkedin.com" className="hover:text-white/80 transition"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <img
                  src="/icons/Fichier%201.svg"
                  alt="ACTE"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1">
              <div className="flex flex-1 justify-center space-x-8">
                {navTabs.filter((tab) => tab !== 'contact').map((tab) => (
                  onTabChange ? (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => handleTabClick(tab)}
                      className={`capitalize text-base font-medium transition-colors relative py-2 ${
                        currentTab === tab
                          ? 'text-[#00b3ab]'
                          : 'text-gray-700 hover:text-[#00b3ab]'
                      }`}
                    >
                      {tab}
                      {currentTab === tab && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b3ab]"></span>
                      )}
                    </button>
                  ) : (
                    <Link
                      key={tab}
                      href={tabHref(tab)}
                      className={`capitalize text-base font-medium transition-colors relative py-2 ${
                        currentTab === tab
                          ? 'text-[#00b3ab]'
                          : 'text-gray-700 hover:text-[#00b3ab]'
                      }`}
                    >
                      {tab}
                      {currentTab === tab && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b3ab]"></span>
                      )}
                    </Link>
                  )
                ))}
              </div>
              {onTabChange ? (
                <button
                  type="button"
                  onClick={() => handleTabClick('contact')}
                  className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white px-6 py-2 rounded hover:from-[#03384f] hover:to-[#009a93] transition-colors font-medium"
                >
                  Contact
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white px-6 py-2 rounded hover:from-[#03384f] hover:to-[#009a93] transition-colors font-medium"
                >
                  Contact
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700" 
              onClick={toggleMobile}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t">
              {navTabs.map((tab) => (
                onTabChange ? (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabClick(tab)}
                    className={`block w-full text-left py-3 px-4 capitalize transition ${
                      currentTab === tab
                        ? 'text-[#00b3ab] bg-gray-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ) : (
                  <Link
                    key={tab}
                    href={tabHref(tab)}
                    onClick={() => setInternalMobileOpen(false)}
                    className={`block w-full text-left py-3 px-4 capitalize transition ${
                      currentTab === tab
                        ? 'text-[#00b3ab] bg-gray-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
