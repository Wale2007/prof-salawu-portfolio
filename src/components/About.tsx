"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, BookText, GraduationCap, Mail } from "lucide-react";

const stats = [
  { label: "Journal Publications", value: 64, suffix: "+", icon: BookText },
  { label: "Postgraduate Students Supervised", value: 24, suffix: "+", icon: Users },
  { label: "Years Academic Experience", value: 25, suffix: "+", icon: GraduationCap },
  { label: "International Fellowships", value: 5, suffix: "", icon: Award },
  { label: "TETFUND Research Grants", value: 2, suffix: "", icon: BookOpen },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
            About <span className="text-primary dark:text-sky-400">Professor Salawu</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Bio Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
              <p>
                Professor Sule Ola Salawu is a distinguished scholar and researcher in the field of Applied Biochemistry. With over two decades of experience in academia, his research predominantly focuses on Phytochemistry, Nutritional Biochemistry, and the biological activities of natural products. 
              </p>
              <p>
                His pioneering work involves the in-vitro and in-vivo evaluation of antioxidant properties of African medicinal plants, exploring their potential in neuroprotection against oxidative stress, anxiety, and depression models. He has significantly contributed to the understanding of phenolic profiles of various underutilized green leafy vegetables and herbs.
              </p>
              <p>
                Beyond his academic pursuits, Professor Salawu is a dedicated <strong>mental health activist</strong>. He leverages his expertise in neurochemistry to advocate for mental health awareness, striving to destigmatize mental health challenges and promote research-backed nutritional interventions for psychological well-being.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                Current Leadership Roles
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Professor, Biochemistry Department</span>
                  <span className="text-sm text-slate-500">Federal University of Technology, Akure (Oct 2019 – Present)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Director, Quality Assurance Management Unit</span>
                  <span className="text-sm text-slate-500">FUTA (2022 – Present)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Editor-in-Chief</span>
                  <span className="text-sm text-slate-500">Primal Journal of Chemistry of Food (2024 – Present)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Member, University Senate</span>
                  <span className="text-sm text-slate-500">FUTA (2019 – Present)</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a href="mailto:sosalawu@futa.edu.ng" className="inline-flex items-center gap-2 text-primary dark:text-sky-400 font-medium hover:underline">
                  <Mail className="w-4 h-4" />
                  sosalawu@futa.edu.ng
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center ${idx === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-primary dark:text-sky-400">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-baseline justify-center">
                  {stat.value}
                  <span className="text-secondary text-xl">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
