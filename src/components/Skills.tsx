import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C"],
      icon: Code,
      color: "text-orange-500"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      color: "text-blue-500"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "OpenCV"],
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Tools",
      skills: ["AWS", "Git", "VS Code"],
      icon: Wrench,
      color: "text-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-accent/20 to-navy-deep/20">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                </div>
                <CardTitle className="text-lg text-navy-deep">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 text-sm font-medium bg-teal-accent/10 text-navy-deep rounded-lg border border-teal-accent/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;