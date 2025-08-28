import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden mt-20" id="home">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 md:top-20 md:left-20 md:w-72 md:h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-700 to-cyan-500 bg-clip-text text-transparent mb-6">
            Never Run Out of
            <span className="block bg-gradient-to-r from-cyan-500 to-purple-700 bg-clip-text text-transparent pb-4">
              Cash Again
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Trinity sees 30 days into your financial future, automatically
            juggling expenses so you always have money when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-black/60 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-black transition-all duration-300">
              Watch 2-Min Demo
            </button>
          </div>
          {/* <GlassButton className='text-black animate-pulse'>
              No credit card required • 30-day free trial • Cancel anytime
            </GlassButton> */}
          <div className="mt-6 inline-flex rounded-full p-[1px] bg-gradient-to-r from-cyan-400/60 via-white/60 to-purple-500/60 shadow-lg shadow-cyan-500/10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 sm:px-5 sm:py-2.5 border border-white/60 text-xs sm:text-sm md:text-base">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-800 font-medium leading-tight">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 sm:size-4 text-emerald-600"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                No credit card required
              </span>
              <span
                className="hidden sm:inline size-1.5 rounded-full bg-gray-300/80"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-800 font-medium leading-tight">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 sm:size-4 text-emerald-600"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                30-day free trial
              </span>
              <span
                className="hidden sm:inline size-1.5 rounded-full bg-gray-300/80"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-800 font-medium leading-tight">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 sm:size-4 text-emerald-600"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
          {/* <p className="mt-6 text-gray-400">
              No credit card required • 30-day free trial • Cancel anytime
            </p> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
