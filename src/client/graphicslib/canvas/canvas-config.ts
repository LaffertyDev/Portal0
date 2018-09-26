import { IDrawingPiece2d } from './../drawing/idrawable';
import { Color } from '../drawing/color';


export class CanvasConfig {
    Width: number;
    Height: number;

    BackgroundColor: Color;
    DrawingPieces: IDrawingPiece2d[];
}