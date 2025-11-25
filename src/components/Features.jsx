import React from "react";
import fimg1 from '../assets/fimg1.png'
import fimg2 from '../assets/fimg2.png'
import fimg3 from '../assets/fimg3.png'
import fimg4_1 from '../assets/fimg4_1.png'
import fimg4_2 from '../assets/fimg4_2.png'
import fimg5 from '../assets/fimg5.png'

function Features() {
  return (
    <section className="w-full px-10 py-20 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black-300/80 px-3 py-1 rounded-md">
          Core Features
        </button>

        <h1 className="text-4xl font-bold mt-3">
          Everything You Need to Measure What Matters
        </h1>

        <p className="text-gray-600 mt-3">
          Trusted by growth leaders who demand real results, not just pretty
          dashboards.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {/* LEFT SECTION */}
        <div className="space-y-10">

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <img src={fimg1} alt="fimg1" />
            <h1 className="text-xl font-bold">Multi-Touch Attribution</h1>
            <p className="text-gray-600 mt-2">
              Track every interaction from first click to final purchase.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <img src={fimg4_1} alt="fimg4_1" />
            <h1 className="text-xl font-bold">Creative-Level Insights</h1>
            <p className="text-gray-600 mt-2">
              Identify high-performing creatives that drive real revenue.
            </p>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-10">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <img src={fimg2} alt="fimg2" />
            <button className="bg-purple-200 px-3 py-1 text-xs rounded">
              Platform ROAS%
            </button>
            <h1 className="text-xl font-bold mt-2">
              Channel-Agnostic ROAS
            </h1>
            <p className="text-gray-600 mt-2">
              See true return without inflated platform estimates.
            </p>
          </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-xl font-bold">Profitability Metrics</h1>
            <p className="text-gray-600 mt-2">
              <img src={fimg5} alt="fimg5" />
              Monitor CAC, AOV, LTV, Margin — in real-time.
            </p>
          </div>
    
        </div>


        <div className="space-y-10">

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <img src={fimg3} alt="fimg3" />
            <h1 className="text-xl font-bold">First-Party Pixel</h1>
            <p className="text-gray-600 mt-2">
              Tracking that survives iOS updates & cookie restrictions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;
