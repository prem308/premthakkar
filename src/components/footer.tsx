import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from "lucide-react";

interface FooterProps {
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  name: string;
}

export function Footer({ contact, name }: FooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer id="contact" className="py-20 hero-gradient border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold mb-1">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <a
                href={`tel:${contact.phone}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p className="text-sm text-muted-foreground">{contact.location}</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <ContactForm
            email={contact.email}
            name={name}
            open={isContactOpen}
            onOpenChange={setIsContactOpen}
          >
            <Button size="lg" variant="default" className="shadow-elegant hover:scale-105 transition-transform">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </Button>
          </ContactForm>

          <Button
            size="lg"
            variant="outline"
            className="shadow-elegant hover:scale-105 transition-transform"
            asChild
          >
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="shadow-elegant hover:scale-105 transition-transform"
            asChild
          >
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="shadow-elegant hover:scale-105 transition-transform"
            onClick={handleResumeDownload}
          >
            <FileDown className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
