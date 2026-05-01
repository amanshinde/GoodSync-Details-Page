import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calculator, Trophy } from 'lucide-react';

const AmbientBackground = ({ colorScheme = 'default', showIcons = true }) => {
  const palettes = {
    default: [
      'bg-indigo-400/20', 'bg-violet-400/20', 'bg-cyan-400/20'
    ],
    problem: [
      'bg-red-400/20', 'bg-rose-400/20', 'bg-orange-400/20'
    ],
    roles: [
      'bg-purple-400/20', 'bg-fuchsia-400/20', 'bg-indigo-400/20'
    ]
  };

  const colors = palettes[colorScheme] || palettes.default;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          x: [0, 100, 0, -100, 0], 
          y: [0, 50, -50, 50, 0],
          scale: [1, 1.1, 1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className={`absolute top-0 left-[-10%] w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full blur-[120px] lg:blur-[150px] ${colors[0]}`}
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0, 100, 0], 
          y: [0, -50, 50, -50, 0],
          scale: [1, 0.9, 1, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-[-10%] right-[-10%] w-[700px] lg:w-[1000px] h-[700px] lg:h-[1000px] rounded-full blur-[150px] lg:blur-[180px] ${colors[1]}`}
      />
      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0], 
          y: [0, 100, 0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-[20%] left-[40%] w-[500px] h-[500px] rounded-full blur-[100px] ${colors[2]} mix-blend-multiply flex-shrink-0`}
      />

      {/* Floating School Icons */}
      {showIcons && (
        <div className="absolute inset-0 z-10 opacity-60">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] lg:left-[10%] w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl flex items-center justify-center transform -rotate-12"
          >
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-indigo-500/80" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] right-[3%] lg:right-[8%] w-14 h-14 md:w-16 md:h-16 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-xl flex items-center justify-center transform rotate-12"
          >
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-violet-500/80" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] left-[8%] lg:left-[15%] w-12 h-12 md:w-14 md:h-14 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-xl flex items-center justify-center transform -rotate-6"
          >
            <Calculator className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-500/80" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[10%] right-[10%] lg:right-[15%] w-16 h-16 md:w-18 md:h-18 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl flex items-center justify-center transform rotate-6"
          >
            <Trophy className="w-8 h-8 md:w-9 md:h-9 text-rose-500/80" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AmbientBackground;
