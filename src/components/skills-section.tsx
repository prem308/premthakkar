import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { SkillsData, SkillCategory, SkillItem } from "@/types/SkillTypes";

interface SkillsSectionProps {
  skills: SkillsData;
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const levelMax = skills.legend?.level_max || 5;

  const filterSkills = (category: SkillCategory): SkillItem[] => {
    if (!searchQuery) return category.items;
    return category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getFilteredCategories = (): SkillCategory[] => {
    if (activeCategory === "all") {
      return skills.categories
        .map((cat) => ({ ...cat, items: filterSkills(cat) }))
        .filter((cat) => cat.items.length > 0);
    }
    const category = skills.categories.find((cat) => cat.id === activeCategory);
    if (!category) return [];
    const filtered = filterSkills(category);
    return filtered.length > 0 ? [{ ...category, items: filtered }] : [];
  };

  const filteredCategories = getFilteredCategories();
  const totalSkills = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              Skills & Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Technical expertise and continuous learning across diverse domains
            </p>
          </div>
        </div>

        {/* Featured Skills Marquee */}
        {skills.featured && skills.featured.length > 0 && (
          <div className="mb-12 overflow-hidden">
            <div className="flex gap-3 animate-marquee hover:animation-pause">
              {[...skills.featured, ...skills.featured].map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="pill whitespace-nowrap px-4 py-2 text-sm font-medium shadow-lg"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Tabs and Search */}
        <div className="mb-8 space-y-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/50 p-2">
              <TabsTrigger value="all">All Skills</TabsTrigger>
              {skills.categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <p className="text-sm text-muted-foreground" aria-live="polite">
            Showing {totalSkills} skill{totalSkills !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className="card-elegant hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{category.title}</span>
                  <Badge variant="outline" className="ml-2">
                    {category.items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.name}</div>
                      {item.years !== undefined && (
                        <div className="text-xs text-muted-foreground">
                          {item.years} yr{item.years !== 1 ? "s" : ""} experience
                        </div>
                      )}
                      {item.proficiency && (
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {item.proficiency}
                        </Badge>
                      )}
                    </div>
                    {item.level !== undefined && (
                      <div className="flex-shrink-0">
                        <div
                          className="proficiency-ring w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm"
                          style={
                            {
                              "--pct": `${(item.level / levelMax) * 100}%`,
                              background: `conic-gradient(hsl(var(--primary)) var(--pct), hsl(var(--muted)) var(--pct))`,
                            } as React.CSSProperties
                          }
                          aria-label={`${item.name} proficiency: ${item.level} out of ${levelMax}`}
                        >
                          <div className="w-9 h-9 rounded-full bg-card flex items-center justify-center">
                            {item.level}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No skills found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
