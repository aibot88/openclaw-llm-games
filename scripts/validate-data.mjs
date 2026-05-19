import { readFile } from "node:fs/promises";

const requiredStringFields = ["id", "author", "openclawUrl"];
const requiredLocalizedFields = ["title", "description", "source"];
const requiredArrayFields = ["categories", "languages"];

const games = JSON.parse(await readFile(new URL("../data/games.json", import.meta.url), "utf8"));

if (!Array.isArray(games)) {
  throw new Error("data/games.json must contain an array.");
}

const ids = new Set();
const errors = [];

games.forEach((game, index) => {
  const label = `games[${index}]`;

  for (const field of requiredStringFields) {
    if (typeof game[field] !== "string") {
      errors.push(`${label}.${field} must be a string.`);
    }
  }

  for (const field of requiredLocalizedFields) {
    if (!game[field] || typeof game[field].zh !== "string" || typeof game[field].en !== "string") {
      errors.push(`${label}.${field} must include zh and en strings.`);
    }
  }

  for (const field of requiredArrayFields) {
    if (!Array.isArray(game[field]) || game[field].some((item) => typeof item !== "string")) {
      errors.push(`${label}.${field} must be an array of strings.`);
    }
  }

  if (typeof game.id === "string") {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.id)) {
      errors.push(`${label}.id must be kebab-case.`);
    }
    if (ids.has(game.id)) {
      errors.push(`${label}.id duplicates another entry.`);
    }
    ids.add(game.id);
  }
});

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${games.length} games.`);
