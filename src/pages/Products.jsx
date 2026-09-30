import React, { useEffect, useMemo, useState } from "react";
import {
  Filter,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  X,
  Sprout,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const PRODUCT_CATEGORIES = [
  {
    en: "Fertilizers",
    hi: "उर्वरक",
  },
  {
    en: "Insecticides",
    hi: "कीटनाशक",
  },
  {
    en: "Fungicides",
    hi: "फफूंदनाशक",
  },
  {
    en: "Herbicides",
    hi: "शाकनाशी",
  },
  {
    en: "Plant Growth Regulators",
    hi: "पादप वृद्धि नियामक",
  },
  {
    en: "Bio Fertilizers",
    hi: "जैव उर्वरक",
  },
  {
    en: "Micronutrients",
    hi: "सूक्ष्म पोषक तत्व",
  },
  {
    en: "Organic Products",
    hi: "जैविक उत्पाद",
  },
];

export default function Products() {
  const { t, i18n } = useTranslation();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isHindi = i18n.language?.startsWith("hi");

  /*
   * Fetch products from Supabase
   */
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  /*
   * Close modal with Escape key
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  /*
   * Only show categories that actually
   * exist in Supabase products.
   */
  const cats = useMemo(() => {
    const availableCategories = new Set(
      products
        .map((product) => product.category_en)
        .filter(Boolean)
    );

    return PRODUCT_CATEGORIES.filter((item) =>
      availableCategories.has(item.en)
    );
  }, [products]);

  /*
   * Filter products
   */
  const visible = useMemo(() => {
    if (category === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category_en === category
    );
  }, [products, category]);

  /*
   * Selected category
   */
  const selectedCategory = PRODUCT_CATEGORIES.find(
    (item) => item.en === category
  );

  /*
   * Product text based on language
   */
  const productName = selectedProduct
    ? isHindi
      ? selectedProduct.name_hi
      : selectedProduct.name_en
    : "";

  const productCategory = selectedProduct
    ? isHindi
      ? selectedProduct.category_hi
      : selectedProduct.category_en
    : "";

  const productShortDescription = selectedProduct
    ? isHindi
      ? selectedProduct.short_description_hi
      : selectedProduct.short_description_en
    : "";

  const productDescription = selectedProduct
    ? isHindi
      ? selectedProduct.description_hi
      : selectedProduct.description_en
    : "";

  return (
    <>
      <Seo
        title={t("products.label")}
        description="Explore Natariya Chemicals product categories including fertilizers, insecticides, fungicides, herbicides and crop protection solutions."
        path="/products"
      />

      <PageHero
        title={t("products.title")}
        subtitle={t("products.intro")}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x">

          {/* Heading + Filter */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <span className="eyebrow">
                {isHindi
                  ? "उत्पाद श्रेणियां"
                  : "Product Categories"}
              </span>

              <h2 className="section-title">
                {isHindi
                  ? "स्वस्थ फसलों के लिए समाधान"
                  : "Solutions for healthier crops"}
              </h2>
            </div>

            {/* Category Dropdown */}
            <div className="w-full lg:w-[280px]">
              <label
                htmlFor="product-category"
                className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"
              >
                <Filter
                  size={16}
                  className="text-brand-700"
                />

                {isHindi
                  ? "श्रेणी के अनुसार फ़िल्टर करें"
                  : "Filter by Category"}
              </label>

              <div className="relative">
                <select
                  id="product-category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                >
                  <option value="All">
                    {isHindi
                      ? "सभी उत्पाद"
                      : "All Products"}
                  </option>

                  {cats.map((item) => (
                    <option
                      key={item.en}
                      value={item.en}
                    >
                      {isHindi ? item.hi : item.en}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Selected Category */}
          {category !== "All" && selectedCategory && (
            <div className="mt-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700">
                {isHindi
                  ? `श्रेणी: ${selectedCategory.hi}`
                  : `Category: ${selectedCategory.en}`}
              </span>
            </div>
          )}

          {/* Products */}
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.04,
                }}
              >
                <ProductCard
                  product={p}
                  onViewDetails={() =>
                    setSelectedProduct(p)
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* Empty */}
          {!visible.length && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 sm:p-14">
              {t("products.empty")}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container-x">
          <div className="flex flex-col gap-5 rounded-3xl bg-brand-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            <div>
              <h3 className="text-xl font-black sm:text-2xl">
                {t("products.ask")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
                {t("products.askText")}
              </p>
            </div>

            <a
              className="btn-light w-full shrink-0 sm:w-auto"
              href="tel:+918958778325"
            >
              <PhoneCall size={17} />

              +91 8958778325

              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DETAILS MODAL
      ===================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
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

              {/* Close Button */}
              <button
                type="button"
                onClick={() =>
                  setSelectedProduct(null)
                }
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-2">

                {/* Product Image */}
                <div className="flex min-h-[300px] items-center justify-center bg-brand-50 p-6 sm:min-h-[450px] sm:p-10 lg:min-h-[600px]">
                  <img
                    src={
                      selectedProduct.image_url ||
                      `https://placehold.co/800x800/png?text=${encodeURIComponent(
                        selectedProduct.name_en
                      )}`
                    }
                    alt={productName}
                    className="max-h-[480px] w-full rounded-2xl object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-8 lg:p-10">

                  {/* Category */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700">
                    <Sprout size={14} />

                    {productCategory}
                  </span>

                  {/* Product Name */}
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    {productName}
                  </h2>

                  {/* Short Description */}
                  {productShortDescription && (
                    <p className="mt-4 text-base font-semibold leading-7 text-brand-700">
                      {productShortDescription}
                    </p>
                  )}

                  <div className="my-6 h-px bg-slate-200" />

                  {/* Full Description */}
                  {productDescription && (
                    <div>
                      <h3 className="text-lg font-black text-slate-900">
                        {isHindi
                          ? "उत्पाद विवरण"
                          : "Product Description"}
                      </h3>

                      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                        {productDescription}
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

                      <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:gap-3">
                        <span className="min-w-[110px] text-sm font-bold text-slate-500">
                          {isHindi
                            ? "श्रेणी"
                            : "Category"}
                        </span>

                        <span className="text-sm font-semibold text-slate-800">
                          {productCategory}
                        </span>
                      </div>

                      {selectedProduct.featured && (
                        <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:gap-3">
                          <span className="min-w-[110px] text-sm font-bold text-slate-500">
                            {isHindi
                              ? "विशेष उत्पाद"
                              : "Featured"}
                          </span>

                          <span className="text-sm font-semibold text-brand-700">
                            {isHindi
                              ? "हाँ"
                              : "Yes"}
                          </span>
                        </div>
                      )}

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

                  {/* Enquiry Button */}
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
        )}
      </AnimatePresence>
    </>
  );
}