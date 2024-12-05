import { countWordInGrid, createGrid } from "../utils/grid.ts";

const input = await Deno.readTextFileSync("./src/day4/input1.txt");

const grid = createGrid(input);

const wordCount = countWordInGrid(grid, "XMAS");

console.log(wordCount);
