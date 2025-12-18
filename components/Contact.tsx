import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MessageCircle, Globe, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { PageState } from '../types';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_56umvyp'; 
const EMAILJS_TEMPLATE_ID = 'template_ds2o4x6'; 
const EMAILJS_PUBLIC_KEY = 'UflsFsDmX_syyufWw';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setStatus(null);

    const isConfigured = 
      EMAILJS_SERVICE_ID && 
      EMAILJS_TEMPLATE_ID && 
      EMAILJS_PUBLIC_KEY;

    if (!isConfigured) {
      setTimeout(() => {
        setIsSending(false);
        setStatus({
          type: 'success',
          message: 'Message sent! (Demo Mode: No email was actually sent)'
        });
        setFormState({ user_name: '', user_email: '', message: '' });
      }, 2000);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormState({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Failed:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      });
    } finally {
      setIsSending(false);
    }
  };

  // The hero image for the contact section (the one provided by the user)
  const contactHeroSrc = "/IMG_7492.JPG";
  const fallbackHeroSrc = "/IMG_7491.JPG";

  return (
    <motion.section
      id={PageState.CONTACT}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen w-full pt-32 pb-12 px-6 md:px-12 lg:px-24 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
           {/* Full Width Top Image - Clean version with original color and no zoom */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl relative"
           >
              <img 
                src={contactHeroSrc} 
                onError={(e) => e.currentTarget.src = fallbackHeroSrc}
                alt="Contact Visual" 
                className="w-full h-full object-cover" 
              />
           </motion.div>

           <div className="space-y-4">
              <h2 className="text-6xl font-sans font-bold text-primary tracking-tight">Let's Connect</h2>
              <p className="text-zinc-700 dark:text-zinc-400 text-lg max-w-lg leading-relaxed">
                Ready to elevate your brand's visual identity? Reach out to discuss your next project, booking, or collaboration.
              </p>
           </div>

           <div className="space-y-6 py-4">
             <a href="mailto:hikarustudio.photo@gmail.com" className="flex items-center gap-4 text-zinc-800 dark:text-zinc-300 hover:text-primary dark:hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-300 dark:group-hover:bg-zinc-800 transition-colors">
                 <Mail className="w-5 h-5" />
               </div>
               <span className="text-lg">hikarustudio.photo@gmail.com</span>
             </a>
             
             <a href="tel:09123855908" className="flex items-center gap-4 text-zinc-800 dark:text-zinc-300 hover:text-primary dark:hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-300 dark:group-hover:bg-zinc-800 transition-colors">
                 <Phone className="w-5 h-5" />
               </div>
               <span className="text-lg">09123855908</span>
             </a>

             <a href="https://www.studiohikaru.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-800 dark:text-zinc-300 hover:text-primary dark:hover:text-white transition-colors group">
               <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-300 dark:group-hover:bg-zinc-800 transition-colors">
                 <Globe className="w-5 h-5" />
               </div>
               <span className="text-lg">www.studiohikaru.com</span>
             </a>
           </div>

           <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900">
             <p className="text-sm text-zinc-600 dark:text-zinc-500 mb-6 uppercase tracking-wider">Follow & Chat</p>
             <div className="flex flex-wrap gap-4">
               <a href="https://www.linkedin.com/in/farnaz-hoseini-140ba3330" target="_blank" rel="noopener noreferrer" 
                  className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] transition-all">
                 <Linkedin size={18} className="text-[#0077b5] dark:text-[#0077b5] group-hover:text-white" />
                 <span>LinkedIn</span>
               </a>
               <a href="http://wa.me/+989123855908" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#25D366] dark:hover:bg-[#25D366] transition-all">
                 <MessageCircle size={18} className="text-[#25D366] dark:text-[#25D366] group-hover:text-white" />
                 <span>WhatsApp</span>
               </a>
               <a href="http://t.me/ifarnazhoseini" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#0088cc] dark:hover:bg-[#0088cc] transition-all">
                 <Send size={18} className="text-[#0088cc] dark:text-[#0088cc] group-hover:text-white" />
                 <span>Telegram</span>
               </a>
             </div>
           </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-zinc-900/20 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none transition-colors h-fit">
          <h3 className="text-xl font-sans font-bold text-zinc-900 dark:text-white mb-8">Send a message</h3>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  value={formState.user_name}
                  onChange={(e) => setFormState({...formState, user_name: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-white/50 transition-colors placeholder-zinc-400 dark:placeholder-zinc-700"
                  placeholder="Your Name"
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  value={formState.user_email}
                  onChange={(e) => setFormState({...formState, user_email: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-white/50 transition-colors placeholder-zinc-400 dark:placeholder-zinc-700"
                  placeholder="your@email.com"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-white/50 transition-colors placeholder-zinc-400 dark:placeholder-zinc-700 resize-none"
                  placeholder="Tell me about your project..."
                />
            </div>

            <div className="pt-2 flex flex-col gap-4">
              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg font-medium hover:bg-primary dark:hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm ${
                      status.type === 'success' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-zinc-500 dark:text-zinc-700 text-sm">
        &copy; {new Date().getFullYear()} Hikaru Studio. All Rights Reserved.
      </div>
    </motion.section>
  );
};