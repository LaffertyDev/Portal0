import { NumericRange } from "./range";

describe("numeric range component", () => {
	test("random valid ranges are valid", () => {
		// arrange
		const ranges = [
			new NumericRange(1, 2),
			new NumericRange(-5, 5),
			new NumericRange(0, 100),
			new NumericRange(200, 400),
			new NumericRange(3, 4),
			new NumericRange(10, 15),
		];
		
		for (const range of ranges) {
			// act
			const rangeResult = range.GetResult(true);

			// assert
			expect(rangeResult).toBeGreaterThan(range.Min);
			expect(rangeResult).toBeLessThan(range.Max);
		}
	});

	test("average valid ranges are valid", () => {
		// arrange
		const ranges = [
			new NumericRange(1, 2),
			new NumericRange(-5, 5),
			new NumericRange(0, 100),
			new NumericRange(200, 400),
			new NumericRange(3, 4),
			new NumericRange(10, 15),
		];
		
		for (const range of ranges) {
			// act
			const rangeResult = range.GetResult(false);

			// assert
			const average = (range.Max + range.Min) / 2;
			expect(rangeResult).toEqual(average);
		}
	});
});
