import { Player } from "./Player";
import { Role } from "./Role";

export class RaidCompositionResult {
    constructor(
        public readonly selectedPlayers: Player[],
        public readonly missingRoles: Map<Role, number>
    ) {}
}