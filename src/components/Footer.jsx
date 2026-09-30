import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#101713] text-white">
      {/* Main Footer */}
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                <Leaf size={22} />
              </span>

              <span>
                <strong className="block text-base font-bold tracking-tight">
                  Natariya Chemicals
                </strong>
                <small className="text-sm text-white/45">
                  Industries Pvt. Ltd.
                </small>
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.links")}
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-white/55">
              {[
                ["/", t("nav.home")],
                ["/about", t("nav.about")],
                ["/products", t("nav.products")],
                ["/gallery", t("nav.gallery")],
                ["/contact", t("nav.contact")],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="w-fit transition-colors duration-200 hover:text-emerald-400"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("contact.get")}
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/55">
              <a
                href="tel:+918958778325"
                className="group flex items-start gap-3 transition-colors hover:text-emerald-400"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span>+91 8958778325</span>
              </a>

              <a
                href="mailto:info@natariya.com"
                className="group flex items-start gap-3 transition-colors hover:text-emerald-400"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span>info@natariya.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span className="leading-6">
                  Industrial Area Sikandrabad,
                  <br />
                  Sikandarabad, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] bg-black/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} Natariya Chemicals Industries Pvt. Ltd.
          </span>

          <span className="text-white/40">
  Crafted & Developed by{" "}
  <a
    href="https://ashuverma-04.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-emerald-400 transition hover:text-emerald-300"
  >
    Ashu Verma
  </a>
</span>
        </div>
      </div>
    </footer>
  );
}

