import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Camera, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Placease",
      description: "Alexa Skill + AWS Lambda project to simplify student placement updates using voice interaction.",
      icon: Bot,
      tech: ["Alexa Skills", "AWS Lambda", "Voice UI", "Node.js"],
      color: "text-blue-500"
    },
    {
      title: "FaceTrace",
      description: "AI-based forensic sketching system using CNNs and landmark detection to generate suspect images.",
      icon: Camera,
      tech: ["Computer Vision", "CNN", "OpenCV", "Python"],
      color: "text-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-teal-accent/20 to-navy-deep/20`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <CardTitle className="text-xl text-navy-deep">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-teal-accent/10 text-navy-deep rounded-full border border-teal-accent/20"
                    >
                      {tech}
                    </span>
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

export default Projects;