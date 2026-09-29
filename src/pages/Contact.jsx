import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import TeamCard from "../components/TeamCard";
import SectionHeading from "../components/SectionHeading";
import { demoTeam } from "../data/demo";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const WHATSAPP_NUMBER = "918958778325";

const contactCards = [
  {
    key: "address",
    icon: MapPin,
    color: "from-emerald-500 to-green-700",
  },
  {
    key: "phone",
    icon: Phone,
    color: "from-green-500 to-emerald-700",
  },
  {
    key: "email",
    icon: Mail,
    color: "from-teal-500 to-emerald-700",
  },
  {
    key: "hours",
    icon: Clock,
    color: "from-lime-500 to-green-700",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  const [team, setTeam] = useState(demoTeam);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase
      .from("team_members")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (data?.length) setTeam(data);
      });
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSent(false);

    if (isSupabaseConfigured) {
      const { error } = await supabase
        .from("contact_messages")
        .insert(form);

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    }

    setSent(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  const map = import.meta.env.VITE_MAP_EMBED_URL;
    

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Natariya Chemicals, I would like to know more about your products."
  )}`;

  return (
    <>
      <Seo
        title={t("contact.label")}
        description="Contact Natariya Chemicals Industries Pvt. Ltd. for product information, agricultural solutions, quotations and business enquiries."
        path="/contact"
      />

      <PageHero
        title={t("contact.title")}
        subtitle={t("contact.intro")}
      />

      {/* CONTACT AREA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-white to-white py-14 sm:py-18 lg:py-24">

        {/* Background decorations */}
        <motion.div
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container-x relative">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                {t("contact.get")}
              </span>

              <h2 className="section-title mt-3">
                Let's start a conversation
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Connect with our team for product information, agricultural
                solutions, quotations and business enquiries.
              </p>

              {/* CONTACT CARDS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.01,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-[0_12px_35px_rgba(16,185,129,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(16,185,129,0.15)]"
                    >

                      <div
                        className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.color}`}
                      />

                      <div className="flex gap-4">

                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                        >
                          <Icon size={21} />
                        </motion.div>

                        <div className="min-w-0">
                          <strong className="text-slate-900">
                            {t(`contact.${item.key}`)}
                          </strong>

                          {item.key === "address" && (
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {t("contact.addressValue")}
                            </p>
                          )}

                          {item.key === "phone" && (
                            <a
                              href="tel:+919876543210"
                              className="mt-1 block text-sm text-slate-600 transition hover:text-emerald-700"
                            >
                              +91 8958778325
                            </a>
                          )}

                          {item.key === "email" && (
                            <a
                              href="mailto:info@natariya.com"
                              className="mt-1 block break-all text-sm text-slate-600 transition hover:text-emerald-700"
                            >
                              info@natariya.com
                            </a>
                          )}

                          {item.key === "hours" && (
                            <p className="mt-1 text-sm text-slate-600">
                              {t("contact.hoursValue")}
                            </p>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  );
                })}

              </div>

              {/* WHATSAPP */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 flex items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#15803d] p-5 text-white shadow-lg shadow-green-900/15"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <MessageCircle size={25} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Chat with us on WhatsApp
                    </p>
                    <p className="mt-1 text-xs text-white/75">
                      +91 8958778325
                    </p>
                  </div>

                </div>

                <ArrowUpRight size={20} />
              </motion.a>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_20px_70px_rgba(15,118,110,0.12)] sm:p-8 lg:p-10"
            >

              {/* top gradient */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-lime-400" />

              <div className="mb-7">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Contact
                </span>

                <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  {t("contact.send")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the form and our team will get back to you.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <label className="text-sm font-bold text-slate-700">
                  {t("contact.name")}

                  <input
                    className="admin-input mt-2"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label className="text-sm font-bold text-slate-700">
                  {t("contact.emailField")}

                  <input
                    type="email"
                    className="admin-input mt-2"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label className="text-sm font-bold text-slate-700">
                  {t("contact.phoneField")}

                  <input
                    className="admin-input mt-2"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                  />
                </label>

                <label className="text-sm font-bold text-slate-700">
                  {t("contact.subject")}

                  <input
                    className="admin-input mt-2"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subject: e.target.value,
                      })
                    }
                  />
                </label>

              </div>

              <label className="mt-5 block text-sm font-bold text-slate-700">
                {t("contact.message")}

                <textarea
                  className="admin-input mt-2 min-h-40 resize-y"
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  required
                />
              </label>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </motion.p>
              )}

              {sent && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-800"
                >
                  <CheckCircle2 size={18} />
                  {t("contact.success")}
                </motion.p>
              )}

              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-7 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                {loading ? "Sending..." : t("common.send")}
                <Send size={16} />
              </motion.button>

            </motion.form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-18 lg:py-24">

        <div className="container-x ">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Find Us"
              title="Our location"
              center
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl"
          >
            <div className="overflow-hidden rounded-[1.5rem]">

              <iframe
                title="Natariya Chemicals location map"
                src={map}
                className="h-[320px] w-full border-0 sm:h-[430px] lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </motion.div>

        </div>
      </section>

      {/* TEAM */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/40 py-14 sm:py-18 lg:py-24">

        <div className="container-x">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow={t("contact.team")}
              title={t("contact.team")}
              text={t("contact.teamIntro")}
              center
            />
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 220,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.45)] sm:h-16 sm:w-16"
      >
        <MessageCircle size={28} />

        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.a>
    </>
  );
}