"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  { degree: "Ph.D. Applied Biochemistry", inst: "Federal University of Technology, Akure", year: "2009" },
  { degree: "M.Tech. Applied Biochemistry", inst: "Federal University of Technology, Akure", year: "2003", note: "(4.25/5.00)" },
  { degree: "B.Tech. Applied Biochemistry", inst: "Federal University of Technology, Akure", year: "1997", note: "(2nd Class Upper)" },
  { degree: "Diploma in Computer Science", inst: "Local Institution", year: "1999" },
];

const career = [
  { role: "Graduate Assistant", inst: "FUTA", period: "Nov 2000 – Oct 2003", current: false },
  { role: "Assistant Lecturer", inst: "FUTA", period: "Nov 2003 – Sep 2007", current: false },
  { role: "Lecturer II", inst: "FUTA", period: "Oct 2007 – Sep 2010", current: false },
  { role: "Lecturer I", inst: "FUTA", period: "Oct 2010 – Sep 2013", current: false },
  { role: "Senior Lecturer", inst: "FUTA", period: "Oct 2013 – Sep 2016", current: false },
  { role: "Reader", inst: "FUTA", period: "Oct 2016 – Sep 2019", current: false },
  { role: "Professor", inst: "FUTA", period: "Oct 2019 – Present", current: true },
];

export default function CareerTimeline() {
  return (
    <section id="career" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-primary dark:text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-secondary/30 ml-6 pl-8 space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-secondary z-10 shadow-sm"></div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <span className="text-secondary font-bold text-sm mb-1 block">{edu.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{edu.inst}</p>
                    {edu.note && <span className="inline-block mt-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-sky-400 px-2 py-1 rounded">{edu.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-primary dark:text-sky-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">Academic Career</h3>
            </div>
            
            <div className="relative border-l-2 border-secondary/30 ml-6 pl-8 space-y-8">
              {career.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 z-10 shadow-sm ${job.current ? 'bg-primary border-primary scale-125' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'}`}></div>
                  <div className={`p-5 rounded-lg border transition-all ${job.current ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:shadow-md'}`}>
                    <span className={`text-sm font-bold mb-1 block ${job.current ? 'text-primary dark:text-sky-400' : 'text-slate-500'}`}>{job.period}</span>
                    <h4 className={`text-lg font-bold ${job.current ? 'text-primary dark:text-sky-300' : 'text-slate-900 dark:text-white'}`}>{job.role}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{job.inst}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
