import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Sprout,
  Lightbulb,
  Users,
  FlaskConical,
  Truck,
  Handshake,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { demoProducts } from "../data/demo";
export default function Home() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(
    demoProducts.filter((x) => x.featured),
  );
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    supabase
      .from("products")
      .select("*")
      .eq("published", true)
      .eq("featured", true)
      .order("created_at", { ascending: false })
      .limit(4)
      .then(({ data }) => {
        if (data?.length) setProducts(data);
      });
  }, []);
  const reasons = [
    {
      icon: ShieldCheck,
      title: t("home.reasons")[0],
      text: "Trusted by farmers",
    },
    {
      icon: Sprout,
      title: t("home.reasons")[1],
      text: "Responsible agriculture",
    },
    {
      icon: Users,
      title: t("home.reasons")[2],
      text: "Practical field support",
    },
    {
      icon: Lightbulb,
      title: t("home.reasons")[3],
      text: "Better ideas for tomorrow",
    },
  ];
  return (
    <>
      <Seo
        title="Agricultural & Agrochemical Solutions"
        description="Natariya Chemicals Industries Pvt. Ltd. delivers dependable agrochemical, crop nutrition and crop protection solutions for modern agriculture."
        path="/"
      />
      <section className="relative min-h-[570px] sm:min-h-[620px] overflow-hidden bg-brand-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=2200&q=85"
          alt="Green agricultural field"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/65 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
        <div className="container-x relative flex min-h-[570px] sm:min-h-[620px] items-center py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-brand-100 backdrop-blur">
              <Leaf size={15} />
              5+ Years of Excellence
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              {t("home.heroText")}
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row sm:flex-row">
              <Link to="/products" className="btn-light w-full sm:w-auto">
                {t("common.explore")}
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="btn w-full border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                {t("common.contact")}
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="absolute bottom-10 right-6 hidden rounded-3xl border border-white/20 bg-brand-950/60 p-6 text-center backdrop-blur-xl lg:block"
          >
            <Leaf className="mx-auto text-brand-300" size={34} />
            <strong className="mt-2 block text-4xl">5+</strong>
            <span className="text-xs text-white/65">Years of Experience</span>
          </motion.div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=85"
              alt="Farmer holding young plant"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <span className="eyebrow">Our Commitment</span>
            <h2 className="section-title">{t("home.introTitle")}</h2>
            <p className="section-copy">{t("home.introText")}</p>
            <Link className="btn-outline mt-7 w-fit" to="/about">
              {t("common.learn")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="container-x mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-6">
              <Icon className="text-brand-700" />
              <strong className="mt-4 block text-sm font-extrabold">
                {title}
              </strong>
              <span className="mt-1 block text-xs text-slate-500">{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Range"
            title={t("home.productsTitle")}
            text={t("home.productsText")}
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link className="btn-outline" to="/products">
              {t("common.viewAll")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-brand-50 py-12 sm:py-16 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Promise" title={t("home.whyTitle")} />
            <div className="mt-8 space-y-4">
              {[
                "Quality products",
                "Farmer-focused solutions",
                "Technical support",
                "Responsible innovation",
              ].map((x, i) => (
                <div
                  key={x}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-700" />
                  <div>
                    <strong className="block text-sm font-extrabold">
                      {x}
                    </strong>
                    <p className="mt-1 text-sm text-slate-600">
                      {
                        [
                          "Reliable quality standards",
                          "Solutions designed around real farm needs",
                          "Practical guidance for customers",
                          "Continuous improvement with responsibility",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
              alt="Farmer in crop field"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-950 py-12 sm:py-16 text-white">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["5+", "Years Experience", FlaskConical],
            ["50+", "Product Range", Sprout],
            ["1000+", "Happy Customers", Handshake],
            ["100%", "Quality Focus", Target],
          ].map(([n, l, I]) => (
            <div
              key={l}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <I className="mx-auto text-brand-300" size={26} />
              <strong className="mt-3 block text-3xl">{n}</strong>
              <span className="text-sm text-white/60">{l}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-brand-900 to-brand-950 py-12 sm:py-16 text-white">
        <div className="container-x flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow !text-brand-200">Partner With Us</span>
            <h2 className="text-3xl font-black sm:text-4xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">{t("home.ctaText")}</p>
          </div>
          <Link className="btn-light shrink-0" to="/contact">
            {t("common.contact")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
