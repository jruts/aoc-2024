import { rules, sumMiddlePageNumbers, updates } from "./exercise1.ts";

function getIntersection(a: number[], b: number[]) {
	const s = new Set<number>(b);
	return [...new Set<number>(a)].filter((x) => s.has(x));
}

// const invalidUpdates: number[][] = [];

// for (const update of updates) {
// 	let isValid = false;
// 	const checkedPages: number[] = [];
// 	for (const page of update) {
// 		const intersection = getIntersection(
// 			checkedPages,
// 			rules.get(page) || [],
// 		);
// 		if (intersection.length) {
// 			console.log(intersection);
// 			isValid = true;
// 			break;
// 		}
// 		checkedPages.push(page);
// 	}
// 	if (isValid) {
// 		invalidUpdates.push(update);
// 	}
// }

function fixInvalidUpdates(update: number[], loop: number = 0) {
	const checkedPages: number[] = [];

	let isValid = true;
	for (const page of update) {
		const intersection = getIntersection(
			checkedPages,
			rules.get(page) || [],
		);
		if (intersection.length) {
			const currentIdx = update.indexOf(page);
			const interIdx = update.indexOf(intersection[0]);
			update[currentIdx] = intersection[0];
			update[interIdx] = page;
			isValid = false;
			break;
		}
		checkedPages.push(page);
	}

	if (isValid && loop === 0) return [];
	if (!isValid) {
		return fixInvalidUpdates(update, ++loop);
	} else {
		return update;
	}
}

const fixedInvalidUpdates = updates.map((update) =>
	fixInvalidUpdates(update, 0)
).filter((x) => x.length);

console.log(sumMiddlePageNumbers(fixedInvalidUpdates));
