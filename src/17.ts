function calculateSum(numbers: number[]): number {
  let sum = 0;
  
  numbers.forEach((number) => {
    if (typeof number === "number") {
      sum += number;
    }
  });

  return sum;
}

// Example usage:
const myNumbers = [1, 2, 3, 4, 5];
console.log(calculateSum(myNumbers)); // Output: 15
