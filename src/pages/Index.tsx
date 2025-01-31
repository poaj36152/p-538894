import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-[#1A1F2C] to-[#2C2F3B] text-silver min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#9b87f5]/10 to-[#7E69AB]/10 aspect-square p-1"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#9b87f5] inline-block px-5 py-2 bg-[#9b87f5]/10 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                Full-Stack Developer
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">John Doe</span>
              </h1>
              <p className="text-lg text-[#8E9196] leading-relaxed max-w-xl">
                A passionate developer focused on creating beautiful and functional web applications. 
                With expertise in modern technologies, I bring ideas to life through clean code and 
                intuitive design.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#9b87f5]/20 transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 bg-[#9b87f5]/10 hover:bg-[#9b87f5]/15 rounded-full transition-all duration-300 border border-[#9b87f5]/20"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#9b87f5]/10 rounded-full hover:bg-[#9b87f5]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[#9b87f5]/20"
              >
                <Github className="w-6 h-6 text-[#9b87f5]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#9b87f5]/10 rounded-full hover:bg-[#9b87f5]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[#9b87f5]/20"
              >
                <Linkedin className="w-6 h-6 text-[#9b87f5]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;