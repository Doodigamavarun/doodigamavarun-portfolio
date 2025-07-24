import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Varun exceeded our expectations with his innovative thinking and technical skills.",
      author: "Selva Priya",
      role: "Project Mentor"
    },
    {
      quote: "His expertise in AI and problem-solving mindset made a significant impact.",
      author: "N.Fathima Shifna", 
      role: "AI Research Collaborator"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-teal-accent/20 shrink-0">
                    <Quote className="w-5 h-5 text-teal-accent" />
                  </div>
                  <div className="space-y-4">
                    <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-accent/30 to-navy-deep/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-navy-deep">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-navy-deep">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;