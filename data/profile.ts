import {
  Braces,
  Bug,
  Code2,
  DatabaseZap,
  Cpu,
  Figma,
  FileCode2,
  LayoutDashboard,
  Layers3,
  ShieldCheck,
  Smartphone,
  UsersRound
} from "lucide-react";

export const profile = {
  name: "Aryan Jung Chhetri",
  location: "Dhobighat, Lalitpur",
  email: "chhetriaryanjung@gmail.com",
  phone: "9840530090",
  image: "/IMG_1907.jpg",
  titles: [
    "Fullstack Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast",
    "Computing Student",
    "Cybersecurity Learner",
    "Data Science and Analytics"
  ],
  social: {
    github: "https://github.com/aryan123jung",
    linkedin: "https://www.linkedin.com/in/aryan-jung-chhetri-b67049363/",
    portfolio: "#home"
  }
};

export const education = {
  college: "Softwarica College of IT and E-Commerce",
  degree: "BSc (Hons) Computing",
  graduation: "Graduating in approximately 3 months"
};

export const skillGroups = [
  {
    title: "Fullstack",
    icon: Code2,
    tone: "cyan",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Mobile & Programming",
    icon: Braces,
    tone: "violet",
    skills: ["Python", "Java", "Flutter"]
  },
  {
    title: "Design",
    icon: Figma,
    tone: "emerald",
    skills: ["Figma", "UI/UX Design", "Prototyping"]
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    tone: "amber",
    skills: ["Burp Suite", "Security Testing", "Web App Security"]
  },
  {
    title: "Data & Analytics",
    icon: DatabaseZap,
    tone: "cyan",
    skills: ["Python", "Analytics", "Data Visualization"]
  }
];

export const softSkills = [
  "Leadership",
  "Team Collaboration",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Strategic Thinking"
];

export const projects = [
  {
    title: "ChautariKuraKani",
    description:
      "A full social media media app where users can connect with each others and join community named chautari and this app has both mobile and web version and is inspired by Nepali chautari ko kura.",
    tech: ["TypeScript", "Flutter", "NodeJS"],
    icon: LayoutDashboard,
    accent: "from-cyan-300/25 to-blue-500/15"
  },
  {
    title: "TeamSphere",
    description:
      "A team management platform for coaches to analyze player performance.",
    tech: ["React", "Fullstack", "Tailwind"],
    icon: UsersRound,
    accent: "from-violet-300/25 to-fuchsia-500/15"
  },
  {
    title: "Caption",
    description:
      "A mobile app used for translations of variouslanguages and language scan translation.",
    tech: ["Kotlin", "Java"],
    icon: Smartphone,
    accent: "from-emerald-300/25 to-teal-500/15"
  },
  {
    title: "GuffGuthi",
    description:
      "A reddit like app build for the users communication isnpired by nepali culture guthi.",
    tech: ["React", "JavaScript"],
    icon: Layers3,
    accent: "from-sky-300/25 to-indigo-500/15"
  },
  {
    title: "DataScience Data Analytics",
    description:
      "A data analytics project done for the county of the uk so that we can analyze the data and make informed decisions.",
    tech: ["R", "R-Studio", "Excel"],
    icon: Bug,
    accent: "from-rose-300/25 to-orange-500/15"
  },
  {
    title: "ML AI player recomendation system for ipl franchises from domestic data",
    description:
      "A ML AI project which helps the ipl franchises to build a perfect squad and helps the new players to grow with the help of the doestic data.",
    tech: ["Python", "Excel"],
    icon: Bug,
    accent: "from-rose-300/25 to-orange-500/15"
  }
];

export const experienceItems = [
  {
    title: "Personal Web Application Development",
    detail:
      "Built fullstack interfaces and practiced component-driven development with modern JavaScript workflows.",
    icon: FileCode2
  },
  {
    title: "Personal Mobile Application Development",
    detail:
      "Built fully functional mobile application interfaces and practiced component-driven development with modern Flutter and riverpod workflows.",
    icon: FileCode2
  },
  {
    title: "UI/UX Design Practice",
    detail:
      "Created clean user flows, wireframes, and interface concepts with a focus on usability and visual hierarchy.",
    icon: Figma
  },
  {
    title: "Academic Team Collaborations",
    detail:
      "Worked with classmates on computing assignments, shared responsibilities, and presented technical outcomes.",
    icon: UsersRound
  },
  {
    title: "Cybersecurity Learning",
    detail:
      "Explored web application security fundamentals, HTTP behavior, and testing workflows using Burp Suite.",
    icon: Cpu
  }
];
