import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Raid Planner API is running!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



import { Raid } from "./domain/Raid.js";
import { Role } from "./domain/Role.js";

const requirements = new Map<Role, number>();

requirements.set(Role.TANK, 1);
requirements.set(Role.HEALER, 1);
requirements.set(Role.DPS, 3);

const raid = new Raid(
    1,
    "Dragon's Lair",
    requirements
);

console.log(raid);