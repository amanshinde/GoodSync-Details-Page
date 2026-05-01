import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Clock, Globe } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import AmbientBackground from '../../goodsynk-erp/components/AmbientBackground';

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'Drop us an email — we reply within 24 hours.',
    value: 'hello@goodsync.in',
    href: 'mailto:hello@goodsync.in',
    color: 'indigo',
  },
  {
    icon: MessageSquare,
    title: 'Sales Inquiry',
    desc: 'Interested in early access or partnership?',
    value: 'sales@goodsync.in',
    href: 'mailto:sales@goodsync.in',
    color: 'violet',
  },
  {
    icon: Globe,
    title: 'GOODSYNK ERP',
    desc: 'Already using GOODSYNK ERP? Visit the app.',
    value: 'goodsync-8x4v.onrender.com',
    href: 'https://goodsync-8x4v.onrender.com',
    color: 'emerald',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'text-indigo-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600' },
};

const MainContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to a backend or form service
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-indigo-600/20 selection:text-indigo-900">
      <MainNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 text-center overflow-hidden">
        <AmbientBackground showIcons={false} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-indigo-600 font-black text-sm uppercase tracking-[0.2em] mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit tracking-tight mb-6 text-slate-900"
          >
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Talk
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl font-medium"
          >
            Whether you're curious about our products, want early access, or just want to say hello — we're all ears.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16 pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_OPTIONS.map((opt, i) => {
            const c = colorMap[opt.color];
            const Icon = opt.icon;
            return (
              <motion.a
                key={i}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 p-8 transition-all duration-300 block overflow-hidden`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent to-${opt.color}-50/50 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{opt.title}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-3">{opt.desc}</p>
                  <p className={`text-sm font-bold ${c.icon} group-hover:underline`}>{opt.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60 pt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-black font-outfit mb-2 text-slate-900">Send a Message</h2>
            <p className="text-slate-500 text-sm font-medium mb-8">We'll get back to you within one business day.</p>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-black mb-2 text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-sm">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-4 rounded-2xl font-black text-base shadow-xl shadow-indigo-200 hover:scale-[1.02] transition-all active:scale-[0.98]"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-black font-outfit mb-6 text-slate-900">Office Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Mon – Fri</p>
                    <p className="text-slate-500 text-sm font-medium">9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Saturday</p>
                    <p className="text-slate-500 text-sm font-medium">10:00 AM – 4:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Location</p>
                    <p className="text-slate-500 text-sm font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default MainContactPage;
