// import React, { useState } from 'react';

// export default function CheckoutModal({ cart, onClose }) {
//   const [step, setStep] = useState(1); // 1: Details & Payment, 2: Order Placed Success
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   // const [deliverySlot, setDeliverySlot] = useState('express');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const deliveryFee = subtotal >= 35 || subtotal === 0 ? 0 : 4.99;
//   const tax = subtotal * 0.05;
//   const grandTotal = subtotal + deliveryFee + tax;

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setTimeout(() => {
//       setIsProcessing(false);
//       setStep(2);
//     }, 1200);
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
//       {/* Backdrop */}
//       <div 
//         onClick={onClose} 
//         className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
//       />

//       {/* Modal Card */}
//       <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
//         {step === 1 ? (
//           <div>
//             {/* Modal Header */}
//             <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
//               <div>
//                 <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
//                   COMRADE'S Checkout
//                 </span>
//                 <h2 className="text-xl font-extrabold mt-0.5">Complete Your Order</h2>
//               </div>
//               <button 
//                 onClick={onClose}
//                 className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 text-sm"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handlePlaceOrder} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
//               {/* Delivery Window Selection */}
//               {/* <div>
//                 <h3 className="text-sm font-bold text-slate-800 mb-3">1. Select Delivery Slot</h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setDeliverySlot('express')}
//                     className={`p-3.5 rounded-2xl border text-left transition ${
//                       deliverySlot === 'express'
//                         ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
//                         : 'border-slate-200 hover:border-slate-300'
//                     }`}
//                   >
//                     <span className="font-bold text-xs text-slate-900 block">⚡ Express 2-Hour Delivery</span>
//                     <span className="text-[11px] text-slate-500 mt-1 block">Handpicked & delivered fresh</span>
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setDeliverySlot('scheduled')}
//                     className={`p-3.5 rounded-2xl border text-left transition ${
//                       deliverySlot === 'scheduled'
//                         ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
//                         : 'border-slate-200 hover:border-slate-300'
//                     }`}
//                   >
//                     <span className="font-bold text-xs text-slate-900 block">📅 Scheduled Slot</span>
//                     <span className="text-[11px] text-slate-500 mt-1 block">Tomorrow (8:00 AM - 11:00 AM)</span>
//                   </button>
//                 </div>
//               </div> */}

//               {/* Payment Method Selection */}
//               <div>
//                 <h3 className="text-sm font-bold text-slate-800 mb-3"> Payment Option</h3>
//                 <div className="grid grid-cols-3 gap-3 mb-4">
//                   {[
//                     { id: 'card', label: '💳 Credit / Debit Card' },
//                     { id: 'upi', label: '📱 UPI / Wallet' },
//                     { id: 'cod', label: '💵 Cash on Delivery' },
//                   ].map((method) => (
//                     <button
//                       key={method.id}
//                       type="button"
//                       onClick={() => setPaymentMethod(method.id)}
//                       className={`p-3 rounded-xl border text-center text-xs font-bold transition ${
//                         paymentMethod === method.id
//                           ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
//                           : 'border-slate-200 text-slate-600 hover:bg-slate-50'
//                       }`}
//                     >
//                       {method.label}
//                     </button>
//                   ))}
//                 </div>

//                 {paymentMethod === 'card' && (
//                   <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
//                     <input
//                       type="text"
//                       required
//                       placeholder="Card Number"
//                       defaultValue="4242 •••• •••• 4242"
//                       className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
//                     />
//                     <div className="grid grid-cols-2 gap-3">
//                       <input
//                         type="text"
//                         required
//                         placeholder="MM / YY"
//                         defaultValue="08/28"
//                         className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
//                       />
//                       <input
//                         type="password"
//                         required
//                         placeholder="CVC"
//                         defaultValue="123"
//                         className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Order Summary */}
//               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
//                 <h4 className="font-bold text-slate-900 mb-1">Price Summary</h4>
//                 <div className="flex justify-between text-slate-600">
//                   <span>Items Subtotal ({cart.length})</span>
//                   <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-slate-600">
//                   <span>Delivery Charge</span>
//                   <span className="font-bold text-slate-900">
//                     {deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : `$${deliveryFee.toFixed(2)}`}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-slate-600">
//                   <span>Estimated Tax (5%)</span>
//                   <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
//                   <span>Amount Payable</span>
//                   <span className="text-emerald-600">${grandTotal.toFixed(2)}</span>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
//               >
//                 {isProcessing ? (
//                   <span>Securing Order...</span>
//                 ) : (
//                   <>
//                     <span>Pay ${grandTotal.toFixed(2)} & Place Order</span>
//                     <span>→</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         ) : (
//           /* Order Confirmation Screen */
//           <div className="p-8 text-center space-y-4">
//             <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto font-bold shadow-inner">
//               ✓
//             </div>
//             <div>
//               <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider">
//                 Order Confirmed #CMRD-8942
//               </span>
//               <h2 className="text-2xl font-black text-slate-900 mt-1">Thank You for Shopping!</h2>
//               <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
//                 Your order has been placed with <strong>COMRADE'S Grocery Mart</strong>. Our delivery partner will reach your doorstep shortly.
//               </p>
//             </div>

//             <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-sm mx-auto text-xs space-y-1">
//               <div className="text-slate-500">Estimated Delivery: <strong className="text-slate-800">Within 45 Minutes</strong></div>
//               <div className="text-slate-500">Total Items: <strong className="text-slate-800">{cart.reduce((a, b) => a + b.quantity, 0)} Units</strong></div>
//             </div>

//             <button
//               onClick={onClose}
//               className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-xl text-sm transition shadow-md"
//             >
//               Back to Storefront
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }








