import { createGrid } from "../utils/grid.ts";

const input = await Deno.readTextFileSync("./src/day4/input1.txt");

const grid = createGrid(input);

function findWordLeft(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId][colIdx - idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

function findWordRight(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId]?.[colIdx + idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

function findWordUp(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId - idx]?.[colIdx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

function findWordDown(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId + idx]?.[colIdx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

export function findWordLeftUp(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId - idx]?.[colIdx - idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

export function findWordRightUp(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId - idx]?.[colIdx + idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

export function findWordLeftDown(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId + idx]?.[colIdx - idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

export function findWordRightDown(
	grid: string[][],
	rowId: number,
	colIdx: number,
	word: string,
) {
	let isFound = true;

	for (const [idx, char] of word.split("").entries()) {
		if (grid[rowId + idx]?.[colIdx + idx] !== char) {
			isFound = false;
			break;
		}
	}

	return isFound ? 1 : 0;
}

function countWordInGrid(grid: string[][], word: string) {
	let count = 0;

	grid.forEach((row, rowIdx) => {
		row.forEach((_column, columnIdx) => {
			count += findWordLeft(grid, rowIdx, columnIdx, word);
			count += findWordRight(grid, rowIdx, columnIdx, word);
			count += findWordUp(grid, rowIdx, columnIdx, word);
			count += findWordDown(grid, rowIdx, columnIdx, word);
			count += findWordLeftUp(grid, rowIdx, columnIdx, word);
			count += findWordRightUp(grid, rowIdx, columnIdx, word);
			count += findWordLeftDown(grid, rowIdx, columnIdx, word);
			count += findWordRightDown(grid, rowIdx, columnIdx, word);
		});
	});

	return count;
}

const wordCount = countWordInGrid(grid, "XMAS");

console.log(wordCount);
