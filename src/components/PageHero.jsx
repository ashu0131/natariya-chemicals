import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-14 text-white sm:py-20 lg:py-24">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=85"
        alt="Agricultural field"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/30" />
      <div className="absolute inset-0 bg-hero-grid opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="container-x relative"
      >
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-brand-200 sm:text-xs sm:tracking-[.22em]">
          <Leaf size={15} />
          Natariya Chemicals
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
