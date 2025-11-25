
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import type { Course } from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import AuthModal from './components/AuthModel';
import Profile from './components/Profile';
import Payment from './components/Payment';

type ViewState = 'home' | 'details' | 'profile' | 'payment';

// Mock User Data
const MOCK_USER = {
  name: "Yashwant Rao",
  email: "yashwant@gmail.com",
  role: "Product Designer",
  mobile: "8877665544",
  location: "San Francisco, CA",
  avatar: "https://picsum.photos/100/100?random=99"
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  // Auth State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Logic to redirect after login (e.g. user clicked enroll -> login -> payment)
  const [pendingRoute, setPendingRoute] = useState<ViewState | null>(null);

  // Navigation Handlers
  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedCourse(null);
    window.scrollTo(0, 0);
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('details');
    window.scrollTo(0, 0);
  };

  const navigateToProfile = () => {
    setCurrentView('profile');
    window.scrollTo(0, 0);
  };

  // Auth Handlers
  const openLogin = () => {
    setAuthView('login');
    setIsAuthOpen(true);
  };

  const openSignup = () => {
    setAuthView('signup');
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthOpen(false);
    
    // Redirect to pending route if it exists (e.g. Payment)
    if (pendingRoute) {
      setCurrentView(pendingRoute);
      setPendingRoute(null);
    }
  };

  // "Gatekeeper" function for actions requiring login
  const handleProtectedAction = (targetView: ViewState) => {
    if (isLoggedIn) {
      setCurrentView(targetView);
      window.scrollTo(0, 0);
    } else {
      setPendingRoute(targetView);
      openLogin();
    }
  };

  const handleEnroll = () => {
    handleProtectedAction('payment');
  };

  const handleOrderClick = () => {
    handleProtectedAction('payment');
  };

  const handlePaymentSuccess = () => {
    alert("Payment Successful! Welcome to the course.");
    navigateToProfile();
  };

  // Render View Logic
  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        return (
          <Profile 
            user={MOCK_USER} 
            enrolledCourses={[]} 
          />
        );
      case 'payment':
        return (
          <Payment 
            onBack={navigateToHome}
            onSuccess={handlePaymentSuccess}
          />
        );
      case 'details':
        return selectedCourse ? (
          <CourseDetails 
            course={selectedCourse} 
            onBack={navigateToHome} 
            onEnroll={handleEnroll}
          />
        ) : null;
      case 'home':
      default:
        return (
          <>
            <Hero onOrderClick={handleOrderClick} />
            <Courses onCourseSelect={handleCourseSelect} />
            <About />
          </>
        );
    }
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
        <Navbar 
          onLoginClick={openLogin} 
          onSignupClick={openSignup} 
          onLogoClick={navigateToHome}
          onProfileClick={navigateToProfile}
          isLoggedIn={isLoggedIn}
        />
        
        <main>
          {renderContent()}
        </main>
        
        <Footer />
      </div>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialView={authView}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default App;
