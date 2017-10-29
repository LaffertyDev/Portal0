import * as React from "react";
import * as ReactDOM from "react-dom";
import * as critterstuff from "../../procgen/challenge_22/models/critter"


export default class Map extends React.Component<{}, {}> {
    private canvas: HTMLCanvasElement;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = 'orange';
        ctx.fillRect(0, 0, 1280, 768);

        var critter = new critterstuff.DrawingPiece(50, 50);
        critter.Draw(ctx);
        var critter2 = new critterstuff.DrawingPiece(100, 100);
        critter2.Draw(ctx);
    }

    render() {
        return (
            <div>
                <canvas width="1280px" height="768px" ref={(canvas) => {this.canvas = canvas}}>Use an up-to-date browser</canvas>
            </div>
        );
    }
}