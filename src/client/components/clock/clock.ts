import { IVCustomElement } from "./vcustomelement";

const template = document.createElement("template");
template.innerHTML = `
	<ul id="clock" class="clock">
	</ul>
`;

const style = document.createElement("style");
style.textContent = `
	.clock {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: black;
		list-style: none;
		padding: 0;
		position: relative;
		overflow: hidden;
	}

	.segment {
		top: 0;
		left: 0;
		padding: 0;
		margin: 0;
		width: 50%;
		height: 50%;
		position: absolute;
		background-color: blue;
		transform-origin: 100% 100%;
	}

	.segment-covered {
		background-color: red;
	}
`;


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
