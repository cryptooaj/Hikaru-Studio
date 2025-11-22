
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project, PageState } from '../types';
import { ExternalLink, X, User, Calendar, Tag, Layers } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Toggle state for Before/After
  const [showBefore, setShowBefore] = useState(false);

  const filteredProjects = PROJECTS.filter(
    p => filter === ProjectCategory.ALL || p.category === filter
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setShowBefore(false); // Reset to default "After" view
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <motion.section
        id={PageState.PORTFOLIO}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-screen w-full py-32 px-6 md:px-12 max-w-8xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Selected Works</h2>
            <p className="text-zinc-400 max-w-md">
              A curated collection of projects exploring the intersection of design, technology, and human emotion.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {Object.values(ProjectCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
                  {/* Image with Shared Layout ID */}
                  <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ExternalLink className="w-6 h-6 text-white" />
                     </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-zinc-200">{project.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{project.category}</p>
                  </div>
                  <span className="text-xs border border-zinc-800 px-2 py-1 rounded text-zinc-500">
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
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 text-white rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-zinc-950 select-none overflow-hidden group">
                {selectedProject.originalImageUrl ? (
                  /* Toggle View */
                  <>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={showBefore ? 'before' : 'after'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            src={showBefore ? selectedProject.originalImageUrl : selectedProject.imageUrl}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-mono text-white rounded border border-white/10 z-10">
                        {showBefore ? "BEFORE" : "AFTER"}
                    </div>

                    {/* Toggle Button */}
                    <button 
                        onClick={() => setShowBefore(!showBefore)}
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
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:hidden opacity-50"></div>
                  </>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 flex flex-col bg-zinc-900 overflow-y-auto">
                 <div className="p-8 md:p-12 space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-400 mb-4 border border-zinc-700 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-xl text-zinc-400 font-light">{selectedProject.description}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-6 py-6 border-y border-zinc-800"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-semibold">
                          <User size={14} /> Client
                        </div>
                        <p className="text-zinc-200">{selectedProject.client || "Confidential"}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-semibold">
                          <Calendar size={14} /> Year
                        </div>
                        <p className="text-zinc-200">{selectedProject.year}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                       <h3 className="text-lg font-medium text-white">About the Project</h3>
                       <p className="text-zinc-400 leading-relaxed">
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
                            <span key={i} className="flex items-center gap-1 px-3 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-800">
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
