export class Point {
    constructor(public x: number, public y: number, public z: number) {

    }

    addPoint(point: Point): Point {
        let newX, newY, newZ: number;
        newX = this.x + point.x;
        newY = this.y + point.y;
        newZ = this.z + point.z;

        return new Point(newX, newY, newZ);
    }

    toString(): string {
        return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}`;
    }
}