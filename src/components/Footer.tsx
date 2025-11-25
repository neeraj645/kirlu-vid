import React from 'react';
import { Twitter, Instagram, Linkedin, Github, BookOpen, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-200 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
               <div className="p-2 bg-indigo-600 rounded-lg shadow-md shadow-indigo-200">
                 <BookOpen size={20} className="text-white" />
               </div>
               <span className="text-xl font-bold tracking-tight text-slate-900">Kirlu Vids</span>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed">
                Kirlu Vids is your go-to YouTube channel for creative and engaging video content.
             </p>
             <div className="flex gap-4">
               {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                 <a key={i} href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                   <Icon size={20} />
                 </a>
               ))}
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              {['All Courses', 'Youtube', 'Blog'].map(item => (
                <li key={item}><a href="#" className="hover:text-indigo-600 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal/Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              {['About Us','Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}><a href="#" className="hover:text-indigo-600 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-500 mt-0.5" />
                <span>TCS Electronic city<br/>Bangalore 560100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-pink-500" />
                <span>kirluvid@example.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} Kirlu vid. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;