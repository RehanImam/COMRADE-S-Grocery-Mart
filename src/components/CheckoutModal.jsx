import React, { useState } from 'react';

export default function CheckoutModal({ cart, onClose }) {
  const [step, setStep] = useState(1); // 1: Details & Payment, 2: Order Placed Success
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliverySlot, setDeliverySlot] = useState('express');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 35 || subtotal === 0 ? 0 : 4.99;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + deliveryFee + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        {step === 1 ? (
          <div>
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  COMRADE'S Checkout
                </span>
                <h2 className="text-xl font-extrabold mt-0.5">Complete Your Order</h2>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Delivery Window Selection */}
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">1. Select Delivery Slot</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliverySlot('express')}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      deliverySlot === 'express'
                        ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-xs text-slate-900 block">⚡ Express 2-Hour Delivery</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Handpicked & delivered fresh</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliverySlot('scheduled')}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      deliverySlot === 'scheduled'
                        ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-xs text-slate-900 block">📅 Scheduled Slot</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Tomorrow (8:00 AM - 11:00 AM)</span>
                  </button>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">2. Payment Option</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { id: 'card', label: '💳 Credit / Debit Card' },
                    { id: 'upi', label: '📱 UPI / Wallet' },
                    { id: 'cod', label: '💵 Cash on Delivery' },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-3 rounded-xl border text-center text-xs font-bold transition ${
                        paymentMethod === method.id
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <input
                      type="text"
                      required
                      placeholder="Card Number"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        defaultValue="08/28"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                      <input
                        type="password"
                        required
                        placeholder="CVC"
                        defaultValue="123"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 mb-1">Price Summary</h4>
                <div className="flex justify-between text-slate-600">
                  <span>Items Subtotal ({cart.length})</span>
                  <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Charge</span>
                  <span className="font-bold text-slate-900">
                    {deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax (5%)</span>
                  <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Amount Payable</span>
                  <span className="text-emerald-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Pay ${grandTotal.toFixed(2)} & Place Order</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto font-bold shadow-inner">
              ✓
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider">
                Order Confirmed #CMRD-8942
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Thank You for Shopping!</h2>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Your order has been placed with <strong>COMRADE'S Grocery Mart</strong>. Our delivery partner will reach your doorstep shortly.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-sm mx-auto text-xs space-y-1">
              <div className="text-slate-500">Estimated Delivery: <strong className="text-slate-800">Within 45 Minutes</strong></div>
              <div className="text-slate-500">Total Items: <strong className="text-slate-800">{cart.reduce((a, b) => a + b.quantity, 0)} Units</strong></div>
            </div>

            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-xl text-sm transition shadow-md"
            >
              Back to Storefront
            </button>
          </div>
        )}
      </div>
    </div>
  );
}