import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { demoGallery, getText } from "../data/demo";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
export default function Gallery() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("hi") ? "hi" : "en";
  const [items, setItems] = useState(demoGallery);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    supabase
      .from("gallery")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (data?.length) setItems(data);
      });
  }, []);
  return (
    <>
      <Seo
        title={t("gallery.label")}
        description="See Natariya Chemicals agriculture, product, people and field activity gallery."
        path="/gallery"
      />
      <PageHero title={t("gallery.title")} subtitle={t("gallery.intro")} />
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelected(item)}
                className="group relative overflow-hidden rounded-3xl bg-slate-200 text-left"
              >
                <img
                  src={item.image_url}
                  alt={getText(item, "title", lang)}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-16 text-white">
                  <span className="text-sm font-bold">
                    {getText(item, "title", lang)}
                  </span>
                </div>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-800 opacity-0 shadow transition group-hover:opacity-100">
                  <Maximize2 size={17} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-5"
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-800"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <img
              src={selected.image_url}
              alt={getText(selected, "title", lang)}
              className="max-h-[82vh] w-auto object-contain"
            />
            <div className="p-4 font-bold">
              {getText(selected, "title", lang)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
