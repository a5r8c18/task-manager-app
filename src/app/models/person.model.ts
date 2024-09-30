import { Skill } from './skill.model';

export interface Person {
  id: number;
  fullName: string;
  age: number;
  skills: Skill[];
}