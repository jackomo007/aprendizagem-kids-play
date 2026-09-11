export type Tone = "purple" | "blue" | "yellow" | "pink" | "green" | "orange";
export type IconName =
  | "star"
  | "book"
  | "play"
  | "pencil"
  | "globe"
  | "rocket"
  | "shapes"
  | "arrow"
  | "download"
  | "check"
  | "heart"
  | "spark";
export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
  cta: string;
}
export interface Content {
  slug: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  tone: Tone;
  icon: IconName;
}
export interface Game extends Content {
  status: "available" | "soon";
}
export interface Activity extends Content {
  pages: number;
  pdf: string;
}
export interface Video extends Content {
  youtubeId?: string;
  duration?: string;
}
export interface Question {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  illustration?: string;
}
export interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}
