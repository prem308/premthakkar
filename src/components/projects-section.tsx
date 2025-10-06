import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Code } from "lucide-react";

interface Project {
  name: string;
  year: string;
  type?: string;
  award?: string;
  website: string;
  details: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const techKeywords = [
  "React",
  "Python",
  "YOLO",
  "Gemini API",
  "MusicGen",
  "Whisper",
  "ChatGPT API",
  "Django",
  "AWS",
  "SQL",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Firebase",
  "React Native",
  "Google Maps API",
  "D3.js",
  "Express",
  "MERN",
  "Stripe",
  "JWT",
  "TailwindCSS",
  "shadcn",
];

function extractTechStack(details: string[]): string[] {
  const detailsText = details.join(" ");
  const found = new Set<string>();

  techKeywords.forEach((keyword) => {
    if (detailsText.includes(keyword) && found.size < 4) {
      found.add(keyword);
    }
  });

  return Array.from(found);
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining creativity with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const techStack = extractTechStack(project.details);
            const description = project.details.join(". ");

            return (
              <Card key={index} className="card-elegant flex flex-col">
                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold hover:text-accent transition-colors cursor-default">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                    <span>{project.year}</span>
                    {project.type && (
                      <>
                        <span>•</span>
                        <span>{project.type}</span>
                      </>
                    )}
                  </div>
                  {project.award && (
                    <div className="flex items-center gap-2 pt-2">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {project.award}
                      </span>
                    </div>
                  )}
                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3">
                      {techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
                    <Code className="h-4 w-4" />
                    Code
                  </Button>
                  {project.website !== "N/A" && (
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
