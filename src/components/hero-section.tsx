import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { ContactForm } from "./contact-form";

interface HeroSectionProps {
  data: {
    name: string;
    contact: {
      email: string;
      github: string;
      linkedin: string;
    };
    summary: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const avatarImages = [
    "/avatars/avatar-1.jpg",
    "/avatars/avatar-2.jpg",
    "/avatars/avatar-3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatarIndex((prev) => (prev + 1) % avatarImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const firstName = data.name.split(" ")[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${data.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="relative inline-block">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary glow-effect transition-all duration-1000">
            <img
              src={avatarImages[currentAvatarIndex]}
              alt={data.name}
              className="w-full h-full object-cover transition-all duration-1000"
              style={{
                opacity: 1,
                transform: "scale(1)",
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">{firstName}</span>!
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold">Code</span>, <span className="text-accent font-semibold">Storytell</span>, <span className="font-semibold">Elevate</span>.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.summary}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection("about")}
            className="shadow-elegant hover:scale-105 transition-transform"
          >
            About Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="shadow-elegant hover:scale-105 transition-transform"
          >
            Contact
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center items-center pt-4">
          <ContactForm
            email={data.contact.email}
            name={data.name}
            open={isContactOpen}
            onOpenChange={setIsContactOpen}
          >
            <Button
              size="icon"
              variant="outline"
              className="rounded-full h-12 w-12 shadow-elegant hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </ContactForm>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-12 w-12 shadow-elegant hover:scale-110 transition-transform"
            asChild
            aria-label="GitHub"
          >
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-12 w-12 shadow-elegant hover:scale-110 transition-transform"
            asChild
            aria-label="LinkedIn"
          >
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-12 w-12 shadow-elegant hover:scale-110 transition-transform"
            onClick={handleResumeDownload}
            aria-label="Download Resume"
          >
            <FileDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
