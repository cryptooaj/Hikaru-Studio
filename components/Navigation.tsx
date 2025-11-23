import React from 'react';
import { motion } from 'framer-motion';
import { PageState } from '../types';
import { NAV_ITEMS } from '../constants';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  currentPage: PageState;
  onNavigate: (page: PageState) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, theme, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800/50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-serif italic font-bold cursor-pointer text-zinc-900 dark:text-white"
        onClick={() => onNavigate(PageState.HOME)}
      >
        Hikaru Studio
      </motion.div>

      {/* Desktop/Tablet Menu */}
      <div className="flex items-center gap-8">
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
                  currentPage === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full opacity-50"></span>
              </button>
            </li>
          ))}
        </motion.ul>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onToggleTheme}
          className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-sm uppercase tracking-widest text-zinc-900 dark:text-white" 
            onClick={() => onNavigate(PageState.PORTFOLIO)}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};