import React, { useEffect, useMemo, useState } from "react";
import { Filter, ArrowRight, PhoneCall, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { demoProducts } from "../data/demo";
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

  const [products, setProducts] = useState(demoProducts);
  const [category, setCategory] = useState("All");

  const isHindi = i18n.language?.startsWith("hi");

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase
      .from("products")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data?.length) {
          setProducts(data);
        }
      });
  }, []);

  /*
   * Only show categories that actually exist
   * in the available products.
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

  const visible = useMemo(() => {
    if (category === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category_en === category
    );
  }, [products, category]);

  /*
   * If language changes, category remains based
   * on English value internally.
   */
  const selectedCategory = PRODUCT_CATEGORIES.find(
    (item) => item.en === category
  );

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
                Product Categories
              </span>

              <h2 className="section-title">
                Solutions for healthier crops
              </h2>
            </div>

            {/* Category Dropdown */}
            <div className="w-full lg:w-[280px]">
              <label
                htmlFor="product-category"
                className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"
              >
                <Filter size={16} className="text-brand-700" />

                {isHindi
                  ? "श्रेणी के अनुसार फ़िल्टर करें"
                  : "Filter by Category"}
              </label>

              <div className="relative">
                <select
                  id="product-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                >
                  <option value="All">
                    {isHindi ? "सभी उत्पाद" : "All Products"}
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
                <ProductCard product={p} />
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
    </>
  );
}