import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import varunPortrait from "@/assets/varun-portrait.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-hero-text py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Doodigama Varun
            </h1>
            <p className="text-xl lg:text-2xl text-teal-accent font-medium">
              IT Professional | AI & Web Developer
            </p>
            <p className="text-lg text-hero-text/90 leading-relaxed">
              Computer Science Engineering student skilled in Python, AI/ML, and Web Development.
              Leading innovative projects and exploring emerging technologies to build real-world solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact" className="group">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects" className="group">
                  View Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-teal-accent/30 shadow-glow">
                <img 
                  src={varunPortrait} 
                  alt="Doodigama Varun - IT Professional and Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-teal-accent/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;