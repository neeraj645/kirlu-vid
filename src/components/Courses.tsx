
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight, Heart, Book, Sparkles, Box } from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  reviews: string;
  promptsNo: number;
  price: number;
  discountPrice: number;
  image: string;
  category: string;
  tag: string;
}

// Single Course
const featuredCourse: Course = {
  id: 1,
  title: "100+ videos prompts for stunning AI creations",
  author: "Alex Morgan",
  rating: 4.8,
  reviews: "1.2k",
  promptsNo: 12,
  price: 299,
  discountPrice: 99,
  image: "https://picsum.photos/600/600?random=10",
  category: "Design",
  tag: "AI Prompts",
};

interface CoursesProps {
  onCourseSelect: (course: Course) => void;
}

const Courses: React.FC<CoursesProps> = ({ onCourseSelect }) => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="text-center max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Sparkles size={14} />
              The Kurlu Vid Prompt
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore Our  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 italic font-serif pr-2">Catalog</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Unlock your potential with our prompt created by industry experts & loved by all.
            </p>
          </div>
        </div>

        {/* Single Course Card - Centered */}
        <div className="flex justify-center">
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-[0.5rem] p-6 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-pink-100 cursor-pointer max-w-md w-full"
            onClick={() => onCourseSelect(featuredCourse)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] rounded-[0.5rem] overflow-hidden mb-5">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10"></div>
              <img 
                src={featuredCourse.image} 
                alt={featuredCourse.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Floating Top Elements */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  {featuredCourse.tag}
                </span>
                {/* <span className="px-3 py-1.5 bg-pink-500 text-white rounded-full text-xs font-bold shadow-sm">
                  Best Seller
                </span> */}
              </div>
              {/* <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/30 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-red-500 transition-all shadow-sm">
                <Heart size={18} />
              </button> */}
            </div>

            {/* Content */}
            <div className="px-2 pb-2">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors w-full">
                  {featuredCourse.title}
                </h3>
              </div>
              
              {/* <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star size={14} fill="currentColor" />
                    <span>{featuredCourse.rating}</span>
                    <span className="text-slate-400 font-medium">({featuredCourse.reviews} reviews)</span>
                  </div>
              </div> */}

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                  <Star size={14} fill="currentColor" />
                    <span>{featuredCourse.rating}</span>
                    <span className="text-slate-400 font-medium">({featuredCourse.reviews} reviews)</span>
                </span>
                {/* <span className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                    <Box size={10} className="text-slate-600"/>
                  </div>
                  {featuredCourse.author}
                </span> */}
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="flex items-center gap-1.5">
                  <Book size={14} />
                  {featuredCourse.promptsNo} prompts
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5 opacity-50"></div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-900">₹{featuredCourse.discountPrice}</span>
                    <span className="text-sm text-slate-400 line-through decoration-slate-300">₹{featuredCourse.price}</span>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onCourseSelect(featuredCourse);
                  }}
                  className="relative overflow-hidden pl-6 pr-4 py-3 bg-slate-100 text-slate-900 rounded-full font-bold text-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:shadow-lg group-hover:shadow-slate-500/20"
                >
                  <span className="relative z-10">Enroll Now</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
