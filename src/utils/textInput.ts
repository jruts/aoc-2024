export function splitByLines(text: string): string[] {
	return text.split(/\r?\n/);
}

export function removeExtraWhitespace(text: string): string {
	return text.replace(/\s+/g, " ").trim();
}
