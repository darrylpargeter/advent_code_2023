"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const utils_1 = require("../utils");
const CUBELIMITS = {
    RED: 12,
    GREEN: 13,
    BLUE: 14,
};
async function main() {
    const input = await (0, promises_1.readFile)(`./day${process.env.DAY}/input.txt`);
    const lines = (0, utils_1.readLines)(input);
    const games = lines.reduce((acc, curr) => {
        const id = (0, utils_1.get)(curr.match(/Game (\d{1,3}):/) || [], 1);
        if ((0, utils_1.isNull)(id))
            return acc;
        const games = (0, utils_1.get)(curr.split(':'), 1);
        return {
            ...acc,
            [id]: {
                sets: games
                    ?.trim()
                    ?.split(';')
                    .map((x) => x.trim().split(','))
            }
        };
    }, {});
    console.log(games[1]);
}
main();
