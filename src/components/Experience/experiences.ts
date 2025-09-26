import { Languages } from "../../types/translation.type";
import { experienceTranslation } from "./Experience.i18n";

export type ExperienceObj = {
  key: string;
  title: string;
  company: string;
  highlightCount: number;
  startDate: string;
  endDate?: string;
  stack?: string[];
};

const getHighlightsCount = (key: string): number => {
  return Object.keys(experienceTranslation[Languages.EN_US][key] ?? {}).filter(
    (k) => k.startsWith("h_")
  ).length;
};

export const experiences: ExperienceObj[] = [
  {
    key: "santander",
    title: "Full Stack Developer",
    company: "Santander Full Stack Boot camp",
    highlightCount: getHighlightsCount("santander"),
    startDate: "2021-08-15",
    endDate: "2022-07-15",
    stack: [
      "html",
      "scss",
      "ts",
      "js",
      "angular",
      "java",
      "spring",
      "postgres",
      "git",
      "github",
    ],
  },
  {
    key: "scandiweb",
    title: "Full Stack Developer",
    company: "Scandiweb",
    highlightCount: getHighlightsCount("scandiweb"),
    startDate: "2022-06-15",
    endDate: "2023-09-15",
    stack: [
      "react",
      "magento",
      "postgres",
      "redux",
      "graphql",
      "tailwind",
      "jira",
      "git",
      "figma",
    ],
  },
  {
    key: "terrantic",
    title: "Front-end Developer",
    company: "Terrantic",
    highlightCount: getHighlightsCount("terrantic"),
    startDate: "2022-09-15",
    endDate: "2023-12-15",
    stack: ["react", "ts", "docker", "scss", "jira", "git", "github"],
  },
  {
    key: "trinity",
    title: "Principal Full Stack Engineer",
    company: "The Trinity",
    highlightCount: getHighlightsCount("trinity"),
    startDate: "2024-09-15",
    endDate: "2025-07-15",
    stack: [
      "next",
      "mongo",
      "react",
      "ts",
      "node",
      "tailwind",
      "gcp",
      "git",
      "github",
      "clickup",
    ],
  },
  {
    key: "mate",
    title: "Full Stack Development Mentor",
    company: "Mate Academy",
    highlightCount: getHighlightsCount("mate"),
    startDate: "2024-02-15",
    stack: [
      "react",
      "node",
      "ts",
      "scss",
      "git",
      "github",
      "redux",
      "figma",
      "clickup",
    ],
  },
];
