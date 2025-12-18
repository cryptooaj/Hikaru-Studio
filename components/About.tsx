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
      className="min-h-screen w-full py-32 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-16 items-center bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[600px] relative">
        <div className="absolute inset-0 border border-zinc-300 dark:border-zinc-800 rounded-lg rotate-3 transform translate-x-4 translate-y-4 transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
             <img 
              src="/farnaz.JPG" 
              onError={(e) => {
                e.currentTarget.src = "/dist/farnaz.jpg";
              }}
              alt="Farnaz Hosseini" 
              className="w-full h-full object-cover" 
            />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
           <p className="font-sans italic font-light text-2xl md:text-3xl leading-tight text-white drop-shadow-md">
             "Photography is creating an experience that stays with the viewer."
           </p>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-10">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Who I Am</h2>
          <h1 className="text-5xl font-sans font-bold mb-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">I'm FARNAZ</h1>
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-400 mb-6">
            <MapPin size={16} />
            <span className="text-sm tracking-widest uppercase">Tehran, Iran</span>
          </div>
          <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-lg transition-colors duration-300">
            My main focus is on <span className="font-bold">commercial</span> and <span className="font-bold">advertising photography</span>, helping brands showcase their identity through striking and meaningful visuals. However, my work also extends across different fields including portrait, fashion, artistic, and urban photography.
          </p>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg mt-4 transition-colors duration-300">
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
              className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-900 hover:border-primary dark:hover:border-zinc-700 rounded-lg transition-colors bg-white dark:bg-zinc-900/30 shadow-sm dark:shadow-none"
            >
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-primary dark:text-white">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};