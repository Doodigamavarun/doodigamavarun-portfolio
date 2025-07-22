import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Trophy } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AI Club - Grand Technical Quiz Competition 2K23",
      issuer: "Bharath Institute of Higher Education and Research",
      date: "May 2023",
      type: "Competition",
      description: "Certificate of Participation in Technical Quiz Competition conducted by AI-CLUB, Department of Computer Science and Engineering",
      color: "blue"
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL - IIT Madras",
      date: "Jul-Aug 2024",
      type: "Online Course",
      description: "4 week course with consolidated score of 60%",
      score: "60%",
      color: "green"
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL - IIT Kharagpur", 
      date: "Jul-Oct 2024",
      type: "Online Course",
      description: "12 week course with consolidated score of 71%",
      score: "71%",
      color: "purple"
    },
    {
      title: "Frontend Web Development Internship",
      issuer: "Motion Cut Video Studio",
      date: "Sep-Oct 2023",
      type: "Internship",
      description: "1 month internship as Frontend Web Development Intern. Recognized for exceptional dedication, robust technical aptitude, and unwavering commitment.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-500 bg-blue-50";
      case "green":
        return "border-green-500 bg-green-50";
      case "purple":
        return "border-purple-500 bg-purple-50";
      case "orange":
        return "border-orange-500 bg-orange-50";
      default:
        return "border-teal-accent bg-teal-accent/10";
    }
  };

  const getBadgeClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500 text-white";
      case "green":
        return "bg-green-500 text-white";
      case "purple":
        return "bg-purple-500 text-white";
      case "orange":
        return "bg-orange-500 text-white";
      default:
        return "bg-teal-accent text-white";
    }
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A showcase of my continuous learning journey and professional achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className={`group hover:scale-105 transition-all duration-300 border-l-4 ${getColorClasses(cert.color)}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {cert.type === "Competition" ? (
                        <Trophy className={`w-5 h-5 text-${cert.color}-500`} />
                      ) : cert.type === "Internship" ? (
                        <Award className={`w-5 h-5 text-${cert.color}-500`} />
                      ) : (
                        <Award className={`w-5 h-5 text-${cert.color}-500`} />
                      )}
                    </div>
                    <Badge className={getBadgeClasses(cert.color)}>{cert.type}</Badge>
                  </div>
                  {cert.score && (
                    <Badge variant="outline" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none font-bold">
                      Score: {cert.score}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-navy-deep group-hover:text-teal-accent transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <p className="font-medium text-foreground">{cert.issuer}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;