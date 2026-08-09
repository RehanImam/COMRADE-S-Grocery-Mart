// import React, { useState } from 'react';

// export default function CartDrawer({
//   isOpen,
//   onClose,
//   cart,
//   onUpdateQuantity,
//   onProceedToCheckout,
// }) {
//   const [selectedAddress, setSelectedAddress] = useState('Home');

//   if (!isOpen) return null;

//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const freeShippingThreshold = 35.0;
//   const deliveryFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 4.99;
//   const grandTotal = subtotal + deliveryFee;
//   const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);

//   const addresses = [
//     { id: 'Home', label: 'Home', address: 'Flat 4B, Emerald Heights, Park Street' },
//     { id: 'Office', label: 'Office', address: 'Tech Park Tower 2, Cyber Hub' },
//   ];

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden">
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
//       />

//       <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
//         <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
//           {/* Header */}
//           <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
//             <div>
//               <h2 className="text-lg font-bold text-slate-900">Your Shopping Basket</h2>
//               <p className="text-xs text-slate-500">
//                 {cart.reduce((acc, item) => acc + item.quantity, 0)} items selected
//               </p>
//             </div>
//             <button
//               onClick={onClose}
//               className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Free Delivery Bar */}
//           <div className="p-4 bg-emerald-50 border-b border-emerald-100">
//             <div className="flex justify-between text-xs font-semibold text-emerald-800 mb-1.5">
//               <span>
//                 {subtotal >= freeShippingThreshold
//                   ? '🎉 You unlocked FREE Express Delivery!'
//                   : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for FREE Delivery`}
//               </span>
//               <span>{Math.round(progressPercent)}%</span>
//             </div>
//             <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
//               <div
//                 className="bg-emerald-600 h-full transition-all duration-300"
//                 style={{ width: `${progressPercent}%` }}
//               />
//             </div>
//           </div>

//           {/* Delivery Address Selector */}
//           <div className="p-4 bg-slate-50/50 border-b border-slate-100">
//             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
//               Deliver To
//             </span>
//             <div className="grid grid-cols-2 gap-2">
//               {addresses.map((addr) => (
//                 <button
//                   key={addr.id}
//                   onClick={() => setSelectedAddress(addr.id)}
//                   className={`p-2.5 rounded-xl text-left border transition ${
//                     selectedAddress === addr.id
//                       ? 'border-emerald-600 bg-emerald-50/50 text-slate-900'
//                       : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
//                   }`}
//                 >
//                   <span className="font-bold text-xs block text-slate-800">📍 {addr.label}</span>
//                   <span className="text-[10px] text-slate-500 truncate block mt-0.5">
//                     {addr.address}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Cart Items List */}
//           <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
//             {cart.length === 0 ? (
//               <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                 <span className="text-5xl mb-3">🛒</span>
//                 <p className="font-bold text-slate-800">Your basket is empty</p>
//                 <p className="text-xs text-slate-500 mt-1">
//                   Explore COMRADE'S fresh categories to add items.
//                 </p>
//               </div>
//             ) : (
//               cart.map((item) => (
//                 <div key={item.id} className="py-4 flex items-center justify-between gap-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
//                       {item.image}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
//                       <p className="text-xs text-slate-500">
//                         ${item.price.toFixed(2)} / {item.unit}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quantity Counter */}
//                   <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
//                     <button
//                       onClick={() => onUpdateQuantity(item.id, -1)}
//                       className="w-6 h-6 rounded-md bg-white hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm"
//                     >
//                       -
//                     </button>
//                     <span className="text-xs font-bold text-slate-900 min-w-[16px] text-center">
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() => onUpdateQuantity(item.id, 1)}
//                       className="w-6 h-6 rounded-md bg-white hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Footer & Checkout Call-to-Action */}
//           {cart.length > 0 && (
//             <div className="p-6 border-t border-slate-100 bg-slate-50">
//               <div className="space-y-2 mb-4 text-xs">
//                 <div className="flex justify-between text-slate-600">
//                   <span>Subtotal</span>
//                   <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-slate-600">
//                   <span>Delivery Fee</span>
//                   <span className="font-bold text-slate-900">
//                     {deliveryFee === 0 ? (
//                       <span className="text-emerald-600">FREE</span>
//                     ) : (
//                       `$${deliveryFee.toFixed(2)}`
//                     )}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
//                   <span>Total Amount</span>
//                   <span className="text-emerald-700">${grandTotal.toFixed(2)}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={onProceedToCheckout}
//                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
//               >
//                 <span>Proceed to Checkout</span>
//                 <span>→</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onProceedToCheckout }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 35 || cart.length === 0 ? 0 : 4.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Your Shopping Basket</h2>
              <p className="text-xs text-slate-500 font-medium">{cart.reduce((a, c) => a + c.quantity, 0)} items selected</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-600 transition"
            >
              ✕
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-100">
            <div className="flex justify-between text-xs font-semibold text-emerald-800 mb-1">
              <span>
                {subtotal >= 35 
                  ? "🎉 You qualify for FREE Delivery!" 
                  : `Add $${(35 - subtotal).toFixed(2)} more for FREE Delivery`}
              </span>
              <span>{Math.min(100, Math.round((subtotal / 35) * 100))}%</span>
            </div>
            <div className="w-full bg-emerald-200/60 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / 35) * 100)}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <span className="text-4xl block mb-2">🛒</span>
                <p>Your basket is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    {/* Fixed Image Container */}
                    <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-slate-200">
                      {item.image && (item.image.startsWith('http://') || item.image.startsWith('https://')) ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl">{item.image}</span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 leading-snug">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">${item.price} / {item.unit}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 font-bold hover:bg-slate-50"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-slate-800 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 font-bold hover:bg-slate-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
              <div className="flex justify-between text-xs font-semibold text-slate-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-semibold text-slate-500">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Amount</span>
                <span className="text-emerald-600">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 mt-4"
              >
                Proceed to Checkout →
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}