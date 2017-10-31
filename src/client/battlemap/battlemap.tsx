import * as React from "react";
import * as ReactDOM from "react-dom";
import { IDrawingPiece2d } from "../graphicslib/drawing/idrawable";
import { Color } from "../graphicslib/drawing/color";
import { Canvas } from "../graphicslib/canvas/canvas";

interface BattlemapState {
    BackgroundColor: Color;
    Pieces: IDrawingPiece2d[];
}

class BattleMap extends React.Component<{}, BattlemapState> {
    constructor(props) {
        super(props);
        this.state = { 
            BackgroundColor: new Color('blue'),
            Pieces: []
        };
    }

    render() {
        return (
            <div>
                <Canvas BackgroundColor={this.state.BackgroundColor} Width={1024} Height={768} DrawingPieces={[]} />
            </div>
        );
    }
}

ReactDOM.render(    
    React.createElement(BattleMap),
    document.getElementById("reactApp")
);