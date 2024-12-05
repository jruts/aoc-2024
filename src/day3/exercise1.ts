const input = await Deno.readTextFileSync("./src/day3/input1.txt");

export function calculateTotal(input: string) {
	const REGEX = /mul\((\d+),(\d+)\)/g;

	const multiplicationNumbers = Array.from(input.matchAll(REGEX)).map((
		match,
	) => ({
		first: parseInt(match[1]),
		second: parseInt(match[2]),
	}));

	return multiplicationNumbers.reduce(
		(acc, { first, second }) => {
			return acc + first * second;
		},
		0,
	);
}

console.log(calculateTotal(input));
