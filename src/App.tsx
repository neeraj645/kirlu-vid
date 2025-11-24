
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses, { Course } from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';

const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    window.scrollTo(0, 0);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Main Background Gradient: White to Faded Pink */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-pink-50/40 to-white -z-20"></div>
      
      {/* Noise Texture (Light) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none z-0 mix-blend-soft-light"></div>
      
      {/* Gradient Blobs for Background Ambiance (Pastel) */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[128px] pointer-events-none -z-10" />

      <div className="relative z-10">
        <Navbar />
        <main>
          {selectedCourse ? (
            <CourseDetails course={selectedCourse} onBack={handleBackToCourses} />
          ) : (
            <>
              <Hero />
              <Courses onCourseSelect={handleCourseSelect} />
              <About />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
