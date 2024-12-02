import { removeExtraWhitespace, splitByLines } from "../utils/textInput.ts";

const MAX_DISTANCE = 3;

const input = await Deno.readTextFileSync("./src/day2/input1.txt");

const reports = splitByLines(input)
	.map(removeExtraWhitespace)
	.map((line) => line.split(" ").map((n) => parseInt(n)));

function isValid(
	isIncreasing: boolean,
	firstNumber: number,
	secondNumber: number,
) {
	if (Math.abs(secondNumber - firstNumber) > MAX_DISTANCE) return false;
	if (isIncreasing && secondNumber > firstNumber) return true;
	if (!isIncreasing && secondNumber < firstNumber) return true;
	return false;
}

const safeReports = reports.filter((report) => {
	const isIncreasing = report[0] < report[report.length - 1];

	let isReportValid = true;
	for (let i = 1; i < report.length; i++) {
		const previousNumber = report[i - 1];
		const currentNumber = report[i];
		if (!isValid(isIncreasing, previousNumber, currentNumber)) {
			isReportValid = false;
			break;
		}
	}
	return isReportValid;
});

console.log(safeReports.length);
