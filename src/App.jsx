import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50 via-white to-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <footer className="py-10 text-center text-sm text-gray-500">
        Built for College Resource Hub — React + Tailwind starter with 3D Spline hero.
      </footer>
    </div>
  );
}

export default App;
