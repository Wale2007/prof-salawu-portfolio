"use client";

import { motion } from "framer-motion";
import { Leaf, Activity, Apple, Brain, TestTube, FlaskConical, Network, Utensils } from "lucide-react";

const researchAreas = [
  {
    title: "Phytochemistry & Plant Biochemistry",
    description: "Extraction, isolation, and characterization of bioactive compounds from African medicinal plants.",
    icon: Leaf
  },
  {
    title: "Antioxidant Activity & Free Radical Biology",
    description: "Evaluating the radical scavenging capabilities of natural extracts to combat oxidative stress.",
    icon: Activity
  },
  {
    title: "Nutritional Biochemistry & Food Science",
    description: "Analyzing the nutritional composition and health benefits of underutilized food crops.",
    icon: Apple
  },
  {
    title: "Neuroprotection & Neurochemistry",
    description: "Using in-vivo models to study anxiety and depression, bridging scientific research with mental health advocacy and community well-being.",
    icon: Brain
  },
  {
    title: "HPLC/DAD/MS Phenolic Profiling",
    description: "Advanced chromatographic and mass spectrometric analysis of polyphenolic compounds.",
    icon: TestTube
  },
  {
    title: "In vitro Gastrointestinal Digestion",
    description: "Simulating human digestion models to understand the bioaccessibility of phytochemicals.",
    icon: FlaskConical
  },
  {
    title: "Molecular Docking & In silico Studies",
    description: "Computational modeling to predict the interaction between bioactive compounds and protein targets.",
    icon: Network
  },
  {
    title: "Functional Foods & Nutraceuticals",
    description: "Developing food products fortified with natural antioxidants for therapeutic benefits.",
    icon: Utensils
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Research() {
  return (
    <section id="research" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
            Research <span className="text-primary dark:text-sky-400">Focus Areas</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Exploring the intersection of plant biochemistry, nutrition, and pharmacology to develop novel solutions for human health and disease prevention.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {researchAreas.map((area, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary dark:text-sky-400 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">
                {area.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
