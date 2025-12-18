
import React, { useEffect, useState } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { PageState } from '../types';
import { ArrowRight, Focus, Zap, Sun, Thermometer } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 400 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);

  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const triggerCapture = () => {
    setIsCapturing(true);
    setTimeout(() => setIsCapturing(false), 200);
  };

  const wrapperVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textRevealVariants: Variants = {
    hidden: { y: "110%" },
    visible: { 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id={PageState.HOME}
      className="h-screen w-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Viewfinder Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-400"></div>
         <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-400"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-zinc-400 rounded-full opacity-30"></div>
      </div>

      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
        
        {/* Text Section */}
        <div className="relative z-30 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-20 lg:pl-24 pointer-events-none">
             <motion.div 
               variants={wrapperVariants}
               initial="hidden"
               animate="visible"
               className="pointer-events-auto max-w-xl pt-20 md:pt-0"
             >
                 <div className="overflow-hidden">
                    <motion.h1 
                        variants={textRevealVariants} 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-sans font-black text-zinc-900 dark:text-white mb-0 text-left leading-[0.85] tracking-tighter"
                    >
                      HIKARU
                    </motion.h1>
                 </div>
                 <div className="overflow-hidden">
                    <motion.h1 
                        variants={textRevealVariants} 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-sans font-black text-primary text-left leading-[0.85] mt-1 lg:mt-4 tracking-tighter"
                    >
                      STUDIO
                    </motion.h1>
                 </div>

                 <motion.div variants={fadeUpVariants} className="mt-8 lg:mt-12 text-base lg:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-left max-w-md">
                    <p className="border-l-2 border-primary pl-6">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">Visual Storyteller & Brand Designer.</span><br/>
                        From meticulous concepts to professional lenses—creating immersive experiences that define the future of your brand.
                    </p>
                 </motion.div>

                 <motion.div variants={fadeUpVariants} className="mt-8 lg:mt-12 flex flex-wrap gap-4 lg:gap-6 justify-start items-center">
                    <button 
                        onClick={() => onNavigate(PageState.PORTFOLIO)}
                        className="group relative px-8 lg:px-10 py-3 lg:py-4 bg-primary text-white rounded-none font-bold text-xs lg:text-sm uppercase tracking-widest transition-all hover:pr-14 overflow-hidden shadow-2xl shadow-primary/20"
                    >
                        <span className="relative z-10">Discover Portfolio</span>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
                        <div className="absolute inset-0 bg-zinc-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                    
                    <button 
                        onClick={() => onNavigate(PageState.SERVICES)}
                        className="px-5 lg:px-6 py-3 lg:py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] border border-zinc-300 dark:border-zinc-800 hover:border-primary transition-colors"
                    >
                        Our Services
                    </button>
                 </motion.div>
             </motion.div>
        </div>

        {/* 3D Camera/Lens Section with Lighting Enhancements */}
        <div className="absolute inset-0 md:static md:w-1/2 h-full flex items-center justify-center z-20 perspective-[2000px] pointer-events-none md:pointer-events-auto">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center relative"
                style={{ 
                  rotateX, 
                  rotateY, 
                  transformStyle: "preserve-3d" 
                }}
              >
                  {/* Viewfinder HUD with Lighting info */}
                  <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center opacity-40">
                      <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative border border-white/5 dark:border-white/10 rounded-xl">
                          <div className="absolute top-4 left-4 flex flex-col gap-1 text-[9px] font-mono text-zinc-500 dark:text-zinc-400">
                             <div className="flex items-center gap-1"><Focus size={10}/> AF-S AUTO</div>
                             <div className="flex items-center gap-1"><Zap size={10} className="text-primary"/> STROBE: CH 1-A</div>
                          </div>
                          <div className="absolute top-4 right-4 flex flex-col items-end gap-1 text-[9px] font-mono text-zinc-500">
                             <div>PWR: 1/16 +0.3</div>
                             <div className="flex items-center gap-1">5600K <Thermometer size={10}/></div>
                          </div>
                          <div className="absolute bottom-4 left-4 text-[10px] font-mono text-primary flex items-center gap-2">
                             <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div> LIVE LIGHTING
                          </div>
                          
                          {/* Corner Brackets */}
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40"></div>
                          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40"></div>
                      </div>
                  </div>

                  {/* Camera Body with Studio Lighting Gear elements */}
                  <div 
                    className="absolute w-[280px] h-[180px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] bg-zinc-900 dark:bg-black rounded-[40px] shadow-2xl border-t border-zinc-700/50"
                    style={{ transform: "translateZ(-150px)" }}
                  >
                      {/* Top Plate Details */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-14 bg-zinc-800 rounded-t-2xl border-x border-t border-zinc-700">
                          {/* Hot Shoe for Lighting */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-700 rounded-t-md border-t border-zinc-600"></div>
                          {/* Shutter Button */}
                          <div 
                            onClick={triggerCapture}
                            className="absolute top-2 right-4 w-10 h-10 bg-zinc-700 rounded-full border-2 border-zinc-600 active:scale-95 transition-transform cursor-pointer shadow-lg overflow-hidden group/shutter"
                          >
                             <div className="absolute inset-0 bg-primary opacity-0 group-hover/shutter:opacity-10 transition-opacity"></div>
                          </div>
                      </div>

                      {/* Studio Strobe Unit Attached (Visual) */}
                      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-24 h-32 bg-zinc-800 rounded-lg border border-zinc-700 shadow-2xl" style={{ transform: "translateZ(-20px)" }}>
                         <div className="absolute top-2 inset-x-2 h-16 bg-zinc-950 rounded flex items-center justify-center">
                            <Zap className="text-primary/50" size={20} />
                         </div>
                         <div className="absolute bottom-2 inset-x-2 h-8 bg-zinc-900 rounded border border-zinc-700 flex items-center justify-center text-[8px] font-mono text-zinc-500">
                            SYNC OK
                         </div>
                      </div>
                  </div>

                  {/* The Lens Mount */}
                  <div 
                    className="absolute w-[200px] h-[200px] md:w-[340px] md:h-[340px] bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-full border-[12px] border-zinc-800 shadow-2xl"
                    style={{ transform: "translateZ(-80px)" }}
                  ></div>

                  {/* Lens System with Lighting Visuals */}
                  <div 
                      onClick={triggerCapture}
                      className="relative cursor-pointer group"
                      style={{ transformStyle: "preserve-3d" }}
                  >
                      {/* Lens Barrel */}
                      <div 
                        className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full bg-zinc-900 flex items-center justify-center relative overflow-visible"
                        style={{ 
                            transform: "translateZ(30px)",
                            background: "conic-gradient(from 180deg at 50% 50%, #0a0a0a 0deg, #222 180deg, #0a0a0a 360deg)",
                            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.9)"
                        }}
                      >
                          {/* Lens Markings */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em] bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                             STUDIO MASTER 35mm 1.4
                          </div>
                          
                          {/* Signature Red Ring */}
                          <div className="absolute inset-[12px] rounded-full border-[3px] border-primary shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>

                          {/* Lens Glass with Lighting Service Tints */}
                          <div 
                              className="absolute inset-[24px] rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-zinc-800/50"
                              style={{ transform: "translateZ(15px)" }}
                          >
                              {/* Optical Coating & Lighting Tints */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-primary/20 z-20 pointer-events-none"></div>
                              <div className="absolute top-2 left-2 w-1/2 h-1/2 bg-white/5 rounded-full blur-xl z-20"></div>

                              {/* Aperture Iris */}
                              <div className="relative w-[85%] h-[85%] flex items-center justify-center z-10">
                                  {/* Inner Sensor Detail */}
                                  <div className="absolute w-[35%] h-[35%] rounded-full bg-zinc-950 shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                                      <motion.div 
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-[90%] h-[90%] bg-gradient-to-br from-primary/30 to-blue-500/20 rounded-full blur-lg"
                                      ></motion.div>
                                  </div>

                                  {/* Mechanical Blades */}
                                  <motion.div
                                      className="absolute inset-0 rounded-full border-zinc-950 bg-zinc-900/95"
                                      animate={{
                                          borderWidth: isCapturing ? '160px' : '4px',
                                          rotate: isCapturing ? 60 : 0
                                      }}
                                      transition={{ 
                                        duration: isCapturing ? 0.05 : 0.3, 
                                        ease: 'easeOut' 
                                      }}
                                  >
                                      {/* Blade Texture */}
                                      <div className="w-full h-full opacity-40 bg-[repeating-conic-gradient(#000_0_45deg,#111_0_90deg)]"></div>
                                  </motion.div>

                                  {/* Intense Lighting/Flash Burst */}
                                  <AnimatePresence>
                                      {isCapturing && (
                                          <motion.div
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              animate={{ opacity: 1, scale: 1.5 }}
                                              exit={{ opacity: 0 }}
                                              transition={{ duration: 0.15 }}
                                              className="absolute inset-[-120px] bg-white rounded-full z-40 blur-3xl mix-blend-screen shadow-[0_0_100px_rgba(255,255,255,0.8)]"
                                          />
                                      )}
                                  </AnimatePresence>
                                  
                                  {/* Constant Lighting "Service" Glow */}
                                  <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse pointer-events-none"></div>
                              </div>
                          </div>
                      </div>

                      {/* Parallax Floating Light Particles / Flares */}
                      <motion.div 
                          className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none"
                          style={{ 
                              transform: "translateZ(100px)",
                              x: useTransform(mouseX, [0, 1], [30, -30]),
                              y: useTransform(mouseY, [0, 1], [30, -30]),
                          }}
                      />
                      <motion.div 
                          className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
                          style={{ 
                              transform: "translateZ(70px)",
                              x: useTransform(mouseX, [0, 1], [-50, 50]),
                              y: useTransform(mouseY, [0, 1], [-50, 50]),
                          }}
                      />
                      
                      {/* Floating Studio Icons */}
                      <motion.div 
                        className="absolute -top-24 left-0 text-primary opacity-30"
                        style={{ transform: "translateZ(120px)" }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                         <Sun size={24} />
                      </motion.div>
                  </div>
             </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Explore</span>
      </motion.div>
    </section>
  );
};
