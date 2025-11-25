import React from "react";

function Setup() {
  return (
    <section className="w-full px-10 py-20 bg-gray-50">

      {/* HEADER TEXT */}
      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black/30 px-3 py-1 rounded-md">
          Setup Simplicity
        </button>

        <h1 className="text-4xl font-bold mt-3">Setup That Doesn’t Suck</h1>

        <p className="text-gray-600 mt-3">
          Get clarity fast — without developers, headaches, or messy setups.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        
        <div className=" flex items-start gap-4">
          <div className="mt-10 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold">
            1
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex-1">
            <h1 className="text-xl font-bold">Connect Platforms</h1>
            <p className="text-gray-600 mt-2">
              Easily link Meta, Google, Shopify, and more.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-10 bg-gray-300 text-black w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold">
            2
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex-1">
            <h1 className="text-xl font-bold">Install Pixel</h1>
            <p className="text-gray-600 mt-2">
              One-click pixel installation. No dev needed.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="mt-10 bg-gray-300 text-black w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold">
            3
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex-1">
            <h1 className="text-xl font-bold">Get Insights</h1>
            <p className="text-gray-600 mt-2">
              See unified reports within hours — not weeks.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Setup;
