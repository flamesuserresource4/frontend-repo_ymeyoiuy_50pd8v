import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="preview">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-14 px-4 sm:px-6 lg:px-8 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 ring-1 ring-orange-500/20 mb-4">
            <Star className="h-3.5 w-3.5" />
            New: 3D Interactive Hero
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Share, discover, and elevate your study resources
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A beautifully simple hub for uploading notes, previewing PDFs, and finding the best material rated by your peers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium ring-1 ring-black/10 hover:bg-gray-50">
              Explore Features
            </a>
          </div>
        </div>
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
          <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/60" />
        </div>
      </div>
    </section>
  );
}
