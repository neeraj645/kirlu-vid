
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: Moves the image container slower than the scroll
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Dynamic overlay opacity: Darkens slightly as user scrolls down
  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 0.4]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-600 text-xs font-bold mb-6 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            New AI video prompts Available
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Refine your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              Video Craft.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed font-medium">
            Minimalist theory meets practical application. Elevate your skills with premium courses designed for the modern creator.
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onOrderClick}
              className="group relative pl-8 pr-2 py-2 bg-slate-900 text-white rounded-full font-semibold flex items-center gap-4 hover:bg-slate-800 transition-all shadow-2xl shadow-indigo-900/20 hover:shadow-indigo-900/40 hover:-translate-y-1"
            >
              <span>Get All Access</span>
              <span className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-3 border border-white/5">
                <span className="flex flex-col items-end leading-none">
                  {/* rupee sign */}
                  
                  <span className="text-[10px] text-slate-400 line-through decoration-slate-400/50">Regular ₹249</span>
                  <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300">Offer ₹99</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </span>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/50/50?random=${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
               ))}
             </div>
             <p>Joined by 1000+ happy users </p>
          </div>
        </motion.div>

        {/* Image Section - Parallax & Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Organic Shape Image */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border-4 border-white group">
            <img 
              src="https://picsum.photos/800/1000?random=hero" 
              alt="Hero Course" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out will-change-transform group-hover:scale-105"
            />
            {/* Base Gradient Overlay (Always visible) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            
            {/* Dynamic Scroll Overlay */}
            <motion.div 
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-indigo-900 mix-blend-multiply pointer-events-none"
            />
            
            {/* Internal Label */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-lg z-10">
              #1 Trending Prompts package
            </div>
          </div>

          {/* Floating Element - Glass Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -left-6 md:left-10 p-5 bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-[200px] z-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Fast Track</p>
                <p className="text-sm font-bold text-slate-800">Video Craft</p>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="w-[96%] h-full bg-gradient-to-r from-pink-500 to-indigo-500"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right">96% Completed</p>
          </motion.div>

          {/* Abstract Decor Behind */}
          <div className="absolute top-10 -right-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
