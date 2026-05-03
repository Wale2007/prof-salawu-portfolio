"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Search, GraduationCap, Award } from "lucide-react";

const memberships = [
  "Nigerian Society of Biochemistry and Molecular Biology",
  "Groupé Polyphenol (International)",
  "Nutrition Society of Nigeria",
  "Biotechnology Society of Nigeria"
];

const reviewerJournals = [
  { name: "Natural Product Communication", region: "USA" },
  { name: "Journal of Medicinal Food", region: "" }
];

const externalExaminer = [
  "Salem University",
  "Afe Babalola University",
  "University of Pretoria (South Africa)",
  "University of Venda (South Africa)",
  "University of Lagos"
];

export default function Memberships() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
            Professional <span className="text-primary dark:text-sky-400">Memberships & Service</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6 text-primary dark:text-sky-400">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold font-serif">Memberships</h3>
            </div>
            <ul className="space-y-4">
              {memberships.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Journal Reviewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6 text-primary dark:text-sky-400">
              <Search className="w-6 h-6" />
              <h3 className="text-xl font-bold font-serif">Journal Reviewer</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {reviewerJournals.map((journal, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{journal.name}</span>
                  {journal.region && <span className="text-xs text-slate-500 font-medium">{journal.region}</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* External Examiner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6 text-primary dark:text-sky-400">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-bold font-serif">External Examiner</h3>
            </div>
            <div className="space-y-3">
              {externalExaminer.map((uni, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Award className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-sm font-medium">{uni}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
