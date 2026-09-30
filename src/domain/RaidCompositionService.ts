import { Player } from "./Player.js";
import { Raid } from "./Raid.js";
import { Role } from "./Role.js";
import { RaidCompositionResult } from "./RaidCompositionResult.js";

export class RaidCompositionService{

    compose(
        raid: Raid,
        players: Player[]
    ): RaidCompositionResult {

        const roleCount = new Map<Role, number>();

        for (const player of players) {
            const currentCount = roleCount.get(player.role) ?? 0;

            roleCount.set(player.role, currentCount + 1);
        }

        const selectedPlayers: Player[] = [];
        const missingRoles = new Map<Role, number>();

        for (const [role, requiredAmount] of raid.requirements) {

            const availableAmount = roleCount.get(role) ?? 0;

            const playersOfRole = players.filter(
                player => player.role === role
            );

            playersOfRole.sort(
                (playerA, playerB) => playerB.level - playerA.level
            );

            const amountToSelect = Math.min(
                availableAmount,
                requiredAmount
            );

            selectedPlayers.push(
                ...playersOfRole.slice(0, amountToSelect)
            );

            if (availableAmount < requiredAmount) {
                const missingAmount = requiredAmount - availableAmount;

                missingRoles.set(role, missingAmount);
            }
        }

        return new RaidCompositionResult(
            selectedPlayers,
            missingRoles
        );
    }

}