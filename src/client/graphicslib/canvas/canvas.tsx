import * as React from "react";
import * as ReactDOM from "react-dom";
import { CanvasConfig } from "./canvas-config";


export class Canvas extends React.Component<CanvasConfig, {}> {
    private canvas: HTMLCanvasElement;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = this.props.BackgroundColor.Color;
        ctx.fillRect(0, 0, 1280, 768);

        for(let drawable of this.props.DrawingPieces) {
            drawable.Draw(ctx);
        }
    }

    render() {
        return (
            <div>
                <canvas width={this.props.Width} height={this.props.Height} ref={(canvas) => {this.canvas = canvas}}>Use an up-to-date browser</canvas>
            </div>
        );
    }
}