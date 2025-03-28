import type { Site, Metadata, Socials } from "@types";
import type { TabPanel } from "@components/Skill.astro";

export const SITE: Site = {
  NAME: "Shreyans Joshi",
  RESUME: "/Resume.pdf",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Shreyans Joshi product portfolio",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/shreyansjoshi",
  }
];

export const skills = ["Web", "Mobile", "Backend", "Tools"];

export const webItems: TabPanel[] = [
  { name: "React.js", icon: "/icons/skills/web/react.svg" },
  { name: "Next.js", icon: "/icons/skills/web/next.svg" },
  { name: "Redux Toolkit", icon: "/icons/skills/web/redux-toolkit.svg" },
  { name: "Tanstack Query", icon: "/icons/skills/web/tanstack-query.svg" },
  { name: "Tailwind CSS", icon: "/icons/skills/web/tailwind.svg" },
  { name: "Framer Motion", icon: "/icons/skills/web/framer-motion.svg" },
  { name: "Jest", icon: "/icons/skills/web/jest.svg" },
  { name: "Cypress", icon: "/icons/skills/web/cypress.svg" },
];

export const mobileItems: TabPanel[] = [
  {
    name: "Kotlin + XML",
    icon: "/icons/skills/mobile/android-studio.svg",
  },
  {
    name: "Jetpack Compose",
    icon: "/icons/skills/mobile/jetpack-compose.svg",
  },
  { name: "React Native", icon: "/icons/skills/web/react.svg" },
  { name: "Expo", icon: "/icons/skills/mobile/expo.svg" },
  { name: "Flutter", icon: "/icons/skills/mobile/flutter.svg" },
  { name: "Flutter BLOC", icon: "/icons/skills/mobile/flutter.svg" },
  { name: "MVVM Architecture", icon: "/icons/skills/mobile/mvvm.svg" },
];

export const backendItems: TabPanel[] = [
  { name: "Express", icon: "/icons/skills/backend/express.svg" },
  { name: "Flask", icon: "/icons/skills/backend/flask.svg" },
  { name: "FastAPI", icon: "/icons/skills/backend/fastapi.svg" },
  { name: "Django", icon: "/icons/skills/backend/django.svg" },
  { name: "MySQL", icon: "/icons/skills/backend/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/skills/backend/postgres.svg" },
  { name: "MongoDB", icon: "/icons/skills/backend/mongodb.svg" },
  { name: "Redis", icon: "/icons/skills/backend/redis.svg" },
];

export const toolsItems: TabPanel[] = [
  { name: "Visual Studio Code", icon: "/icons/skills/tools/vscode.svg" },
  {
    name: "Android Studio",
    icon: "/icons/skills/mobile/android-studio.svg",
  },
  { name: "Git", icon: "/icons/skills/tools/git.svg" },
  { name: "Github", icon: "/icons/skills/tools/github.svg" },
  { name: "Docker", icon: "/icons/skills/tools/docker.svg" },
  { name: "Gemini API", icon: "/icons/skills/tools/gemini.svg" },
  { name: "Figma", icon: "/icons/skills/tools/figma.svg" },
  { name: "Google Analytics", icon: "/icons/skills/tools/ga4.svg" },
];

export const faqs= [
  {
    question: "My educational background",
    answer:
      "I am currently in my 2nd year of BCA from Tilak Maharashtra Vidyapeeth. BCA stands for Bachelor's of Computer Applications, here we are taught theory behind computer science while also prioritizing practical knowledge.",
  },
  {
    question: "My approach of learning a new technology or framework?",
    answer:
      "I first simply google the term and try to understand the documentation or watch a good youtube tutorial about it and practice it on my local machine by building a mini project. If I end up getting stuck I use stackoverflow or chatgpt else I read through the documentation about it.",
  },
  {
    question: "How I manage my time and prioritize tasks?",
    answer:
      "I use google calendar to block my time with tasks and perform those tasks accoring to their priority. Like, the most important task will be finished by morning and so on.",
  },
  {
    question: "My preference of working remotely or in an office?",
    answer:
      "I prefer office work for my first job as it fosters face-to-face interactions with colleagues, enhancing collaboration and learning. Immediate feedback and building strong relationships are crucial for my growth and understanding of company culture. While open to remote work if required, I believe starting on-site would be particularly beneficial.",
  },
];

