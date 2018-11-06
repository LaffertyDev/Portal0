export class NumericRange {
	constructor(public Min: number, public Max: number) {
		if (Min > Max) {
			throw new Error("Min cannot be greater than max");
		}
	}

	public GetResult(): number {
		return (this.Max - this.Min) * Math.random() + this.Min;
	}
}
