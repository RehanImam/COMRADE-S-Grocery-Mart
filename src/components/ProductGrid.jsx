import React from 'react';

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
        <p className="text-2xl mb-2">🍎</p>
        <h3 className="font-bold text-slate-800 text-lg">No products found</h3>
        <p className="text-slate-500 text-sm">Try tweaking your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
        >
          <div>
            {/* Product Badge & Emoji Preview */}
            <div className="relative h-44 bg-slate-50 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
              {/* <span>{product.image}</span> */}
              {product.image && (product.image.startsWith('http://') || product.image.startsWith('https://')) ? (
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover rounded-xl"
  />
) : (
  <span className="text-6xl">{product.image}</span>
)}
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {product.tag}
              </span>
            </div>

            {/* Title & Unit */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>{product.category}</span>
              <span>⭐ {product.rating}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{product.unit}</p>
          </div>

          {/* Pricing & Add Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <span className="text-xs text-slate-400 block">Price</span>
              <span className="text-lg font-extrabold text-slate-900">{product.price.toFixed(2)}</span>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition shadow-md shadow-emerald-600/20 active:scale-95"
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}