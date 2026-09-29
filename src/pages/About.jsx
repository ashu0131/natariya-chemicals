import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Sprout,
  ArrowRight,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
export default function About() {
  const { t } = useTranslation();
  const values = t("about.values");
  const icons = [ShieldCheck, Handshake, Lightbulb, Sprout];
  return (
    <>
      <Seo
        title={t("about.label")}
        description="Learn about Natariya Chemicals Industries Pvt. Ltd., our journey, mission, vision, values and commitment to modern agriculture."
        path="/about"
      />
      <PageHero
        title={t("about.title")}
        subtitle="Our journey, our commitment and our focus on responsible agricultural solutions."
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">{t("about.heading")}</h2>
            <p className="section-copy">{t("about.p1")}</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              {t("about.p2")}
            </p>
            <Link className="btn-primary mt-7" to="/contact">
              Talk to Our Team
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=85"
              alt="Agricultural facility and field"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-50 p-7">
            <Factory className="text-brand-700" />
            <strong className="mt-4 block text-2xl font-black">5+ Years</strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Experience built around product quality, service and agricultural
              partnerships.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-7">
            <Sprout className="text-brand-700" />
            <strong className="mt-4 block text-2xl font-black">
              50+ Products
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A growing portfolio for crop nutrition, crop protection and farm
              productivity.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-7">
            <ShieldCheck className="text-brand-700" />
            <strong className="mt-4 block text-2xl font-black">
              Quality Focus
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A customer-first approach to dependable agricultural solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-brand-950 p-8 text-white shadow-glow"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
              <Target />
            </div>
            <h3 className="mt-6 text-2xl font-black">
              {t("about.missionTitle")}
            </h3>
            <p className="mt-4 leading-7 text-white/70">{t("about.mission")}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <Eye />
            </div>
            <h3 className="mt-6 text-2xl font-black">
              {t("about.visionTitle")}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">{t("about.vision")}</p>
          </motion.div>
        </div>
      </section>
      <section className="bg-brand-50 py-12 sm:py-16 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Guides Us"
            title={t("about.valuesTitle")}
            center
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const I = icons[i];
              return (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={v}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <I className="mx-auto text-brand-700" size={28} />
                  <h3 className="mt-4 font-extrabold">{v}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Committed to doing meaningful work with consistency and
                    care.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
