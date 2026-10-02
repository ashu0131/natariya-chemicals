import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    ["/", t("nav.home")],
    ["/about", t("nav.about")],
    ["/products", t("nav.products")],
    ["/gallery", t("nav.gallery")],
    ["/contact", t("nav.contact")],
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("natariya_lang", lang);
    document.documentElement.lang = lang;
  };

  return (
    <>
      {/* =========================
          TOP BAR
      ========================== */}
      <div className="bg-[#101713] text-[10px] text-white/80 sm:text-[11px]">
        <div className="container-x flex min-h-9 items-center justify-between gap-3">
          <span className="truncate">
            5+ Years of Agricultural Solutions
          </span>

          <a
            href="tel:+918958778325"
            className="flex shrink-0 items-center gap-1 transition hover:text-white"
          >
            <PhoneCall size={12} />
            <span>+91 8958778325</span>
          </a>
        </div>
      </div>

      {/* =========================
          NAVBAR
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container-x flex min-h-[64px] items-center justify-between gap-3 sm:min-h-[74px]">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center"
          >
            <img
              src="/logo%20natariya.jpeg"
              alt="Natariya Crop Chemicals"
              className="h-10 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[260px]"
            />
          </Link>

          {/* =========================
              MOBILE LANGUAGE + MENU
          ========================== */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">

            {/* Language */}
            <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
              {["en", "hi"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`min-w-[34px] rounded-full px-2 py-1 text-[10px] font-bold transition ${
                    i18n.language.startsWith(lang)
                      ? "bg-brand-700 text-white"
                      : "text-slate-500 hover:text-brand-700"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden lg:block">
            <div className="flex items-center gap-1">

              {/* Navigation Links */}
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Call Us */}
              <a
                href="tel:+918958778325"
                className="ml-2 flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                <PhoneCall size={15} />
                Call Us
              </a>

              {/* Desktop Language */}
              <div className="ml-2 flex rounded-full border border-slate-200 bg-slate-50 p-1">
                {["en", "hi"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`min-w-[40px] rounded-full px-2.5 py-1.5 text-xs font-bold transition ${
                      i18n.language.startsWith(lang)
                        ? "bg-brand-700 text-white"
                        : "text-slate-500 hover:text-brand-700"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 py-3 shadow-sm lg:hidden">
            <div className="flex flex-col gap-1">

              {/* Mobile Links */}
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Mobile Call Us */}
              <a
                href="tel:+918958778325"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                <PhoneCall size={15} />
                Call Us
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}