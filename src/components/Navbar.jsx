

// import React, { useState } from 'react';

// export default function Navbar({ 
//   searchQuery, 
//   setSearchQuery, 
//   cartCount, 
//   onOpenCart,
//   user,
//   onOpenAuth,
//   onLogout 
// }) {
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-4">
        
//         {/* Top Header Row */}
//         <div className="flex items-center justify-between gap-2 sm:gap-4">
          
//           {/* Brand Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-sm">
//               C
//             </div>
//             <div>
//               <span className="font-extrabold text-sm sm:text-lg text-slate-900 tracking-tight leading-none block">
//                 COMRADE'S
//               </span>
//               <span className="text-[8px] sm:text-[10px] uppercase font-bold text-emerald-600 tracking-wider block">
//                 Grocery Mart
//               </span>
//             </div>
//           </div>

//           {/* Desktop Search Bar */}
//           <div className="flex-1 max-w-lg hidden sm:block">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search organic produce, dairy, snacks..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
//               />
//               <span className="absolute left-3 top-2 text-slate-400">🔍</span>
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center gap-2 sm:gap-4">
            
//             {/* Deliver Location Indicator */}
//             <button className="hidden md:flex flex-col items-end text-xs text-slate-500 hover:text-slate-900">
//               <span className="font-semibold text-slate-800">Deliver To</span>
//               <span className="text-emerald-600 font-medium">New Delhi 110001 ▼</span>
//             </button>

//             {/* Login / User Account Area */}
//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                   className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 p-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold text-slate-800 transition"
//                 >
//                   <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
//                     {user.name.charAt(0).toUpperCase()}
//                   </div>
//                   <span className="hidden lg:inline">{user.name}</span>
//                   <span className="text-[10px]">▼</span>
//                 </button>

//                 {/* User Dropdown */}
//                 {isUserMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-40 text-xs">
//                     <div className="px-4 py-2 border-b border-slate-100">
//                       <p className="font-bold text-slate-900">{user.name}</p>
//                       <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
//                     </div>
//                     <a href="#orders" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 font-medium">
//                       📦 My Orders
//                     </a>
//                     <a href="#addresses" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 font-medium">
//                       📍 Saved Addresses
//                     </a>
//                     <button
//                       onClick={() => {
//                         setIsUserMenuOpen(false);
//                         onLogout();
//                       }}
//                       className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 font-bold border-t border-slate-100 mt-1"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={onOpenAuth}
//                 className="bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-xs transition shadow-sm whitespace-nowrap"
//               >
//                 Login
//               </button>
//             )}

