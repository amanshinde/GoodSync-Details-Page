import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Globe, AtSign, Code2 } from 'lucide-react';

const MainFooter = () => (
  <footer className="bg-slate-50 border-t border-slate-200/60 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2 space-y-6">
          <img src="/goodsynk.png" alt="Goodsync" className="h-10 w-auto object-contain" />
          <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
            Building the future of business operations — one intelligent software at a time.
          </p>
          <div className="flex items-center gap-4">
            {[Globe, AtSign, Code2].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white hover:bg-indigo-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-all shadow-sm">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <p className="text-slate-900 font-black text-sm uppercase tracking-widest">Navigation</p>
          {[['Home', '/'], ['Products', '/products'], ['About', '/about'], ['Contact', '/main-contact']].map(([label, to]) => (
            <Link key={label} to={to} className="block text-slate-500 hover:text-indigo-600 font-medium transition-colors text-sm">
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="text-slate-900 font-black text-sm uppercase tracking-widest">Get In Touch</p>
          <a href="mailto:hello@goodsync.in" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" /> hello@goodsync.in
          </a>
          <a href="tel:+91" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
            <Phone className="w-4 h-4" /> +91 (Contact Sales)
          </a>
          <p className="flex items-start gap-2 text-slate-500 text-sm font-medium">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> India
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-medium">© 2026 Goodsync. All rights reserved.</p>
        <p className="text-slate-400 text-xs">Diligent & Smarter Business with Goodsync</p>
      </div>
    </div>
  </footer>
);

export default MainFooter;
