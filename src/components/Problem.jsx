import React from "react";
import home2 from "../assets/home2.png";

function Problem() {
  return (
    <section className="w-full px-10 py-20 bg-gray-50">
      <div className=" grid md:grid-cols-2 gap-12 items-center">
        
        <div>
            <div className="text-center">

            
                <button className=" bg-amber-50 text-sm font-semibold border border-black-300/80 px-3 py-1 rounded-md">
                    Smarter spend. Better returns
                </button>

                <h1 className="text-3xl font-bold mt-3">
                    The Attribution Problem Nobody Solved Well
                </h1>

                <p className="text-gray-600 mt-4">
                    iOS 14.5 shattered tracking. Cookies are dying. Platform dashboards lie. 
                    You’re making million-dollar decisions with broken data.
                </p>
            </div>

            <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Spreadsheets that break every month</li>
                <li>• Inflated platform dashboards</li>
                <li>• Vanity tools with no real insights</li>
            </ul>
        </div>

        <img src={home2} alt="Problem" className="rounded-xl shadow-lg" />

      </div>
    </section>
  );
}

export default Problem;
