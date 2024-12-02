import { removeExtraWhitespace, splitByLines } from "../utils/textInput.ts";

type GroupLocationsInput = {
	groupOneLocations: number[];
	groupTwoLocations: number[];
};

const input = await Deno.readTextFileSync("./src/day1/input1.txt");

const initialGroupLocations: GroupLocationsInput = {
	groupOneLocations: [],
	groupTwoLocations: [],
};

const { groupOneLocations, groupTwoLocations } = splitByLines(input).reduce(
	(acc, line) => {
		const [l, r] = removeExtraWhitespace(line).split(" ");
		acc.groupOneLocations.push(parseInt(l));
		acc.groupTwoLocations.push(parseInt(r));
		return acc;
	},
	initialGroupLocations,
);

const [sortedGroupOneLocations, sortedGroupTwoLocations] = [
	groupOneLocations.sort(),
	groupTwoLocations.sort(),
];

const totalDistanceBetweenLocations = sortedGroupOneLocations.reduce(
	(acc, location, idx) => {
		// console.log(Math.abs(location - sortedGroupTwoLocations[idx]));
		return acc + Math.abs(location - sortedGroupTwoLocations[idx]);
	},
	0,
);

console.log(totalDistanceBetweenLocations);
