import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer({ logo = "ShopEase" }) {
  return (
    <footer className="bg-gradient-to-r from-cyan-700 via-sky-700 to-teal-700 py-5 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          
          <h2 className="text-lg font-bold">
            {logo}
          </h2>

          <div className="flex gap-5 text-sm">
            <Link to="/" className="hover:text-cyan-100">
              Home
            </Link>

            <Link to="/shop" className="hover:text-cyan-100">
              Shop
            </Link>

            <Link to="/contact" className="hover:text-cyan-100">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-4 border-t border-cyan-500/30 pt-3 text-center text-xs text-cyan-100/80">
          © {new Date().getFullYear()} {logo}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

