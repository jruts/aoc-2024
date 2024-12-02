import { removeExtraWhitespace, splitByLines } from "../utils/textInput.ts";

interface Dictionary<T> {
	[Key: number]: T;
}

type GroupLocationsInput = {
	groupOneLocations: number[];
	groupTwoMap: Dictionary<number>;
};

const input = await Deno.readTextFileSync("./src/day1/input1.txt");

const initialGroupLocations: GroupLocationsInput = {
	groupOneLocations: [],
	groupTwoMap: {},
};

const { groupOneLocations, groupTwoMap } = splitByLines(input).reduce(
	(acc, line) => {
		const [l, r] = removeExtraWhitespace(line).split(" ");
		acc.groupOneLocations.push(parseInt(l));

		const rightLocation = parseInt(r);
		if (!acc.groupTwoMap[rightLocation]) {
			acc.groupTwoMap[rightLocation] = 0;
		}
		acc.groupTwoMap[rightLocation] += 1;
		return acc;
	},
	initialGroupLocations,
);

const similarityScore = groupOneLocations.reduce((acc, location) => {
	const score = groupTwoMap[location] ? location * groupTwoMap[location] : 0;
	return acc + score;
}, 0);

console.log(similarityScore);
