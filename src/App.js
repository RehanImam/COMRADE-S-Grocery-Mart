

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import ProductGrid from './components/ProductGrid';
// import CartDrawer from './components/CartDrawer';
// import AdminDashboard from './components/AdminDashboard';
// import CheckoutModal from './components/CheckoutModal';
// import AuthModal from './components/AuthModal';
// import PromoBanners from './components/PromoBanners';
// import Footer from './components/Footer';


// export const INITIAL_PRODUCTS = [
//   { id: 1, name: "Potato", category: "Vegetable", price: 20, unit: "1 Kg", rating: 4.8, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop", tag: "Organic", stock: 45 },
//   { id: 2, name: "Mango", category: "Fruit", price: 60, unit: "1 Liter", rating: 4.9, image: "https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-realistic-mango-image-with-two-whole-mangos-png-image_16497232.png", tag: "Best Seller", stock: 18 },
//   { id: 3, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
//   { id: 4, name: "White Rice", category: "Rice & Grain", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80", tag: "No Sugar", stock: 30 },
//   { id: 5, name: "Potato Chips", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 6, name: "Papaya", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://t3.ftcdn.net/jpg/01/77/22/44/360_F_177224431_6S50Gr64wFWjkDHBGXq7PkaG5kcrgEgd.jpg", tag: "Best Seller", stock: 18 },
//   { id: 7, name: "Cooking Oil Bottle", category: "Oil & Masala", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
//   { id: 8, name: "Basmati Rice Bowl", category: "Rice & Grain", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80", tag: "No Sugar", stock: 30 },
//   { id: 9, name: "Chocolate Chip Cookies", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 10, name: "Watermelon", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=", tag: "Best Seller", stock: 18 },
//   { id: 11, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
//   { id: 12, name: "Onion", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.bbassets.com/media/uploads/p/l/40023472_7-fresho-onion-organically-grown.jpg", tag: "No Sugar", stock: 30 },
//   { id: 13, name: "Butter Cookies", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 14, name: "Wheat", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
//   { id: 15, name: "Cold Pressed Orange Juice", category: "Non-veg", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop", tag: "No Sugar", stock: 30 },
//   { id: 16, name: "Popcorn", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 17, name: "Guava", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg", tag: "Best Seller", stock: 18 },
//   { id: 18, name: "Spices", category: "Oil & Masala", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
//   { id: 19, name: "Tomato", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", tag: "No Sugar", stock: 30 },
//   { id: 20, name: "Oat Biscuits", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 21, name: "A2 Whole Almond Milk", category: "Non-veg", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop", tag: "Best Seller", stock: 18 },
//   { id: 22, name: "Oats", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
//   { id: 23, name: "Bottle Gourd", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.bbassets.com/media/uploads/p/l/50000468_8-fresho-bottle-gourd-organically-grown.jpg", tag: "No Sugar", stock: 30 },
//   { id: 24, name: "Mixed Nuts", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 25, name: "Kiwi", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg", tag: "Best Seller", stock: 18 },
//   { id: 26, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
//   { id: 27, name: "Lady Finger", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.fitterfly.com/blog/wp-content/uploads/2023/06/Is-Ladyfinger-a-Good-Food-Choice-for-People-with-Diabetes-scaled.jpg", tag: "No Sugar", stock: 30 },
//   { id: 28, name: "Cream Biscuits", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 29, name: "Mixed Grains", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
//   { id: 30, name: "Cold Pressed Orange Juice", category: "Fruit", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop", tag: "No Sugar", stock: 30 },
//   { id: 31, name: "Salted Snack Bowl", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 32, name: "Turmeric", category: "Oil & Masala", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80", tag: "Best Seller", stock: 18 },
//   { id: 33, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
//   { id: 34, name: "Pumpkin", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3GidUVX2dg12mH-QSStcOXzSIZZTb3dMgg&s", tag: "No Sugar", stock: 30 },
//   { id: 35, name: "Nachos & Dip", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
//   { id: 36, name: "Olive Oil", category: "Oil & Masala", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80", tag: "Best Seller", stock: 18 },
//   { id: 37, name: "Artisanal Sourdough Bread", category: "Bakery", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
//   { id: 38, name: "Lychee", category: "Fruit", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1705335834319-92a152363ea1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHljaGVlfGVufDB8fDB8fHww", tag: "No Sugar", stock: 30 },
//   { id: 39, name: "Raw Honeycomb Crisp", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "🥑", tag: "Premium", stock: 8 },
//   { id: 40, name: "Fresh Greek Yogurt", category: "Non-veg", price: 4.29, unit: "400g", rating: 4.8, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop", tag: "High Protein", stock: 25 },
// ];

