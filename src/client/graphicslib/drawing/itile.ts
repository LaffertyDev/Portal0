import { Point } from "../position/point";
import { Color } from "./color";
import { IDrawingPiece2d } from "./idrawable";

export interface ITile<TCoordinate> extends IDrawingPiece2d {
	backgroundColor: Color;
	coordinatePosition: TCoordinate;
	drawingPosition: Point;

	GetCoordinates(): TCoordinate;
}
