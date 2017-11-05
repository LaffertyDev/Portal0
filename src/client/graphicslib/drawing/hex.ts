import { ITileCoordinate, HexCoordinate } from './../position/tilecoordinate';
import { Color } from './color';
import { Point } from './../position/point';
import { ITile } from './itile';
import { IDrawingPiece2d } from "./idrawable";

export class Hex implements ITile<HexCoordinate> {
    constructor(public drawingPosition: Point, public coordinatePosition: HexCoordinate, public backgroundColor: Color) {

    }

    Draw(canvas: CanvasRenderingContext2D): void {
        canvas.save();
        let triangles = this.triangulate();
        canvas.strokeStyle = 'eee';
        for(let triangle of triangles) {
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
        canvas.strokeStyle = 'black';
        canvas.strokeText(this.coordinatePosition.toString(), this.drawingPosition.x - HexMetrics.innerRadius, this.drawingPosition.y);
        canvas.restore();
    }

    GetCoordinates(): HexCoordinate {
        return this.coordinatePosition;
    }

    private triangulate(): Point[][] {
        let triangles: Point[][] = [];
        for(let x = 0; x < HexCorners.length-1; x++) {
            let triangle = [
                this.drawingPosition,
                this.drawingPosition.addPoint(HexCorners[x]),
                this.drawingPosition.addPoint(HexCorners[x+1])
            ];

            triangles.push(triangle);
        }

        return triangles;
    }

    private drawTriangle(canvas: CanvasRenderingContext2D, vertices: Point[]) {
        if(vertices.length !== 3) {
            throw new Error("Error: Cannot draw a triangle that doesn't have exactly three points!");
        }

        canvas.beginPath();
        canvas.moveTo(vertices[0].x, vertices[0].y);
        canvas.lineTo(vertices[1].x, vertices[1].y);
        canvas.lineTo(vertices[2].x, vertices[2].y);
        canvas.strokeStyle = '#eee';
        canvas.closePath();
        canvas.stroke();
        //canvas.fill();
    }
}

export const HexMetrics = {
    outerRadius: 50,
    innerRadius: 50 * 0.866025404 //sqrt (3) / 2
};

const HexCorners = [
    new Point(0, HexMetrics.outerRadius, 0),
    new Point(HexMetrics.innerRadius, 0.5 * HexMetrics.outerRadius, 0),
    new Point(HexMetrics.innerRadius, -0.5 * HexMetrics.outerRadius, 0),
    new Point(0, -HexMetrics.outerRadius, 0),
    new Point(-HexMetrics.innerRadius, -0.5 * HexMetrics.outerRadius, 0),
    new Point(-HexMetrics.innerRadius, 0.5 * HexMetrics.outerRadius, 0),
    new Point(0, HexMetrics.outerRadius, 0) //duplicate of hexcorner[0]
]