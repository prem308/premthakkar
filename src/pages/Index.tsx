import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import portfolioData from "@/data/data.json";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      <HeroSection
        data={{
          name: portfolioData.name,
          contact: {
            email: portfolioData.contact.email,
            github: portfolioData.contact.github,
            linkedin: portfolioData.contact.linkedin,
          },
          summary: portfolioData.summary,
        }}
      />

      <div id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate software engineer who believes that great code tells a story. 
              With a strong foundation in full-stack development and a curiosity for emerging technologies, 
              I love building solutions that make a real difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or mentoring aspiring developers. I thrive in collaborative environments where 
              innovation meets execution.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving, always keeping 
              the end user at the heart of every decision. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>

      <SkillsSection skills={portfolioData.skills} />

      <ExperienceSection experiences={portfolioData.experience} />

      <ProjectsSection projects={portfolioData.projects} />

      <Footer contact={portfolioData.contact} name={portfolioData.name} />
    </div>
  );
};

export default Index;
