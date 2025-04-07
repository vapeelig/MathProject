function calculateSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}

function findMaxValue(numbers: number[]): number {
    if (numbers.length === 0 || numbers[0] < 0) {
        throw new Error("The array is empty or contains non-positive values.");
    }
    let maxValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
}

function sortArray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}
