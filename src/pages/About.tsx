import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const About = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm a software engineer with a passion for creating elegant solutions to complex problems. 
              My journey in technology began with a curiosity about how things work, and it has evolved 
              into a commitment to building software that makes a meaningful impact.
            </p>

            <p className="text-muted-foreground">
              With expertise spanning full-stack development, cloud architecture, and AI/ML integration, 
              I bring a holistic approach to every project. I believe in writing clean, maintainable code 
              and designing systems that scale gracefully while remaining accessible and user-friendly.
            </p>

            <p className="text-muted-foreground">
              Beyond technical skills, I'm deeply invested in continuous learning and knowledge sharing. 
              Whether it's mentoring junior developers, contributing to open-source projects, or exploring 
              cutting-edge technologies, I'm always looking for ways to grow and give back to the community 
              that has taught me so much.
            </p>

            <div className="pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">When I'm Not Coding</h2>
              <p className="text-muted-foreground">
                You can find me exploring new technologies, reading about system design, attending tech 
                meetups, or working on side projects that push my boundaries. I'm also an advocate for 
                making tech more accessible and inclusive for everyone.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/">
              <Button size="lg" className="shadow-elegant hover:scale-105 transition-transform">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
