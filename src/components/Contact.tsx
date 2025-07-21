import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "doodigamavarun52@gmail.com",
      href: "mailto:doodigamavarun52@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/doodigama-varun-a752a5257/",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392333702",
      href: "tel:+919392333702",
      color: "text-green-500"
    },
    {
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "View Profile",
      href: "https://github.com/Doodigamavarun",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 mb-6">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a 
              href="/lovable-uploads/e1210f2f-f8c8-4765-9ea7-0d8c65b64e46.png" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-accent/20 to-navy-deep/20">
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                </div>
                <CardTitle className="text-lg text-navy-deep">
                  {method.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" asChild className="h-auto p-2 text-wrap">
                  <a 
                    href={method.href} 
                    target={method.label === "LinkedIn" || method.label === "GitHub" ? "_blank" : undefined}
                    rel={method.label === "LinkedIn" || method.label === "GitHub" ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-teal-accent transition-colors"
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
  );
};

export default Contact;