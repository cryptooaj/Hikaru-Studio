
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Send, MessageCircle, Globe } from 'lucide-react';
import { PageState } from '../types';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id={PageState.CONTACT}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen w-full pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Info */}
        <div className="w-full lg:w-1/2 space-y-8">
           <div>
             <h2 className="text-6xl font-serif italic mb-6 text-white">Let's Connect</h2>
             <p className="text-zinc-400 text-lg">
               Ready to elevate your brand's visual identity? Reach out to discuss your next project.
             </p>
           </div>

           <div className="space-y-6 py-8">
             <a href="mailto:hikarustudio.photo@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                 <Mail className="w-5 h-5" />
               </div>
               <span className="text-lg">hikarustudio.photo@gmail.com</span>
             </a>
             
             <a href="tel:09123855908" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                 <Phone className="w-5 h-5" />
               </div>
               <span className="text-lg">09123855908</span>
             </a>

             <a href="https://www.studiohikaru.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                 <Globe className="w-5 h-5" />
               </div>
               <span className="text-lg">www.studiohikaru.com</span>
             </a>

             <div className="flex items-center gap-4 text-zinc-300">
               <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                 <MapPin className="w-5 h-5" />
               </div>
               <span className="text-lg">Tehran, Iran</span>
             </div>
           </div>

           <div className="pt-8 border-t border-zinc-900">
             <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wider">Follow & Chat</p>
             <div className="flex flex-wrap gap-4">
               <a href="https://www.linkedin.com/in/farnaz-hoseini-140ba3330" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                 <Linkedin size={18} />
                 <span>LinkedIn</span>
               </a>
               <a href="http://wa.me/+989123855908" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                 <MessageCircle size={18} />
                 <span>WhatsApp</span>
               </a>
               <a href="http://t.me/ifarnazhoseini" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                 <Send size={18} />
                 <span>Telegram</span>
               </a>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800/50">
          <h3 className="text-xl font-serif italic text-white mb-8">Send a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors placeholder-zinc-700"
                  placeholder="Your Name"
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors placeholder-zinc-700"
                  placeholder="your@email.com"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors placeholder-zinc-700 resize-none"
                  placeholder="Tell me about your project..."
                />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-white text-black px-6 py-4 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-zinc-700 text-sm">
        &copy; {new Date().getFullYear()} Hikaru Studio. All Rights Reserved.
      </div>
    </motion.section>
  );
};
