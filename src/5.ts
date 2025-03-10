function calculateArea(shape: "square" | "rectangle", width: number, height: number): number {
    if (shape === "square") {
        return width * width;
    } else if (shape === "rectangle") {
        return width * height;
    } else {
        throw new Error("Invalid shape");
    }
}
