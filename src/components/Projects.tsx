import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Camera, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Placease: Simplifying Student Placement",
      description: "Alexa Skill Kit platform for building voice-enabled experiences. Developed core functionality using Python with Alexa skill kit as frontend and AWS Lambda as backend. A comprehensive solution to create an application that gives placement drive details for a week, ensuring effective communication of project information.",
      icon: Bot,
      tech: ["Python", "Alexa Skills Kit", "AWS Lambda", "Voice UI", "AI"],
      color: "text-blue-500",
      role: "Team Lead",
      details: [
        "Developed core functionality using Python",
        "Used Alexa skill kit as the frontend and AWS Lambda as the backend",
        "Ensured final documentation effectively conveys project information"
      ]
    },
    {
      title: "FaceTrace: AI-Driven Forensic Sketching",
      description: "Advanced AI-powered forensic sketching system designed to create accurate suspect sketches without requiring forensic artists. The system integrates Convolutional Neural Networks (CNNs) and Facial Landmark Detection to transform verbal descriptions into realistic composite sketches.",
      icon: Camera,
      tech: ["Artificial Intelligence", "Machine Learning", "CNN", "Computer Vision", "OpenCV", "Python"],
      color: "text-purple-500",
      role: "Developer",
      details: [
        "Leverages artificial intelligence to automate forensic sketch generation",
        "Integrates CNNs and Facial Landmark Detection",
        "Transforms verbal descriptions into realistic composite sketches",
        "Overcomes traditional time-consuming and subjective processes"
      ]
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
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-teal-accent/20 to-navy-deep/20`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-navy-deep mb-1">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-teal-accent font-semibold">
                      Role: {project.role}
                    </p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-navy-deep">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Zap className="w-3 h-3 text-teal-accent mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
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