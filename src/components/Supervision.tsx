"use client";

import { motion } from "framer-motion";
import { supervisionData } from "@/data/supervision";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, ScrollText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Supervision() {
  const [showAllMSc, setShowAllMSc] = useState(false);
  
  const phdStudents = supervisionData.filter(s => s.type === "PhD");
  const mscStudents = supervisionData.filter(s => s.type === "MSc");
  const majorMSc = mscStudents.filter(s => s.category === "Major");
  const minorMSc = mscStudents.filter(s => s.category === "Minor");
  
  const visibleMajor = showAllMSc ? majorMSc : majorMSc.slice(0, 5);
  const visibleMinor = showAllMSc ? minorMSc : minorMSc.slice(0, 3);

  return (
    <section id="supervision" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
              Postgraduate <span className="text-primary dark:text-sky-400">Supervision</span>
            </h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto md:mx-0 rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-sky-400 shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white">40+</div>
              <div className="text-sm font-medium text-slate-500">Students Supervised</div>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="PhD" className="w-full max-w-4xl mx-auto">
          <TabsList className="mb-8 w-full grid grid-cols-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <TabsTrigger value="PhD" className="py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-primary dark:data-[state=active]:text-sky-400 font-bold data-[state=active]:shadow-sm">
              Ph.D. Students
            </TabsTrigger>
            <TabsTrigger value="MSc" className="py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-primary dark:data-[state=active]:text-sky-400 font-bold data-[state=active]:shadow-sm">
              Master&apos;s Students
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="PhD">
            <div className="space-y-4">
              {phdStudents.map((student, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/30 transition-colors flex gap-4 items-start"
                >
                  <ScrollText className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{student.name}</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-sky-400 rounded">
                        Completed {student.year}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      &quot;{student.topic}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="MSc">
            <div className="space-y-8">
              {/* Major Supervision */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Major Supervision</h3>
                <div className="space-y-3">
                  {visibleMajor.map((student, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-lg flex gap-4 items-start"
                    >
                      <ScrollText className="w-5 h-5 text-primary/60 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">{student.name}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                          {student.topic} ({student.year})
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Minor Supervision */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Minor Supervision</h3>
                <div className="space-y-3">
                  {visibleMinor.map((student, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg flex gap-4 items-start"
                    >
                      <ScrollText className="w-4 h-4 text-slate-400 shrink-0 mt-1.5" />
                      <div>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300">{student.name}</h4>
                        <p className="text-slate-500 dark:text-slate-500 text-xs italic">
                          {student.topic} ({student.year})
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setShowAllMSc(!showAllMSc)}
                className="w-full py-4 mt-4 flex justify-center items-center gap-2 text-sm font-bold text-primary dark:text-sky-400 hover:text-secondary transition-all bg-blue-50 dark:bg-blue-900/10 rounded-xl"
              >
                {showAllMSc ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View All 35+ Master&apos;s Students <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
