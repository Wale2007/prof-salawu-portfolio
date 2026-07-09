"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        {/* Removed one blob for mobile performance */}
        <div className="hidden md:block absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGh0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30 md:opacity-50"
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-secondary font-medium text-sm"
            >
              <span>Professor of Biochemistry</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Mental Health Activist</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-slate-900 dark:text-white leading-tight mb-4">
              Prof. Salawu, <br />
              <span className="text-primary dark:text-sky-400">Sule Ola</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Advancing biochemical science through phytochemistry, antioxidant research, and nutritional biochemistry while advocating for mental health awareness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="#publications">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-secondary text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30">
                  View Publications
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="#contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 transition-all shadow-sm">
                  <Mail className="w-5 h-5 text-secondary" />
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-sky-200 animate-spin-slow" style={{ padding: '4px' }}>
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full p-1 md:p-2">
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative border-4 border-white dark:border-slate-900 shadow-xl">
                    <Image 
                      src="/prof-salawu.jpg" 
                      alt="Professor Sule Ola Salawu" 
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 256px, 384px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Badges - Simplified for mobile */}
              <motion.div 
                animate={{ y: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 -left-4 md:top-10 md:-left-10 bg-white dark:bg-slate-800 p-2 md:p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 md:gap-3"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-1.5 md:p-2 rounded-lg">
                  <span className="text-primary font-bold text-base md:text-lg">64+</span>
                </div>
                <div className="text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-300">
                  Publications
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 -right-4 md:bottom-10 md:-right-4 bg-white dark:bg-slate-800 p-2 md:
                p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 md:gap-3"
              >
                <div className="bg-green-100 dark:bg-green-900/50 p-1.5 md:p-2 rounded-lg">
                  <span className="text-green-600 font-bold text-base md:text-lg">25+</span>
                </div>
                <div className="text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-300">
                  Years Exp.
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
