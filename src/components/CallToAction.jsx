import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="cta" className="py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Ready to build the College Resource Hub?</h3>
        <p className="mt-3 text-gray-600">This starter includes a 3D hero, polished components, and a clear path to wire in Supabase auth, storage, and SQL policies.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
            View Docs
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium ring-1 ring-black/10 hover:bg-gray-50">
            GitHub Template
          </a>
        </div>
      </div>
    </section>
  );
}
