import React from "react";
import { Helmet } from "react-helmet-async";
const site = "Natariya Chemicals Industries Pvt. Ltd.";
export default function Seo({
  title,
  description,
  path = "/",
  image = "/favicon.svg",
}) {
  const full = title ? `${title} | ${site}` : site;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${origin}${path}`;
  const img = image.startsWith("http") ? image : `${origin}${image}`;
  return (
    <Helmet>
      <html lang={document.documentElement.lang || "en"} />
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="agrochemicals, fertilizers, pesticides, herbicides, crop protection, Natariya Chemicals, agriculture"
      />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
