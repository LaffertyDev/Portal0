import { Point } from './../position/point';
import { Tile } from './itile';
import { IDrawingPiece2d } from "./idrawable";

export class Hex implements Tile {
    BackgroundColor: 'blue';

    constructor(public Position: Point) {

    }

    Draw(canvas: CanvasRenderingContext2D): void {
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = this.BackgroundColor;
        canvas.lineWidth = 2;
        canvas.arc(this.Position.x, this.Position.y, 10, 0, 2 * Math.PI);
        canvas.stroke();
        canvas.restore();
    }
}

export class HexMetrics {
    outerRadius: number = 10;
    innerRadius: number = this.outerRadius * 0.866025404; //sqrt (3) / 2

    corners: Point[] = [
        new Point(0, 0, this.outerRadius),
		new Point(this.innerRadius, 0, 0.5 * this.outerRadius),
		new Point(this.innerRadius, 0, -0.5 * this.outerRadius),
		new Point(0, 0, -this.outerRadius),
		new Point(-this.innerRadius, 0, -0.5 * this.outerRadius),
		new Point(-this.innerRadius, 0, 0.5 * this.outerRadius)
    ]
}