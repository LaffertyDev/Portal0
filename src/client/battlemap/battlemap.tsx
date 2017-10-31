import * as React from "react";
import * as ReactDOM from "react-dom";
import Map from "../resources/map/map";
import MapProps from "../resources/map/map.config";
import { IDrawingPiece2d } from '../resources/map/idrawable';
import { Color } from '../resources/map/tile';

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
                <Map BackgroundColor={this.state.BackgroundColor} Width={1024} Height={768} DrawingPieces={[]} />
            </div>
        );
    }
}

ReactDOM.render(    
    React.createElement(BattleMap),
    document.getElementById("reactApp")
);