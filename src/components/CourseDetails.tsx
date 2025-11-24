
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, User, CheckCircle, PlayCircle, ArrowLeft, Shield, Globe, Award, MessageCircle, ThumbsUp } from 'lucide-react';
import { Course } from './Courses';

interface CourseDetailsProps {
  course: Course;
  onBack: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onBack }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb & Back */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
        >
          <div className="p-2 rounded-full bg-white border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Courses
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-4">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Master the essentials of {course.tag} with this comprehensive guide designed for both beginners and experienced professionals.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <img src="https://picsum.photos/50/50?random=1" alt={course.author} className="w-8 h-8 rounded-full" />
                  <span className="text-slate-900">{course.author}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-slate-900">{course.rating}</span>
                  <span className="text-slate-400">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe size={16} />
                  English
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  Last updated June 2025
                </div>
              </div>
            </motion.div>

            {/* Course Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border-4 border-white"
            >
              <img src={course.image} alt={course.title} className="w-full object-cover aspect-video" />
            </motion.div>

            {/* What you'll learn */}
            <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What you'll learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Master the fundamental concepts of the industry",
                  "Build real-world projects from scratch",
                  "Understand best practices and workflow",
                  "Get certified and job-ready skills",
                  "Access to premium resources and assets",
                  "Lifetime access to course updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-500 mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Content</h3>
               <div className="space-y-4">
                 {[
                   { title: "Introduction & Setup", time: "45 min", lessons: 3 },
                   { title: "Core Concepts Deep Dive", time: "2h 30m", lessons: 8 },
                   { title: "Advanced Techniques", time: "4h 15m", lessons: 12 },
                   { title: "Final Project Building", time: "3h 45m", lessons: 6 },
                 ].map((module, i) => (
                   <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-pink-200 transition-colors cursor-pointer group">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                         <PlayCircle size={20} />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{module.title}</h4>
                         <p className="text-xs text-slate-500">{module.lessons} lessons</p>
                       </div>
                     </div>
                     <span className="text-sm font-medium text-slate-400">{module.time}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                Student Reviews 
                <span className="text-lg font-normal text-slate-400">({course.reviews})</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { name: "Sarah J.", rating: 5, text: "This course absolutely changed my career path. The instructor explains complex topics so simply.", date: "2 days ago" },
                  { name: "Michael T.", rating: 4, text: "Great content, very detailed. I wish there were more practice exercises, but overall fantastic.", date: "1 week ago" },
                  { name: "Jessica R.", rating: 5, text: "Worth every penny. The project based approach is exactly what I needed to learn.", date: "3 weeks ago" }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{review.name}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, starI) => (
                              <Star key={starI} size={12} className={starI < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{review.text}</p>
                    <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                      <ThumbsUp size={14} /> Helpful
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 text-slate-500 font-medium hover:text-slate-900 transition-colors border border-slate-200 rounded-xl hover:bg-slate-50">
                Load More Reviews
              </button>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Pricing Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Award size={120} className="text-indigo-600" />
                </div>
                
                <div className="relative z-10">
                  <p className="text-slate-500 font-medium mb-1">Total Price</p>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-slate-900">${course.discountPrice}</span>
                    <span className="text-xl text-slate-400 line-through mb-1">${course.price}</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full mb-2">50% OFF</span>
                  </div>

                  <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold shadow-lg shadow-slate-300 transition-all hover:scale-[1.02] mb-3">
                    Enroll Now
                  </button>
                  <p className="text-center text-xs text-slate-400 mb-6">30-Day Money-Back Guarantee</p>

                  <div className="space-y-4 pt-6 border-t border-slate-200">
                    <h4 className="font-bold text-slate-900">This course includes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <PlayCircle size={16} className="text-pink-500" /> {course.hours} hours on-demand video
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-pink-500" /> Full lifetime access
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <Globe size={16} className="text-pink-500" /> Access on mobile and TV
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <Shield size={16} className="text-pink-500" /> Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex items-center gap-4 shadow-sm">
                 <img src="https://picsum.photos/100/100?random=instructor" alt="Instructor" className="w-16 h-16 rounded-full object-cover" />
                 <div>
                   <p className="text-xs text-slate-400 font-bold uppercase">Instructor</p>
                   <p className="font-bold text-slate-900 text-lg">{course.author}</p>
                   <p className="text-xs text-slate-500">Senior Developer</p>
                 </div>
                 <button className="ml-auto p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                   <MessageCircle size={20} className="text-slate-600" />
                 </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
