"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = exports.get = exports.tail = exports.head = exports.sum = exports.readLines = void 0;
function readLines(input) {
    return input.toString().split('\n');
}
exports.readLines = readLines;
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
exports.sum = sum;
function head(arr) {
    return arr[0];
}
exports.head = head;
function tail(arr) {
    return arr[arr.length - 1];
}
exports.tail = tail;
function get(arr, idx) {
    return arr?.[idx] ?? null;
}
exports.get = get;
function isNull(item) {
    return item === null;
}
exports.isNull = isNull;
