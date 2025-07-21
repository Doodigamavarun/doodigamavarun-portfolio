const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="prose prose-lg">
            <h3 className="text-xl font-semibold text-navy-deep mb-4">Objective</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              To succeed in an environment of growth and excellence, which provides me good knowledge and best platform, 
              where I want to be a member of team that dynamically work towards the growth of an organization.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Computer Science Engineering graduate seeking a challenging and innovative engineering career. Looking 
              forward for a position to tackle difficult projects through the use of technical skills.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-navy-deep mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-accent pl-4">
                <h4 className="font-semibold text-foreground text-lg">BTech (Computer Science Engineering)</h4>
                <p className="text-muted-foreground font-medium">Bharath Institute of Higher Education and Research</p>
                <p className="text-sm text-muted-foreground">Chennai, India</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">2021 - 2025</span>
                  <span className="bg-teal-accent/10 text-teal-accent px-2 py-1 rounded-md text-sm font-semibold">
                    CGPA: 9.4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;