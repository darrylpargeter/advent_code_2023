"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
function readLines(input) {
    return input.toString().split('\n');
}
function isNumericChar(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}
function formatLine(line) {
    return line.split('').filter(isNumericChar).map(convertToNumber);
}
function convertToNumber(char) {
    return Number(char);
}
function head(arr) {
    return arr[0];
}
function tail(arr) {
    return arr[arr.length - 1];
}
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
function hasLength(length) {
    return (arr) => arr.length >= length;
}
async function main() {
    const input = await (0, promises_1.readFile)(`./day${process.env.DAY}/input.txt`);
    const lines = readLines(input);
    const linesAsNumbers = lines
        .map(formatLine)
        .map((line) => [head(line), tail(line)].join(''))
        .map(Number);
    const output = sum(linesAsNumbers);
    console.log(`day ${process.env.DAY} puzzle 1: `, output);
}
main();
