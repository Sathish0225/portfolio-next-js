// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries'
  | 'Databases'
  | 'Cloud/DevOps' 
  | 'Tools' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C#', category: 'Languages', logoKey: 'csharp' },
    { name: 'PHP', category: 'Languages', logoKey: 'php' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'Dart', category: 'Languages', logoKey: 'dart' },
    { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
    { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
    { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
    { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'reactnative' },
    { name: 'Laravel', category: 'Frameworks/Libraries', logoKey: 'laravel' },
    { name: 'CodeIgniter', category: 'Frameworks/Libraries', logoKey: 'codeigniter' },
  ],
  'Databases': [
    { name: 'MySQL', category: 'Databases', logoKey: 'mysql' },
    { name: 'Microsoft SQL Server', category: 'Databases', logoKey: 'microsoftsqlserver' },
    { name: 'SQLite', category: 'Databases', logoKey: 'sqlite' },
    { name: 'MongoDB', category: 'Databases', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Databases', logoKey: 'postgresql' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'GCP', category: 'Cloud/DevOps', logoKey: 'googlecloud' },
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'Vercel', category: 'Cloud/DevOps', logoKey: 'vercel' },
  ],
  'Tools': [
    { name: 'Git', category: 'Tools', logoKey: 'git' },
    { name: 'GitHub', category: 'Tools', logoKey: 'github' },
    { name: 'GitLab', category: 'Tools', logoKey: 'gitlab' },
    { name: 'Bitbucket', category: 'Tools', logoKey: 'bitbucket' },
    { name: 'VS Code', category: 'Tools', logoKey: 'vscode' },
    { name: 'PhpStorm', category: 'Tools', logoKey: 'phpstorm' },
    { name: 'Android Studio', category: 'Tools', logoKey: 'androidstudio' },
    { name: 'Postman', category: 'Tools', logoKey: 'postman' },
    { name: 'NPM', category: 'Tools', logoKey: 'npm' },
    { name: 'Yarn', category: 'Tools', logoKey: 'yarn' },
    { name: 'Composer', category: 'Tools', logoKey: 'composer' },
    { name: 'Vite', category: 'Tools', logoKey: 'vite' },
    { name: 'Prettier', category: 'Tools', logoKey: 'prettier' },
    { name: 'Figma', category: 'Tools', logoKey: 'figma' },
    { name: 'Codemagic', category: 'Tools', logoKey: 'codemagic' }
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts', logoKey: 'github' },
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
    { name: 'Security', category: 'Concepts', logoKey: 'github' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};