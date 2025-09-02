import { applyOperation, multiply, divide } from "../day_4/applyOperationFunction.js";

describe("Verify the function applyOperation(a,b,callback)", () => {
    test("Test with multiply", async () => {
        const multiply = (a, b) => a * b;
        await expect(applyOperation(1, 2, multiply)).toBe(2);
    });

    test("Test with divide", async () => {
        const divide = (a, b) => a / b;
        await expect(applyOperation(4, 2, divide)).toBe(2);
    }); 
});