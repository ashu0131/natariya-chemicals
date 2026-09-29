import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { getText } from "../data/demo";
import { motion } from "framer-motion";

export default function TeamCard({ member }) {
  const { i18n } = useTranslation();

  const lang = i18n.language.startsWith("hi") ? "hi" : "en";

  const whatsappNumber = member.phone
    ? member.phone.replace(/\D/g, "")
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <img
          src={member.image_url}
          alt={member.name || "Team member"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* WhatsApp quick button */}
        {whatsappNumber && (
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${member.name || "team member"}`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-green-600"
          >
            <MessageCircle size={19} />
          </motion.a>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Role */}
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-700">
          {getText(member, "role", lang)}
        </span>

        {/* Name */}
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          {member.name}
        </h3>

        {/* Bio */}
        {getText(member, "bio", lang) && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {getText(member, "bio", lang)}
          </p>
        )}

        {/* Contact */}
        <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
          {/* Phone */}
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="group/contact flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-brand-700"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover/contact:bg-brand-100">
                <Phone size={14} />
              </span>

              <span className="min-w-0 truncate">
                {member.phone}
              </span>

              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 transition-opacity group-hover/contact:opacity-100"
              />
            </a>
          )}

          {/* WhatsApp */}
          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/contact flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-green-600"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover/contact:bg-green-100">
                <MessageCircle size={14} />
              </span>

              <span>WhatsApp</span>

              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 transition-opacity group-hover/contact:opacity-100"
              />
            </a>
          )}

          {/* Email */}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="group/contact flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-brand-700"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover/contact:bg-brand-100">
                <Mail size={14} />
              </span>

              <span className="min-w-0 truncate">
                {member.email}
              </span>

              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 transition-opacity group-hover/contact:opacity-100"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}