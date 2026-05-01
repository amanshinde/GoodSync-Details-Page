import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'

// Brand-level pages
import MainHome from './main/pages/MainHome'
import AllProductsPage from './main/pages/AllProductsPage'
import AboutPage from './main/pages/AboutPage'
import MainContactPage from './main/pages/MainContactPage'

// GOODSYNK ERP pages
import Navbar from './goodsynk-erp/components/Navbar'
import Hero from './goodsynk-erp/components/Hero'
import Stats from './goodsynk-erp/components/Stats'
import Problem from './goodsynk-erp/components/Problem'
import Features from './goodsynk-erp/components/Features'
import UserRoles from './goodsynk-erp/components/UserRoles'
import WhyGOODSYNKERP from './goodsynk-erp/components/WhyGOODSYNKERP'
import Workflow from './goodsynk-erp/components/Workflow'
import CTA from './goodsynk-erp/components/CTA'
import Footer from './goodsynk-erp/components/Footer'
import FeaturesPage from './goodsynk-erp/pages/FeaturesPage'
import RolesPage from './goodsynk-erp/pages/RolesPage'
import ContactPage from './goodsynk-erp/pages/ContactPage'
import ScrollToTop from './goodsynk-erp/components/ScrollToTop'
import ContactOptions from './goodsynk-erp/components/ContactOptions'

const SectionReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // GOODSYNK ERP product landing page
  const GoodsynkERPPage = () => (
    <div className="min-h-screen bg-white font-inter text-slate-900 scroll-smooth selection:bg-indigo-600/30 selection:text-indigo-600 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[99]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <SectionReveal><Stats /></SectionReveal>
        <SectionReveal><Problem /></SectionReveal>
        <SectionReveal><Features /></SectionReveal>
        <SectionReveal><UserRoles /></SectionReveal>
        <SectionReveal><WhyGOODSYNKERP /></SectionReveal>
        <SectionReveal><Workflow /></SectionReveal>
        <SectionReveal><CTA /></SectionReveal>
        <SectionReveal><ContactOptions /></SectionReveal>
      </main>
      <Footer />
    </div>
  );

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* ── Brand-level pages ── */}
        <Route path="/" element={<MainHome />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/main-contact" element={<MainContactPage />} />

        {/* ── GOODSYNK ERP product pages ── */}
        <Route path="/erp" element={<GoodsynkERPPage />} />
        <Route path="/erp/features" element={<FeaturesPage />} />
        <Route path="/erp/roles" element={<RolesPage />} />
        <Route path="/erp/contact" element={<ContactPage />} />

        {/* Legacy redirects (keep old routes working) */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App
