
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ArrowRight, ShieldCheck, CreditCard, ArrowLeft } from 'lucide-react';
import { Course } from './Courses';

interface CartProps {
  items: Course[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onBack: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.discountPrice, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Continue Shopping
        </button>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Shopping Cart <span className="text-slate-400 font-normal text-2xl">({items.length} items)</span></h1>

        {items.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-16 text-center shadow-sm">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <CreditCard size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
            <p className="text-slate-500 mb-8">Looks like you haven't added any courses yet.</p>
            <button 
              onClick={onBack}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row gap-6 items-center group hover:border-pink-200 transition-colors"
                  >
                    <div className="w-full sm:w-32 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold uppercase text-slate-500">{item.category}</span>
                        <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                        <span className="text-xs text-slate-500">By {item.author}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{item.title}</h3>
                      <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 text-xs font-bold">
                        <span>★ {item.rating}</span>
                        <span className="text-slate-400 font-medium">({item.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center gap-6 sm:gap-1">
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900">${item.discountPrice}</div>
                        <div className="text-xs text-slate-400 line-through">${item.price}</div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-xl shadow-indigo-500/5">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-slate-200 my-4"></div>
                  <div className="flex justify-between text-slate-900 text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-300 hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mb-4"
                >
                  Checkout
                  <ArrowRight size={18} />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span>Secure 256-bit SSL Encrypted payment</span>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">We Accept</p>
                  <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Simplified Card Icons */}
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
