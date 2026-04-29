import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problem from './components/Problem'
import Features from './components/Features'
import UserRoles from './components/UserRoles'
import WhyGudERP from './components/WhyGudERP'
import Workflow from './components/Workflow'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FeaturesPage from './components/FeaturesPage'
import RolesPage from './components/RolesPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import ContactOptions from './components/ContactOptions'

const SectionReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

  const LandingPage = () => (
    <div className="min-h-screen bg-white font-inter text-slate-900 scroll-smooth selection:bg-indigo-600/30 selection:text-indigo-600 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[99]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      ></div>


      <Navbar />
      <main className="relative z-0">
        <Hero />

        <SectionReveal>
          <Stats />
        </SectionReveal>

        <SectionReveal>
          <Problem />
        </SectionReveal>

        <SectionReveal>
          <Features />
        </SectionReveal>

        <SectionReveal>
          <UserRoles />
        </SectionReveal>

        <SectionReveal>
          <WhyGudERP />
        </SectionReveal>

        <SectionReveal>
          <Workflow />
        </SectionReveal>

        <SectionReveal>
          <CTA />
        </SectionReveal>

        <SectionReveal>
          <ContactOptions />
        </SectionReveal>
      </main>
      <Footer />

    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/features" element={<><ScrollToTop /><FeaturesPage /></>} />
      <Route path="/roles" element={<><ScrollToTop /><RolesPage /></>} />
      <Route path="/contact" element={<><ScrollToTop /><ContactPage /></>} />
    </Routes>
  );
}

export default App
