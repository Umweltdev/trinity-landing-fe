import { CheckCircle } from "lucide-react";
import React from "react";

function Pricing() {
  return (
    <section className="py-6 md:py-20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-6">
              Simple, 
            </h2> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Simple,
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-black/65">
            Choose the plan that fits your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-gray-400 mb-6">For small businesses</p>
            <div className="text-4xl font-bold text-white mb-6">
              £49<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                Up to £10k monthly expenses
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                30-day forecasting
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                Email support
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br duration-1000 from-purple-900 to-blue-900 rounded-2xl p-8 border-2 border-purple-500 scale-105 flex flex-col">
            <div className="bg-purple-500 text-white animate-bounce text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
            <p className="text-gray-300 mb-6">For growing companies</p>
            <div className="text-4xl font-bold text-white mb-6">
              £149<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-green-400" />
                Up to £100k monthly expenses
              </li>
              <li className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-green-400" />
                90-day forecasting
              </li>
              <li className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-green-400" />
                Priority support
              </li>
              <li className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-green-400" />
                API access
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-xl transition">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-700 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-6">For large operations</p>
            <div className="text-4xl font-bold text-white mb-6">Custom</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                Unlimited expenses
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                365-day forecasting
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                Dedicated support
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                Custom integrations
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
