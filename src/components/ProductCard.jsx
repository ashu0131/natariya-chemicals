import React from "react";
import { ArrowUpRight, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getText } from "../data/demo";
import { motion } from "framer-motion";
export default function ProductCard({ product }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("hi") ? "hi" : "en";
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <img
          src={product.image_url}
          alt={getText(product, "name", lang)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-700 px-3 py-1 text-[11px] font-bold text-white">
            Featured
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
          <Sprout size={13} />
          {getText(product, "category", lang)}
        </span>
        <h3 className="mt-3 text-base font-extrabold sm:text-lg text-slate-900">
          {getText(product, "name", lang)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {getText(product, "short_description", lang)}
        </p>
        <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
          {lang === "hi" ? "विवरण देखें" : "View Details"}
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}
