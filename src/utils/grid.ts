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
