import { rules, sumMiddlePageNumbers, updates } from "./exercise1.ts";

function getIntersection(a: number[], b: number[]) {
	const s = new Set<number>(b);
	return [...new Set<number>(a)].filter((x) => s.has(x))?.[0];
}

function fixInvalidUpdate(
	update: number[],
	valid: boolean = false,
	loop: number = 0,
) {
	if (valid && loop === 1) return [];
	if (valid) return update;

	const checkedPages: number[] = [];

	let isValid = true;
	for (const page of update) {
		const intersection = getIntersection(
			checkedPages,
			rules.get(page) || [],
		);
		checkedPages.push(page);
		if (intersection) {
			const currentIdx = update.indexOf(page);
			const interIdx = update.indexOf(intersection);
			update[currentIdx] = intersection;
			update[interIdx] = page;
			isValid = false;
			break;
		}
	}

	return fixInvalidUpdate(update, isValid, ++loop);
}

const fixedInvalidUpdates = updates.map((update) => fixInvalidUpdate(update))
	.filter((x) => x.length);

console.log(sumMiddlePageNumbers(fixedInvalidUpdates));
