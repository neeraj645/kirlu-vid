import React from 'react';
import { Award, Users, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-pink-100/50 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Yashwant Rao</span>.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
               Hey everyone! Welcome to my channel, where I share exciting, 
               informative, and entertaining videos every week. From helpful 
               tips and real-life experiences to creative content and fun challenges,
                there’s always something new to enjoy. Make sure to subscribe and join the journey!
               </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-pink-500 mb-2">
                    <Users size={20} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">15k+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Subscribers</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-indigo-500 mb-2">
                    <Award size={20} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">20+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Videos</div>
                </div>
                {/* <div>
                  <div className="flex items-center gap-2 text-pink-500 mb-2">
                    <Coffee size={20} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tutorials</div>
                </div> */}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-indigo-400 rounded-[2rem] rotate-6 opacity-30 blur-lg"></div>
                <img 
                  src="https://picsum.photos/500/600?random=999" 
                  alt="Instructor" 
                  className="relative rounded-[2rem] border-4 border-white shadow-2xl w-full max-w-sm object-cover hover:-rotate-2 transition-all duration-500"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-[200px]">
                   <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                     <Award size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-medium">TCS ILP extended</p>
                     <p className="text-sm font-bold text-slate-900">Associate</p>
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;