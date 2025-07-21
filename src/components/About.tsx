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
        
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a Computer Science Engineering student skilled in Python, AI/ML, and Web Development.
            I've led innovative projects like <span className="text-teal-accent font-semibold">Placease</span> (Alexa-based placement assistant) 
            and <span className="text-teal-accent font-semibold">FaceTrace</span> (AI forensic sketching).
            I enjoy building real-world solutions and exploring emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;