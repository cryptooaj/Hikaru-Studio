
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Star } from 'lucide-react';
import { PageState } from '../types';

export const About: React.FC = () => {
  return (
    <motion.section
      id={PageState.ABOUT}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[600px] relative">
        <div className="absolute inset-0 border border-zinc-800 rounded-lg rotate-3 transform translate-x-4 translate-y-4"></div>
        <div className="absolute inset-0 bg-zinc-800 rounded-lg overflow-hidden">
             {/* 
                Using 'farnaz.jpg'. Please place your image file in the public folder with this name.
                Added a fallback to a similar vibe placeholder if file is missing.
             */}
             <img 
              src="/farnaz.jpg" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80";
              }}
              alt="Farnaz Hosseini" 
              className="w-full h-full object-cover" 
            />
            {/* Gradient for text readability, kept subtle at the top for the face */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
           <p className="font-serif italic text-2xl md:text-3xl leading-tight text-white drop-shadow-md">
             "Photography is creating an experience that stays with the viewer."
           </p>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-10">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Who I Am</h2>
          <h1 className="text-5xl font-serif italic mb-6 text-zinc-100">I'm FARNAZ</h1>
          <div className="flex items-center gap-2 text-zinc-400 mb-6">
            <MapPin size={16} />
            <span className="text-sm tracking-widest uppercase">Tehran, Iran</span>
          </div>
          <p className="text-zinc-300 leading-relaxed text-lg">
            My main focus is on commercial and advertising photography, helping brands showcase their identity through striking and meaningful visuals. However, my work also extends across different fields including portrait, fashion, artistic, and urban photography.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mt-4">
            At Studio Hikaru, photography is more than just capturing a moment it’s about creating an experience that stays with the viewer long after the image is seen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {[
            { icon: Star, title: "Commercial Focus", desc: "Helping brands showcase their identity." },
            { icon: Camera, title: "Multidisciplinary", desc: "Portrait, Fashion, Artistic, Urban." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex items-start gap-4 p-4 border border-zinc-900 hover:border-zinc-700 rounded-lg transition-colors bg-zinc-900/30"
            >
              <div className="p-3 bg-zinc-800 rounded-full text-white">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-200">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
