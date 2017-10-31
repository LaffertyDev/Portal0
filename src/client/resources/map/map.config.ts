import { Color } from './tile';
import { IDrawingPiece2d } from './idrawable';
export default class MapProps {
    Width: number;
    Height: number;

    BackgroundColor: Color;
    DrawingPieces: IDrawingPiece2d[];
}