export type SkillItem = {
  name: string;
  level?: number;
  years?: number;
  proficiency?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

export type SkillsData = {
  categories: SkillCategory[];
  featured?: string[];
  legend?: {
    level_max: number;
    level_labels?: Record<string, string>;
  };
};
