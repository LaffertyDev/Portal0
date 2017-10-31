import { Color } from './color';
import { IDrawingPiece2d } from './idrawable';
import { Point } from '../position/point';

export interface Tile extends IDrawingPiece2d {
    Position: Point;
    BackgroundColor: Color;
}
