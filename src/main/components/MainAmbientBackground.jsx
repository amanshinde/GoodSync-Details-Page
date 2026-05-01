import React from 'react';
import { motion } from 'framer-motion';

const MainAmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50 overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]" 
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} 
      />

      {/* Moving Ambient Blobs */}
      <motion.div
        animate={{ 
          x: ['-5%', '5%', '-5%'], 
          y: ['-5%', '5%', '-5%'],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-100/50 blur-[120px]"
      />
      <motion.div
        animate={{ 
          x: ['5%', '-5%', '5%'], 
          y: ['5%', '-5%', '5%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-100/50 blur-[120px]"
      />
      <motion.div
        animate={{ 
          x: ['0%', '10%', '0%'], 
          y: ['10%', '0%', '10%'],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-sky-100/40 blur-[100px]"
      />
      
      {/* Soft overlay gradient to smooth things out */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
    </div>
  );
};

export default MainAmbientBackground;
