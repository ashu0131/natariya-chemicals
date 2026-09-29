import React from "react";
export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}
