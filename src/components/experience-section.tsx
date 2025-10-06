import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across diverse teams and technologies
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elegant">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-2 w-fit">
                    <Calendar className="h-3 w-3" />
                    {exp.dates}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed flex-1">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
