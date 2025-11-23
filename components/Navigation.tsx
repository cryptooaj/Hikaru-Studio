
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PageState } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  currentPage: PageState;
  onNavigate: (page: PageState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const initial = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    setDark(Boolean(initial));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-sans italic font-bold cursor-pointer"
        onClick={() => onNavigate(PageState.HOME)}
      >
        Hikaru Studio
      </motion.div>

      {/* Desktop/Tablet Menu */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex gap-8 items-center"
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id as PageState)}
              className={`text-sm uppercase tracking-widest transition-colors relative group ${
                currentPage === item.id ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
                />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50"></span>
            </button>
          </li>
        ))}
      </motion.ul>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-full border border-zinc-700 bg-transparent text-zinc-200 hover:bg-[rgba(191,79,81,0.12)] transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-sm uppercase tracking-widest" onClick={() => onNavigate(PageState.PORTFOLIO)}>
          Menu
        </button>
      </div>
    </nav>
  );
};
