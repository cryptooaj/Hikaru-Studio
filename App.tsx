import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { AiLab } from './components/AiLab';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { PageState } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

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

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
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

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-zinc-950 z-50 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-900/10 opacity-20 pointer-events-none" />
         
         <div className="relative flex items-center justify-center w-64 h-64">
            {/* Core Light Pulse */}
            <motion.div
              className="absolute w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_30px_rgba(255,255,255,0.8)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Inner Aperture Ring */}
            <motion.div
              className="absolute w-16 h-16 border-[1px] border-zinc-800 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle Ring */}
            <motion.div
              className="absolute w-24 h-24 border-[1px] border-zinc-800 border-l-primary/50 rounded-full opacity-60"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
             {/* Outer Bracket Ring */}
            <motion.div
              className="absolute w-32 h-32 border-[1px] border-transparent border-r-zinc-700 border-l-zinc-700 rounded-full opacity-40"
              animate={{ rotate: 180, scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
         </div>
         
         <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="flex flex-col items-center z-10"
         >
            <span className="font-sans font-bold text-3xl text-white tracking-wider">Hikaru Studio</span>
            <div className="flex items-center gap-2 mt-3">
               <motion.div 
                 className="h-[1px] w-8 bg-zinc-700"
                 initial={{ width: 0 }}
                 animate={{ width: 32 }}
                 transition={{ delay: 0.8, duration: 0.5 }}
               />
               <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">Loading</span>
               <motion.div 
                 className="h-[1px] w-8 bg-zinc-700"
                 initial={{ width: 0 }}
                 animate={{ width: 32 }}
                 transition={{ delay: 0.8, duration: 0.5 }}
               />
            </div>
         </motion.div>
      </div>
    );
  }

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
        <AiLab />
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