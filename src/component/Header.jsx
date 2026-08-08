import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { store } from "../context/Context";

export default function Header({ logo = "ShopEase" }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

  const { cart } = useContext(store);

  return (
    <header className="bg-white shadow-sm">

      <Container>

        {/* Main Header */}
        <div className="flex min-h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-cyan-700 transition hover:text-teal-700"
            onClick={() => setMenuOpen(false)}
          >
            {logo}
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-medium text-slate-700 transition hover:text-cyan-700"
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">

            <button className="rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100">
              Login
            </button>

            <Link to="/cart">
              <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700">
                Cart ({cart.length})
              </button>
            </Link>

          </div>


          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* Cart */}
            <Link to="/cart">
              <button className="rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-teal-700">
                Cart ({cart.length})
              </button>
            </Link>


            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-cyan-300 px-3 py-2 text-xl text-cyan-700"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-cyan-100 py-4 lg:hidden">

            <nav className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {link.name}
                </Link>
              ))}


              {/* Mobile Login */}
              <button className="mt-2 rounded-lg border border-cyan-300 px-4 py-3 text-left font-medium text-cyan-700 transition hover:bg-cyan-50">
                Login
              </button>

            </nav>

          </div>
        )}

      </Container>

    </header>
  );
}


