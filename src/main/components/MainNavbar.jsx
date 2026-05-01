import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', to: '/products' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/main-contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 py-3 ${isScrolled ? 'pt-2' : 'pt-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between px-6 py-3 transition-all duration-700 rounded-2xl ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-200/40 border border-slate-200/60'
          : 'bg-transparent'
          }`}>
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              <img src="/goodsynk.png" alt="Goodsync Logo" className="h-10 w-auto object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-base font-bold transition-all flex items-center gap-1 group ${isActive(link.to) ? 'text-gray-600' : 'text-slate-400 hover:text-gray-600'
                  }`}
              >
                {link.name}
                <ChevronDown className={`w-3 h-3 transition-all ${isActive(link.to) ? 'opacity-100 text-indigo-400' : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5'}`} />
              </Link>
            ))}
          </div>



          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 px-4 pt-2 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-slate-100 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between text-lg font-bold p-4 rounded-2xl transition-colors ${isActive(link.to) ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
              <div className="h-px bg-slate-100" />
              <a
                href="https://goodsync-8x4v.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 text-slate-800 font-black rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Sign In
              </a>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black rounded-2xl"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavbar;
