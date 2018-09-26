import { Color } from "../drawing/color";
import { IDrawingPiece2d } from "./../drawing/idrawable";


export interface ICanvasConfig {
	BackgroundColor: Color;
	DrawingPieces: IDrawingPiece2d[];
	Height: number;
	Width: number;
}
