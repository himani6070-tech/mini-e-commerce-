import Hero from "../component/Hero";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";
import Skeleton from "../component/Skeleton";
import { Link, useParams } from "react-router-dom";

export default function Shop() {
  
 
  
  
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(30);


const { slug } = useParams();
 //console.log(slug);

  async function fetchProduct() {
    try {
      setLoading(true);

      let API = `https://dummyjson.com/products?limit=${limit}`;
      //console.log(API);
      

      if (slug != null) {
        API = `https://dummyjson.com/products/category/${slug}`;
       // console.log(API);
        
      }

      const res = await axios.get(API);
      setProduct(res.data.products);
     // console.log(res.data.products);
      
    } catch (err) {
      setProduct([]);
    } finally {
      setLoading(false);
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      setCategories(res.data);
    } catch (err) {
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [slug, limit]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Hero
        title="Explore Our Latest Collection"
        description="Browse trendy fashion, premium accessories, and must-have products curated just for you."
        buttonText="Start Shopping"
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
        className="bg-gradient-to-r from-cyan-50 via-sky-100 to-teal-100 mb-7"
      />

      <div className="w-full">

  {/* Limit Section */}
  <div className="mx-auto max-w-7xl p-4">
    <div className="w-full">
      <select
        onChange={(e) => {
          setLimit(e.target.value);
        }}
        className="w-full rounded-lg border border-cyan-200 bg-white px-4 py-2 font-medium text-cyan-700 shadow sm:w-auto sm:px-10"
      >
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
        <option value="150">150</option>
        <option value="194">194</option>
      </select>
    </div>
  </div>


  {/* Main Section */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 lg:grid-cols-5 lg:gap-6">


    {/* Categories Sidebar */}
    <div className="col-span-1">

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:block">

        {/* All */}
        <Link to={"/shop"}>
          <li
            className={`my-1 cursor-pointer rounded-lg p-3 text-center text-sm text-white transition sm:p-4 sm:text-base lg:mr-2 lg:my-4 ${
              slug == null
                ? "bg-teal-700"
                : "bg-cyan-600 hover:bg-teal-700"
            }`}
          >
            All
          </li>
        </Link>


        {/* Categories */}
        {categories.map((data) => {
          return (
            <Link
              to={`/shop/${data.slug}`}
              key={data.slug}
            >
              <li
                className={`my-1 cursor-pointer rounded-lg p-3 text-center text-sm text-white transition sm:p-4 sm:text-base lg:mr-2 lg:my-4 ${
                  slug === data.slug
                    ? "bg-teal-700"
                    : "bg-cyan-600 hover:bg-teal-700"
                }`}
              >
                {data.name}
              </li>
            </Link>
          );
        })}

      </ul>

    </div>


    {/* Products */}
    <div className="col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-4">

      {loading
        ? [1, 2, 0, 3, 4, 5, 6, 7, 8, 3, 4, 6, 7, 4].map(
            (data, index) => {
              return <Skeleton key={index} />;
            }
          )
        : product.map((data) => {
            return (
              <ProductCard
                key={data.id}
                data={data}
              />
            );
          })}

    </div>

  </div>

</div>
    </>
  );
}

