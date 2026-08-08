import React from 'react';

export default function AdminDashboard({ products }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">COMRADE'S Store Manager</h1>
          <p className="text-xs text-slate-500">Live store metrics & inventory monitoring</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md">
          + Add New Product
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase">Today's Revenue</span>
          <p className="text-3xl font-black text-slate-900 mt-1">$2,845.50</p>
          <span className="text-xs text-emerald-600 font-bold mt-2 inline-block">↑ +14.2% from yesterday</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase">Active Orders</span>
          <p className="text-3xl font-black text-slate-900 mt-1">34</p>
          <span className="text-xs text-amber-600 font-bold mt-2 inline-block">12 ready for dispatch</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase">Low Stock Alert</span>
          <p className="text-3xl font-black text-rose-600 mt-1">2 Items</p>
          <span className="text-xs text-rose-500 font-bold mt-2 inline-block">Requires restock today</span>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-800">
          Product Inventory Status
        </div>
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-3">Item</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">In Stock</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-2">
                  <span>{item.image}</span> {item.name}
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4 font-bold text-slate-900">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4">{item.stock} units</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      item.stock < 15
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {item.stock < 15 ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}