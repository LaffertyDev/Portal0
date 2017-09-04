import * as React from "react";
import * as ReactDOM from "react-dom";


export default class Map extends React.Component<void, void> {
    private canvas: HTMLCanvasElement;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);
    }

    render() {
        return (
            <div>
                <canvas ref={(canvas) => {this.canvas = canvas}}>Use an up-to-date browser</canvas>
            </div>
        );
    }
}