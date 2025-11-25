
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Lock, Calendar, ArrowLeft } from 'lucide-react';

interface PaymentProps {
  onBack: () => void;
  onSuccess: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onBack, onSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Checkout Form */}
          <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CreditCard className="text-pink-500" /> Checkout
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Card Number</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Expiry Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">CVC</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    required
                    maxLength={3}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold shadow-lg shadow-slate-300 hover:bg-slate-800 hover:scale-[1.02] transition-all mt-4">
                Pay $49.99
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Payments are secure and encrypted</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-500/20">
              <h3 className="text-xl font-bold mb-6 opacity-90">Order Summary</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/600/600?random=10" alt="Course" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">Minimalist Web Design Masterclass</h4>
                  <p className="text-indigo-200 text-sm">Lifetime Access</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                <div className="flex justify-between text-indigo-100">
                  <span>Original Price</span>
                  <span className="line-through opacity-70">$199.00</span>
                </div>
                <div className="flex justify-between text-indigo-100">
                  <span>Discount</span>
                  <span className="text-green-300 font-bold">- $149.01</span>
                </div>
                <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10">
                  <span>Total</span>
                  <span>$49.99</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 text-xs text-indigo-100 leading-relaxed">
                By completing your purchase, you agree to these Terms of Service.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
