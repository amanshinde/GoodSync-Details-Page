import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import AmbientBackground from './AmbientBackground';
import HeroUI from './HeroUI';
import { HandDrawnUnderline } from './SchoolScribbles';
import { Play, ArrowRight, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
      <AmbientBackground />

      <div className="w-full max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] font-outfit text-slate-900 leading-tight tracking-[-0.02em]">
              Simplify. <br />
              <motion.span
                initial={{ color: '#0f172a' }}
                animate={{ color: '#4F46E5' }}
                transition={{ delay: 1, duration: 1 }}
                className="relative inline-block"
              >
                Educate.
                <HandDrawnUnderline className="text-violet-500 animate-[pulse_3s_ease-in-out_Infinity]" />
              </motion.span> Progress.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed tracking-tight">
              Digitize core school processes. Improve operational efficiency for administration & teachers. <br className="hidden md:block" />
              Give parents real-time visibility into attendance, academics & fees — with{' '}
              <span className="font-extrabold text-slate-900 border-b-4 border-indigo-600/40 pb-1">GudERP.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <motion.button
              onClick={() => navigate('/features')}
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-5 rounded-[2rem] font-bold text-xl shadow-2xl shadow-indigo-200/50 border-[6px] border-white ring-1 ring-slate-100 flex items-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              <span>Explore Features</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform stroke-[2.5]" />
            </motion.button>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white shadow-lg shadow-slate-100/50 group-hover:border-indigo-200 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-50 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <Calendar className="w-6 h-6 text-indigo-600 relative z-10" />
              </div>
              <span className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-all">Request Demo</span>
            </motion.div>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 md:mt-24 relative w-full"
        >
          <HeroUI />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
