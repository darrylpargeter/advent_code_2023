"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineNumbers = exports.convertToNumber = exports.formatLine = exports.isNumericChar = void 0;
const utils_1 = require("../utils");
function isNumericChar(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}
exports.isNumericChar = isNumericChar;
function formatLine(line) {
    return line.split('').filter(isNumericChar);
}
exports.formatLine = formatLine;
function convertToNumber(char) {
    return Number(char);
}
exports.convertToNumber = convertToNumber;
function combineNumbers(line) {
    return [(0, utils_1.head)(line), (0, utils_1.tail)(line)].join('');
}
exports.combineNumbers = combineNumbers;
