
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Phone, ArrowRight, CheckCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: 'login' | 'signup';
  onAuthSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView, onAuthSuccess }) => {
  const [view, setView] = useState<'login' | 'signup'>(initialView);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [otp, setOtp] = useState(['', '', '', '']);

  // Reset view when modal opens
  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      setStep('form');
      setOtp(['', '', '', '']);
    }
  }, [isOpen, initialView]);

  const handleSubmit = () => {
    if (view === 'signup' && step === 'form') {
      // Move to OTP step
      setStep('otp');
    } else {
      // Complete auth (Login or OTP Success)
      onAuthSuccess();
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl border border-white/50 rounded-[2rem] shadow-2xl shadow-indigo-500/10 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              
              <AnimatePresence mode="wait">
                {step === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        {view === 'login' ? 'Welcome Back' : 'Join Kirlu Vids'}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {view === 'login' 
                          ? 'Enter your details to access your prompts.' 
                          : 'Start your creative journey today.'}
                      </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      
                      {view === 'signup' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                            <input 
                              type="text" 
                              placeholder="Full Name"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                            />
                          </div>

                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                            <input 
                              type="tel" 
                              placeholder="Phone Number"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                            />
                          </div>
                        </motion.div>
                      )}

                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                        <input 
                          type="email" 
                          placeholder="Email Address"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                      </div>

                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                        <input 
                          type="password" 
                          placeholder="Password"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                      </div>
                    </div>

                    {view === 'login' && (
                      <div className="flex justify-end mt-2">
                        <button className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors">
                          Forgot Password?
                        </button>
                      </div>
                    )}

                    {/* Action Button */}
                    <button 
                      onClick={handleSubmit}
                      className="w-full mt-8 bg-slate-900 text-white rounded-xl py-4 font-bold text-sm shadow-lg shadow-slate-300 hover:bg-slate-800 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                    >
                      {view === 'login' ? 'Sign In' : 'Create Account'}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Toggle View */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-slate-500">
                        {view === 'login' ? "Don't have an account?" : "Already have an account?"}
                        <button 
                          onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                          className="ml-1 font-bold text-indigo-600 hover:text-indigo-700 underline decoration-indigo-200 underline-offset-4"
                        >
                          {view === 'login' ? 'Sign up' : 'Log in'}
                        </button>
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="otp"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <button 
                      onClick={() => setStep('form')}
                      className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-6 transition-colors group"
                    >
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      Back
                    </button>

                    <div className="text-center mb-8">
                       <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                         <ShieldCheck size={32} />
                       </div>
                       <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify it's you</h2>
                       <p className="text-slate-500 text-sm">
                         We've sent a 4-digit code to your email.<br/>Please enter it below.
                       </p>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-14 h-16 text-center text-2xl font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                      ))}
                    </div>

                    <button 
                      onClick={handleSubmit}
                      className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold text-sm shadow-lg shadow-slate-300 hover:bg-slate-800 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                      Verify & Proceed
                      <CheckCircle size={16} />
                    </button>

                    <p className="text-center mt-6 text-sm text-slate-500">
                      Didn't receive code? <button className="font-bold text-indigo-600 hover:text-indigo-700">Resend</button>
                    </p>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Decorative Footer */}
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-500" /> Secure Login</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Privacy Protected</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
