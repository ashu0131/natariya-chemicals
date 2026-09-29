import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-brand-300">
              <Leaf />
            </span>
            <span>
              <strong className="block">Natariya Chemicals</strong>
              <small className="text-white/60">Industries Pvt. Ltd.</small>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            {t("footer.desc")}
          </p>
        </div>
        <div>
          <h3 className="font-bold">{t("footer.links")}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            {[
              ["/", t("nav.home")],
              ["/about", t("nav.about")],
              ["/products", t("nav.products")],
              ["/gallery", t("nav.gallery")],
              ["/contact", t("nav.contact")],
            ].map(([to, x]) => (
              <Link className="hover:text-white" key={to} to={to}>
                {x}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">{t("contact.get")}</h3>
          <div className="mt-4 space-y-3 text-sm text-white/65">
            <a className="flex gap-2" href="tel:+918958778325">
              <Phone size={16} />
              <span>+91 8958778325</span>
            </a>
            <a className="flex gap-2" href="mailto:info@natariya.com">
              <Mail size={16} />
              <span>info@natariya.com</span>
            </a>
            <span className="flex gap-2">
              <MapPin size={16} />
              <span>Industrial Area Sikandrabad, Sikandarabad, Uttar Pradesh</span>
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Newsletter</h3>
          <p className="mt-4 text-sm leading-6 text-white/65">
            {t("footer.newsletter")}
          </p>
          <div className="mt-4 flex overflow-hidden rounded-xl border border-white/15 bg-white/5">
            <input
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              placeholder="Email address"
            />
            <button className="bg-brand-700 px-4">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Natariya Chemicals Industries Pvt. Ltd.
          </span>
          <span>Quality • Innovation • Sustainable Agriculture</span>
        </div>
      </div>
    </footer>
  );
}
