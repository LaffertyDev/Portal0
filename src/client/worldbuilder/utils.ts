export class VUtils {

	public static prettyPrintPercent(val: number): string {
		return parseFloat((val * 100).toPrecision(3)).toLocaleString();
	}

	public static prettyPrintRounded(val: number): string {
		return parseFloat(val.toPrecision(3)).toLocaleString();
	}

	public static sum(a: number, b: number): number {
		return a + b;
	}
}
