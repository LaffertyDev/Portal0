import * as React from "react";
import * as ReactDOM from "react-dom";
import { Canvas } from "../graphicslib/canvas/canvas";
import { Color } from "../graphicslib/drawing/color";
import { Hex, HexMetrics } from "../graphicslib/drawing/hex";
import { IDrawingPiece2d } from "../graphicslib/drawing/idrawable";
import { Point } from "../graphicslib/position/point";
import { HexCoordinate } from "../graphicslib/position/tilecoordinate";

interface IBattlemapState {
	BackgroundColor: Color;
	Pieces: IDrawingPiece2d[];
}

class BattleMap extends React.Component<object, IBattlemapState> {
	constructor(props: object) {
		super(props);
		this.state = {
			BackgroundColor: new Color("white"),
			Pieces: [],
		};

		for (let x = 0; x < 10; x++) {
			for (let y = 0; y < 10; y++) {
				this.state.Pieces.push(this.createHex(x, y));
			}
		}
	}

	public render() {
		return (
			<div>
				<Canvas BackgroundColor={this.state.BackgroundColor} Width={1024} Height={768} DrawingPieces={this.state.Pieces} />
			</div>
		);
	}

	private createHex(x: number, y: number): Hex {
		const halfHexInteger = Math.floor(y / 2);
		const worldX: number = 50 + (x + y * 0.5 - halfHexInteger) * (HexMetrics.innerRadius * 2);
		const worldY: number = 50 + y * (HexMetrics.outerRadius * 1.5);

		const worldPosition = new Point(worldX, worldY, 0);
		const coordX = Math.round(x - y / 2);
		const coordinatePosition = new HexCoordinate(coordX, y, -x - y);
		const newHex = new Hex(worldPosition, coordinatePosition, new Color("blue"));

		return newHex;
	}
}

ReactDOM.render(
	React.createElement(BattleMap),
	document.getElementById("reactApp"),
);
