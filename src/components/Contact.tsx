"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle, GraduationCap } from "lucide-react";
import { FaWhatsapp, FaGoogle, FaLinkedin, FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // In a real app, send to Formspree or Resend.
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Fallback mailto if no backend
    const mailtoUrl = `mailto:sosalawu@futa.edu.ng?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
    window.location.href = mailtoUrl;

    toast.success("Message pre-filled in your email client! Prof. Salawu will respond shortly.");
    reset();
  };

  const whatsappUrl = "https://wa.me/2348137886171?text=Hello%20Prof.%20Salawu%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20reach%20out%20regarding...";

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
            Get in <span className="text-primary dark:text-sky-400">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Available for research collaborations, postgraduate supervision, external examinations, and speaking engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          
          {/* Direct Contact Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-center gap-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Direct Contact</h3>
              
              <Link href="mailto:sosalawu@futa.edu.ng?subject=Research%20Inquiry%20%E2%80%94%20Prof.%20Salawu" target="_blank">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-primary text-primary dark:border-sky-400 dark:text-sky-400 font-bold hover:bg-primary hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-900 transition-all group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Send an Email
                </button>
              </Link>
              
              <Link href={whatsappUrl} target="_blank">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-colors shadow-lg shadow-green-500/20 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <FaWhatsapp className="w-6 h-6 animate-pulse" />
                  Chat on WhatsApp
                </button>
              </Link>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white`}
                      placeholder="Dr. John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white`}
                      placeholder="john@university.edu"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <select 
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white appearance-none`}
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Postgraduate Inquiry">Postgraduate Inquiry</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="External Examination">External Examination</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white resize-none`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-white font-bold transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <p>Department of Biochemistry, School of Life Sciences,<br/>Federal University of Technology, P.M.B. 704, Akure, Nigeria</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <p>sosalawu@futa.edu.ng</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <p className="font-medium text-blue-50 leading-relaxed">
                Available for: <br/>
                Research Collaborations • Postgraduate Supervision • External Examinations
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
