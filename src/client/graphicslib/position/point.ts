export class Point {
	constructor(public x: number, public y: number, public z: number) {

	}

	public addPoint(point: Point): Point {
		// tslint:disable-next-line:one-variable-per-declaration
		let newX, newY, newZ: number;
		newX = this.x + point.x;
		newY = this.y + point.y;
		newZ = this.z + point.z;

		return new Point(newX, newY, newZ);
	}

	public toString(): string {
		return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}`;
	}
}
