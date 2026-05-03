"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-serif text-white mb-2">Prof. Salawu, S.O</h3>
            <p className="text-sm text-slate-400">
              Professor of Biochemistry<br/>
              Federal University of Technology, Akure, Nigeria
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-sky-400 transition-colors">About</Link>
            <Link href="#research" className="hover:text-sky-400 transition-colors">Research</Link>
            <Link href="#publications" className="hover:text-sky-400 transition-colors">Publications</Link>
            <Link href="#contact" className="hover:text-sky-400 transition-colors">Contact</Link>
          </div>

          <div>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors border border-slate-700"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Professor Sule Ola Salawu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
