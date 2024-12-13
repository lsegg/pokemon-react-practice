export function generateRandomIntegers(count: number, limit: number): number[] {
    if (count <= 0) {
        throw new Error("Count must be a positive number.");
    }
    if (limit <= 0) {
        throw new Error("Limit must be a positive number.");
    }

    const randomIntegers: number[] = [];
    for (let i = 0; i < count; i++) {
        randomIntegers.push(Math.floor(Math.random() * limit));
    }
    return randomIntegers;
}

export function sumArray(arr: number[]): number {
        return arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
    },0);
}