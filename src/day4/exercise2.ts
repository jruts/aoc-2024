import { createGrid } from "../utils/grid.ts";
import {
	findWordLeftDown,
	findWordLeftUp,
	findWordRightDown,
	findWordRightUp,
} from "./exercise1.ts";

interface Dictionary<T> {
	[Key: string]: T;
}

const input = await Deno.readTextFileSync("./src/day4/input1.txt");

const grid = createGrid(input);

function addPosition(positions: Dictionary<number>, position: string) {
	if (!positions[position]) positions[position] = 0;
	positions[position] += 1;
}

function countXMAS(grid: string[][]) {
	const word = "MAS";
	const aPositions: Dictionary<number> = {};

	grid.forEach((row, rowIdx) => {
		row.forEach((_column, columnIdx) => {
			if (findWordLeftUp(grid, rowIdx, columnIdx, word)) {
				addPosition(aPositions, `${rowIdx - 1}:${columnIdx - 1}`);
			}
			if (findWordRightUp(grid, rowIdx, columnIdx, word)) {
				addPosition(aPositions, `${rowIdx - 1}:${columnIdx + 1}`);
			}
			if (findWordLeftDown(grid, rowIdx, columnIdx, word)) {
				addPosition(aPositions, `${rowIdx + 1}:${columnIdx - 1}`);
			}
			if (findWordRightDown(grid, rowIdx, columnIdx, word)) {
				addPosition(aPositions, `${rowIdx + 1}:${columnIdx + 1}`);
			}
		});
	});

	return Object.values(aPositions).reduce((acc, nr) => {
		return nr > 1 ? ++acc : acc;
	}, 0);
}

console.log(countXMAS(grid));
