import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-50 mt-20 pt-16 px-8">
      {/* Top CTA Card */}
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
        <button className="bg-amber-50 text-sm font-semibold border border-black/30 px-3 py-1 rounded-md">
          Next Step
        </button>

        <h1 className="text-3xl font-bold mt-2">Ready to Grow Smarter?</h1>
        <p className="text-gray-600 mt-2">
          AdShark gives you the clarity to scale profitably.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="bg-blue-600 text-white py-2 px-5 rounded-lg">
            Start Free Trial
          </button>
          <button className="bg-black/80 text-white py-2 px-5 rounded-lg">
            Book Demo
          </button>
        </div>
      </div>

      
      <div className="grid grid-row-1 md:grid-cols-5 gap-20 mt-20 pb-16 text-gray-700">
        
        <div >
          <h2 className="text-2xl font-bold text-black ">AdShark</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            AdShark empowers businesses to grow with smarter marketing insights
            and seamless integrations.
          </p>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-12 mr-4 border px-2 py-1 rounded-l-lg w-80 rounded"
            />
            <button className="h-12 bg-blue-600 text-white  px-5 rounded">
              Book Demo
            </button>
          </div>
        </div>

        
        <div>
          <h2 className="font-bold text-lg">Products</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">API</li>
            <li className="hover:text-blue-600 cursor-pointer">Integrations</li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 cursor-pointer">Support</li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-bold text-lg">Legal</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-600 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-bold text-lg">Contact</h2>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-3">
              <span>📧</span> Support@adshark.io
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span> +12345678941
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
