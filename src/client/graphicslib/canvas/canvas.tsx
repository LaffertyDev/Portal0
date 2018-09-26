import * as React from "react";
import { ICanvasConfig } from "./canvas-config";


export class Canvas extends React.Component<ICanvasConfig, {}> {
	private canvas!: HTMLCanvasElement;

	constructor(props: ICanvasConfig) {
		super(props);
	}

	public componentDidMount() {
		const ctx = this.canvas.getContext("2d");
		if (ctx === null) {
			throw new Error();
		}

		ctx.fillStyle = this.props.BackgroundColor.Color;
		ctx.fillRect(0, 0, 1280, 768);

		for (const drawable of this.props.DrawingPieces) {
			drawable.Draw(ctx);
		}
	}

	public render() {
		return (
			<div>
				<canvas width={this.props.Width} height={this.props.Height} ref={(canvas) => { this.canvas = canvas as HTMLCanvasElement; }}>
					Use an up-to-date browser
				</canvas>
			</div>
		);
	}
}
