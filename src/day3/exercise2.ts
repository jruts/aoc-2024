import { calculateTotal } from "./exercise1.ts";

const input = await Deno.readTextFileSync("./src/day3/input1.txt");

// We basically filter out everything that's between don't and do.
// Then we can reuse the exact same logic from exercise 1 (day 3)
const cleanInput = input.split("don't()").map((x, idx) => {
	const y = x.split("do()");
	// the first entry is from don't to do, so we can remove it,
	// except for the first entry (idx = 0)
	if (idx) y.splice(0, 1);
	return y.join("");
}).join("");

console.log(calculateTotal(cleanInput));
