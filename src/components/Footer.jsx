import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-emerald-500/60 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight">COMRADE'S</h3>
            <p className="text-emerald-100 leading-relaxed">
              Fresh groceries delivered right to your doorstep — fast, affordable, and always fresh. From everyday essentials to premium picks.
            </p>
            <button className="border border-emerald-200/50 rounded-lg px-3 py-1.5 text-white font-semibold hover:bg-emerald-700 transition">
              Contact Us →
            </button>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-sm mb-3">Useful Links</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#orders" className="hover:text-white">My Orders</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-sm mb-3">Support</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#terms" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#legal" className="hover:text-white">Legal Terms</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm mb-3">Contact Info</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>Phone: +91 98765 43210</li>
              <li>Email: support@comradesmart.com</li>
              <li>Address: Connaught Place, New Delhi, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-[11px] text-emerald-200">
          Copyright © 2026 COMRADE'S Mart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}