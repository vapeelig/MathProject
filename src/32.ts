function squareRoot(x: number): number {
  const sqrt = Math.sqrt(x);
  if (sqrt < 0) throw new Error("Input must be non-negative.");
  
  return sqrt;
}
