import { readFile } from 'fs/promises';
import { readLines, sum } from '../utils';
import { combineNumbers, convertToNumber, formatLine } from './utils';

async function main() {
    const input = await readFile(`./day${process.env.DAY}/input.txt`);
    const lines = readLines(input);
    const linesAsNumbers = lines
    .map(formatLine)
    .map(combineNumbers)
    .map(convertToNumber);

    const output = sum(linesAsNumbers);

    console.log(`day ${process.env.DAY} puzzle 1: `, output);
}

main();
