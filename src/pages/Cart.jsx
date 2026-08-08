import React, { useContext, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { GiShoppingCart } from "react-icons/gi";
import { store } from "../context/Context";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeHandler,
    shipping,subtotal,total
  } = useContext(store);



const displayCart = JSON.parse(localStorage.getItem("data")) || [];
//console.log(displayCart );


  return (
    <div className="min-h-screen bg-cyan-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-10 flex items-center gap-2 text-3xl font-bold text-slate-900">
          <GiShoppingCart className="text-cyan-700" />
          Shopping Cart
        </h1>

        <div className="mt-3 grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-cyan-100">
            <div className="space-y-6">
              {displayCart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-4 border-b border-cyan-100 pb-6 last:border-none md:flex-row"
                >
                  <img
                    src={item.thumbnail}
                    alt="product"
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <div className="flex-1 w-full">
                    <h2 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h2>

                    <div className="mt-2">
                      <span className="text-xl font-bold text-cyan-700">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="font-medium text-slate-600">
                        Qty: {item.qty}
                      </span>
                    </div>
                  </div>

                  {/* Quantity UI */}
                  <div className="flex items-center gap-3 rounded-lg border border-cyan-200 px-3 py-2">
                    <button
                      className="text-2xl text-red-500 hover:text-red-600"
                      onClick={() => removeHandler(item.id)}
                    >
                      <HiArchiveBoxXMark />
                    </button>

                    <button
                      className="font-bold text-cyan-700"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus />
                    </button>

                    <span className="font-medium text-slate-900">
                      {item.qty}
                    </span>

                    <button
                      className="font-bold text-cyan-700"
                      onClick={() => increaseQty(item.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}  
      <div className="space-y-4">

    <div className="flex justify-between">
        <span className="text-slate-600">
            Subtotal
        </span>

        <span className="font-medium">
            ₹{subtotal.toFixed(2)}
        </span>
    </div>


    <div className="flex justify-between">
        <span className="text-slate-600">
            Shipping
        </span>

        <span className="font-medium">
            ₹{shipping}
        </span>
    </div>

    <hr className="border-cyan-100" />

    <div className="flex justify-between text-lg font-bold text-slate-900">

        <span>
            total
        </span>

        <span className="text-cyan-700">
             ₹{total.toFixed(2)}
        </span>

    </div>

      </div>
    </div>
  </div>
</div>
  );
};

export default Cart;

