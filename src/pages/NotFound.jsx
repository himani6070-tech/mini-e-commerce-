import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-10">

      <div className="w-full max-w-xl text-center">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-cyan-600 sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
          Sorry, the page you are looking for does not exist or may have
          been moved to another location.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-7 inline-block rounded-lg bg-cyan-600 px-7 py-3 font-semibold text-white shadow transition hover:bg-teal-700"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

