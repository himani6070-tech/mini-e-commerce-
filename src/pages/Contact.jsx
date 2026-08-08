import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Have a question or need help? We would love to hear from you.
            Send us a message and our team will get back to you soon.
          </p>
        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">


          {/* Contact Information */}
          <div className="rounded-2xl bg-cyan-600 p-6 text-white shadow-lg sm:p-8">

            <h2 className="text-2xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-3 text-cyan-50">
              Feel free to contact us for any questions about products,
              orders, delivery or anything else.
            </p>


            <div className="mt-8 space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-600">
                  ✉
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-1 text-cyan-50">
                    support@example.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-600">
                  ☎
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="mt-1 text-cyan-50">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              {/* Address */}
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-600">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="mt-1 text-cyan-50">
                    Jaipur, Rajasthan, India
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>


            <form className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                ></textarea>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
