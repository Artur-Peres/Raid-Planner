import { Role } from "./Role.js";

export class Raid {
    constructor(
      public readonly id: number,
      public readonly name: string,
      public readonly requirements: Map<Role, number>
    ) {}

    
}