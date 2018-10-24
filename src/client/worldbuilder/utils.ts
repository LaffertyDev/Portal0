
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

	public static groupBy<T>(list: T[], keyGetter: (arg: T) => string): Map<string, T[]> {
		const map = new Map<string, T[]>();
		list.forEach((item) => {
			const key = keyGetter(item);
			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});

		return map;
	}
}
