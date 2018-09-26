import { Point } from "./../position/point";
import { HexCoordinate } from "./../position/tilecoordinate";
import { Color } from "./color";
import { ITile } from "./itile";

export class Hex implements ITile<HexCoordinate> {
	constructor(public drawingPosition: Point, public coordinatePosition: HexCoordinate, public backgroundColor: Color) {

	}

	public Draw(canvas: CanvasRenderingContext2D): void {
		canvas.save();
		const triangles = this.triangulate();
		canvas.strokeStyle = "eee";
		for (const triangle of triangles) {
			this.drawTriangle(canvas, triangle);
		}
		/*
		canvas.beginPath();
		canvas.strokeStyle = this.backgroundColor.toString();

		canvas.beginPath();

		canvas.lineWidth = 2;
		canvas.arc(this.drawingPosition.x, this.drawingPosition.y, HexMetrics.innerRadius, 0, 2 * Math.PI);
		canvas.stroke();
		*/
		canvas.strokeStyle = "black";
		canvas.strokeText(this.coordinatePosition.toString(), this.drawingPosition.x - HexMetrics.innerRadius, this.drawingPosition.y);
		canvas.restore();
	}

	public GetCoordinates(): HexCoordinate {
		return this.coordinatePosition;
	}

	private drawTriangle(canvas: CanvasRenderingContext2D, vertices: Point[]) {
		if (vertices.length !== 3) {
			throw new Error("Error: Cannot draw a triangle that doesn't have exactly three points!");
		}

		canvas.beginPath();
		canvas.moveTo(vertices[0].x, vertices[0].y);
		canvas.lineTo(vertices[1].x, vertices[1].y);
		canvas.lineTo(vertices[2].x, vertices[2].y);
		canvas.strokeStyle = "#eee";
		canvas.closePath();
		canvas.stroke();
		// canvas.fill();
	}

	private triangulate(): Point[][] {
		const triangles: Point[][] = [];
		for (let x = 0; x < HexCorners.length - 1; x++) {
			const triangle = [
				this.drawingPosition,
				this.drawingPosition.addPoint(HexCorners[x]),
				this.drawingPosition.addPoint(HexCorners[x + 1]),
			];

			triangles.push(triangle);
		}

		return triangles;
	}
}

export const HexMetrics = {
	innerRadius: 50 * 0.866025404, // sqrt (3) / 2
	outerRadius: 50,
};

const HexCorners = [
	new Point(0, HexMetrics.outerRadius, 0),
	new Point(HexMetrics.innerRadius, 0.5 * HexMetrics.outerRadius, 0),
	new Point(HexMetrics.innerRadius, -0.5 * HexMetrics.outerRadius, 0),
	new Point(0, -HexMetrics.outerRadius, 0),
	new Point(-HexMetrics.innerRadius, -0.5 * HexMetrics.outerRadius, 0),
	new Point(-HexMetrics.innerRadius, 0.5 * HexMetrics.outerRadius, 0),
	new Point(0, HexMetrics.outerRadius, 0), // duplicate of hexcorner[0]
];
