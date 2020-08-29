import * as Interfaces from '../interfaces/Unit';
import { Skill } from './Skill';

export class Unit implements Interfaces.Unit {

    name: string;
    health: number;
    maxHealth: number;
    skills: Skill[];

    constructor(name: string, health: number, skills: Skill[] = []) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.skills = skills;
    }

    wound(x: number): void {
        this.health -= x;
    }

    heal(x: number): void {
        this.health += x;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
    }

}