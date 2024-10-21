export type SubSection = {
  name: string;
  nameExtra?: React.ReactNode;
  subtitle?: string;
  points: React.ReactNode[];
};

export type Section<T extends string> = {
  name: string;
  subSectionRecord: Record<T, SubSection>;
};

export type EducationSection = Section<"phelma" | "prepa">;
export type ProfessionalExperienceSection = Section<
  "meero" | "freelance" | "forssea" | "niryo"
>;
export type SkillsSection = Section<"web" | "misc">;
export type PersonalProjectsSection = Section<"tgvMaxExtra" | "sudokuSolver">;

export type Content = {
  headerSubtitle: string;

  education: EducationSection;
  professionalExperience: ProfessionalExperienceSection;
  skills: SkillsSection;
  personalProjects: PersonalProjectsSection;
};
