import React, { useEffect } from "react";
import { X, PhoneCall, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductDetailsModal({
  product,
  onClose,
}) {
  const { i18n } = useTranslation();

  const isHindi = i18n.language?.startsWith("hi");

  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const name = isHindi
    ? product.name_hi
    : product.name_en;

  const category = isHindi
    ? product.category_hi
    : product.category_en;

  const shortDescription = isHindi
    ? product.short_description_hi
    : product.short_description_en;

  const description = isHindi
    ? product.description_hi
    : product.description_en;

  const image =
    product.image_url ||
    `https://placehold.co/800x800/png?text=${encodeURIComponent(
      product.name_en || "Product"
    )}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 25,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        >

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black"
            aria-label="Close product details"
          >
            <X size={20} />
          </button>

          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="flex min-h-[300px] items-center justify-center bg-brand-50 p-6 sm:min-h-[450px] sm:p-10 lg:min-h-[600px]">
              <img
                src={image}
                alt={name || product.name_en}
                className="max-h-[480px] w-full rounded-2xl object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 lg:p-10">

              {/* Category */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700">
                <Sprout size={14} />

                {category}
              </span>

              {/* Name */}
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                {name}
              </h2>

              {/* Short Description */}
              {shortDescription && (
                <p className="mt-4 text-base font-semibold leading-7 text-brand-700">
                  {shortDescription}
                </p>
              )}

              <div className="my-6 h-px bg-slate-200" />

              {/* Full Description */}
              {description && (
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {isHindi
                      ? "उत्पाद विवरण"
                      : "Product Description"}
                  </h3>

                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                    {description}
                  </p>
                </div>
              )}

              {/* Product Information */}
              <div className="mt-7 rounded-2xl bg-slate-50 p-5">

                <h3 className="text-base font-black text-slate-900">
                  {isHindi
                    ? "उत्पाद जानकारी"
                    : "Product Information"}
                </h3>

                <div className="mt-4 space-y-3">

                  {/* Category */}
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:gap-3">
                    <span className="min-w-[110px] text-sm font-bold text-slate-500">
                      {isHindi
                        ? "श्रेणी"
                        : "Category"}
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {category}
                    </span>
                  </div>

                  {/* Featured */}
                  {product.featured && (
                    <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:gap-3">
                      <span className="min-w-[110px] text-sm font-bold text-slate-500">
                        {isHindi
                          ? "विशेष उत्पाद"
                          : "Featured"}
                      </span>

                      <span className="text-sm font-semibold text-brand-700">
                        {isHindi ? "हाँ" : "Yes"}
                      </span>
                    </div>
                  )}

                  {/* Availability */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                    <span className="min-w-[110px] text-sm font-bold text-slate-500">
                      {isHindi
                        ? "उपलब्धता"
                        : "Availability"}
                    </span>

                    <span className="text-sm font-semibold text-green-700">
                      {isHindi
                        ? "उपलब्ध"
                        : "Available"}
                    </span>
                  </div>

                </div>
              </div>

              {/* Enquiry */}
              <a
                href="tel:+918958778325"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-brand-800"
              >
                <PhoneCall size={17} />

                {isHindi
                  ? "इस उत्पाद के बारे में पूछें"
                  : "Enquire About This Product"}
              </a>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}