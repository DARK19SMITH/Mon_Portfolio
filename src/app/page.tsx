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
  MessageSquare,
  Sparkles,
  Terminal,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "ViensCoder",
    category: "EdTech / App Mobile",
    description: "Un site et une application mobile pour apprendre à programmer avec les langages les plus utilisés. (En cours)",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop",
    tags: ["React Native", "Next.js", "Firebase"],
    link: "#"
  },
  {
    title: "WorldWear",
    category: "E-commerce",
    description: "Une boutique de vêtements en ligne moderne avec une expérience utilisateur fluide et une interface épurée.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Tailwind CSS", "Next.js", "Stripe"],
    link: "#"
  },
  {
    title: "AntiGaspi Market",
    category: "Impact Social / B2B",
    description: "Plateforme permettant aux supermarchés de vendre rapidement leurs articles proches de la péremption avec des réductions. (En phase de partenariat avec les supermarchés)",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Logistique", "Impact Social"],
    link: "#"
  }
];

const SKILLS = [
  { icon: <Code className="w-5 h-5" />, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: <Terminal className="w-5 h-5" />, title: "Cybersécurité", items: ["Bases réseaux", "Sécurité Web", "Apprentissage", "Linux"] },
  { icon: <Cpu className="w-5 h-5" />, title: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "API REST"] },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-white selection:text-black overflow-x-hidden font-sans dark">
      {/* Effets de fond */}
      <div className="noise" />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-[100] glass rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-300">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <span className="text-black font-black text-xl leading-none">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tighter leading-none text-sm">MIGUEL DEV</span>
            <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">Abidjan, CI</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          {["Projets", "Expertise", "À Propos", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-zinc-500 hover:text-white transition-colors relative group"
              whileHover={{ y: -1 }}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex rounded-full bg-white text-black hover:bg-zinc-200 text-[10px] font-black tracking-widest px-6 py-2 h-auto uppercase">
            Travaillons ensemble
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 px-6 max-w-7xl mx-auto">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 py-1.5 px-5 uppercase tracking-[0.2em] text-[10px] font-bold bg-zinc-900/50">
                Disponible pour de nouveaux défis
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter text-white mb-10 leading-[0.85] uppercase">
              Miguel <br />
              <span className="text-gradient italic font-serif lowercase">Dev</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mt-16 border-t border-zinc-900 pt-16">
              <div className="max-w-xl space-y-6">
                <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                  Développeur Fullstack passionné par la cybersécurité. J'apprends actuellement les bases du domaine et je m'y lance avec enthousiasme, tout en concevant des solutions numériques robustes à Abidjan.
                </p>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                     <Terminal className="w-4 h-4 text-zinc-500" /> Sécurité
                   </div>
                   <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">
                     <Sparkles className="w-4 h-4 text-zinc-500" /> Design
                   </div>
                   <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">
                     <Code className="w-4 h-4 text-zinc-500" /> Code Pur
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-4 shrink-0">
                <div className="flex -space-x-4 mb-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050505] bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden ring-1 ring-white/10">
                      <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase">Collaborations Globales</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Travaux */}
      <section id="projets" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10">
          <div className="space-y-6">
            <h2 className="text-zinc-600 text-[11px] font-black tracking-[0.4em] uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-zinc-800" /> Archives / Travaux Sélectionnés
            </h2>
            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
              Créer un <br /> Impact.
            </h3>
          </div>
          <p className="max-w-xs text-zinc-500 text-lg font-light leading-relaxed italic">
            Une sélection de projets qui démontrent une profondeur technique et une exploration créative.
          </p>
        </div>

        <div className="space-y-64">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% " }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-8 overflow-hidden rounded-[2.5rem] bg-zinc-900 aspect-[16/10] relative group/img">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute bottom-10 left-10 lg:hidden">
                  <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-3 text-[10px] uppercase tracking-widest">{project.category}</Badge>
                  <h4 className="text-4xl font-bold text-white uppercase tracking-tighter">{project.title}</h4>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
                <div className="hidden lg:block space-y-4">
                  <span className="text-zinc-600 text-[11px] font-black tracking-[0.3em] uppercase">Projet 0{index + 1}</span>
                  <h4 className="text-5xl font-bold text-white uppercase tracking-tighter leading-none">{project.title}</h4>
                </div>
                
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase border border-zinc-800 rounded-full px-5 py-2 text-zinc-500 bg-zinc-900/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ gap: "2rem" }}
                  className="flex items-center gap-6 text-white font-black text-[11px] tracking-[0.3em] uppercase pt-6 group/btn w-fit"
                >
                  Étude de cas 
                  <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500 group-hover/btn:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Expertise */}
      <section id="expertise" className="py-40 bg-[#080808] relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="sticky top-40 self-start space-y-10">
            <h2 className="text-zinc-600 text-[11px] font-black tracking-[0.4em] uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-zinc-800" /> Archives / Expertise
            </h2>
            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
              Stack <br /> Moderne.
            </h3>
            <p className="text-zinc-500 text-xl max-w-sm font-light leading-relaxed">
              Maîtrisant les derniers outils et frameworks pour bâtir des produits rapides, sécurisés et visuellement saisissants.
            </p>
          </div>

          <div className="space-y-8">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="p-12 rounded-[2.5rem] bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-700/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-[5rem] group-hover:bg-white/[0.05] transition-colors" />
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-4 rounded-2xl bg-zinc-900 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ring-1 ring-white/10">
                    {skill.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {skill.items.map(item => (
                    <span key={item} className="px-6 py-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-500 text-[13px] font-bold hover:text-white hover:border-zinc-600 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-60 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="relative rounded-[4rem] bg-white p-12 md:p-32 overflow-hidden group">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-16">
            <h2 className="text-black group-hover:text-white text-6xl md:text-[11rem] font-black tracking-tighter uppercase transition-colors duration-700 leading-none">
              Un <br /> Projet ?
            </h2>
            
            <p className="max-w-2xl text-zinc-500 group-hover:text-zinc-400 text-xl md:text-2xl font-light transition-colors duration-700 leading-relaxed">
              Je suis toujours ouvert à discuter de nouvelles idées, de collaborations créatives ou d'opportunités de concrétiser votre vision.
            </p>
            
            <div className="flex flex-col items-center gap-10">
              <Button 
                size="lg" 
                className="rounded-full bg-black text-white group-hover:bg-white group-hover:text-black px-16 py-10 text-xl md:text-2xl font-black tracking-[0.1em] transition-all hover:scale-105 uppercase h-auto"
                onClick={() => window.location.href = "mailto:Migueldevstack@gmail.com"}
              >
                MIGUELDEVSTACK@GMAIL.COM
              </Button>

              <div className="flex flex-col items-center gap-2">
                <p className="text-zinc-500 group-hover:text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase transition-colors">Appelez-moi</p>
                <a href="tel:+2250160010377" className="text-black group-hover:text-white text-3xl font-bold tracking-tighter transition-colors">+225 01 60 01 03 77</a>
              </div>
              
              <div className="flex gap-8 pt-6">
                <motion.a
                  href="https://www.linkedin.com/in/miguel-developpeur-b40271395"
                  target="_blank"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-16 h-16 rounded-full border border-black/10 group-hover:border-white/10 flex items-center justify-center cursor-pointer group-hover:text-white transition-all duration-500"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/DARK19SMITH"
                  target="_blank"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-16 h-16 rounded-full border border-black/10 group-hover:border-white/10 flex items-center justify-center cursor-pointer group-hover:text-white transition-all duration-500"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:Migueldevstack@gmail.com"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-16 h-16 rounded-full border border-black/10 group-hover:border-white/10 flex items-center justify-center cursor-pointer group-hover:text-white transition-all duration-500"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-black text-sm">M</span>
            </div>
            <p className="text-white font-black tracking-[0.4em] text-[10px] uppercase">MIGUELDEV.STUDIO</p>
          </div>
          <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase max-w-xs leading-loose">
            Conçu avec passion et précision en Côte d'Ivoire. Propulsé par Next.js & Framer Motion.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-10">
          <div className="flex gap-12 text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase">
            <a href="https://www.linkedin.com/in/miguel-developpeur-b40271395" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/DARK19SMITH" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
              © 2025 TOUS DROITS RÉSERVÉS.
            </p>
            <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
            <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
              VERSION 3.0
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-[#050505] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-32">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-black">M</span>
                </div>
                <span className="text-white font-black tracking-tighter text-2xl uppercase">Miguel Dev</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-10 h-10 text-white" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-10">
              {["Projets", "Expertise", "À Propos", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-6xl font-bold text-white uppercase tracking-tighter hover:italic transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-20 border-t border-zinc-900 space-y-10">
              <p className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-black">Réseaux Sociaux</p>
              <div className="flex gap-12 text-white font-bold uppercase tracking-[0.2em] text-2xl">
                <a href="https://www.linkedin.com/in/miguel-developpeur-b40271395" target="_blank">LN</a>
                <a href="https://github.com/DARK19SMITH" target="_blank">GH</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
