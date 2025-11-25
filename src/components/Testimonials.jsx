import React from "react";
import timg1 from '../assets/timg1.png';
import timg2 from '../assets/timg2.png';
import timg3 from '../assets/timg3.png';

function Testimonials() {
  return (
    <section className="w-full px-10 py-20">

      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black/30 px-3 py-1 rounded-md">
          Testimonials
        </button>

        <h1 className="text-4xl font-bold mt-3">What Our Clients Say</h1>

        <p className="text-gray-600 mt-3">
          Trusted by top brands, agencies, and fast-growing teams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-16">

        <div className="p-6 bg-white shadow-lg rounded-xl">
          <img src={timg1} alt="timg1" />
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl">
          <img src={timg2} alt="timg1" />
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl">
          <img src={timg3} alt="timg1" />
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
