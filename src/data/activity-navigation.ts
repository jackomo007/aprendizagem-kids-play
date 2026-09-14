import type { IconName, Tone } from "@/types/content";

export interface ActivityNavigationItem {
  slug: string;
  title: string;
  icon?: IconName;
  symbol?: string;
  tone: Tone;
}

export const activityGrades: ActivityNavigationItem[] = [
  { slug: "pre-iii", title: "Pré III", icon: "spark", tone: "pink" },
  { slug: "pre-iv", title: "Pré IV", icon: "spark", tone: "purple" },
  { slug: "infantil-v", title: "Infantil V", icon: "spark", tone: "green" },
  { slug: "1-ano", title: "1º ano", icon: "star", tone: "yellow" },
  { slug: "2-ano", title: "2º ano", icon: "star", tone: "green" },
  { slug: "3-ano", title: "3º ano", icon: "star", tone: "blue" },
  { slug: "4-ano", title: "4º ano", icon: "star", tone: "orange" },
  { slug: "5-ano", title: "5º ano", icon: "star", tone: "purple" },
];

export const earlyChildhoodGradeSlugs = ["pre-iii", "pre-iv", "infantil-v"];
export const educationActivityGroup: ActivityNavigationItem = {
  slug: "educacao-infantil",
  title: "Educação Infantil",
  icon: "shapes",
  tone: "purple",
};

export const preschoolCategories: ActivityNavigationItem[] = [
  { slug: "grafomotricidade", title: "Grafomotricidade", icon: "pencil", tone: "orange" },
  { slug: "percepcao-visual", title: "Percepção Visual", icon: "shapes", tone: "blue" },
  { slug: "matematica-inicial", title: "Matemática Inicial", symbol: "123", tone: "yellow" },
  { slug: "linguagem", title: "Linguagem", symbol: "Aa", tone: "purple" },
  { slug: "raciocinio-logico", title: "Raciocínio Lógico", icon: "spark", tone: "green" },
  { slug: "emocoes-e-autonomia", title: "Emoções e Autonomia", icon: "heart", tone: "pink" },
];

export const elementarySubjects: ActivityNavigationItem[] = [
  { slug: "lingua-portuguesa", title: "Língua Portuguesa", icon: "book", tone: "purple" },
  { slug: "matematica", title: "Matemática", symbol: "123", tone: "yellow" },
  { slug: "ciencias", title: "Ciências", icon: "spark", tone: "green" },
  { slug: "historia", title: "História", icon: "book", tone: "orange" },
  { slug: "geografia", title: "Geografia", icon: "globe", tone: "blue" },
];

export function getActivityGrade(slug: string) {
  return slug === educationActivityGroup.slug
    ? educationActivityGroup
    : activityGrades.find((grade) => grade.slug === slug);
}

export function getCategoriesForGrade(gradeSlug: string) {
  return gradeSlug === educationActivityGroup.slug || earlyChildhoodGradeSlugs.includes(gradeSlug)
    ? preschoolCategories
    : elementarySubjects;
}

export function getActivityCategory(gradeSlug: string, categorySlug: string) {
  return getCategoriesForGrade(gradeSlug).find((category) => category.slug === categorySlug);
}

export const activityCategoryParams = activityGrades.flatMap((grade) =>
  getCategoriesForGrade(grade.slug).map((category) => ({
    grade: grade.slug,
    category: category.slug,
  })),
);

activityCategoryParams.push(
  ...preschoolCategories.map((category) => ({
    grade: educationActivityGroup.slug,
    category: category.slug,
  })),
);
