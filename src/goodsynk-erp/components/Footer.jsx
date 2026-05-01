import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Shield, Rocket, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterLink = ({ href, to, children }) => {
  const inner = (
    <div className="text-lg font-bold text-slate-500 hover:text-indigo-600 transition-all flex items-center space-x-3 group w-fit">
      <div className="w-6 h-6 rounded-md bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
        <ChevronRight className="w-3 h-3 text-indigo-600" />
      </div>
      <span>{children}</span>
    </div>
  );

  return to ? (
    <Link to={to}>{inner}</Link>
  ) : (
    <a href={href}>{inner}</a>
  );
};

const Footer = () => {
  const socialIcons = [Mail, Globe, Shield, Rocket];

  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="max-w-[1400px] mx-auto space-y-20 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/">
              <div className="flex items-center space-x-3 group cursor-pointer w-fit">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-white font-black text-2xl font-outfit">G</span>
                </div>
                <span className="text-3xl font-[900] font-outfit text-slate-900 tracking-tighter">
                  Good<span className="text-indigo-600">ERP</span>
                </span>
              </div>
            </Link>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
              To become the trusted operating system for schools by providing an easy-to-adopt, reliable, and scalable platform that drives education forward.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 hover:text-white transition-all shadow-xl shadow-transparent hover:shadow-indigo-200 hover:-translate-y-1">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">

            <div className="space-y-8">
              <h4 className="text-sm font-black font-outfit text-slate-900 uppercase tracking-[0.2em]">Product</h4>
              <div className="space-y-4">
                <FooterLink to="/features">Feature Hub</FooterLink>
                <FooterLink to="/roles">User Roles</FooterLink>
                <FooterLink href="/#why-goodsynk-erp">Why GOODSYNK ERP</FooterLink>
                <FooterLink href="/#workflow">How It Works</FooterLink>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-black font-outfit text-slate-900 uppercase tracking-[0.2em]">Company</h4>
              <div className="space-y-4">
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink to="/contact">Contact Sales</FooterLink>
                <FooterLink href="#">Partner Network</FooterLink>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-black font-outfit text-slate-900 uppercase tracking-[0.2em]">Legal & Support</h4>
              <div className="space-y-4">
                <FooterLink href="#">Help Center</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
              </div>
            </div>

          </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
