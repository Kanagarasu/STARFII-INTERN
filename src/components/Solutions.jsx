import React from "react";
import simg1 from '../assets/simg1.png';
import simg2 from '../assets/simg2.png';
import simg3 from '../assets/simg3.png';

function Solutions() {
  return (
    <section className="w-full px-10 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black-300/80 px-3 py-1 rounded-md">Our Solutions</button>
        <h1 className="text-4xl font-bold mt-3">A Clearer Picture = Better Decisions</h1>
        <p className="text-gray-600 mt-3">
          We don’t just show numbers — we show what drives growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <img src={simg1} alt="simg1" />
          <h5 className="font-bold text-lg">Unified Attribution Models</h5>
          <p className="text-gray-600 mt-3">
            Complete customer journey tracking across all touchpoints.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <img src={simg2} alt="simg2" />
          <h5 className="font-bold text-lg">First-Party Transparent Data</h5>
          <p className="text-gray-600 mt-3">
            Your pixel. Your data. Zero black boxes.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <img src={simg3} alt="simg3" />
          <h5 className="font-bold text-lg">Easy-to-Read Dashboards</h5>
          <p className="text-gray-600 mt-3">
            Insights in seconds — built for fast-moving teams.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Solutions;
