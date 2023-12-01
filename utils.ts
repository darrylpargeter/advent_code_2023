export function readLines(input: ArrayBuffer) {
    return input.toString().split('\n');
}

export function sum(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export function head<T>(arr: T[]): T | undefined {
    return arr[0];
} 

export function tail<T>(arr: T[]):  T | undefined {
    return arr[arr.length - 1];
} 
