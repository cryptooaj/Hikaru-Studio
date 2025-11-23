import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Smartphone, Wand2 } from 'lucide-react';
import { PageState } from '../types';

export const Services: React.FC = () => {
  const serviceCategories = [
    {
      icon: Camera,
      title: "Photography",
      items: [
        { name: "Commercial & Advertising", desc: "Bold, polished, and purposeful visuals that elevate your brand." },
        { name: "Food & Café", desc: "Capturing the soul of every flavor." },
        { name: "Portrait", desc: "Timeless, expressive, and deeply human portraits." },
        { name: "Animal photography", desc: "" },
        { name: "Architectural & Interior", desc: "Precision, balance, and light turning spaces into visual poetry." },
        { name: "Sports", desc: "Energy in motion — powerful moments that define performance." }
      ]
    },
    {
      icon: Video,
      title: "Videography",
      items: [
        { name: "Commercial", desc: "Creative visual storytelling for brands and products." },
        { name: "Food & Café", desc: "Capturing texture, flavor, and atmosphere in motion." },
        { name: "Lifestyle & Social Media", desc: "Engaging, trendy content crafted for digital platforms." },
        { name: "Product", desc: "Clean, cinematic shots that highlight every detail." },
        { name: "Sports", desc: "Energy, passion, and motion — frozen in film." },
        { name: "Reels & Short Videos", desc: "Quick, impactful visuals for social engagement." },
        { name: "Behind-the-Scenes", desc: "Real, authentic storytelling that connects." }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Graphy",
      items: [
        { name: "Commercial Mobile Videos", desc: "" },
        { name: "Food & Café Reels", desc: "" },
        { name: "Cinematic / Artistic", desc: "Mobile videos with a cinematic touch." },
        { name: "Behind the Scenes / Documentary", desc: "" },
        { name: "Tutorial & Creative Content", desc: "" }
      ]
    },
    {
      icon: Wand2,
      title: "Visual Editing",
      items: [
        { name: "Photo Editing / Retouching", desc: "" },
        { name: "Video Editing", desc: "" },
        { name: "Other Creative Post", desc: "" }
      ]
    }
  ];

  return (
    <section id={PageState.SERVICES} className="min-h-screen w-full py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Our Services</h2>
          <h1 className="text-4xl md:text-6xl font-serif italic text-zinc-900 dark:text-zinc-100 mb-6">What We Offer</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl italic font-serif opacity-80">
            "Almost before we knew it, we had left the ground. A shining crescent far beneath the flying vessel."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-primary dark:hover:border-zinc-700 hover:shadow-lg dark:hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">{category.title}</h3>
              </div>
              
              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 hover:border-primary dark:hover:border-zinc-500 transition-colors">
                    <h4 className="text-zinc-800 dark:text-zinc-200 font-medium">{item.name}</h4>
                    {item.desc && <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};