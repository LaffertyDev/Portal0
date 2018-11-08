export class NumericRange {
	constructor(public Min: number, public Max: number) {
		if (Min > Max) {
			throw new Error("Min cannot be greater than max");
		}
	}

	public GetResult(useRandom: boolean): number {
		if (useRandom) {
			return (this.Max - this.Min) * Math.random() + this.Min;
		} else {
			return (this.Max + this.Min) / 2;
		}
	}
}
