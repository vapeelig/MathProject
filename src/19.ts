function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}
