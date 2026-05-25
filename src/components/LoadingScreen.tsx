import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="flex flex-col items-center gap-6 rounded-[28px] border border-white/10 bg-slate-900/90 px-8 py-10 text-center shadow-soft backdrop-blur-2xl">
        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_40px_rgba(124,58,237,0.4)]">
          <div className="h-16 w-16 animate-[spin_2.2s_linear_infinite] rounded-full border-4 border-white/10 border-t-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white">Launching Portfolio</h1>
          <p className="mt-2 max-w-sm text-sm text-slate-300">Building a polished experience for Keerthana MP with smooth motion and premium design.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
