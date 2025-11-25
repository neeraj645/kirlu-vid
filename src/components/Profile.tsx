
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Link as LinkIcon, Edit3, Award, Clock, BookOpen, Settings, LogOut, Layout, PhoneCall } from 'lucide-react';
import { Course } from './Courses';

interface ProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    location: string;
    mobile?: string;
  };
  enrolledCourses: Course[];
}

const Profile: React.FC<ProfileProps> = ({ user, enrolledCourses }) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'settings'>('courses');

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Profile Header */}
        <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-pink-200 via-indigo-200 to-purple-200 opacity-50"></div>
          
          <div className="relative mt-12 flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-slate-900 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="flex-1 mb-2">
              <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
              <p className="text-slate-500 font-medium">{user.email}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  {/* <MapPin size={14} /> {user.location} */}
                </span>
                <span className="flex items-center gap-1.5">
                    <PhoneCall size={14} /> {user.mobile || 'N/A'}
                  {/* <LinkIcon size={14} /> youtube.com/kirlu-vids */}

                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white font-medium text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm flex items-center gap-2">
                <Edit3 size={16} /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
             <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-4 shadow-sm">
               <nav className="flex flex-col gap-1">
                 <button 
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'courses' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                 >
                   <Layout size={18} /> My Prompts
                 </button>
                 {/* <button 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                 >
                   <Settings size={18} /> Settings
                 </button> */}
                 <div className="my-2 border-t border-slate-100"></div>
                 <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all">
                   <LogOut size={18} /> Log Out
                 </button>
               </nav>
             </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'courses' ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-6 text-white shadow-lg shadow-indigo-500/20">
                       <div className="p-3 bg-white/20 rounded-xl w-fit mb-4 backdrop-blur-sm">
                         <BookOpen size={24} />
                       </div>
                       <h3 className="text-3xl font-bold mb-1">{enrolledCourses.length}</h3>
                       <p className="text-indigo-100 text-sm">Prompts Created</p>
                    </div>
                    {/* <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                       <div className="p-3 bg-green-100 text-green-600 rounded-xl w-fit mb-4">
                         <Award size={24} />
                       </div>
                       <h3 className="text-3xl font-bold text-slate-900 mb-1">2</h3>
                       <p className="text-slate-500 text-sm">Certificates Earned</p>
                    </div> */}
                    {/* <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                       <div className="p-3 bg-amber-100 text-amber-600 rounded-xl w-fit mb-4">
                         <Clock size={24} />
                       </div>
                       <h3 className="text-3xl font-bold text-slate-900 mb-1">12h</h3>
                       <p className="text-slate-500 text-sm">Hours Spent Learning</p>
                    </div> */}
                  </div>

                  {/* <h3 className="text-xl font-bold text-slate-900 mb-6">In Progress</h3>
                  
                  <div className="space-y-4">
                    {enrolledCourses.length > 0 ? enrolledCourses.map((course) => (
                      <div key={course.id} className="group bg-white border border-slate-100 rounded-3xl p-4 flex flex-col md:flex-row gap-6 hover:shadow-lg hover:shadow-slate-200/50 hover:border-indigo-100 transition-all">
                        <div className="w-full md:w-48 aspect-video rounded-2xl overflow-hidden relative">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-slate-900/10"></div>
                          <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                            <div className="h-full w-1/3 bg-white"></div>
                          </div>
                        </div>
                        <div className="flex-1 py-1">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">{course.category}</span>
                            <span className="text-xs font-bold text-slate-400">35% Complete</span>
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h4>
                          <p className="text-sm text-slate-500 mb-4 line-clamp-1">By {course.author}</p>
                          <button className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-1">
                            Continue Learning <Edit3 size={14} className="rotate-180" />
                          </button>
                        </div>
                      </div>
                    )) : (
                       <div className="text-center py-12 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                          <p className="text-slate-500">You haven't enrolled in any courses yet.</p>
                       </div>
                    )}
                  </div> */}
                </>
              ) : (
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <Settings size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">Settings</h3>
                    <p className="text-slate-500">Account preferences coming soon.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
