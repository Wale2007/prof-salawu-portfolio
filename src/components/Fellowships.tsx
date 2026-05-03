"use client";

import { motion } from "framer-motion";
import { Award, Globe, FileText, Landmark } from "lucide-react";

const fellowships = [
  { role: "Young Collaborator", inst: "ICTP Trieste, Italy", period: "Jul – Sep 2003" },
  { role: "PhD Sandwich Training Fellowship", inst: "Trieste, Italy", period: "2005 – 2008" },
  { role: "Research Visit", inst: "University of Firenze, Italy", period: "Jun – Jul 2008" },
  { role: "NRF Post-Doctoral Fellowship", inst: "University of Pretoria, South Africa", period: "Jul 2010 – Jun 2011" },
  { role: "TWAS-DFG Cooperation Visit Fellowship", inst: "Germany", period: "Aug – Oct 2014" },
];

const grants = [
  { title: "Antioxidant Potentials of Phenolic Extracts of Underutilized Green Leafy Vegetables", agency: "TETFUND Grant", year: "2015", amount: "₦2,000,000" },
  { title: "Biopesticides of Plant Origin as Pest Control against Cocoa Moth", agency: "TETFUND Grant", year: "2015", amount: "₦2,000,000" },
  { title: "Student Grant, International Conference of Polyphenol", agency: "Salamanca, Spain", year: "2008", amount: "300 Euro" },
  { title: "Senior Grant, International Conference of Polyphenol", agency: "Montpellier, France", year: "2010", amount: "300 Euro" },
];

export default function Fellowships() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
            Fellowships & <span className="text-primary dark:text-sky-400">Grants</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Fellowships */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">International Fellowships</h3>
            </div>
            <div className="grid gap-4">
              {fellowships.map((f, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{f.role}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 flex items-center gap-2">
                      <Landmark className="w-4 h-4" /> {f.inst}
                    </p>
                    <div className="mt-2 text-xs font-semibold text-secondary bg-blue-50 dark:bg-blue-900/20 inline-block px-2 py-1 rounded">
                      {f.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grants */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary dark:text-sky-400" />
              <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">Research Grants</h3>
            </div>
            <div className="grid gap-4">
              {grants.map((g, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full shrink-0">
                      {g.year}
                    </span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full shrink-0">
                      {g.amount}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-md mb-2">
                    {g.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium">
                    {g.agency}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