// export default function App() {
//   const [activeTab, setActiveTab] = useState('store');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cart, setCart] = useState([
//     { ...INITIAL_PRODUCTS[0], quantity: 2 },
//     { ...INITIAL_PRODUCTS[1], quantity: 1 }
//   ]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

//   const [user, setUser] = useState(null);
//   const [isAuthOpen, setIsAuthOpen] = useState(false);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//     setIsCartOpen(true);
//   };

//   const updateQuantity = (id, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) => {
//           if (item.id === id) {
//             const newQty = item.quantity + delta;
//             return newQty > 0 ? { ...item, quantity: newQty } : null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   // Clear Cart function for post-checkout reset
//   const clearCart = () => {
//     setCart([]);
//   };

//   const filteredProducts = INITIAL_PRODUCTS.filter((product) => {
//     const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
//     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCat && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
//       {/* Top Banner / Mode Switcher */}
//       <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs px-3 sm:px-4 py-2 flex flex-col sm:flex-row gap-2 justify-between items-center text-center sm:text-left">
//         <span>🚀 Free Express Local Delivery on orders over ₹350 | <strong>COMRADE'S MART</strong></span>
//         <div className="flex gap-2">
//           <button
//             onClick={() => setActiveTab('store')}
//             className={`px-3 py-1 rounded-full font-medium transition ${
//               activeTab === 'store' ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-800'
//             }`}
//           >
//             Storefront View
//           </button>
//           <button
//             onClick={() => setActiveTab('admin')}
//             className={`px-3 py-1 rounded-full font-medium transition ${
//               activeTab === 'admin' ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-800'
//             }`}
//           >
//             Admin Panel
//           </button>
//         </div>
//       </div>

//       <Navbar
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
//         onOpenCart={() => setIsCartOpen(true)}
//         user={user}
//         onOpenAuth={() => setIsAuthOpen(true)}
//         onLogout={() => setUser(null)}
//       />
      
//       <AuthModal
//         isOpen={isAuthOpen}
//         onClose={() => setIsAuthOpen(false)}
//         onLoginSuccess={(userData) => setUser(userData)}
//       />

//       {activeTab === 'store' ? (
//         <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
//           {/* Hero Banner */}
//           <div className="mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-5 sm:p-12 shadow-xl relative overflow-hidden">
//             <div className="max-w-xl z-10 relative">
//               <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
//                 Fresh Harvest • Daily Savings
//               </span>
//               <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight mb-2 sm:mb-4">
//                 Farm Fresh Goodness Delivered To Your Doorstep.
//               </h1>
//               <p className="text-emerald-100 mb-4 sm:mb-6 text-xs sm:text-base">
//                 Get hand-picked organic fruits, artisan dairy, and daily essentials guaranteed fresh.
//               </p>
//               <a href="#products" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-base transition shadow-lg">
//                 Shop Fresh Now →
//               </a>
//             </div>
//           </div>

//           {/* Category Chips */}
//           <div id="products" className="mb-6 sm:mb-8">
//             <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Explore Categories</h2>
//             <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
//               {['All', 'Vegetable', 'Fruit', 'Non-veg', 'Rice & Grain','Oil & Masala', 'Biscuit', 'Snacks'].map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
//                     selectedCategory === cat
//                       ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
//                       : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Grid */}
//           <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
//         </main>
//       ) : (
//         <AdminDashboard products={INITIAL_PRODUCTS} />
//       )}

