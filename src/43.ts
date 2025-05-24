function calculateArea(radius: number): number {
    const area = Math.PI * radius * radius;
    return area;
}

// Example usage
const radius = 5;
console.log(`The area of the circle with a radius of ${radius} is: ${calculateArea(radius)}`);
