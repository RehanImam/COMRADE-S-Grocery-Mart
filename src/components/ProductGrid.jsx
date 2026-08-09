// import React from 'react';

// export default function ProductGrid({ products, onAddToCart }) {
//   if (products.length === 0) {
//     return (
//       <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
//         <p className="text-2xl mb-2">🍎</p>
//         <h3 className="font-bold text-slate-800 text-lg">No products found</h3>
//         <p className="text-slate-500 text-sm">Try tweaking your search or category filter.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
//         >
//           <div>
//             {/* Product Badge & Emoji Preview */}
//             <div className="relative h-44 bg-slate-50 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
//               {/* <span>{product.image}</span> */}
//               {product.image && (product.image.startsWith('http://') || product.image.startsWith('https://')) ? (
//   <img
//     src={product.image}
//     alt={product.name}
//     className="w-full h-48 object-cover rounded-xl"
//   />
// ) : (
//   <span className="text-6xl">{product.image}</span>
// )}
//               <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
//                 {product.tag}
//               </span>
//             </div>

//             {/* Title & Unit */}
//             <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
//               <span>{product.category}</span>
//               <span>⭐ {product.rating}</span>
//             </div>
//             <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-emerald-600 transition-colors">
//               {product.name}
//             </h3>
//             <p className="text-xs text-slate-500 mb-4">{product.unit}</p>
//           </div>

//           {/* Pricing & Add Button */}
//           <div className="flex items-center justify-between pt-3 border-t border-slate-100">
//             <div>
//               <span className="text-xs text-slate-400 block">Price</span>
//               <span className="text-lg font-extrabold text-slate-900">{product.price.toFixed(2)}</span>
//             </div>
//             <button
//               onClick={() => onAddToCart(product)}
//               className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition shadow-md shadow-emerald-600/20 active:scale-95"
//             >
//               + Add
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from 'react';

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <span className="text-4xl block mb-2">🔍</span>
        <h3 className="text-lg font-bold text-slate-800">No products found</h3>
        <p className="text-xs text-slate-500 mt-1">Try adjusting your category or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden p-3 sm:p-4"
        >
          {/* Tag & Rating */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                {product.tag}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-amber-500 flex items-center gap-1">
                ★ {product.rating}
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full h-28 sm:h-44 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-3 border border-slate-100">
              {product.image && (product.image.startsWith('http://') || product.image.startsWith('https://')) ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              ) : (
                <span className="text-3xl sm:text-5xl">{product.image}</span>
              )}
            </div>

            {/* Category & Title */}
            <p className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">
              {product.category}
            </p>
            <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 min-h-[32px] sm:min-h-[48px] mt-0.5">
              {product.name}
            </h3>
          </div>

          {/* Price & Add to Cart */}
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
            <div>
              <span className="text-sm sm:text-lg font-extrabold text-slate-900">
                ₹{product.price}
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                {product.unit}
              </span>
            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-bold transition shadow-sm"
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}