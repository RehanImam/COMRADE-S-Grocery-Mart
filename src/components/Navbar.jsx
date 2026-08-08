// import React from 'react';

// export default function Navbar({ searchQuery, setSearchQuery, cartCount, onOpenCart }) {
//   return (
//     <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
//         {/* Brand Logo */}
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
//             C
//           </div>
//           <div>
//             <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none block">
//               COMRADE'S
//             </span>
//             <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-widest block">
//               Grocery Mart
//             </span>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 max-w-lg hidden sm:block">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search organic produce, dairy, snacks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
//             />
//             <span className="absolute left-3.5 top-3 text-slate-400">🔍</span>
//           </div>
//         </div>

//         {/* User & Cart Quick Controls */}
//         <div className="flex items-center gap-4">
//           <button className="hidden md:flex flex-col items-end text-xs text-slate-500 hover:text-slate-900">
//             <span className="font-semibold text-slate-800">Deliver To</span>
//             <span className="text-emerald-600 font-medium">New Delhi 110001 ▼</span>
//           </button>

//           <button
//             onClick={onOpenCart}
//             className="relative bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition"
//           >
//             <span>🛒</span>
//             <span className="hidden sm:inline">Cart</span>
//             {cartCount > 0 && (
//               <span className="bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from 'react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  cartCount, 
  onOpenCart,
  user,
  onOpenAuth,
  onLogout 
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
            C
          </div>
          <div>
            <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none block">
              COMRADE'S
            </span>
            <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-widest block">
              Grocery Mart
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search organic produce, dairy, snacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
            />
            <span className="absolute left-3.5 top-3 text-slate-400">🔍</span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Deliver Location Indicator */}
          <button className="hidden md:flex flex-col items-end text-xs text-slate-500 hover:text-slate-900">
            <span className="font-semibold text-slate-800">Deliver To</span>
            <span className="text-emerald-600 font-medium">New Delhi 110001 ▼</span>
          </button>

          {/* Login / User Account Area */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 transition"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden lg:inline">{user.name}</span>
                <span>▼</span>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-40 text-xs">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="font-bold text-slate-900">{user.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                  </div>
                  <a href="#orders" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 font-medium">
                    📦 My Orders
                  </a>
                  <a href="#addresses" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 font-medium">
                    📍 Saved Addresses
                  </a>
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 font-bold border-t border-slate-100 mt-1"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition shadow-sm"
            >
              Login / Sign Up
            </button>
          )}

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}