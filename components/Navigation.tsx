import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageState } from '../types';
import { NAV_ITEMS } from '../constants';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: PageState;
  onNavigate: (page: PageState) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, theme, onToggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavigate = (page: PageState) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  // Using a specific image for the navigation bar
  const avatarSrc = "/IMG_7490.JPG";
  const fallbackAvatarSrc = "/IMG_7490.JPG";

  return (
    <>
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800/50">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer z-50 group"
            onClick={() => onNavigate(PageState.HOME)}
        >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 group-hover:border-primary transition-colors duration-300 ring-2 ring-transparent group-hover:ring-primary/20">
              <img 
                src={avatarSrc} 
                onError={(e) => e.currentTarget.src = fallbackAvatarSrc}
                alt="Farnaz" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
            </div>
            <span className="text-xl font-sans font-bold text-zinc-900 dark:text-white tracking-tight">
              Hikaru Studio
            </span>
        </motion.div>

        {/* Desktop/Tablet Menu */}
        <div className="flex items-center gap-6">
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

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-4 z-50">
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={onToggleTheme}
                    className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>

                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-zinc-900 dark:text-white"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[60] bg-zinc-50 dark:bg-zinc-950 flex flex-col p-8 md:hidden"
                >
                    <div className="flex justify-between items-center mb-16">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
                             <img 
                                src={avatarSrc} 
                                onError={(e) => e.currentTarget.src = fallbackAvatarSrc}
                                alt="Farnaz" 
                                className="w-full h-full object-cover" 
                              />
                           </div>
                           <span className="text-xl font-bold font-sans text-zinc-900 dark:text-white">Hikaru Studio</span>
                        </div>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <ul className="flex flex-col gap-8 items-start">
                        {NAV_ITEMS.map((item, i) => (
                            <motion.li 
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <button 
                                    onClick={() => handleMobileNavigate(item.id as PageState)}
                                    className={`text-4xl font-light font-sans tracking-tight transition-colors ${
                                        currentPage === item.id 
                                        ? 'text-primary' 
                                        : 'text-zinc-900 dark:text-zinc-400'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-auto">
                        <p className="text-zinc-500 dark:text-zinc-600 text-sm uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} Hikaru Studio
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};