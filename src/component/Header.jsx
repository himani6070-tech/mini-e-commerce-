import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { store } from "../context/Context";

export default function Header({ logo = "ShopEase" }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

const { cart } = useContext(store);
const displayCart = JSON.parse(localStorage.getItem("data")) || [];
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-200 bg-gradient-to-r from-cyan-50 via-sky-50 to-teal-50 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-cyan-700 transition hover:text-teal-700"
          >
            {logo}
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
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

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100">
              Login
            </button>

            <Link to="/cart">
              <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700">
                Cart ({ displayCart.length || 0})
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}


