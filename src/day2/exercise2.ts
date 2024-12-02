import { removeExtraWhitespace, splitByLines } from "../utils/textInput.ts";

const MAX_DISTANCE = 3;
const FAULT_TOLERANCE = 1;

const input = await Deno.readTextFileSync("./src/day2/input1.txt");

const reports = splitByLines(input)
	.map(removeExtraWhitespace)
	.map((line) => line.split(" ").map((n) => parseInt(n)));

function isValid(
	report: number[],
	firstNumber: number,
	secondNumber: number,
) {
	const isIncreasing = report[0] < report[report.length - 1];

	if (Math.abs(secondNumber - firstNumber) > MAX_DISTANCE) return false;
	if (isIncreasing && secondNumber > firstNumber) return true;
	if (!isIncreasing && secondNumber < firstNumber) return true;
	return false;
}

function validateReport(report: number[], tries = 0): boolean {
	if (tries > FAULT_TOLERANCE) {
		return false;
	}

	for (let i = 1; i < report.length; i++) {
		const previousNumber = report[i - 1];
		const currentNumber = report[i];
		if (!isValid(report, previousNumber, currentNumber)) {
			const tmpReport1 = [...report];
			tmpReport1.splice(i - 1, 1);
			const tmpReport2 = [...report];
			tmpReport2.splice(i, 1);

			return validateReport(tmpReport1, tries + 1) ||
				validateReport(tmpReport2, tries + 1);
		}
	}

	return true;
}

const safeReports = reports.filter((report) => validateReport(report));

console.log(safeReports.length);
