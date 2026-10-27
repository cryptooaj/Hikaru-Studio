import React from 'react';
import { Camera, Video, Wand2, ArrowRight } from 'lucide-react';
import { PageState } from '../types';

const services = [
  { icon: Camera, title: 'Photography', description: 'Images that make the product, place or person the focus.', examples: ['Commercial & product', 'Food & café', 'Portrait & spaces'] },
  { icon: Video, title: 'Video production', description: 'Short visual stories for campaigns and digital channels.', examples: ['Product films', 'Social reels', 'Behind the scenes'] },
  { icon: Wand2, title: 'Editing', description: 'Thoughtful finishing that keeps every visual consistent.', examples: ['Photo retouching', 'Video editing', 'Color & finishing'] },
];

export const Services: React.FC = () => (
  <section id={PageState.SERVICES} className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400 mb-3">Services</p>
      <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">From concept to final image<span className="text-primary">.</span></h2>
      <p className="mt-5 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">Choose the format that fits your project. We can shape the visual direction together.</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, description, examples }, index) => (
          <article key={title} className="p-6 md:p-8 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-primary/60 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/40 text-primary flex items-center justify-center"><Icon size={23} aria-hidden="true" /></div>
              <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 leading-relaxed">{description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} examples`}>
              {examples.map(example => <li key={example} className="px-3 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{example}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <p className="text-lg font-medium text-zinc-900 dark:text-white">Have a project in mind?</p>
        <a href="#CONTACT" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Start a project <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
