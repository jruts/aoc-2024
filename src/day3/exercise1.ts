const input = await Deno.readTextFileSync("./src/day3/input1.txt");

const REGEX = /mul\(\d+,\d+\)/g;
const validMultiplicationData = Array.from(input.matchAll(REGEX)).map((match) =>
	match[0]
).join(" ");

const MULTIPLICATION_NUMBERS_REGEX = /(?<nr1>\d+),(?<nr2>\d+)/g;
const validNumbersData = Array.from(
	validMultiplicationData.matchAll(MULTIPLICATION_NUMBERS_REGEX),
).map((match) => ({
	first: parseInt(match[1]),
	second: parseInt(match[2]),
})) as { first: number; second: number }[];

const result = validNumbersData.reduce(
	(acc, { first, second }) => {
		return acc + first * second;
	},
	0,
);
console.log(result);
