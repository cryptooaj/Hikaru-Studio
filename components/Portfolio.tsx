
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project, PageState } from '../types';
import { ExternalLink, X, User, Calendar, Tag, Layers, Play, ZoomIn, Pause, Volume2, VolumeX } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Toggle state for Before/After
  const [showBefore, setShowBefore] = useState(false);
  
  // Zoom state
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

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
      
      // Reset Video State
      // We set isPlaying to false initially and let the 'autoPlay' event (onPlay) 
      // drive it to true. This prevents state mismatch if autoplay fails.
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

  const handleCloseModal = () => {
    setIsZoomed(false);
    setSelectedProject(null);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomOrigin({ x, y });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (selectedProject?.videoUrl && !videoError) return;

    if (!isZoomed) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomOrigin({ x, y });
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
          // State setIsPlaying(true) is handled by onPlay callback
        } catch (error) {
          console.error("Playback failed or interrupted:", error);
          // If play fails (e.g. interrupted), ensure state reflects paused
          setIsPlaying(false);
        }
      } else {
        videoRef.current.pause();
        // State setIsPlaying(false) is handled by onPause callback
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
                  {/* Image with Shared Layout ID */}
                  <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.imageUrl}
                    onError={(e) => {
                      if (project.fallbackImageUrl) {
                        e.currentTarget.src = project.fallbackImageUrl;
                      }
                    }}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Video Indicator */}
                  {project.videoUrl && (
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <Play size={12} className="text-white fill-white" />
                    </div>
                  )}
                  
                  {/* Overlay */}
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 md:py-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm cursor-pointer transition-colors duration-300"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2 bg-black/10 dark:bg-black/40 text-black dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white dark:hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div 
                className={`w-full md:w-1/2 h-[40vh] md:h-auto relative bg-zinc-100 dark:bg-zinc-950 select-none overflow-hidden group ${
                  !selectedProject.videoUrl || videoError ? (isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in') : ''
                }`}
                onMouseMove={handleImageMouseMove}
                onClick={handleImageClick}
                onMouseLeave={() => setIsZoomed(false)}
              >
                {selectedProject.videoUrl && !videoError ? (
                   /* Video Player */
                   <div className="w-full h-full relative group bg-black">
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
                      
                      {/* Controls Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                      {/* Large Play Button when paused */}
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
                            animate={{ opacity: 1, scale: isZoomed ? 2.5 : 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ opacity: { duration: 0.4 }, scale: { type: "spring", stiffness: 300, damping: 30 } }}
                            src={showBefore ? selectedProject.originalImageUrl : selectedProject.imageUrl}
                            onError={(e) => {
                                if (selectedProject.fallbackImageUrl) {
                                  e.currentTarget.src = selectedProject.fallbackImageUrl;
                                }
                            }}
                            style={{ 
                                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` 
                            }}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-mono text-white rounded border border-white/10 z-10 pointer-events-none">
                        {showBefore ? "BEFORE" : "AFTER"}
                    </div>

                    {/* Zoom Hint */}
                    <AnimatePresence>
                      {!isZoomed && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }}
                          className="absolute top-4 left-20 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-white border border-white/10 pointer-events-none"
                        >
                           <ZoomIn size={14} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle Button */}
                    <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowBefore(!showBefore);
                          setIsZoomed(false);
                        }}
                        className="absolute bottom-6 right-6 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:bg-zinc-200 transition-all flex items-center gap-2 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <Layers size={16} />
                        {showBefore ? "View Edited" : "View Original"}
                    </button>
                  </>
                ) : (
                  /* Standard Single Image */
                  <>
                    <motion.img
                      layoutId={`project-image-${selectedProject.id}`}
                      src={selectedProject.imageUrl}
                      onError={(e) => {
                          if (selectedProject.fallbackImageUrl) {
                            e.currentTarget.src = selectedProject.fallbackImageUrl;
                          }
                      }}
                      alt={selectedProject.title}
                      animate={{ scale: isZoomed ? 2.5 : 1 }}
                      transition={{ 
                        scale: { type: "spring", stiffness: 300, damping: 30 },
                        layout: { duration: 0.4 } 
                      }}
                      style={{ 
                          transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` 
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden opacity-50 pointer-events-none"></div>
                  </>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 flex flex-col bg-white dark:bg-zinc-900 overflow-y-auto transition-colors duration-300">
                 <div className="p-8 md:p-12 space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-primary mb-4 border border-zinc-200 dark:border-zinc-700 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">{selectedProject.description}</p>
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
                       <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
