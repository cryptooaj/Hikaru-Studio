
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { PageState } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Theme Effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(PageState);
      let current = PageState.HOME;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setCurrentPage(current);

      const nearFooter = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 160;
      setShowBackToTop(window.scrollY > 500 && !nearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageState) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(page);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main className="relative w-full">
        <Hero onNavigate={handleNavigate} />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full shadow-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </div>
  );
};

export default App;

