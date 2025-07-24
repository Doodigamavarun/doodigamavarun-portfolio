import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Phone, Github, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "doodigamavarun52@gmail.com",
      href: "mailto:doodigamavarun52@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/doodigama-varun-a752a5257/",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392333702",
      href: "tel:+919392333702",
      color: "text-green-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com/Doodigamavarun",
      color: "text-gray-300"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@Doodigamavarun",
      href: "https://t.me/Doodigamavarun",
      color: "text-blue-300"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "doodigama_varun",
      href: "https://instagram.com/doodigama_varun",
      color: "text-pink-400"
    }
  ];

  return (
    <>
      {/* Get in Touch Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-accent to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Ready to collaborate on exciting projects? Let's connect and create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="bg-gradient-to-r from-teal-accent to-blue-500 hover:from-teal-accent/90 hover:to-blue-500/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link 
                  to="/resume"
                  className="border-2 border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-navy-deep font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl">
                <CardHeader className="text-center pb-3 pt-6">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-md group-hover:shadow-lg transition-shadow">
                      <method.icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold text-navy-deep">
                    {method.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <Button variant="ghost" asChild className="h-auto p-2 text-xs">
                    <a 
                      href={method.href} 
                      target={method.label === "LinkedIn" || method.label === "GitHub" || method.label === "Telegram" || method.label === "Instagram" ? "_blank" : undefined}
                      rel={method.label === "LinkedIn" || method.label === "GitHub" || method.label === "Telegram" || method.label === "Instagram" ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-navy-deep via-purple-900 to-navy-deep text-hero-text py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-hero-text/90">
            &copy; 2025 Doodigama Varun. All rights reserved.
          </p>
          <p className="text-teal-accent text-sm mt-2">
            Built with passion for innovation and technology
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;