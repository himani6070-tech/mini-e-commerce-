import React from "react";
import Container from "../component/Container";

export default function Hero({
  title,
  description,
  buttonText,
  image,
  children,
  className = "",
}) {
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${className}`}
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Content */}
          <div>
            {children && (
              <div className="mb-4">
                {children}
              </div>
            )}

            {title && (
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
                {title}
              </h1>
            )}

            {description && (
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                {description}
              </p>
            )}

            {buttonText && (
              <button className="mt-8 rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-teal-700 hover:scale-105">
                {buttonText}
              </button>
            )}
          </div>

          {/* Image */}
          <div>
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full rounded-3xl shadow-2xl ring-4 ring-white/50"
              />
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}

