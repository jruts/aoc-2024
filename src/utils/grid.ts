import { splitByLines } from "./textInput.ts";

export function createGrid(text: string): string[][] {
	const grid: string[][] = [];
	const rows = splitByLines(text);
	rows.forEach((line: string, idx: number) => {
		const columns = line.split("");
		grid[idx] = columns;
	});
	return grid;
}

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

function findWordLeftUp(
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

function findWordRightUp(
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

function findWordLeftDown(
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

function findWordRightDown(
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

export function countWordInGrid(grid: string[][], word: string) {
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
