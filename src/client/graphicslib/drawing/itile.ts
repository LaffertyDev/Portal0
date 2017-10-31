import { Color } from './color';
import { IDrawingPiece2d } from './idrawable';
import { Point } from '../position/point';

export interface ITile extends IDrawingPiece2d {
    drawingPosition: Point;
    backgroundColor: Color;
}
