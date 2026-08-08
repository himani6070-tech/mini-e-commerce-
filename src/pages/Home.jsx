import Hero from "../component/Hero";
import { FaShippingFast, FaGem, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <Hero
        title="Discover Your Perfect Style"
        description="Explore premium fashion collections crafted for modern trends and timeless elegance."
        buttonText="Shop Now"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
        className="bg-gradient-to-r from-cyan-50 via-sky-100 to-teal-100 mb-12"
      >
        <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-lg">
          🔥 Flat 50% OFF On New Arrivals
        </span>
      </Hero>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Men's Collection",
              img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
            },
            {
              title: "Women's Collection",
              img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
            },
            {
              title: "Accessories",
              img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-cyan-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  Discover the latest premium fashion trends.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Exclusive Fashion Sale
          </h2>

          <p className="text-cyan-100 text-lg mb-6">
            Get up to 70% OFF on selected products.
          </p>

          <button className="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-cyan-700 font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Designed For Modern Fashion
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-slate-600">
              Experience premium quality, fast delivery, and secure shopping
              with every purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white border border-cyan-100 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-cyan-100 group-hover:bg-cyan-600 transition">
                <FaShippingFast className="text-2xl text-cyan-700 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900">
                Free Shipping
              </h3>

              <p className="text-slate-600">
                Fast and reliable delivery on all orders with complete tracking.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-cyan-100 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-cyan-100 group-hover:bg-cyan-600 transition">
                <FaGem className="text-2xl text-cyan-700 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900">
                Premium Quality
              </h3>

              <p className="text-slate-600">
                Carefully selected products crafted with exceptional quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-cyan-100 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-cyan-100 group-hover:bg-cyan-600 transition">
                <FaShieldAlt className="text-2xl text-cyan-700 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900">
                Secure Payments
              </h3>

              <p className="text-slate-600">
                Safe checkout and trusted payment methods for worry-free shopping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-cyan-700 via-sky-700 to-teal-700 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated
          </h2>

          <p className="text-cyan-100 mb-8">
            Subscribe to receive updates on new arrivals and exclusive offers.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg bg-white text-slate-900 w-full"
            />

            <button className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

