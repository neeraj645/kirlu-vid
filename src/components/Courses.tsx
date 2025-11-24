
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ArrowRight, Heart, Sparkles, Box } from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  reviews: string;
  hours: number;
  price: number;
  discountPrice: number;
  image: string;
  category: string;
  tag: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Minimalist Web Design",
    author: "Alex Morgan",
    rating: 4.8,
    reviews: "1.2k",
    hours: 12,
    price: 89.99,
    discountPrice: 49.99,
    image: "https://picsum.photos/600/600?random=10",
    category: "Design",
    tag: "UI/UX"
  },
  {
    id: 2,
    title: "React Architecture Masterclass",
    author: "Sarah Jenkins",
    rating: 4.9,
    reviews: "850",
    hours: 24,
    price: 129.99,
    discountPrice: 79.99,
    image: "https://picsum.photos/600/600?random=11",
    category: "Development",
    tag: "Frontend"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    author: "Davide Rossi",
    rating: 4.7,
    reviews: "2.1k",
    hours: 8,
    price: 59.99,
    discountPrice: 29.99,
    image: "https://picsum.photos/600/600?random=12",
    category: "Marketing",
    tag: "Business"
  },
  {
    id: 4,
    title: "3D Modeling with Blender",
    author: "Emily Chen",
    rating: 4.9,
    reviews: "500",
    hours: 30,
    price: 99.99,
    discountPrice: 59.99,
    image: "https://picsum.photos/600/600?random=13",
    category: "Design",
    tag: "3D Art"
  },
  {
    id: 5,
    title: "Photography Essentials",
    author: "Mark Stone",
    rating: 4.6,
    reviews: "3.4k",
    hours: 6,
    price: 49.99,
    discountPrice: 19.99,
    image: "https://picsum.photos/600/600?random=14",
    category: "Creative",
    tag: "Photography"
  },
  {
    id: 6,
    title: "Full Stack TypeScript",
    author: "James Wilson",
    rating: 4.9,
    reviews: "1.5k",
    hours: 45,
    price: 199.99,
    discountPrice: 99.99,
    image: "https://picsum.photos/600/600?random=15",
    category: "Development",
    tag: "Full Stack"
  }
];

const categories = ["All", "Design", "Development", "Marketing", "Creative"];

interface CoursesProps {
  onCourseSelect: (course: Course) => void;
}

const Courses: React.FC<CoursesProps> = ({ onCourseSelect }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filters */}
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
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 italic font-serif pr-2">Catalog</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Unlock your potential with our prompt created by industry experts & loved by all.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-pink-100 cursor-pointer"
                onClick={() => onCourseSelect(course)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Top Elements */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-sm">
                      {course.tag}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/30 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-red-500 transition-all shadow-sm">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 w-3/4">
                      {course.title}
                    </h3>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star size={14} fill="currentColor" />
                        <span>{course.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">({course.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                        <Box size={10} className="text-slate-600"/>
                      </div>
                      {course.author}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {course.hours}h
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5 opacity-50"></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">${course.discountPrice}</span>
                        <span className="text-sm text-slate-400 line-through decoration-slate-300">${course.price}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onCourseSelect(course);
                      }}
                      className="relative overflow-hidden pl-6 pr-4 py-3 bg-slate-100 text-slate-900 rounded-full font-bold text-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:shadow-lg group-hover:shadow-slate-500/20"
                    >
                      <span className="relative z-10">Enroll</span>
                      <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-600 font-semibold hover:border-pink-300 hover:text-pink-600 transition-all shadow-sm hover:shadow-md">
            View All Prompts
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Courses;
