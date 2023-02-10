export type Repository = {
  id: string;
  name: string;
  language: string | null;
  forks: number;
  stargazers_count: number;
}[];