import React from 'react';

export default function PromoBanners() {
  return (
    <div className="my-8 space-y-8">
      {/* 2-Column Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Orange Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 p-6 sm:p-8 text-white flex justify-between items-center min-h-[180px] shadow-sm">
          <div className="z-10 max-w-[60%]">
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight mb-2">
              Fresh Vegetables and Fruit Basket
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mb-4">
              Packed with nutrition, flavor, and care — perfect for your family's healthy lifestyle.
            </p>
            <button className="bg-white text-slate-900 font-bold px-4 py-2 rounded-full text-xs hover:bg-slate-100 transition shadow-sm">
              Save Upto 20% Off
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80"
            alt="Fresh Basket"
            className="absolute right-0 bottom-0 h-full w-1/2 object-contain object-right pointer-events-none opacity-90"
          />
        </div>

        {/* Right Dark Slate Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-6 sm:p-8 text-white flex justify-between items-center min-h-[180px] shadow-sm">
          <div className="z-10 max-w-[60%]">
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight mb-2">
              Power Up with Nature's Goodness
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Premium, crunchy, and full of energy — the perfect healthy snack.
            </p>
            <button className="bg-white text-slate-900 font-bold px-4 py-2 rounded-full text-xs hover:bg-slate-100 transition shadow-sm">
              Save Upto 20% Off
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80"
            alt="Dry Fruits & Spices"
            className="absolute right-0 bottom-0 h-full w-1/2 object-contain object-right pointer-events-none opacity-80"
          />
        </div>
      </div>

      {/* Full-width Big Banner */}
      <div className="relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] flex items-center shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
          alt="Fresh Groceries"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 p-6 sm:p-10 text-white max-w-lg">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Get free delivery on orders above ₹350
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mb-5">
            Shop your daily essentials with ease. Fresh, fast, and delivered right to your doorstep.
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-slate-900 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm hover:bg-slate-100 transition shadow-md"
          >
            Start Shopping
          </a>
        </div>
      </div>

      {/* Deals of the Month Grid */}
      <div className="pt-4">
        <h2 className="text-2xl font-black text-center text-slate-900 mb-6">
          Deals of the Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden h-48 flex items-center justify-center text-center p-6 text-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80"
              alt="Veggie Saver"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-xs">
              <h4 className="text-xl font-bold mb-1">Weekly Veggie Saver</h4>
              <p className="text-xs text-slate-200 mb-4">
                Get a basket of fresh seasonal vegetables at just ₹199. Healthy eating made affordable!
              </p>
              <button className="bg-slate-900/90 text-white border border-slate-700 font-bold px-4 py-1.5 rounded-full text-xs hover:bg-slate-900 transition">
                Grab The Deal
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-48 flex items-center justify-center text-center p-6 text-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80"
              alt="Juicy Deal"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-xs">
              <h4 className="text-xl font-bold mb-1">Sweet & Juicy Deal</h4>
              <p className="text-xs text-slate-200 mb-4">
                Mix of handpicked apples, oranges, and bananas — only ₹149 this week!
              </p>
              <button className="bg-slate-900/90 text-white border border-slate-700 font-bold px-4 py-1.5 rounded-full text-xs hover:bg-slate-900 transition">
                Grab The Deal
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition shadow-sm">
            View All Deals →
          </button>
        </div>
      </div>
    </div>
  );
}