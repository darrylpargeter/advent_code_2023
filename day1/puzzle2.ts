import { readFile } from 'fs/promises';
import { head, readLines, sum } from '../utils';
import { combineNumbers, convertToNumber, formatLine } from './utils';

const re = /(?=(one|two|three|four|five|six|seven|eight|nine))/g;

const wordsToNum: Record<string, string> = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
};

async function main() {
    const input = await readFile(`./day${process.env.DAY}/input.txt`);
    const lines = readLines(input);

    const tmp = lines.map((line) => {
        const first = [...line.matchAll(re)]
            .map((x) => x[1])
            .reduce((acc, str, idx) => {
                if (!str) return acc;
                if (!wordsToNum?.[str]) return acc;

                const rep = idx > 0 ? str.slice(1) : str;
                return acc?.replace(rep, wordsToNum[str]);
            }, line);
        return first;
    });
    console.log(tmp)

    const linesAsNumbers = tmp 
        .map(formatLine)
        .map(combineNumbers)
        .filter((x) => x.length)
        .map(convertToNumber)

    linesAsNumbers
        .forEach((x, idx) => console.log({numbers: x, line: tmp[idx], org: lines[idx]}))

    const output = sum(linesAsNumbers);

    console.log(`day ${process.env.DAY} puzzle 2: `, output);
}

main();
