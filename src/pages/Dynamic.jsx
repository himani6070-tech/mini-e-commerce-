import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { store } from "../context/Context";
import { useContext } from "react";

export default function Dynamic() {
  const { addToCart } = useContext(store);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function fetchProduct() {
    
    try {
      setLoading(true);
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      setProduct({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 animate-pulse">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <div className="w-full h-96 bg-cyan-100 rounded-xl"></div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-20 w-full bg-cyan-100 rounded-lg"
                ></div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="h-10 w-3/4 bg-cyan-100 rounded"></div>

            <div className="mt-4 space-y-2">
              <div className="h-4 w-full bg-cyan-100 rounded"></div>
              <div className="h-4 w-11/12 bg-cyan-100 rounded"></div>
              <div className="h-4 w-10/12 bg-cyan-100 rounded"></div>
            </div>

            <div className="h-8 w-32 bg-cyan-100 rounded mt-6"></div>

            <div className="h-5 w-24 bg-cyan-100 rounded mt-4"></div>

            <div className="h-5 w-40 bg-cyan-100 rounded mt-4"></div>

            <div className="h-5 w-32 bg-cyan-100 rounded mt-4"></div>

            <div className="h-12 w-40 bg-cyan-100 rounded-lg mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-xl border border-cyan-100 shadow-md"
          />

          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                className="h-20 w-full object-cover rounded-lg border border-cyan-100"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {product.title}
          </h1>

          <p className="mt-3 text-slate-600">
            {product.description}
          </p>

          <p className="mt-4 text-2xl font-bold text-cyan-700">
            ₹{product.price}
          </p>

          <p className="mt-3 text-slate-700">
            ⭐ {product.rating}
          </p>

          <p className="mt-2 text-slate-700">
            Brand:{" "}
            <span className="font-semibold text-cyan-700">
              {product.brand}
            </span>
          </p>

          <p className="mt-2 text-slate-700">
            Stock:{" "}
            <span className="font-semibold text-cyan-700">
              {product.stock}
            </span>
          </p>

          <button className="mt-6 rounded-lg bg-cyan-600 px-6 py-3 text-white transition hover:bg-teal-700" onClick={() =>
            addToCart({
              thumbnail: product.thumbnail,
              title: product.title,
              price: product.price,
              qty: 1,
              id: product.id})}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}




  

 
   
      
