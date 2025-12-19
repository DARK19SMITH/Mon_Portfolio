"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  ChevronRight, 
  Menu, 
  X,
  Code,
  Layers,
  Cpu,
  Globe,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Project Alpha",
    category: "Web Development",
    description: "High-performance dashboard with real-time analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "D3.js"],
    link: "#"
  },
  {
    title: "Quantum UI",
    category: "Design System",
    description: "A comprehensive design system focused on accessibility and motion design.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c6757?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Void Agency",
    category: "Brand Identity",
    description: "Creative agency portfolio with immersive 3D experiences and minimalist aesthetics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Three.js", "GLSL", "GSAP"],
    link: "#"
  }
];

const SKILLS = [
  { icon: <Code className="w-5 h-5" />, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: <Layers className="w-5 h-5" />, title: "Design", items: ["Figma", "Motion Design", "UI/UX", "3D Web"] },
  { icon: <Cpu className="w-5 h-5" />, title: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "GraphQL"] },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-zinc-800 selection:text-white overflow-x-hidden font-sans dark">
      {/* Visual Enhancements */}
      <div className="noise" />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      
      {/* Dynamic Background Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-[100] glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <span className="text-black font-black text-lg">P</span>
          </div>
          <span className="text-white font-bold tracking-tighter hidden sm:block">PORTFOLIO</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Work", "Expertise", "Studio", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-500 hover:text-white transition-colors relative group"
              whileHover={{ y: -1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button className="hidden sm:flex rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold px-6">
            LET'S TALK
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <Badge variant="outline" className="border-zinc-800 text-zinc-500 py-1 px-4 uppercase tracking-widest text-[10px] font-bold">
                Available for worldwide projects
              </Badge>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-[0.85] uppercase">
              Digital <br />
              <span className="text-gradient italic">Craftsman</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
              <p className="max-w-md text-lg md:text-xl text-zinc-500 leading-relaxed font-light">
                Merging technical excellence with artistic vision to create high-end digital experiences that define the modern web.
              </p>
              
              <div className="flex flex-col items-start gap-4">
                <div className="flex -space-x-3 mb-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
                    +24
                  </div>
                </div>
                <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">Trusted by forward-thinking brands</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-6 flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-zinc-700 uppercase"
        >
          <div className="w-px h-12 bg-zinc-800 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
          Scroll to explore
        </motion.div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-zinc-600 text-xs font-black tracking-[0.3em] uppercase">Archive 01 / Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              Making <br /> Impact.
            </h3>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm font-light leading-relaxed">
            A curation of projects that showcase technical depth and creative experimentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-40">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% " }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-8 overflow-hidden rounded-3xl bg-zinc-900 aspect-[16/10] relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 lg:hidden">
                  <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-2">{project.category}</Badge>
                  <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">{project.title}</h4>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
                <div className="hidden lg:block space-y-4">
                  <span className="text-zinc-600 text-[10px] font-black tracking-widest uppercase">Project 0{index + 1}</span>
                  <h4 className="text-5xl font-bold text-white uppercase tracking-tighter">{project.title}</h4>
                </div>
                
                <p className="text-zinc-500 text-lg font-light leading-relaxed italic">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase border border-zinc-800 rounded-full px-4 py-1.5 text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-white font-black text-xs tracking-[0.2em] uppercase pt-4 group/btn"
                >
                  View Case Study 
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-40 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="sticky top-40 self-start space-y-8">
            <h2 className="text-zinc-600 text-xs font-black tracking-[0.3em] uppercase">Archive 02 / Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              Modern <br /> Stack.
            </h3>
            <p className="text-zinc-500 text-lg max-w-sm font-light">
              Equipped with the latest tools and frameworks to build lightning-fast, secure, and beautiful products.
            </p>
            <div className="pt-8">
              <Button variant="outline" className="rounded-full border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800">
                DOWNLOAD RÉSUMÉ
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-[#0a0a0a] border border-zinc-800/50 hover:border-zinc-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-zinc-900 text-white group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map(item => (
                    <span key={item} className="px-5 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-500 text-sm font-medium hover:text-white hover:border-zinc-700 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="relative rounded-[3rem] bg-white p-12 md:p-32 overflow-hidden group">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <h2 className="text-black group-hover:text-white text-5xl md:text-9xl font-black tracking-tighter uppercase transition-colors duration-500">
              Start a <br /> Project?
            </h2>
            
            <p className="max-w-lg text-zinc-500 group-hover:text-zinc-400 text-lg md:text-xl font-light transition-colors duration-500">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button size="lg" className="rounded-full bg-black text-white group-hover:bg-white group-hover:text-black px-12 py-8 text-lg font-black tracking-widest transition-all hover:scale-110">
                HELLO@PORTFOLIO.COM
              </Button>
              <div className="flex gap-4">
                {[Linkedin, Github, MessageSquare].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 rounded-full border border-black/10 group-hover:border-white/10 flex items-center justify-center cursor-pointer group-hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-white font-black tracking-widest text-xs uppercase">PORTFOLIO.STUDIO</p>
          <p className="text-zinc-600 text-[10px] font-bold tracking-[0.2em] uppercase max-w-xs leading-loose">
            Built with Passion and Precision in Paris. Powered by Next.js & Framer Motion.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8 text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-widest">
            © 2025 ALL RIGHTS RESERVED. VERSION 2.0
          </p>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050505] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-white font-black tracking-tighter text-2xl">PORTFOLIO</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-8">
              {["Work", "Expertise", "Studio", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-6xl font-bold text-white uppercase tracking-tighter"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-20 border-t border-zinc-900 space-y-8">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-black">Socials</p>
              <div className="flex gap-8 text-white font-bold uppercase tracking-tighter text-xl">
                <a href="#">LN</a>
                <a href="#">GH</a>
                <a href="#">TW</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
