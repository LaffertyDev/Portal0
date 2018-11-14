import { IVCustomElement } from "./vcustomelement";

const template = document.createElement("template");
template.innerHTML = `
	<ul id="clock" class="clock clock-parchment">
	</ul>
`;

const style = document.createElement("style");
// tslint:disable:max-line-length
style.textContent = 
`
	.clock {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: black;
		list-style: none;
		padding: 0;
		position: relative;
		overflow: hidden;
	}

	.clock-parchment {
		background: 
			url(data:image/png;base64,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),
			radial-gradient(circle, rgba(223,205,135,1) 0%, rgba(0,0,0,1) 100%);
		border: 2px solid black;
	}

	.segment {
		top: 0;
		left: 0;
		padding: 0;
		margin: 0;
		width: 50%;
		height: 50%;
		position: absolute;
		transform-origin: 100% 100%;
		border: 1px solid #333028;
		box-sizing: border-box;

		background: url(data:image/png;base64,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);
  		background-color: #dfcd87;
	}

	.segment-covered {
		background-color: rgba(0,0,0,0);
	}
`;
// tslint:enable:max-line-length

/**
 * Inspiration:
 * 
 * http://dabblet.com/gist/3912488
 * http://www.custarddoughnuts.co.uk/article/2016/5/14/making-segmented-circles-and-pie-charts-in-css
 * https://blog.logrocket.com/new-in-chrome-69-building-progress-doughnut-charts-with-conical-gradients-356820b1d081
 * 
 * 
 * Behavior:
 * 
 * 1. User click sa segment, clock should "Shade" all of the segments to that segment
 * 2. 
 */
export class Clock extends HTMLElement implements IVCustomElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		shadow.appendChild(style.cloneNode(true));
		shadow.appendChild(template.content.cloneNode(true));
	}

	public static get observedAttributes() {
		return ["segments", "shaded"];
	}

	set shaded(value: number) {
		if (value > this.segments) {
			throw new Error("The number of shaded segments cannot be greater than the number of segments");
		}
		this.setAttribute("shaded", value.toString(10));
	}

	get shaded(): number {
		const shadedAttr = this.getAttribute("shaded");
		if (shadedAttr === null) {
			return 0;
		}

		return Number.parseInt(shadedAttr, 10);
	}

	set segments(value: number) {
		if (this.shaded > value) {
			this.shaded = value;
		}

		this.setAttribute("segments", value.toString(10));
	}

	get segments(): number {
		const numSegmentsAttr = this.getAttribute("segments");
		if (numSegmentsAttr === null) {
			throw new Error("Attribute cannot be null");
		}

		return Number.parseInt(numSegmentsAttr, 10);
	}

	// tslint:disable-next-line:no-empty
	public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
		switch (name) {
			case "segments":
				this.CreateSegments();
				break;
			case "shaded":
				this.SyncSegments();
				break;
		}
	}

	// tslint:disable-next-line:no-empty
	public connectedCallback(): void {
		this.UpgradeProperties();
	}

	// tslint:disable-next-line:no-empty
	public disconnectedCallback(): void {

	}

	private CreateSegments() {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root Cannot be Null");
		}

		const numberSegments = this.segments;
		const shadedSegment = this.shaded;

		const anglePerSegment = 360 / numberSegments;
		const skewAngle = 90 - anglePerSegment;
		
		const clockElement = this.shadowRoot.getElementById("clock") as HTMLElement;
		while (clockElement.firstChild) {
			clockElement.removeChild(clockElement.firstChild);
		}

		for (let x = 0; x < numberSegments; x++) {
			// clocks are offset by 90 degrees because we want it to start at noon
			const segmentAngle = (x * anglePerSegment) + 90;
			const segment = document.createElement("li");
			segment.classList.add("segment");
			segment.style.transform = `rotate(${segmentAngle}deg) skewX(${skewAngle}deg)`;
			if (x < shadedSegment) {
				segment.classList.add("segment-covered");
			}
			clockElement.appendChild(segment);
		}
	}
	

	private SyncSegments() {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root Cannot be Null");
		}

		const segments = this.shadowRoot.querySelectorAll("li");
		if (segments.length !== this.segments) {
			throw new Error("Synchronization Problem");
		}

		for (let x = 0; x < this.segments; x++) {
			if (x < this.shaded) {
				segments[x].classList.add("segment-covered");
			} else {
				segments[x].classList.remove("segment-covered");
			}
		}
	}

	private UpgradeProperties() {
		for (const prop of Clock.observedAttributes) {
			this.UpgradeProperty(prop);
		}
	}

	private UpgradeProperty(prop: any) {
		if (this.hasOwnProperty(prop)) {
			const value = (this as any)[prop];
			delete (this as any)[prop];
			(this as any)[prop] = value;
		}
	}
}

customElements.define("v-clock", Clock);