// import React, { useState } from 'react';

// export default function CheckoutModal({ cart, onClose, onClearCart }) {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     paymentMethod: 'cod',
//   });

//   const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
    
//     // Reset/Clear Cart items
//     if (onClearCart) {
//       onClearCart();
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
//       <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
//         {!isSubmitted ? (
//           <>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-extrabold text-slate-900">Checkout</h2>
//               <button
//                 onClick={onClose}
//                 className="text-slate-400 hover:text-slate-600 font-bold text-lg"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Enter your full name"
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   required
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   placeholder="10-digit mobile number"
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Delivery Address
//                 </label>
//                 <textarea
//                   required
//                   rows="2"
//                   value={formData.address}
//                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                   placeholder="House no., Street, Area..."
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Payment Option
//                 </label>
//                 <select
//                   value={formData.paymentMethod}
//                   onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700"
//                 >
//                   <option value="cod">Cash on Delivery (COD)</option>
//                   <option value="upi">UPI / Online Payment</option>
//                 </select>
//               </div>

//               <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
//                 <div>
//                   <span className="text-xs text-slate-400 block font-medium">Total Payable</span>
//                   <span className="text-lg font-black text-slate-900">₹{totalAmount.toFixed(2)}</span>
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition shadow-md"
//                 >
//                   Confirm Order
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <div className="text-center py-6">
//             <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
//               ✓
//             </div>
//             <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Order Placed!</h3>
//             <p className="text-xs text-slate-500 mb-6">
//               Thank you for shopping with Comrade's Mart. Your groceries will arrive soon!
//             </p>
//             <button
//               onClick={onClose}
//               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition shadow-md"
//             >
//               Back to Shopping
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';

export default function CheckoutModal({ cart, onClose, onClearCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' | 'upi'
  const [upiOption, setUpiOption] = useState('apps'); // 'apps' | 'id' | 'qr'
  const [upiId, setUpiId] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (paymentMethod === 'upi' && upiOption === 'id' && !upiId.trim()) {
      alert('Kripya apna UPI ID enter karein!');
      return;
    }

    setIsSubmitted(true);
    
    // Order place hote hi cart khali karne ke liye
    if (onClearCart) {
      onClearCart();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">Checkout</h2>
                <p className="text-[10px] sm:text-xs text-slate-400">Complete your details & payment</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-sm flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Delivery Details */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Delivery Address
                </label>
                <textarea
                  required
                  rows="2"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House no., Street, Area..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      paymentMethod === 'cod'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>💵</span>
                    Cash on Delivery
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      paymentMethod === 'upi'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>📱</span>
                    UPI / Online
                  </button>
                </div>
              </div>

              {/* UPI Sub-Options (Tab View) */}
              {paymentMethod === 'upi' && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-fadeIn">
                  <div className="flex gap-1 bg-slate-200/70 p-1 rounded-xl text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setUpiOption('apps')}
                      className={`flex-1 py-1 rounded-lg transition ${
                        upiOption === 'apps' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      UPI Apps
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpiOption('id')}
                      className={`flex-1 py-1 rounded-lg transition ${
                        upiOption === 'id' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      UPI ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpiOption('qr')}
                      className={`flex-1 py-1 rounded-lg transition ${
                        upiOption === 'qr' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      QR Code
                    </button>
                  </div>

                  {/* Option 1: Direct UPI Apps */}
                  {upiOption === 'apps' && (
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="p-2 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 cursor-pointer text-[10px] font-bold text-slate-700 shadow-sm">
                        <span className="block text-base mb-0.5">🔵</span>
                        Google Pay
                      </div>
                      <div className="p-2 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 cursor-pointer text-[10px] font-bold text-slate-700 shadow-sm">
                        <span className="block text-base mb-0.5">🟣</span>
                        PhonePe
                      </div>
                      <div className="p-2 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 cursor-pointer text-[10px] font-bold text-slate-700 shadow-sm">
                        <span className="block text-base mb-0.5">🔷</span>
                        Paytm / BHIM
                      </div>
                    </div>
                  )}

                  {/* Option 2: Enter VPA / UPI ID */}
                  {upiOption === 'id' && (
                    <div>
                      <input
                        type="text"
                        placeholder="e.g. mobile@upi or username@okaxis"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Enter valid VPA / UPI ID to send payment request
                      </span>
                    </div>
                  )}

                  {/* Option 3: Scan QR Code */}
                  {upiOption === 'qr' && (
                    <div className="text-center py-2 bg-white rounded-xl border border-slate-200">
                      <div className="w-24 h-24 mx-auto bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-1 shadow-inner">
                        [ SCAN QR ]
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500">
                        Scan with GPay, PhonePe or Paytm
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Total & Submit */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Total Payable</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">₹{totalAmount.toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm transition shadow-md"
                >
                  {paymentMethod === 'upi' ? 'Pay & Place Order' : 'Confirm Order'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 animate-bounce">
              ✓
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
              Order Confirmed!
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              {paymentMethod === 'upi' 
                ? 'Payment successful! Your order will be delivered soon.' 
                : 'Thank you for shopping. Cash on delivery order received.'}
            </p>
            <button
              onClick={onClose}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition shadow-md"
            >
              Back to Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}