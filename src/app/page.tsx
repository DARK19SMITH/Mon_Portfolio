"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Code, 
  Cpu, 
  Globe,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Project Zero",
    description: "A high-performance trading platform built with Next.js and WebSockets.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Nexus AI",
    description: "Intelligence-driven analytics dashboard for modern enterprise data.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c6757?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Lumina Studio",
    description: "Creative agency portfolio with advanced GLSL shaders and interactions.",
    tags: ["Three.js", "WebGL", "GSAP", "React"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  }
];

const SKILLS = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "GraphQL"] },
  { name: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black text-zinc-400 selection:bg-zinc-800 selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center glass border-b-0 mt-4 mx-auto max-w-5xl rounded-full left-0 right-0 h-14">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-bold tracking-tighter text-xl flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          PORTFOLIO
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["Work", "Skills", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <main className="relative z-10 px-6 max-w-5xl mx-auto pt-32">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <motion.div style={{ opacity, scale }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-500 py-1 px-4">
                Available for new projects
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                CRAFTING <br />
                <span className="text-gradient">DIGITAL</span> <br />
                EXPERIENCES.
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-zinc-500 mb-12 leading-relaxed">
                I'm a creative developer focused on building immersive, 
                high-performance web applications that merge design with functionality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200">
                  View Work <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-zinc-800 hover:bg-zinc-900">
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-zinc-500 text-sm font-mono mb-4 tracking-widest uppercase">Selected Works</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">FEATURED PROJECTS</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
                  <div className="max-w-xl">
                    <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-zinc-500 text-lg mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-zinc-500 text-sm font-mono mb-4 tracking-widest uppercase">Expertise</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight mb-8">TECHNICAL STACK</h3>
              <p className="text-zinc-500 text-lg max-w-md">
                Combining modern frameworks with creative engineering to deliver scalable solutions.
              </p>
            </div>
            
            <div className="grid gap-12">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.name}>
                  <h4 className="text-white font-medium mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    {skillGroup.name}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map(item => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="px-5 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 hover:border-zinc-500 transition-colors cursor-default"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-zinc-900">
          <div className="glass rounded-3xl p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-zinc-500/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
                LET'S BUILD SOMETHING <br /> EXTRAORDINARY.
              </h2>
              <p className="text-zinc-500 text-lg mb-12">
                Currently looking for interesting projects and opportunities. 
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full px-12 bg-white text-black hover:bg-zinc-200">
                  Send a Message
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-zinc-900 h-14 w-14">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-zinc-900 h-14 w-14">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
          <p>© 2025 PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
            <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
          </div>
        </footer>
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-white font-bold tracking-tighter text-xl">PORTFOLIO</div>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-8">
              {["Work", "Skills", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold text-white hover:text-zinc-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
