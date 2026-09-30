import { Role } from "./Role.js";

export class Player {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly role: Role,
    public readonly level: number
  ) {}
}