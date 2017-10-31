import * as React from "react";
import * as ReactDOM from "react-dom";
import { IDrawingPiece2d } from "../graphicslib/drawing/idrawable";
import { Color } from "../graphicslib/drawing/color";
import { Canvas } from "../graphicslib/canvas/canvas";
import { Hex } from "../graphicslib/drawing/tile";
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
                let hexPoint = new Point(x*30, y*30, 0);
                let newHex = new Hex(hexPoint, new Color('blue'));
                this.state.Pieces.push(newHex);
            }
        }
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