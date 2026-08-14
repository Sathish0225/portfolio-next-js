// data/skills.ts

export type SkillCategory =
  | "AI & Generative AI"
  | "Languages"
  | "Frameworks/Libraries"
  | "Databases"
  | "Cloud/DevOps"
  | "Architecture & Security"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
  level?: "Expert" | "Advanced" | "Proficient" | "Learning";
}

export const skills: Record<SkillCategory, Skill[]> = {
  "AI & Generative AI": [
    {
      name: "Python",
      category: "AI & Generative AI",
      logoKey: "python",
      level: "Learning",
    },
    {
      name: "Generative AI",
      category: "AI & Generative AI",
      logoKey: "openai",
      level: "Learning",
    },
    {
      name: "Large Language Models (LLMs)",
      category: "AI & Generative AI",
      logoKey: "openai",
      level: "Learning",
    },
    {
      name: "RAG",
      category: "AI & Generative AI",
      logoKey: "openai",
      level: "Learning",
    },
    {
      name: "Embeddings",
      category: "AI & Generative AI",
      logoKey: "openai",
      level: "Learning",
    },
    {
      name: "AI API Integration",
      category: "AI & Generative AI",
      logoKey: "openai",
      level: "Learning",
    },
  ],

  Languages: [
    {
      name: "PHP",
      category: "Languages",
      logoKey: "php",
      level: "Expert",
    },
    {
      name: "JavaScript",
      category: "Languages",
      logoKey: "javascript",
      level: "Advanced",
    },
    {
      name: "TypeScript",
      category: "Languages",
      logoKey: "typescript",
      level: "Advanced",
    },
    {
      name: "C#",
      category: "Languages",
      logoKey: "csharp",
      level: "Advanced",
    },
    {
      name: "Python",
      category: "Languages",
      logoKey: "python",
      level: "Learning",
    },
    {
      name: "SQL",
      category: "Languages",
      logoKey: "mysql",
      level: "Advanced",
    },
    {
      name: "Dart",
      category: "Languages",
      logoKey: "dart",
      level: "Advanced",
    },

    // Keep these only if you can confidently discuss them
    {
      name: "Java",
      category: "Languages",
      logoKey: "java",
      level: "Proficient",
    },
    {
      name: "Kotlin",
      category: "Languages",
      logoKey: "kotlin",
      level: "Proficient",
    },
  ],

  "Frameworks/Libraries": [
    {
      name: "Laravel",
      category: "Frameworks/Libraries",
      logoKey: "laravel",
      level: "Expert",
    },
    {
      name: "React.js",
      category: "Frameworks/Libraries",
      logoKey: "react",
      level: "Advanced",
    },
    {
      name: "Next.js",
      category: "Frameworks/Libraries",
      logoKey: "nextjs",
      level: "Advanced",
    },
    {
      name: "Node.js",
      category: "Frameworks/Libraries",
      logoKey: "nodejs",
      level: "Advanced",
    },
    {
      name: "Express.js",
      category: "Frameworks/Libraries",
      logoKey: "express",
      level: "Advanced",
    },
    {
      name: "Flutter",
      category: "Frameworks/Libraries",
      logoKey: "flutter",
      level: "Advanced",
    },
    {
      name: "React Native",
      category: "Frameworks/Libraries",
      logoKey: "reactnative",
      level: "Proficient",
    },
    {
      name: "Tailwind CSS",
      category: "Frameworks/Libraries",
      logoKey: "tailwindcss",
      level: "Advanced",
    },
    {
      name: "CodeIgniter",
      category: "Frameworks/Libraries",
      logoKey: "codeigniter",
      level: "Proficient",
    },
    {
      name: "Android SDK",
      category: "Frameworks/Libraries",
      logoKey: "android",
      level: "Proficient",
    },

    // Keep only if actively used
    {
      name: "Vue.js",
      category: "Frameworks/Libraries",
      logoKey: "vuejs",
      level: "Proficient",
    },
  ],

  Databases: [
    {
      name: "MySQL",
      category: "Databases",
      logoKey: "mysql",
      level: "Expert",
    },
    {
      name: "Microsoft SQL Server",
      category: "Databases",
      logoKey: "microsoftsqlserver",
      level: "Advanced",
    },
    {
      name: "MongoDB",
      category: "Databases",
      logoKey: "mongodb",
      level: "Proficient",
    },
    {
      name: "PostgreSQL",
      category: "Databases",
      logoKey: "postgresql",
      level: "Proficient",
    },
    {
      name: "SQLite",
      category: "Databases",
      logoKey: "sqlite",
      level: "Advanced",
    },
  ],

  "Cloud/DevOps": [
    {
      name: "AWS",
      category: "Cloud/DevOps",
      logoKey: "amazonwebservices",
      level: "Advanced",
    },
    {
      name: "EC2",
      category: "Cloud/DevOps",
      logoKey: "amazonwebservices",
      level: "Advanced",
    },
    {
      name: "RDS",
      category: "Cloud/DevOps",
      logoKey: "amazonwebservices",
      level: "Advanced",
    },
    {
      name: "S3",
      category: "Cloud/DevOps",
      logoKey: "amazonwebservices",
      level: "Advanced",
    },
    {
      name: "IAM",
      category: "Cloud/DevOps",
      logoKey: "amazonwebservices",
      level: "Advanced",
    },
    {
      name: "Docker",
      category: "Cloud/DevOps",
      logoKey: "docker",
      level: "Proficient",
    },
    {
      name: "Firebase",
      category: "Cloud/DevOps",
      logoKey: "firebase",
      level: "Proficient",
    },
    {
      name: "Vercel",
      category: "Cloud/DevOps",
      logoKey: "vercel",
      level: "Proficient",
    },
    {
      name: "GCP",
      category: "Cloud/DevOps",
      logoKey: "googlecloud",
      level: "Proficient",
    },
  ],

  Tools: [
    {
      name: "Git",
      category: "Tools",
      logoKey: "git",
      level: "Advanced",
    },
    {
      name: "GitHub",
      category: "Tools",
      logoKey: "github",
      level: "Advanced",
    },
    {
      name: "GitLab",
      category: "Tools",
      logoKey: "gitlab",
      level: "Proficient",
    },
    {
      name: "Bitbucket",
      category: "Tools",
      logoKey: "bitbucket",
      level: "Advanced",
    },
    {
      name: "VS Code",
      category: "Tools",
      logoKey: "vscode",
      level: "Expert",
    },
    {
      name: "PhpStorm",
      category: "Tools",
      logoKey: "phpstorm",
      level: "Advanced",
    },
    {
      name: "Android Studio",
      category: "Tools",
      logoKey: "androidstudio",
      level: "Advanced",
    },
    {
      name: "Postman",
      category: "Tools",
      logoKey: "postman",
      level: "Advanced",
    },
    {
      name: "NPM",
      category: "Tools",
      logoKey: "npm",
      level: "Advanced",
    },
    {
      name: "Composer",
      category: "Tools",
      logoKey: "composer",
      level: "Advanced",
    },
    {
      name: "Vite",
      category: "Tools",
      logoKey: "vite",
      level: "Advanced",
    },
    {
      name: "Prettier",
      category: "Tools",
      logoKey: "prettier",
      level: "Advanced",
    },
    {
      name: "Figma",
      category: "Tools",
      logoKey: "figma",
      level: "Proficient",
    },
    {
      name: "Codemagic",
      category: "Tools",
      logoKey: "codemagic",
      level: "Advanced",
    },
  ],

  "Architecture & Security": [
    {
      name: "System Design",
      category: "Architecture & Security",
      logoKey: "architecture",
      level: "Advanced",
    },
    {
      name: "REST API Design",
      category: "Architecture & Security",
      logoKey: "swagger",
      level: "Advanced",
    },
    {
      name: "Database Design",
      category: "Architecture & Security",
      logoKey: "mysql",
      level: "Advanced",
    },
    {
      name: "Data Structures & Algorithms",
      category: "Architecture & Security",
      logoKey: "architecture",
      level: "Proficient",
    },
    {
      name: "Distributed Systems",
      category: "Architecture & Security",
      logoKey: "architecture",
      level: "Proficient",
    },
    {
      name: "JWT Authentication",
      category: "Architecture & Security",
      logoKey: "security",
      level: "Advanced",
    },
    {
      name: "RBAC",
      category: "Architecture & Security",
      logoKey: "security",
      level: "Advanced",
    },
    {
      name: "API Security",
      category: "Architecture & Security",
      logoKey: "security",
      level: "Advanced",
    },
    {
      name: "Performance Optimization",
      category: "Architecture & Security",
      logoKey: "architecture",
      level: "Advanced",
    },
  ],
};

export const getAllSkills = (): Skill[] => {
  return Object.values(skills).flat();
};

export const getCategories = (): SkillCategory[] => {
  return Object.keys(skills) as SkillCategory[];
};
