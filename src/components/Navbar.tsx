import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-white/50 shadow-sm py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="p-2 bg-indigo-600 rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-200">
             <BookOpen size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Kirlu Vid</span>
        </div>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center gap-8">
          {/* Modern Search Bar - Icon on Right */}
          <div className="relative group">
            <div className={`flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-300 focus-within:w-72 w-64 shadow-sm`}>
              <input
                type="text"
                placeholder="Find prompt..."
                className="bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 w-full mr-2"
              />
              <Search size={18} className="text-slate-400 group-focus-within:text-pink-500 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Auth & Profile */}
          <div className="flex items-center gap-4">
             <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</button>
             <button className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
               Sign Up
             </button>
             <div className="h-8 w-[1px] bg-slate-200"></div>
             <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
               <ShoppingBag size={20} className="text-slate-600" />
               <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border border-white"></span>
             </button>
             <button className="p-0.5 rounded-full border-2 border-slate-200 hover:border-pink-400 transition-colors overflow-hidden">
               <img src="https://picsum.photos/100/100?random=99" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
             </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
               <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                 <input
                  type="text"
                  placeholder="Find a course..."
                  className="bg-transparent w-full text-slate-700 outline-none"
                />
                <Search size={18} className="text-slate-400" />
               </div>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium">Home</a>
              <a href="#courses" className="text-slate-600 hover:text-indigo-600 font-medium">Courses</a>
              <a href="#about" className="text-slate-600 hover:text-indigo-600 font-medium">About</a>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium">Log in</button>
              <button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/20">Sign Up</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;