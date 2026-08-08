import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../context/Context";

export default function ProductCard({ data }) {
  const { addToCart } = useContext(store);

  return (
    <div className="h-[420px] overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/dynamic/${data.id}`}>
        <img
          src={data.thumbnail}
          alt="product"
          className="h-64 w-full object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-slate-900">
          {data.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-cyan-700">
          ₹{data.price}
        </p>

        <button
          className="mt-4 w-full rounded-lg bg-cyan-600 py-2 text-white transition hover:bg-teal-700"
          onClick={() =>
            addToCart({
              thumbnail: data.thumbnail,
              title: data.title,
              price: data.price,
              qty: 1,
              id: data.id,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

