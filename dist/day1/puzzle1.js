"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const utils_1 = require("../utils");
const utils_2 = require("./utils");
async function main() {
    const input = await (0, promises_1.readFile)(`./day${process.env.DAY}/input.txt`);
    const lines = (0, utils_1.readLines)(input);
    const linesAsNumbers = lines
        .map(utils_2.formatLine)
        .map(utils_2.combineNumbers)
        .map(utils_2.convertToNumber);
    const output = (0, utils_1.sum)(linesAsNumbers);
    console.log(`day ${process.env.DAY} puzzle 1: `, output);
}
main();
