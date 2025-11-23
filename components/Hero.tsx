import React, { useEffect, useState } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { PageState } from '../types';
import { ArrowRight, Camera } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Adjusted physics for snappier, less floaty movement
  const springConfig = { damping: 40, stiffness: 500 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [30, -30]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), springConfig);

  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Simulate "Capturing" photos of the user
  useEffect(() => {
    const interval = setInterval(() => {
        triggerCapture();
    }, 5000 + Math.random() * 4000); // Random capture every 5-9 seconds
    return () => clearInterval(interval);
  }, []);

  const triggerCapture = () => {
    setIsCapturing(true);
    setTimeout(() => setIsCapturing(false), 300);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0, skewY: 5 },
    visible: { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <motion.section
      id={PageState.HOME}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen w-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
        
        {/* Text Section (Left) */}
        <div className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-24 pointer-events-none">
             <div className="pointer-events-auto max-w-xl pt-20 md:pt-0">
                 {/* Title */}
                 <div className="overflow-hidden">
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mb-0 transition-colors duration-300 drop-shadow-2xl text-left">
                      Hikaru
                    </motion.h1>
                 </div>
                 <div className="overflow-hidden">
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-white dark:to-zinc-600 transition-all duration-300 drop-shadow-2xl text-left">
                      Studio
                    </motion.h1>
                 </div>

                 {/* Description */}
                 <motion.div variants={itemVariants} className="mt-8 text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-left max-w-md backdrop-blur-sm md:backdrop-blur-0 bg-white/10 md:bg-transparent p-4 md:p-0 rounded-xl">
                    <p>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">Graphic Designer & Photographer</span>. 
                        Specializing in visual storytelling, brand identity, and capturing the ephemeral beauty of the mundane.
                    </p>
                 </motion.div>

                 {/* Buttons */}
                 <motion.div variants={itemVariants} className="mt-10 flex gap-6 justify-start items-center">
                    <button 
                        onClick={() => onNavigate(PageState.PORTFOLIO)}
                        className="group relative px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
                    >
                        View Work
                        <span className="absolute inset-0 rounded-full ring-1 ring-zinc-900 dark:ring-white transition-all group-hover:ring-4 ring-opacity-30"></span>
                    </button>
                    
                    <button 
                        onClick={() => onNavigate(PageState.CONTACT)}
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-white transition-colors group"
                    >
                        Contact Me
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                 </motion.div>
             </div>
        </div>

        {/* 3D Lens Section (Right on desktop, centered/bg on mobile) */}
        <div className="absolute inset-0 md:static md:w-1/2 h-full flex items-center justify-center z-10 perspective-[1200px] pointer-events-none md:pointer-events-auto overflow-visible">
             <motion.div 
                className="w-full h-full flex items-center justify-center opacity-30 md:opacity-100 scale-75 md:scale-100 translate-y-20 md:translate-y-0"
                style={{ 
                  rotateX, 
                  rotateY, 
                  transformStyle: "preserve-3d" 
                }}
              >
                  {/* Lens Group */}
                  <div 
                      onClick={triggerCapture}
                      className="relative cursor-pointer group"
                      style={{ transformStyle: "preserve-3d" }}
                  >
                      {/* 1. Outer Housing (Matte Black) */}
                      <div 
                      className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border border-zinc-700 bg-zinc-900 shadow-2xl flex items-center justify-center transition-colors duration-300"
                      style={{ 
                          transform: "translateZ(-50px)",
                          background: "conic-gradient(from 180deg at 50% 50%, #18181b 0deg, #27272a 180deg, #18181b 360deg)"
                      }}
                      >
                          {/* Texture Rings (Grip) */}
                          <div className="absolute inset-2 rounded-full border-4 border-dashed border-zinc-800/50 opacity-50"></div>
                      </div>

                      {/* 2. Red Ring (Signature Detail) */}
                      <div 
                          className="absolute inset-0 rounded-full border-[6px] border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                          style={{ transform: "translateZ(0px) scale(0.98)" }}
                      />

                      {/* 3. Inner Barrel & Glass */}
                      <div 
                          className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-black border border-zinc-800 flex items-center justify-center overflow-hidden shadow-inner"
                          style={{ transform: "translateZ(20px)" }}
                      >
                          {/* Reflection 1 (Curved Glass) */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-80 z-20 pointer-events-none rounded-full"></div>
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl z-20 pointer-events-none"></div>

                          {/* 4. Aperture / Iris Mechanism */}
                          <div className="relative w-[70%] h-[70%] flex items-center justify-center z-10">
                              {/* The Sensor/Center (Red) */}
                              <div className="absolute w-[40%] h-[40%] rounded-full bg-[#3a0a0a] shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center z-0">
                                  {/* Sensor Reflection */}
                                  <div className="w-[60%] h-[60%] bg-gradient-to-br from-red-600/40 to-transparent rounded-full blur-sm"></div>
                                  <div className="absolute w-2 h-2 bg-white rounded-full blur-[1px] top-1/3 right-1/3 opacity-80"></div>
                              </div>

                              {/* Closing Iris Animation */}
                              <motion.div
                                  className="absolute inset-0 rounded-full border-zinc-900"
                                  style={{
                                      borderStyle: 'solid',
                                      boxSizing: 'border-box',
                                      borderColor: '#18181b' // Zinc-900
                                  }}
                                  animate={{
                                      borderWidth: isCapturing ? '180px' : '0px'
                                  }}
                                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                              />

                              {/* Flash Overlay */}
                              <AnimatePresence>
                                  {isCapturing && (
                                      <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: [0, 1, 0] }}
                                          exit={{ opacity: 0 }}
                                          transition={{ duration: 0.15 }}
                                          className="absolute inset-0 bg-white rounded-full z-30 mix-blend-screen"
                                      />
                                  )}
                              </AnimatePresence>
                          </div>
                      </div>

                      {/* 5. Front Element Reflections (Parallax) */}
                      <motion.div 
                          className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full pointer-events-none"
                          style={{ 
                              transform: "translateZ(60px)",
                              background: "radial-gradient(120% 120% at 30% 30%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)"
                          }}
                      />
                      <motion.div 
                          className="absolute top-[20%] right-[20%] w-16 h-16 bg-white/20 rounded-full blur-2xl pointer-events-none"
                          style={{ 
                              transform: "translateZ(80px)",
                              x: useTransform(mouseX, [0, 1], [20, -20]),
                              y: useTransform(mouseY, [0, 1], [20, -20]),
                          }}
                      />
                      <motion.div 
                          className="absolute bottom-[30%] left-[30%] w-24 h-24 bg-red-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"
                          style={{ 
                              transform: "translateZ(70px)",
                              x: useTransform(mouseX, [0, 1], [-30, 30]),
                              y: useTransform(mouseY, [0, 1], [-30, 30]),
                          }}
                      />
                  </div>
             </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 text-xs tracking-widest uppercase flex flex-col items-center gap-2 pointer-events-none"
      >
        <Camera className="w-4 h-4 animate-pulse text-red-600" />
        Scroll to explore
      </motion.div>
    </motion.section>
  );
};
