import React from 'react';
import { Menu, X } from 'lucide-react';
import { navTabs, type NavTab } from './data';

type NavBarProps = {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  mobileMenuOpen: boolean;
  onToggleMobile: () => void;
};

const NavBar = ({ activeTab, onTabChange, mobileMenuOpen, onToggleMobile }: NavBarProps) => (
  <nav className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white sticky top-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-4">
          <img
            src="/icons/Fichier%201.svg"
            alt="SAE ACTE"
            className="h-16 w-16 object-contain"
          />
          <div className="text-2xl font-bold">SAE ACTE</div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`capitalize px-1 pb-1 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'text-[#044460] border-b-2 border-[#044460]'
                  : 'text-white/80 hover:text-[#044460]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={onToggleMobile}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                onTabChange(tab);
                onToggleMobile();
              }}
              className={`block w-full text-left py-2 px-4 capitalize transition ${
                activeTab === tab
                  ? 'text-[#044460] bg-white/10'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

export default NavBar;