//       {/* Slide-over Cart Drawer */}
//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         onUpdateQuantity={updateQuantity}
//         onProceedToCheckout={() => {
//           setIsCartOpen(false);
//           setIsCheckoutOpen(true);
//         }}
//       />

//       {/* Checkout Modal */}
//       {isCheckoutOpen && (
//         <CheckoutModal
//           cart={cart}
//           onClose={() => setIsCheckoutOpen(false)}
//           onClearCart={clearCart}
//         />
//       )}
//     </div>
//   );
// }



import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import AdminDashboard from './components/AdminDashboard';
import CheckoutModal from './components/CheckoutModal';
import AuthModal from './components/AuthModal';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';

export const INITIAL_PRODUCTS = [
  { id: 1, name: "Potato", category: "Vegetable", price: 20, unit: "1 Kg", rating: 4.8, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop", tag: "Organic", stock: 45 },
  { id: 2, name: "Mango", category: "Fruit", price: 60, unit: "1 Liter", rating: 4.9, image: "https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-realistic-mango-image-with-two-whole-mangos-png-image_16497232.png", tag: "Best Seller", stock: 18 },
  { id: 3, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
  { id: 4, name: "White Rice", category: "Rice & Grain", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80", tag: "No Sugar", stock: 30 },
  { id: 5, name: "Potato Chips", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 6, name: "Papaya", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://t3.ftcdn.net/jpg/01/77/22/44/360_F_177224431_6S50Gr64wFWjkDHBGXq7PkaG5kcrgEgd.jpg", tag: "Best Seller", stock: 18 },
  { id: 7, name: "Cooking Oil Bottle", category: "Oil & Masala", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
  { id: 8, name: "Basmati Rice Bowl", category: "Rice & Grain", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80", tag: "No Sugar", stock: 30 },
  { id: 9, name: "Chocolate Chip Cookies", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 10, name: "Watermelon", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=", tag: "Best Seller", stock: 18 },
  { id: 11, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
  { id: 12, name: "Onion", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.bbassets.com/media/uploads/p/l/40023472_7-fresho-onion-organically-grown.jpg", tag: "No Sugar", stock: 30 },
  { id: 13, name: "Butter Cookies", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 14, name: "Wheat", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
  { id: 15, name: "Cold Pressed Orange Juice", category: "Non-veg", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop", tag: "No Sugar", stock: 30 },
  { id: 16, name: "Popcorn", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 17, name: "Guava", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg", tag: "Best Seller", stock: 18 },
  { id: 18, name: "Spices", category: "Oil & Masala", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
  { id: 19, name: "Tomato", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", tag: "No Sugar", stock: 30 },
  { id: 20, name: "Oat Biscuits", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 21, name: "A2 Whole Almond Milk", category: "Non-veg", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop", tag: "Best Seller", stock: 18 },
  { id: 22, name: "Oats", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
  { id: 23, name: "Bottle Gourd", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.bbassets.com/media/uploads/p/l/50000468_8-fresho-bottle-gourd-organically-grown.jpg", tag: "No Sugar", stock: 30 },
  { id: 24, name: "Mixed Nuts", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 25, name: "Kiwi", category: "Fruit", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg", tag: "Best Seller", stock: 18 },
  { id: 26, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
  { id: 27, name: "Lady Finger", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://www.fitterfly.com/blog/wp-content/uploads/2023/06/Is-Ladyfinger-a-Good-Food-Choice-for-People-with-Diabetes-scaled.jpg", tag: "No Sugar", stock: 30 },
  { id: 28, name: "Cream Biscuits", category: "Biscuit", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 29, name: "Mixed Grains", category: "Rice & Grain", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80", tag: "Fresh Daily", stock: 12 },
  { id: 30, name: "Cold Pressed Orange Juice", category: "Fruit", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop", tag: "No Sugar", stock: 30 },
  { id: 31, name: "Salted Snack Bowl", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 32, name: "Turmeric", category: "Oil & Masala", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80", tag: "Best Seller", stock: 18 },
  { id: 33, name: "Artisanal Sourdough Bread", category: "Non-veg", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
  { id: 34, name: "Pumpkin", category: "Vegetable", price: 6.29, unit: "750ml", rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3GidUVX2dg12mH-QSStcOXzSIZZTb3dMgg&s", tag: "No Sugar", stock: 30 },
  { id: 35, name: "Nachos & Dip", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80", tag: "Premium", stock: 8 },
  { id: 36, name: "Olive Oil", category: "Oil & Masala", price: 3.89, unit: "1 Liter", rating: 4.9, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80", tag: "Best Seller", stock: 18 },
  { id: 37, name: "Artisanal Sourdough Bread", category: "Bakery", price: 5.49, unit: "500g", rating: 4.7, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop", tag: "Fresh Daily", stock: 12 },
  { id: 38, name: "Lychee", category: "Fruit", price: 6.29, unit: "750ml", rating: 4.6, image: "https://images.unsplash.com/photo-1705335834319-92a152363ea1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHljaGVlfGVufDB8fDB8fHww", tag: "No Sugar", stock: 30 },
  { id: 39, name: "Raw Honeycomb Crisp", category: "Snacks", price: 7.99, unit: "250g", rating: 4.9, image: "🥑", tag: "Premium", stock: 8 },
  { id: 40, name: "Fresh Greek Yogurt", category: "Non-veg", price: 4.29, unit: "400g", rating: 4.8, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop", tag: "High Protein", stock: 25 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('store');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([
    { ...INITIAL_PRODUCTS[0], quantity: 2 },
    { ...INITIAL_PRODUCTS[1], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const filteredProducts = INITIAL_PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Banner / Mode Switcher */}
        <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs px-3 sm:px-4 py-2 flex flex-col sm:flex-row gap-2 justify-between items-center text-center sm:text-left">
          <span>🚀 Free Express Local Delivery on orders over ₹350 | <strong>COMRADE'S MART</strong></span>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('store')}
              className={`px-3 py-1 rounded-full font-medium transition ${
                activeTab === 'store' ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-800'
              }`}
            >
              Storefront View
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-1 rounded-full font-medium transition ${
                activeTab === 'admin' ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-800'
              }`}
            >
              Admin Panel
            </button>
          </div>
        </div>

        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onLogout={() => setUser(null)}
        />
        
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={(userData) => setUser(userData)}
        />

        {activeTab === 'store' ? (
          <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
            {/* 1. Hero Banner */}
            <div className="mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-5 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="max-w-xl z-10 relative">
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  Fresh Harvest • Daily Savings
                </span>
                <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight mb-2 sm:mb-4">
                  Farm Fresh Goodness Delivered To Your Doorstep.
                </h1>
                <p className="text-emerald-100 mb-4 sm:mb-6 text-xs sm:text-base">
                  Get hand-picked organic fruits, artisan dairy, and daily essentials guaranteed fresh.
                </p>
                <a href="#products" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-base transition shadow-lg">
                  Shop Fresh Now →
                </a>
              </div>
            </div>

            {/* 2. Category Chips */}
            <div id="products" className="my-6 sm:my-8">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Explore Categories</h2>
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
                {['All', 'Vegetable', 'Fruit', 'Non-veg', 'Rice & Grain','Oil & Masala', 'Biscuit', 'Snacks'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Product Grid */}
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />

            {/* 4. Promo Banners (Footer ke bilkul upar) */}
            <div className="mt-12">
              <PromoBanners />
            </div>
          </main>
        ) : (
          <AdminDashboard products={INITIAL_PRODUCTS} />
        )}
      </div>

      {/* 5. Footer Component */}
      {activeTab === 'store' && <Footer />}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal
          cart={cart}
          onClose={() => setIsCheckoutOpen(false)}
          onClearCart={clearCart}
        />
      )}
    </div>
  );
}