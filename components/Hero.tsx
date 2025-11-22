
import React, { useEffect } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageState } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
      className="h-screen w-full flex flex-col justify-center items-center relative px-4 overflow-hidden perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Lens Background */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-100"
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
      >
        {/* Outer Housing */}
        <div 
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-zinc-800 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center shadow-2xl"
          style={{ transform: "translateZ(-100px)" }}
        >
          {/* Inner Ring Detail */}
          <div 
            className="w-[95%] h-[95%] rounded-full border-[20px] border-zinc-950 flex items-center justify-center shadow-inner"
            style={{ transform: "translateZ(20px)" }}
          >
             {/* Reflection Element 1 */}
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent skew-x-12"></div>
             
             {/* Middle Glass */}
             <div 
                className="w-[80%] h-[80%] rounded-full border-[1px] border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden"
                style={{ transform: "translateZ(50px)" }}
             >
                {/* Aperture Blades (Hexagon approximation) */}
                <div className="w-[60%] h-[60%] bg-zinc-950 rotate-45" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <div className="w-full h-full bg-zinc-900 scale-90" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
                </div>
                
                {/* Lens Glare */}
                <motion.div 
                  className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
                  style={{ transform: "translateZ(80px) scale(1.2)" }}
                />
             </div>
          </div>
        </div>
        
        {/* Floating Elements (Parallax) */}
        <motion.div 
          className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"
          style={{ 
             x: useTransform(mouseX, [0, 1], [-50, 50]),
             y: useTransform(mouseY, [0, 1], [-50, 50]),
             transform: "translateZ(150px)"
          }}
        />
        <motion.div 
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"
          style={{ 
             x: useTransform(mouseX, [0, 1], [30, -30]),
             y: useTransform(mouseY, [0, 1], [30, -30]),
             transform: "translateZ(100px)"
          }}
        />
      </motion.div>

      <div className="z-10 text-center relative">
        <motion.p variants={itemVariants} className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          Portfolio 2024
        </motion.p>
        
        <div className="overflow-hidden">
          {/* Updated Font Style to Sans Bold */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-sans font-bold text-zinc-100 mb-2">
            Hikaru
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
            Studio
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="mt-12 max-w-md mx-auto text-zinc-400 font-light leading-relaxed">
          <p>
            Graphic Designer & Photographer based in Toronto. 
            Specializing in visual storytelling, brand identity, and capturing the ephemeral beauty of the mundane.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate(PageState.PORTFOLIO)}
            className="group relative px-8 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105"
          >
            View Work
            <span className="absolute inset-0 rounded-full ring-1 ring-white transition-all group-hover:ring-4 ring-opacity-30"></span>
          </button>
          
          <button 
            onClick={() => onNavigate(PageState.CONTACT)}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600 text-xs tracking-widest uppercase"
      >
        Scroll to explore
      </motion.div>
    </motion.section>
  );
};
