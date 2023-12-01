import { head, tail } from "../utils";

export function isNumericChar(char: string): boolean {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}

export function formatLine(line: string): string[] {
    return line.split('').filter(isNumericChar);
}

export function convertToNumber(char: string): number {
    return Number(char);
}

export function combineNumbers(line: string[]): string {
    return [head(line), tail(line)].join('');
}
