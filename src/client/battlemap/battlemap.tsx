import * as React from "react";
import * as ReactDOM from "react-dom";
import { IDrawingPiece2d } from "../graphicslib/drawing/idrawable";
import { Color } from "../graphicslib/drawing/color";
import { Canvas } from "../graphicslib/canvas/canvas";
import { Hex, HexMetrics } from "../graphicslib/drawing/hex";
import { Point } from "../graphicslib/position/point";

interface BattlemapState {
    BackgroundColor: Color;
    Pieces: IDrawingPiece2d[];
}

class BattleMap extends React.Component<{}, BattlemapState> {
    constructor(props) {
        super(props);
        this.state = { 
            BackgroundColor: new Color('red'),
            Pieces: []
        };

        for(let x = 0; x < 10; x++) {
            for(let y = 0; y < 10; y++) {
                this.state.Pieces.push(this.createHex(x,y));
            }
        }
    }

    private createHex(x: number, y: number): Hex {
        let halfHexInteger = Math.floor(y / 2);
        let worldX: number = (x + y * 0.5 - halfHexInteger) * (HexMetrics.innerRadius * 2);
        let worldY: number = y * (HexMetrics.outerRadius * 1.5);

        let worldPosition = new Point(worldX, worldY, 0);
        let coordinatePosition = new Point(x, y, 0);
        let newHex = new Hex(worldPosition, coordinatePosition, new Color('blue'));

        return newHex;
    }

    render() {
        return (
            <div>
                <Canvas BackgroundColor={this.state.BackgroundColor} Width={1024} Height={768} DrawingPieces={this.state.Pieces} />
            </div>
        );
    }
}

ReactDOM.render(    
    React.createElement(BattleMap),
    document.getElementById("reactApp")
);