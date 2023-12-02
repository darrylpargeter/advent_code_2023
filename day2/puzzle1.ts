import { readFile } from 'fs/promises';
import { get, isNull, readLines } from '../utils';

const CUBELIMITS = {
    RED: 12,
    GREEN: 13,
    BLUE: 14,
} as const;

async function main() {
    const input = await readFile(`./day${process.env.DAY}/input.txt`);
    const lines = readLines(input);
    
    const games = lines.reduce((acc, curr) => {
      const id = get(curr.match(/Game (\d{1,3}):/) || [], 1);
      if (isNull(id)) return acc;

      const games = get(curr.split(':'), 1);

      return {
        ...acc,
        [id as string]: {
          sets: games
            ?.trim()
            ?.split(';')
            .map((x) => x.trim().split(','))
        }
      };
    }, {});

    console.log(games);
}

main();
