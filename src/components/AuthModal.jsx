import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user login/signup
    const user = {
      name: formData.name || formData.email.split('@')[0] || 'John Doe',
      email: formData.email,
    };
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8">
        {/* Header Tabs */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`text-lg font-bold pb-1 transition ${
                isLogin 
                  ? 'text-slate-900 border-b-2 border-emerald-600' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`text-lg font-bold pb-1 transition ${
                !isLogin 
                  ? 'text-slate-900 border-b-2 border-emerald-600' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Create Account
            </button>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 text-sm"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          {isLogin 
            ? 'Welcome back to COMRADE’S Grocery Mart! Access your saved baskets.' 
            : 'Join COMRADE’S to unlock exclusive farm-fresh discounts and 2-hour delivery.'}
        </p>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#forgot" className="text-[11px] text-emerald-600 font-bold hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition shadow-md shadow-emerald-600/20 active:scale-[0.98]"
          >
            {isLogin ? 'Sign In to Account' : 'Register New Account'}
          </button>
        </form>

        {/* Divider & Social Login */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-3 text-[10px] uppercase font-bold text-slate-400">
            Or continue with
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            onLoginSuccess({ name: 'Google User', email: 'user@gmail.com' });
            onClose();
          }}
          className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
        >
          <span>🌐</span> Google Account
        </button>
      </div>
    </div>
  );
}