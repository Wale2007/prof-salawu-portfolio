"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { publicationsData } from "@/data/publications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Globe, ExternalLink, ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredPubs = publicationsData.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.year.toString().includes(searchTerm)
  );

  const getPubsByType = (type: string) => {
    return filteredPubs.filter((pub) => pub.type === type);
  };

  const renderPublicationList = (pubs: typeof publicationsData) => {
    return (
      <div className="space-y-6">
        {pubs.slice(0, visibleCount).map((pub) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {pub.authors} ({pub.year})
                </p>
                <h4 className="text-lg font-bold text-primary dark:text-sky-400 group-hover:underline cursor-pointer">
                  {pub.title}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 italic text-sm">
                  {pub.journal} {pub.volumeIssue && <span className="font-medium not-italic">{pub.volumeIssue}</span>}
                  {pub.pages && <span className="not-italic">, {pub.pages}</span>}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {pub.isInternational && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-secondary text-xs font-medium" title="International Collaboration">
                    <Globe className="w-3 h-3" />
                    Global
                  </span>
                )}
                {pub.country && (
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium">
                    {pub.country}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {pubs.length > visibleCount && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary dark:border-sky-400 dark:text-sky-400 hover:bg-primary hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Load More <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-800/20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
              Academic <span className="text-primary dark:text-sky-400">Publications</span>
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mb-4"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-sky-400 font-bold text-sm">
              64 Peer-Reviewed Articles
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-72"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search by keyword or year..." 
                className="pl-10 bg-white dark:bg-slate-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Publications Subsection */}
        {!searchTerm && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">★</span>
              Featured Publications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {publicationsData.filter(p => p.featured).map((pub) => (
                <motion.div
                  key={`featured-${pub.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-slate-900 rounded-xl border-l-4 border-l-primary shadow-sm border border-slate-100 dark:border-slate-800"
                >
                  <p className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider">{pub.journal}</p>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">{pub.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{pub.authors} ({pub.year})</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <Tabs defaultValue="Journal" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto bg-white dark:bg-slate-900 p-1 rounded-lg">
            <TabsTrigger value="Journal" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
              Journal Articles
            </TabsTrigger>
            <TabsTrigger value="Conference" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
              Conference Proceedings
            </TabsTrigger>
            <TabsTrigger value="In Press" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
              Accepted/In Press
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="Journal" className="mt-0">
            {renderPublicationList(getPubsByType("Journal"))}
          </TabsContent>
          <TabsContent value="Conference" className="mt-0">
            {renderPublicationList(getPubsByType("Conference"))}
          </TabsContent>
          <TabsContent value="In Press" className="mt-0">
            {renderPublicationList(getPubsByType("In Press"))}
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
