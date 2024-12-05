import { splitByLines } from "../utils/textInput.ts";

const input = await Deno.readTextFileSync("./src/day5/input1.txt");

const lines = splitByLines(input);

export const rules = lines.slice(0, lines.indexOf("")).map((line) =>
	line.split("|").map((x) => parseInt(x))
).reduce((acc, entry) => {
	const existingEntry = acc.get(entry[0]);
	if (!existingEntry) {
		acc.set(entry[0], [entry[1]]);
	} else {
		acc.set(entry[0], [...existingEntry, entry[1]]);
	}
	return acc;
}, new Map<number, number[]>());

export const updates = lines.slice(lines.indexOf("") + 1).map((line) =>
	line.split(",").map((x) => parseInt(x))
);

function intersects(a: number[], b: number[]) {
	const s = new Set<number>(b);
	return [...new Set<number>(a)].some((x) => s.has(x));
}

const validUpdates: number[][] = [];

for (const update of updates) {
	let isValid = true;
	const checkedPages: number[] = [];
	for (const page of update) {
		if (intersects(checkedPages, rules.get(page) || [])) {
			isValid = false;
			break;
		}
		checkedPages.push(page);
	}
	if (isValid) {
		validUpdates.push(update);
	}
}

export function sumMiddlePageNumbers(updates: number[][]) {
	return updates.reduce((acc, page) => {
		return acc + page[Math.floor(page.length / 2)];
	}, 0);
}

console.log(sumMiddlePageNumbers(validUpdates));
