import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageState } from '../types';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Search, Film, Upload, Loader2, Play, ExternalLink } from 'lucide-react';

// Helper for base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix (e.g., "data:image/png;base64,")
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
};

// --- TAB COMPONENTS ---

const TrendScout = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setResult(null);
    setGroundingChunks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });

      setResult(response.text || "No result found.");
      
      // Extract grounding metadata
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setGroundingChunks(chunks);
    } catch (error) {
      console.error(error);
      setResult("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif italic mb-2 text-zinc-900 dark:text-white">Trend Scout</h3>
        <p className="text-zinc-500 dark:text-zinc-400">Discover the latest in photography and design using Google Search data.</p>
      </div>

      <form onSubmit={handleSearch} className="relative mb-12">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. What are the emerging color trends for 2025?"
          className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-full py-4 pl-6 pr-14 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-primary dark:focus:border-white transition-colors shadow-sm"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="absolute right-2 top-2 p-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-primary dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors"
        >
          {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Search className="w-5 h-5" />}
        </button>
      </form>

      <AnimatePresence mode='wait'>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm"
          >
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-200 leading-relaxed">{result}</p>
            </div>

            {groundingChunks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Sources</h4>
                <div className="flex flex-wrap gap-3">
                  {groundingChunks.map((chunk, idx) => {
                    if (chunk.web?.uri) {
                      return (
                        <a 
                          key={idx} 
                          href={chunk.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md text-xs text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-white hover:border-primary dark:hover:border-zinc-500 transition-all"
                        >
                          <ExternalLink size={10} />
                          {chunk.web.title || "Source"}
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MotionStudio = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setVideoUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (!selectedFile) return;
    
    setIsGenerating(true);
    setVideoUrl(null);

    try {
       // API Key Selection for Veo
       if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await window.aistudio.openSelectKey();
          // Assume successful selection and proceed
        }
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Image = await fileToBase64(selectedFile);

      // Create operation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        image: {
          imageBytes: base64Image,
          mimeType: selectedFile.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9' // Defaulting to landscape
        }
      });

      // Poll for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        // Fetch the actual video bytes using the key
        const videoRes = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoRes.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        alert("Failed to generate video.");
      }

    } catch (error) {
      console.error("Veo Error:", error);
      alert("An error occurred during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif italic mb-2 text-zinc-900 dark:text-white">Motion Studio</h3>
        <p className="text-zinc-500 dark:text-zinc-400">Bring your still images to life with Veo generative AI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white/30 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden transition-colors">
          {previewUrl ? (
            <div className="relative w-full h-full flex flex-col items-center">
              <img src={previewUrl} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex gap-4">
                <button 
                   onClick={() => fileInputRef.current?.click()}
                   className="text-xs text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-white underline"
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer flex flex-col items-center gap-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <Upload size={24} />
              </div>
              <p className="text-sm uppercase tracking-wider">Upload Image</p>
            </div>
          )}
          <input 
            ref={fileInputRef}
            type="file" 
            accept="image/*" 
            onChange={handleFileSelect} 
            className="hidden" 
          />
        </div>

        {/* Output Section */}
        <div className="bg-white/30 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px] transition-colors">
          {isGenerating ? (
            <div className="text-center">
              <Loader2 className="w-10 h-10 animate-spin text-primary dark:text-white mx-auto mb-4" />
              <p className="text-zinc-500 dark:text-zinc-400 text-sm animate-pulse">Dreaming up pixels...</p>
            </div>
          ) : videoUrl ? (
            <div className="w-full h-full">
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                loop 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ) : (
            <div className="text-zinc-400 dark:text-zinc-600 flex flex-col items-center">
              <Film size={32} className="mb-2 opacity-30" />
              <p className="text-sm">Video will appear here</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleGenerate}
          disabled={!selectedFile || isGenerating}
          className="flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary dark:hover:bg-zinc-200 transition-colors"
        >
           {isGenerating ? 'Generating...' : 'Generate Video'}
           {!isGenerating && <Sparkles size={16} />}
        </button>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

export const AiLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'veo'>('search');

  return (
    <section id={PageState.AI_LAB} className="min-h-screen w-full py-32 px-6 md:px-12 bg-zinc-100 dark:bg-black relative transition-colors duration-300">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Innovation</h2>
          <h1 className="text-4xl md:text-6xl font-serif italic text-zinc-900 dark:text-zinc-100 mb-6">AI Lab</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Exploring the boundaries of creativity with generative intelligence.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-16">
           <button 
             onClick={() => setActiveTab('search')}
             className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
               activeTab === 'search' 
                 ? 'bg-primary text-white border-primary' 
                 : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-primary dark:hover:border-zinc-600'
             }`}
           >
             <Search size={16} />
             Trend Scout
           </button>
           <button 
             onClick={() => setActiveTab('veo')}
             className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
               activeTab === 'veo' 
                 ? 'bg-primary text-white border-primary' 
                 : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-primary dark:hover:border-zinc-600'
             }`}
           >
             <Film size={16} />
             Motion Studio
           </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
           <AnimatePresence mode="wait">
             {activeTab === 'search' ? (
               <motion.div 
                 key="search"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={{ duration: 0.3 }}
               >
                 <TrendScout />
               </motion.div>
             ) : (
               <motion.div 
                 key="veo"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
               >
                 <MotionStudio />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};