//             {/* Cart Button */}
//             <button
//               onClick={onOpenCart}
//               className="relative bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition"
//             >
//               <span className="text-sm sm:text-base">🛒</span>
//               <span className="hidden sm:inline">Cart</span>
//               {cartCount > 0 && (
//                 <span className="bg-emerald-600 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dedicated Search Bar Row */}
//         <div className="mt-2 sm:hidden">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search groceries, fruits & veggies..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-1.5 pl-8 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition placeholder:text-slate-400"
//             />
//             <span className="absolute left-2.5 top-1.5 text-xs text-slate-400">🔍</span>
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  ShoppingCart,
  Leaf,
  Wheat,
  Package,
  MapPinned,
  LogOut,
} from "lucide-react";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  user,
  onOpenAuth,
  onLogout,
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* ================= TOP HEADER ================= */}
        <div className="flex items-center justify-between gap-3 sm:gap-5">

          {/* ================= PREMIUM LOGO ================= */}
          <div className="flex items-center shrink-0">

            {/* Logo Icon */}
            <div className="relative w-11 h-11 sm:w-14 sm:h-14">

              {/* Green Circle */}
              <div
                className="
                  absolute inset-0
                  rounded-[18px]
                  sm:rounded-[20px]
                  bg-gradient-to-br
                  from-emerald-400
                  via-emerald-600
                  to-green-800
                  shadow-lg
                  shadow-emerald-200
                  flex items-center justify-center
                  overflow-hidden
                "
              >

                {/* Big C */}
                <span
                  className="
                    text-white
                    text-[31px]
                    sm:text-[40px]
                    font-black
                    leading-none
                    tracking-tighter
                    italic
                    -translate-x-0.5
                  "
                >
                  C
                </span>

                {/* Leaf */}
                <Leaf
                  size={17}
                  strokeWidth={2.8}
                  className="
                    absolute
                    text-lime-200
                    fill-lime-300
                    right-1
                    top-1
                    rotate-[-25deg]
                  "
                />

                {/* Small Cart */}
                <ShoppingCart
                  size={17}
                  strokeWidth={3}
                  className="
                    absolute
                    text-white
                    right-1
                    bottom-1
                  "
                />
              </div>

              {/* Decorative leaf outside */}
              <Leaf
                size={13}
                className="
                  absolute
                  -right-1
                  -top-1
                  text-emerald-500
                  fill-emerald-400
                  rotate-[-20deg]
                "
              />
            </div>

            {/* Logo Text */}
            <div className="ml-2 sm:ml-3">

              {/* COMRADE'S */}
              <div className="flex items-center">

                <span
                  className="
                    text-[17px]
                    sm:text-[22px]
                    font-black
                    tracking-[-0.8px]
                    leading-none
                    text-slate-900
                  "
                >
                  COMRADE
                </span>

                <span
                  className="
                    text-[17px]
                    sm:text-[22px]
                    font-black
                    tracking-[-0.8px]
                    leading-none
                    text-emerald-600
                  "
                >
                  'S
                </span>

                {/* Mini leaf */}
                <Leaf
                  size={13}
                  className="
                    ml-1
                    text-emerald-500
                    fill-emerald-200
                    rotate-[25deg]
                  "
                />
              </div>

              {/* Grocery Mart */}
              <div className="flex items-center gap-1.5 mt-1">

                <span className="hidden sm:block h-[2px] w-4 bg-emerald-500 rounded-full" />

                <span
                  className="
                    text-[8px]
                    sm:text-[10px]
                    uppercase
                    font-extrabold
                    tracking-[2px]
                    text-emerald-600
                    leading-none
                  "
                >
                  Grocery Mart
                </span>

                <Wheat
                  size={11}
                  className="
                    hidden sm:block
                    text-lime-500
                  "
                />
              </div>

              {/* Tagline */}
              <span
                className="
                  hidden sm:block
                  text-[7px]
                  uppercase
                  font-semibold
                  tracking-[1.5px]
                  text-slate-400
                  mt-1
                "
              >
                Fresh • Quality • Everyday
              </span>
            </div>
          </div>

          {/* ================= DESKTOP SEARCH ================= */}
          <div className="flex-1 max-w-xl hidden sm:block">

            <div className="relative group">

              <input
                type="text"
                placeholder="Search organic produce, dairy, snacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full
                  h-11
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  pl-11
                  pr-4
                  text-sm
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-200
                  focus:bg-white
                  focus:border-emerald-400
                  focus:ring-4
                  focus:ring-emerald-500/10
                "
              />

              <Search
                size={19}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  group-focus-within:text-emerald-600
                  transition
                "
              />

              {/* Search shortcut */}
              <div
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  hidden lg:flex
                  items-center
                  justify-center
                  w-7
                  h-7
                  rounded-lg
                  bg-white
                  border
                  border-slate-200
                  text-[10px]
                  text-slate-400
                  font-bold
                "
              >
                /
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTROLS ================= */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Delivery Location */}
            <button
              className="
                hidden
                lg:flex
                items-center
                gap-2
                px-2
                py-1.5
                rounded-xl
                hover:bg-slate-50
                transition
              "
            >
              <div
                className="
                  w-8
                  h-8
                  rounded-xl
                  bg-emerald-50
                  flex
                  items-center
                  justify-center
                "
              >
                <MapPin
                  size={16}
                  className="text-emerald-600"
                />
              </div>

              <div className="text-left">

                <span
                  className="
                    block
                    text-[9px]
                    font-semibold
                    text-slate-400
                    uppercase
                    tracking-wide
                  "
                >
                  Deliver To
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-bold
                    text-slate-800
                  "
                >
                  New Delhi 110001
                  <ChevronDown size={12} />
                </span>

              </div>
            </button>

            {/* ================= USER ================= */}
            {user ? (
              <div className="relative">

                <button
                  onClick={() =>
                    setIsUserMenuOpen(!isUserMenuOpen)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    bg-slate-50
                    hover:bg-slate-100
                    border
                    border-slate-200
                    p-1.5
                    sm:px-3
                    sm:py-1.5
                    rounded-xl
                    text-xs
                    font-bold
                    text-slate-800
                    transition
                  "
                >

                  {/* User Avatar */}
                  <div
                    className="
                      w-7
                      h-7
                      rounded-lg
                      bg-gradient-to-br
                      from-emerald-400
                      to-emerald-700
                      text-white
                      flex
                      items-center
                      justify-center
                      font-black
                      text-xs
                      shadow-sm
                    "
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <span className="hidden lg:inline max-w-[100px] truncate">
                    {user.name}
                  </span>

                  <ChevronDown
                    size={13}
                    className={`transition ${
                      isUserMenuOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* ================= USER DROPDOWN ================= */}
                {isUserMenuOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      mt-2
                      w-56
                      bg-white
                      rounded-2xl
                      shadow-2xl
                      border
                      border-slate-100
                      py-2
                      z-50
                      overflow-hidden
                      animate-in
                    "
                  >

                    {/* User Info */}
                    <div
                      className="
                        px-4
                        py-3
                        bg-slate-50
                        border-b
                        border-slate-100
                      "
                    >
                      <p className="font-bold text-slate-900">
                        {user.name}
                      </p>

                      <p
                        className="
                          text-[10px]
                          text-slate-400
                          truncate
                          mt-0.5
                        "
                      >
                        {user.email}
                      </p>
                    </div>

                    {/* Orders */}
                    <a
                      href="#orders"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-slate-700
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        font-semibold
                        text-xs
                        transition
                      "
                    >
                      <Package size={16} />
                      My Orders
                    </a>

                    {/* Addresses */}
                    <a
                      href="#addresses"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-slate-700
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        font-semibold
                        text-xs
                        transition
                      "
                    >
                      <MapPinned size={16} />
                      Saved Addresses
                    </a>

                    {/* Logout */}
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onLogout();
                      }}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        text-left
                        px-4
                        py-3
                        text-rose-600
                        hover:bg-rose-50
                        font-bold
                        text-xs
                        border-t
                        border-slate-100
                        transition
                      "
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ================= LOGIN ================= */
              <button
                onClick={onOpenAuth}
                className="
                  bg-slate-900
                  hover:bg-emerald-700
                  text-white
                  px-3
                  py-2
                  sm:px-4
                  sm:py-2.5
                  rounded-xl
                  font-bold
                  text-[11px]
                  sm:text-xs
                  transition-all
                  duration-200
                  shadow-sm
                  hover:shadow-lg
                  whitespace-nowrap
                "
              >
                Login
              </button>
            )}

            {/* ================= CART ================= */}
            <button
              onClick={onOpenCart}
              className="
                relative
                bg-emerald-50
                hover:bg-emerald-100
                text-emerald-700
                px-2.5
                py-2
                sm:px-4
                sm:py-2.5
                rounded-xl
                font-bold
                text-xs
                sm:text-sm
                flex
                items-center
                gap-1.5
                transition-all
                duration-200
                hover:shadow-md
              "
            >

              <ShoppingCart
                size={18}
                strokeWidth={2.5}
              />

              <span className="hidden sm:inline">
                Cart
              </span>

              {cartCount > 0 && (
                <span
                  className="
                    bg-emerald-600
                    text-white
                    text-[9px]
                    sm:text-xs
                    rounded-full
                    min-w-4
                    h-4
                    sm:min-w-5
                    sm:h-5
                    px-1
                    flex
                    items-center
                    justify-center
                    font-black
                    shadow-sm
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}
        <div className="mt-3 sm:hidden">

          <div className="relative group">

            <input
              type="text"
              placeholder="Search groceries, fruits & veggies..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="
                w-full
                h-10
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                px-3
                pl-10
                text-xs
                text-slate-800
                placeholder:text-slate-400
                outline-none
                focus:bg-white
                focus:border-emerald-400
                focus:ring-4
                focus:ring-emerald-500/10
                transition
              "
            />

            <Search
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />
          </div>
        </div>
      </div>
    </header>
  );
}