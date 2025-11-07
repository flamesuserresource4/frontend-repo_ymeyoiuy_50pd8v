import { FileText, Search, ThumbsUp, Star } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: FileText,
      title: 'Upload & Preview',
      desc: 'Drag-and-drop PDFs, DOCs, PPTs. Preview PDFs inline before downloading.'
    },
    {
      icon: Search,
      title: 'Search & Filter',
      desc: 'Find materials by title, description, or category with instant filtering.'
    },
    {
      icon: ThumbsUp,
      title: 'Likes & Ratings',
      desc: 'Upvote great notes and rate quality to surface the best resources.'
    },
    {
      icon: Star,
      title: 'Personal Dashboard',
      desc: 'Track your uploads, edit details, and manage files in one place.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to share smarter</h2>
          <p className="mt-2 text-gray-600">Built with React, Tailwind, and Supabase for speed and reliability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
