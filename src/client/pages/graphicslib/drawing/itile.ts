import { Color } from './color';
import { IDrawingPiece2d } from './idrawable';
import { Point } from '../position/point';

export interface ITile<TCoordinate> extends IDrawingPiece2d {
    drawingPosition: Point;
    coordinatePosition: TCoordinate;
    backgroundColor: Color;

    GetCoordinates(): TCoordinate;
}
