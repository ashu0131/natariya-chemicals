import React from "react";
import { ArrowUpRight, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
  onViewDetails,
}) {
  const { i18n } = useTranslation();

  const lang = i18n.language?.startsWith("hi")
    ? "hi"
    : "en";

  const name =
    lang === "hi"
      ? product.name_hi
      : product.name_en;

  const category =
    lang === "hi"
      ? product.category_hi
      : product.category_en;

  const shortDescription =
    lang === "hi"
      ? product.short_description_hi
      : product.short_description_en;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <img
          src={
            product.image_url ||
            `https://placehold.co/800x800/png?text=${encodeURIComponent(
              product.name_en || "Product"
            )}`
          }
          alt={name || product.name_en}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {product.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-700 px-3 py-1 text-[11px] font-bold text-white shadow-md">
            {lang === "hi"
              ? "विशेष उत्पाद"
              : "Featured"}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5">

        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
          <Sprout size={13} />
          {category}
        </span>

        <h3 className="mt-3 text-base font-extrabold text-slate-900 sm:text-lg">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {shortDescription}
        </p>

        <button
          type="button"
          onClick={onViewDetails}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-all duration-200 hover:gap-3"
        >
          {lang === "hi"
            ? "विवरण देखें"
            : "View Details"}

          <ArrowUpRight size={16} />
        </button>

      </div>
    </motion.article>
  );
}