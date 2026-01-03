import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Noordin Ramadhan<span className="text-blue-700">.</span>
            </Link>
            <p className="mt-4 text-slate-800 max-w-sm leading-relaxed">
              Fullstack Developer specializing in MERN, Django, and Real-time systems. 
              Building robust solutions with a focus on clean code and user experience.
            </p>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="hover:text-blue-700 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline decoration-blue-700">Home</Link></li>
              <li><Link to="/projects" className="hover:underline decoration-blue-700">Projects</Link></li>
              <li><Link to="/about" className="hover:underline decoration-blue-700">About Me</Link></li>
              <li><Link to="/contact" className="hover:underline decoration-blue-700">Contact</Link></li>
            </ul>
          </div>

          {/* Tech Stack Highlights */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Core Stack</h3>
            <ul className="text-slate-800 space-y-2 text-sm">
              <li>MERN Stack</li>
              <li>Python & Django</li>
              <li>Socket.io</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center text-sm text-slate-800">
          <p>&copy; {currentYear} Noordin's portfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-950">Privacy Policy</a>
            <a href="#" className="hover:text-slate-950">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}