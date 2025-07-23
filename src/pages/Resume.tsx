import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="text-navy-deep hover:text-teal-accent">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="default" className="bg-teal-accent text-navy-deep hover:bg-teal-accent/90">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-deep to-purple-900 text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Doodigama Varun</h1>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>doodigamavarun52@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9392333702</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/doodigama-varun-a752a5257/</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Objective */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Objective
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  To succeed in an environment of growth and excellence, which provides me good knowledge and best platform, 
                  where I want to be a member of team that dynamically work towards the growth of an organization.
                </p>
                <p>
                  Computer Science Engineering graduate seeking a challenging and innovative engineering career. Looking 
                  forward for a position to tackle difficult projects through the use of technical skills.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Education
              </h2>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-teal-accent">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-navy-deep">BTech (Computer Science Engineering)</CardTitle>
                    <p className="text-sm text-gray-600">2021-2025 | CGPA-9.4</p>
                    <p className="text-sm font-medium text-teal-accent">Bharath Institute of Higher Education and Research, Chennai</p>
                  </CardHeader>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-navy-deep">Intermediate (PCM)</CardTitle>
                    <p className="text-sm text-gray-600">2019-2021 | CGPA-9.4</p>
                    <p className="text-sm font-medium text-purple-600">Narayana Junior College, Hyderabad</p>
                  </CardHeader>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-navy-deep">SSC</CardTitle>
                    <p className="text-sm text-gray-600">2018-2019 | CGPA-8.8</p>
                    <p className="text-sm font-medium text-blue-600">Z.P.H.S, Gorentla</p>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Projects
              </h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-navy-deep">1. Placease: Simplifying Student Placement</CardTitle>
                    <p className="text-sm font-semibold text-blue-600">ROLE: Team Lead</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-3">
                      Alexa Skill Kit is a Platform for building voice-enabled experiences. Alexa skill kit is a free developing tool which helps us to 
                      create applications to internet with Alexa. Intention of this project is to create an application using Alexa skill kit and AWS 
                      Lambda where it gives the details of the placement drive for a week.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-3">
                      <li>Developed core functionality using Python</li>
                      <li>Used Alexa skill kit as the frontend and AWS Lambda as the backend</li>
                      <li>Ensured that the final documentation effectively conveys the information of project</li>
                    </ul>
                    <p className="text-sm text-gray-600"><strong>Environment:</strong> Python, AI</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-navy-deep">2. FaceTrace: AI-Driven Forensic Sketching</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-3">
                      FaceTrace is an advanced AI-powered forensic sketching system designed to create accurate suspect sketches without 
                      requiring forensic artists. Traditional forensic sketching relies heavily on skilled artists and witness memory, making the 
                      process time-consuming and subjective. FaceTrace overcomes these challenges by leveraging artificial intelligence to 
                      automate and enhance forensic sketch generation. The system integrates Convolutional Neural Networks (CNNs) and Facial 
                      Landmark Detection to transform verbal descriptions into realistic composite sketches.
                    </p>
                    <p className="text-sm text-gray-600"><strong>DOMAIN:</strong> ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-navy-deep">Programming & Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      C, Java, Python, Web Development (CSS, HTML, JavaScript), Machine Learning, 
                      Artificial Intelligence, Internet of Things
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-navy-deep">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Time Management, Communication Skills, Creative Thinking, Leadership
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Strengths */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Strengths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-accent rounded-full"></div>
                    Dedicated to work
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-accent rounded-full"></div>
                    Resilient
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-accent rounded-full"></div>
                    Leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-accent rounded-full"></div>
                    Multilinguistic: English, Telugu, Hindi
                  </li>
                </ul>
              </div>
            </section>

            {/* Declaration */}
            <section>
              <h2 className="text-2xl font-bold text-navy-deep mb-4 border-b-2 border-teal-accent pb-2">
                Declaration
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-4">
                  I hereby declare that the above mentioned information is true as per my knowledge & belief.
                </p>
                <div className="text-right">
                  <p className="font-semibold text-navy-deep">(D.varun)</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;