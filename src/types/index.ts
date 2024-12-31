export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github: string;
  linkedin?: string;
  bio: string;
}

export interface GithubActivity {
  id: string;
  type: string;
  repo: string;
  description: string;
  date: string;
  url: string;
}