import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project, PageState } from '../types';
import { ExternalLink, X, User, Calendar, Tag, Layers, Play, ZoomIn, Pause, Volume2, VolumeX, Crosshair, Loader2 } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Toggle state for Before/After
  const [showBefore, setShowBefore] = useState(false);
  
  // Zoom state
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0.5, y: 0.5 });
  
  // Image Loading State
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const filteredProjects = PROJECTS.filter(
    p => filter === ProjectCategory.ALL || p.category === filter
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setShowBefore(false); 
      setIsZoomed(false);
      setIsImageLoading(true);
      
      // Reset Video State
      setIsPlaying(false);
      setIsMuted(true);
      setVideoProgress(0);
      setVideoError(false);
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    setIsImageLoading(true);
  }, [showBefore]);

  const handleCloseModal = () => {
    setIsZoomed(false);
    setSelectedProject(null);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setZoomPos({ x, y });
  };

  const handleImageTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - left) / width;
    const y = (touch.clientY - top) / height;
    setZoomPos({ x, y });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (selectedProject?.videoUrl && !videoError) return;

    if (!isZoomed) {
        setZoomPos({ x: 0.5, y: 0.5 });
        setIsZoomed(true);
    } else {
        setIsZoomed(false);
    }
  };

  // Video Handlers
  const togglePlay = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Playback failed or interrupted:", error);
          setIsPlaying(false);
        }
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setVideoProgress(progress || 0);
    }
  };

  const handleVideoSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(e.target.value);
    setVideoProgress(manualChange);
    if (videoRef.current) {
        const newTime = (videoRef.current.duration / 100) * manualChange;
        if (Number.isFinite(newTime)) {
            videoRef.current.currentTime = newTime;
        }
    }
  };

  // Zoom Configuration
  const ZOOM_SCALE = 3;
  // Calculate translation percentage based on mouse position (0-1) to keep the point under the cursor
  const xOffset = isZoomed ? `${(0.5 - zoomPos.x) * (ZOOM_SCALE - 1) * 100}%` : "0%";
  const yOffset = isZoomed ? `${(0.5 - zoomPos.y) * (ZOOM_SCALE - 1) * 100}%` : "0%";

  // Parallax offsets (move slightly opposite to zoom direction for depth)
  const parallaxX = isZoomed ? (0.5 - zoomPos.x) * 40 : 0; 
  const parallaxY = isZoomed ? (0.5 - zoomPos.y) * 40 : 0;

  return (
    <>
      <motion.section
        id={PageState.PORTFOLIO}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-screen w-full py-32 px-6 md:px-12 max-w-8xl mx-auto bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold mb-4 text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Selected Works</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              A curated collection of projects exploring the intersection of design, technology, and human emotion.
            </p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {Object.values(ProjectCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  filter === cat 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-500">
                  <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.imageUrl}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if (project.fallbackImageUrl) {
                        e.currentTarget.src = project.fallbackImageUrl;
                      }
                    }}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {project.videoUrl && (
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <Play size={12} className="text-white fill-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ExternalLink className="w-6 h-6 text-white" />
                     </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-200">{project.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">{project.category}</p>
                  </div>
                  <span className="text-xs border border-zinc-300 dark:border-zinc-800 px-2 py-1 rounded text-zinc-500">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-0 md:px-4 py-0 md:py-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm cursor-pointer transition-colors duration-300"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.16, 1, 0.3, 1] // Custom ease for an elegant slide
              }}
              className="relative w-full max-w-6xl h-[100dvh] md:h-auto md:max-h-[90vh] bg-white dark:bg-zinc-900 md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border-0 md:border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-30 p-2 bg-black/10 dark:bg-black/40 text-black dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white dark:hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div 
                className={`w-full md:w-1/2 h-[40vh] md:h-auto shrink-0 relative bg-zinc-100 dark:bg-zinc-950 select-none group transition-all duration-300 ${
                  isZoomed ? 'overflow-visible z-20' : 'overflow-hidden z-10'
                } ${
                  !selectedProject.videoUrl || videoError ? (isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in') : ''
                }`}
                onMouseMove={(!selectedProject.videoUrl || videoError) ? handleImageMouseMove : undefined}
                onTouchMove={(!selectedProject.videoUrl || videoError) ? handleImageTouchMove : undefined}
                onClick={(!selectedProject.videoUrl || videoError) ? handleImageClick : undefined}
                onMouseLeave={() => setIsZoomed(false)}
              >
                
                {/* Image Loading Indicator */}
                <AnimatePresence>
                    {isImageLoading && !selectedProject.videoUrl && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 z-20"
                        >
                             <div className="flex flex-col items-center gap-2">
                                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                <span className="text-xs text-zinc-400 uppercase tracking-widest">Loading</span>
                             </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Parallax Overlay - Grid & Texture */}
                <AnimatePresence>
                  {isZoomed && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-[-50%] pointer-events-none z-20 mix-blend-overlay opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                                backgroundSize: '30px 30px',
                                x: parallaxX,
                                y: parallaxY,
                                scale: 1.1
                            }}
                        />
                        <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             className="absolute inset-0 pointer-events-none z-30"
                        >
                            <div 
                                className="absolute top-8 left-8 text-[10px] font-mono text-white/70 bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-white/10"
                                style={{ transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)` }}
                            >
                                <div className="flex items-center gap-2">
                                    <Crosshair size={10} />
                                    <span>ZOOM: {ZOOM_SCALE.toFixed(1)}x</span>
                                </div>
                                <div>X: {(zoomPos.x * 100).toFixed(0)} Y: {(zoomPos.y * 100).toFixed(0)}</div>
                            </div>
                        </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {selectedProject.videoUrl && !videoError ? (
                   /* Video Player */
                   <div className="w-full h-full relative group bg-black cursor-pointer overflow-hidden z-10">
                      <video 
                        ref={videoRef}
                        src={selectedProject.videoUrl} 
                        poster={selectedProject.imageUrl}
                        autoPlay 
                        muted={isMuted}
                        loop 
                        playsInline
                        onError={() => setVideoError(true)}
                        onTimeUpdate={handleVideoTimeUpdate}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onClick={togglePlay}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                          <button onClick={togglePlay} className="text-white hover:text-primary transition-colors focus:outline-none">
                              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                          </button>

                          <input 
                            type="range"
                            min="0"
                            max="100"
                            value={videoProgress}
                            onChange={handleVideoSeek}
                            onClick={(e) => e.stopPropagation()}
                            className="flex-grow h-1 bg-white/30 rounded-full appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:bg-primary transition-all"
                          />

                          <button onClick={toggleMute} className="text-white hover:text-primary transition-colors focus:outline-none">
                              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                          </button>
                      </div>

                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                <Play size={32} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                      )}
                   </div>
                ) : selectedProject.originalImageUrl ? (
                  /* Toggle View (Before/After) */
                  <>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={showBefore ? 'before' : 'after'}
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1, 
                                scale: isZoomed ? ZOOM_SCALE : 1,
                                x: xOffset,
                                y: yOffset
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                            }}
                            src={showBefore ? selectedProject.originalImageUrl : selectedProject.imageUrl}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setIsImageLoading(false)}
                            onError={(e) => {
                                if (selectedProject.fallbackImageUrl) {
                                  e.currentTarget.src = selectedProject.fallbackImageUrl;
                                }
                            }}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover relative z-10"
                        />
                    </AnimatePresence>
                    
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-mono text-white rounded border border-white/10 z-10 pointer-events-none">
                        {showBefore ? "BEFORE" : "AFTER"}
                    </div>

                    <AnimatePresence>
                      {!isZoomed && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }}
                          className="absolute top-4 left-20 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-white border border-white/10 pointer-events-none z-10"
                        >
                           <ZoomIn size={14} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowBefore(!showBefore);
                          setIsZoomed(false);
                        }}
                        className="absolute bottom-6 right-6 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:bg-zinc-200 transition-all flex items-center gap-2 z-20 transform translate-y-2 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                    >
                        <Layers size={16} />
                        {showBefore ? "View Edited" : "View Original"}
                    </button>
                  </>
                ) : (
                  /* Standard Single Image */
                  <>
                    <motion.img
                      layoutId={isZoomed ? undefined : `project-image-${selectedProject.id}`}
                      src={selectedProject.imageUrl}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setIsImageLoading(false)}
                      onError={(e) => {
                          if (selectedProject.fallbackImageUrl) {
                            e.currentTarget.src = selectedProject.fallbackImageUrl;
                          }
                      }}
                      alt={selectedProject.title}
                      animate={{ 
                        scale: isZoomed ? ZOOM_SCALE : 1,
                        x: xOffset,
                        y: yOffset
                      }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="w-full h-full object-cover relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden opacity-50 pointer-events-none z-10"></div>
                  </>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 flex flex-col bg-white dark:bg-zinc-900 overflow-y-auto transition-colors duration-300 relative z-0">
                 <div className="p-6 md:p-12 space-y-6 md:space-y-8 pb-24 md:pb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-primary mb-4 border border-zinc-200 dark:border-zinc-700 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light">{selectedProject.description}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-6 py-6 border-y border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold">
                          <User size={14} /> Client
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-200">{selectedProject.client || "Confidential"}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold">
                          <Calendar size={14} /> Year
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-200">{selectedProject.year}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                       <h3 className="text-lg font-medium text-zinc-900 dark:text-white">About the Project</h3>
                       <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                         {selectedProject.fullDescription || selectedProject.description}
                       </p>
                    </motion.div>

                    {selectedProject.tags && (
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5 }}
                         className="pt-4 flex flex-wrap gap-2"
                       >
                          {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-1 px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 text-xs rounded-full border border-zinc-200 dark:border-zinc-800">
                              <Tag size={10} /> {tag}
                            </span>
                          ))}
                       </motion.div>
                    )}
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};