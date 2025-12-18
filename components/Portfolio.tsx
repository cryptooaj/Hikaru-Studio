
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project, PageState } from '../types';
import { ExternalLink, X, User, Calendar, Tag, Layers, Play, ZoomIn, Pause, Volume2, VolumeX, Crosshair, Loader2, ImageOff } from 'lucide-react';

export const Portfolio: React.FC = () => {
  // Default to Commercial category. 'All' is removed from ProjectCategory enum.
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.COMMERCIAL);
  const [_hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Modal Internal States
  const [showBefore, setShowBefore] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0.5, y: 0.5 });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Filter projects by current category - this provides the 'lazy loading' behavior
  const filteredProjects = PROJECTS.filter(p => p.category === filter);

  // Reset modal states when selected project changes
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setShowBefore(false); 
      setIsZoomed(false);
      setZoomPos({ x: 0.5, y: 0.5 });
      setIsImageLoading(true);
      setImageError(false);
      setIsPlaying(false);
      setIsMuted(true);
      setVideoProgress(0);
      setVideoError(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle Before/After toggle loading
  useEffect(() => {
    if (selectedProject && !selectedProject.videoUrl) {
      setIsImageLoading(true);
      setImageError(false);
    }
  }, [showBefore, selectedProject]);

  const handleCloseModal = () => {
    setIsZoomed(false);
    setSelectedProject(null);
  };

  const updateZoomPosition = (clientX: number, clientY: number) => {
    if (!zoomContainerRef.current) return;
    const rect = zoomContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    setZoomPos({ x, y });
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    updateZoomPosition(e.clientX, e.clientY);
  };

  const handleImageTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const touch = e.touches[0];
    updateZoomPosition(touch.clientX, touch.clientY);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (selectedProject?.videoUrl && !videoError) return;
    if (imageError || isImageLoading) return;

    if (!isZoomed) {
        updateZoomPosition(e.clientX, e.clientY);
        setIsZoomed(true);
    } else {
        setIsZoomed(false);
    }
  };

  const ZOOM_SCALE = 2.5;

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
            <h2 className="text-4xl md:text-6xl font-sans font-bold mb-4 text-primary whitespace-nowrap">Selected Works</h2>
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
                    ? 'bg-primary text-white border-primary shadow-lg shadow-red-500/20' 
                    : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
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
                    src={project.imageUrl}
                    loading="lazy"
                    decoding="async"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-0 md:px-4 py-0 md:py-8 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm cursor-pointer"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-white dark:bg-zinc-900 md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border-0 md:border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-[70] p-2 bg-black/10 dark:bg-black/40 text-black dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white dark:hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div 
                ref={zoomContainerRef}
                className={`w-full md:w-1/2 h-[50vh] md:h-auto shrink-0 relative bg-zinc-100 dark:bg-zinc-950 select-none overflow-hidden group transition-all duration-300 ${
                  (!selectedProject.videoUrl || videoError) && !imageError && !isImageLoading ? (isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in') : ''
                }`}
                onMouseMove={handleImageMouseMove}
                onTouchMove={handleImageTouchMove}
                onClick={handleImageClick}
              >
                
                {/* Image Loading Indicator */}
                <AnimatePresence>
                    {isImageLoading && !selectedProject.videoUrl && !imageError && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 z-20"
                        >
                             <div className="flex flex-col items-center gap-2">
                                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Loading Media</span>
                             </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Error State */}
                <AnimatePresence>
                    {imageError && !selectedProject.videoUrl && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 z-20 p-8 text-center"
                        >
                             <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-zinc-200 dark:bg-zinc-800 rounded-full">
                                    <ImageOff className="w-8 h-8 text-zinc-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-800 dark:text-zinc-200 font-medium">Unable to load image</p>
                                    <p className="text-xs text-zinc-500">Check your internet or the source URL.</p>
                                </div>
                             </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Video Player */}
                {selectedProject.videoUrl && !videoError ? (
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
                        onLoadedData={() => setIsImageLoading(false)}
                        onClick={() => {
                          if (videoRef.current?.paused) videoRef.current.play();
                          else videoRef.current?.pause();
                        }}
                        className="w-full h-full object-cover"
                      />
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                <Play size={32} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                      )}
                   </div>
                ) : (
                  /* Standard Image Display */
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        {!imageError && (
                          <motion.img
                              key={showBefore ? 'before' : 'after'}
                              src={showBefore ? (selectedProject.originalImageUrl || selectedProject.imageUrl) : selectedProject.imageUrl}
                              loading="eager"
                              onLoad={() => setIsImageLoading(false)}
                              onError={() => {
                                setIsImageLoading(false);
                                setImageError(true);
                              }}
                              alt={selectedProject.title}
                              animate={{ 
                                  scale: isZoomed ? ZOOM_SCALE : 1,
                              }}
                              transition={{ 
                                  scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                              }}
                              style={{
                                transformOrigin: `${zoomPos.x * 100}% ${zoomPos.y * 100}%`,
                                willChange: 'transform',
                              }}
                              className="w-full h-full object-cover relative z-10"
                          />
                        )}
                    </AnimatePresence>
                    
                    {selectedProject.originalImageUrl && !imageError && (
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-white rounded border border-white/10 z-[55] pointer-events-none uppercase tracking-widest">
                          {showBefore ? "Original" : "Edited"}
                      </div>
                    )}

                    <AnimatePresence>
                      {!isZoomed && !selectedProject.videoUrl && !imageError && !isImageLoading && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] border border-white/10 pointer-events-none z-[55] flex items-center gap-2 uppercase tracking-widest"
                        >
                           <ZoomIn size={12} />
                           Click to zoom
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {selectedProject.originalImageUrl && !imageError && (
                      <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowBefore(!showBefore);
                          }}
                          className="absolute bottom-6 right-6 bg-white text-black px-5 py-2.5 rounded-full font-medium text-xs shadow-lg hover:bg-zinc-200 transition-all flex items-center gap-2 z-[55] uppercase tracking-wider"
                      >
                          <Layers size={14} />
                          {showBefore ? "View Result" : "View RAW"}
                      </button>
                    )}
                  </div>
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
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-primary mb-4 border border-zinc-200 dark:border-zinc-700 uppercase tracking-widest">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
                        {selectedProject.title}
                      </h2>
                      <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{selectedProject.description}</p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-zinc-100 dark:border-zinc-800">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
                          <User size={12} /> Client
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-200 text-sm">{selectedProject.client || "Confidential"}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
                          <Calendar size={12} /> Year
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-200 text-sm">{selectedProject.year}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                       <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Project Insight</h3>
                       <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                         {selectedProject.fullDescription || selectedProject.description}
                       </p>
                    </div>

                    {selectedProject.tags && (
                       <div className="pt-4 flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-1 px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 text-[10px] rounded-full border border-zinc-200 dark:border-zinc-800 uppercase font-medium">
                              <Tag size={10} /> {tag}
                            </span>
                          ))}
                       </div>
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
