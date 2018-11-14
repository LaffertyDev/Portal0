import { Clock } from "./clock";
import { IVCustomElement } from "./vcustomelement";

const template = document.createElement("template");
template.innerHTML = /*html*/`
	<h1 id="title">Some Title</h1>
	<v-clock id="asdf"></v-clock>
	<button id="add" type="button">+</button>
	<button id="subtract" type="button">-</button>
`;

const style = document.createElement("style");
style.textContent = `
	
`;

export class ProgressClock extends HTMLElement implements IVCustomElement {
	private clock: Clock;

	constructor(title?: string, segments?: number, shaded?: number) {
		super();

		title = title !== undefined ? title : this.title;
		segments = segments !== undefined ? segments : this.segments;
		shaded = shaded !== undefined ? shaded : this.shaded;

		const shadow = this.attachShadow({ mode: "open" });
		// shadow.appendChild(style);
		shadow.appendChild(template.content.cloneNode(true));
		this.clock = shadow.getElementById("asdf") as Clock;

		this.title = title;
		this.segments = segments;
		this.shaded = shaded;

		const addButton = shadow.getElementById("add") as HTMLButtonElement;
		addButton.addEventListener("pointerup", this.HandlePlusTick.bind(this), false);

		const subtractButton = shadow.getElementById("subtract") as HTMLButtonElement;
		subtractButton.addEventListener("pointerup", this.HandleMinusTick.bind(this), false);

		const titleElement = shadow.getElementById("title") as HTMLElement;
		titleElement.innerText = title;
	}

	public static get observedAttributes() {
		return ["segments", "shaded", "title"];
	}

	set segments(value: number) {
		this.clock.segments = value;
		this.setAttribute("segments", value.toString());
	}

	get segments(): number {
		// internal `clock` also has this attribute
		const segments = this.getAttribute("segments");
		if (segments === null) {
			throw new Error("Shaded cannot be null");
		}

		const segmentsNum = Number.parseInt(segments, 10);
		if (segmentsNum !== this.clock.segments) {
			throw new Error("State is out-of-sync");
		}

		return segmentsNum;
	}

	set shaded(value: number) {
		this.clock.shaded = value;
		this.setAttribute("shaded", value.toString());
	}

	get shaded(): number {
		// internal `clock` also has this attribute
		const shaded = this.getAttribute("shaded");
		if (shaded === null) {
			throw new Error("Shaded cannot be null");
		}

		const shadedNum = Number.parseInt(shaded, 10);
		if (shadedNum !== this.clock.shaded) {
			throw new Error("State is out-of-sync");
		}

		return shadedNum;
	}

	set title(value: string) {
		this.setAttribute("title", value);
	}

	get title(): string {
		const title = this.getAttribute("title");
		if (title === null) {
			throw new Error("Title cannot be null");
		}

		return title;
	}

	// tslint:disable-next-line:no-empty
	public attributeChangedCallback(): void {

	}

	// tslint:disable-next-line:no-empty
	public connectedCallback(): void {

	}

	public disconnectedCallback(): void {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root Cannot be Null");
		}

		const addButton = this.shadowRoot.getElementById("add") as HTMLButtonElement;
		const subtractButton = this.shadowRoot.getElementById("subtract") as HTMLButtonElement;
		addButton.removeEventListener("pointerup", this.HandlePlusTick);
		subtractButton.removeEventListener("pointerup", this.HandleMinusTick);
	}

	public HandleMinusTick(): void {
		if (this.shaded === 0) {
			return;
		}
		
		this.shaded--;
	}

	public HandlePlusTick(): void {
		if (this.shaded >= this.segments) {
			return;
		}
		
		this.shaded++;
	}
}

customElements.define("v-progress-clock", ProgressClock);
