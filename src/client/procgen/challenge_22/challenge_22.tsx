import * as React from "react";
import * as ReactDOM from "react-dom";
import { Color } from "../../graphicslib/drawing/color";
import { Canvas } from "../../graphicslib/canvas/canvas";

interface Challenge_22State {
    DiseaseBackground: Color;
}

class Challenge_22 extends React.Component<void, Challenge_22State> {
    constructor(props) {
        super(props);

        this.state = {
            DiseaseBackground: new Color('orange')
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Procedural Generator Challenge #22 <small>Virus, Bacteria, Fungi</small></h3>
                </div>
                <hr/>
                <div>
                    <p>Virus / Bacteria / Fungal generator visual thing goes here!</p>
                    <Canvas BackgroundColor={this.state.DiseaseBackground} Width={768} Height={1024} DrawingPieces={[]} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(    
    React.createElement(Challenge_22),
    document.getElementById("Challenge22")
);