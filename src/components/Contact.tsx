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
          <p className="text-lg text-foreground/80">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    target={method.label === "LinkedIn" ? "_blank" : undefined}
                    rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
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