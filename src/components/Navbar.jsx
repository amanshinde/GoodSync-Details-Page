import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isSubPage = location.pathname === '/features' || location.pathname === '/roles' || location.pathname === '/contact';

  const navLinks = [
    { name: 'Features', href: '#features', to: '/features', isRoute: true },
    { name: 'Roles', href: '#roles', to: '/roles', isRoute: true },
    { name: 'Contact Sales', href: '#contact', to: '/contact', isRoute: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 py-3 ${(isScrolled || isSubPage) ? 'pt-2' : 'pt-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between px-6 py-3 transition-all duration-700 ${(isScrolled || isSubPage)
          ? 'bg-white/40 backdrop-blur-xl shadow-lg rounded-full border border-white/20'
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
              <img
                src="/fulllogocolor.png"
                alt="GOODSYNK ERP Logo"
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-base font-bold transition-all flex items-center space-x-1 group ${location.pathname === link.to ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronDown className={`w-3 h-3 transition-all ${location.pathname === link.to ? 'opacity-100 text-indigo-400' : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-1'}`} />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isSubPage ? `/${link.href}` : link.href}
                  className="text-base font-bold text-slate-500 hover:text-indigo-600 transition-all flex items-center space-x-1 group"
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
                </a>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-base font-black text-slate-800 hover:text-indigo-600 transition-colors tracking-tight">
              Sign In
            </button>
            <button className="group relative bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2.5 rounded-xl font-black text-base shadow-xl shadow-indigo-200 flex items-center space-x-2 hover:scale-105 transition-all active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl bg-slate-50 text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 px-4 pt-4 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-3xl rounded-[3rem] p-10 shadow-4xl border border-slate-100 space-y-10">
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-bold p-4 rounded-2xl flex items-center justify-between transition-colors ${location.pathname === link.to ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={isSubPage ? `/${link.href}` : link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl flex items-center justify-between hover:bg-slate-100 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </a>
                  )
                ))}
              </div>
              <div className="h-[1px] bg-slate-100 w-full" />
              <div className="flex flex-col space-y-6">
                <button className="w-full py-6 text-2xl font-black text-slate-800 border-2 border-slate-100 rounded-[2rem] hover:border-indigo-200">
                  Log In
                </button>
                <button className="w-full py-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-2xl font-black rounded-[2rem] shadow-2xl shadow-indigo-200">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
