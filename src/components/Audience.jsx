import React from "react";

function Audience() {
  return (
    <section className="w-full px-10 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black-300/80 px-3 py-1 rounded-md">
          Target Audience
        </button>

        <h1 className="text-4xl font-bold mt-3">
          Built for Performance-Obsessed Teams
        </h1>

        <p className="text-gray-600 mt-3">
          Growth-focused teams who need accurate, fast, actionable data.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 space-y-10">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="font-bold text-lg">DTC Brands ($100k+/mo)</h1>
            <p className="text-gray-600 mt-2">
              Scale profitably with accurate attribution.
            </p>
          </div>

          <div className="flex items-center justify-center text-3xl font-light">
            |
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="font-bold text-lg">Performance Marketers</h1>
            <p className="text-gray-600 mt-2">
              Make data-driven decisions that actually move the needle.
            </p>
          </div>

        </div>

        {/* CENTER TAG */}
        <div className="flex justify-center items-center gap-4 text-center">
          <div className="text-3xl text-gray-400">—</div>
          <button className="bg-blue-600 text-white py-1 px-6 rounded-lg text-lg">
            AdShark
          </button>
          <div className="text-3xl text-gray-400">—</div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="font-bold text-lg">Agencies</h1>
            <p className="text-gray-600 mt-2">
              Deliver transparent reporting & prove ROI.
            </p>
          </div>

          <div className="flex items-center justify-center text-3xl font-light">
            |
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="font-bold text-lg">Founders & CMOs</h1>
            <p className="text-gray-600 mt-2">
              Allocate budget confidently with clarity.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Audience;
