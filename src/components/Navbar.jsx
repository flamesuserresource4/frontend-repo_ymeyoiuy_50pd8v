import { BookOpen, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 text-white grid place-items-center shadow-md">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-800">College Resource Hub</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#preview" className="hover:text-gray-900 transition-colors">Preview</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Get Started</a>
        </nav>
        <button className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          <User className="h-4 w-4" />
          Sign In
        </button>
      </div>
    </header>
  );
}
