
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, User, BookOpen, FileVideo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: "Modern Web Application",
      description: "A full-stack web application built with React and Node.js, featuring real-time data updates and responsive design.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      status: "Completed",
      videoPlaceholder: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 2,
      title: "Mobile-First Dashboard",
      description: "An analytics dashboard with interactive charts and data visualization, optimized for mobile devices.",
      technologies: ["React", "D3.js", "Tailwind CSS", "Firebase"],
      status: "In Progress",
      videoPlaceholder: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with payment integration, inventory management, and admin panel.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
      status: "Completed",
      videoPlaceholder: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS", "Next.js"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full Stack Developer crafting beautiful, functional, and user-centered digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown 
              size={32} 
              className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions and beautiful user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <User className="mr-3 text-primary" size={28} />
                <h3 className="text-2xl font-semibold">My Story</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience building web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions. My goal is to 
                create digital experiences that make a positive impact on people's lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="mr-3 text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-center text-sm font-medium hover:bg-accent transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.videoPlaceholder}?w=400&h=225&fit=crop`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FileVideo className="text-white" size={32} />
                    </div>
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Mail className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Github className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground">github.com/yourusername</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Linkedin className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/yourname</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="text-lg px-8 py-6">
            <Mail className="mr-2" size={20} />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;