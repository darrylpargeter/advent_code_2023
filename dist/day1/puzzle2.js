"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const utils_1 = require("../utils");
const utils_2 = require("./utils");
const re = /(?=(one|two|three|four|five|six|seven|eight|nine))/g;
const wordsToNum = {
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
    const input = await (0, promises_1.readFile)(`./day${process.env.DAY}/input.txt`);
    const lines = (0, utils_1.readLines)(input);
    const tmp = lines.map((line) => {
        const first = [...line.matchAll(re)]
            .map((x) => x[1])
            .reduce((acc, str, idx) => {
            if (!str)
                return acc;
            if (!wordsToNum?.[str])
                return acc;
            const rep = idx > 0 ? str.slice(1) : str;
            return acc?.replace(rep, wordsToNum[str]);
        }, line);
        return first;
    });
    console.log(tmp);
    const linesAsNumbers = tmp
        .map(utils_2.formatLine)
        .map(utils_2.combineNumbers)
        .filter((x) => x.length)
        .map(utils_2.convertToNumber);
    linesAsNumbers
        .forEach((x, idx) => console.log({ numbers: x, line: tmp[idx], org: lines[idx] }));
    const output = (0, utils_1.sum)(linesAsNumbers);
    console.log(`day ${process.env.DAY} puzzle 2: `, output);
}
main();
