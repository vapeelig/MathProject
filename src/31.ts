function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function calculateArea(radius: number, height: number): number {
    const area = Math.PI * radius * radius;
    const areaPerSide = 2 * Math.PI * radius;
    return area - areaPerSide;
}
