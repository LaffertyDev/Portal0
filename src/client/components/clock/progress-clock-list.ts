import { ProgressClock } from "./progress-clock";
import { IVCustomElement } from "./vcustomelement";

const template = document.createElement("template");
template.innerHTML = `
	<ol id="clocklist" class="clocklist">
	</ol>
	<form id="createClock">
		<h1>Create New Clock</h1>
		<div>
			<label labelFor="clockName">
				Clock Name
			</label>
			<input type="text" id="clockName" />
		</div>
		<div>
			<label labelFor="clockSegments">
				Segments
			</label>
			<input type="number" id="clockSegments"/>
		</div>
		<button type="submit">Create Clock</button>
	</form>
`;

const style = document.createElement("style");
style.textContent = `
	.clocklist {
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

/**
 * Responsible for displaying all of the progress clocks available in the ProgressClockService
 */
export class ProgressClockList extends HTMLElement implements IVCustomElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		shadow.appendChild(style.cloneNode(true));
		shadow.appendChild(template.content.cloneNode(true));

		for (let x = 0; x < 3; x++) {
			const title = `Clock ${x}`;
			const clock = new ProgressClock(title, 8, x);
			this.addClock(clock);
		}

		const form = shadow.getElementById("createClock") as HTMLFormElement;
		form.addEventListener("submit", this.HandleCreateClockFormSubmit.bind(this), false);
	}

	public static GetFormFieldValue(shadowRoot: ShadowRoot, id: string): string {
		return (shadowRoot.getElementById(id) as HTMLInputElement).value;
	}

	// tslint:disable-next-line:no-empty
	public attributeChangedCallback(): void {
		// removeButton.removeEventListener("pointerup", this.HandleRemoveClick);
	}

	// tslint:disable-next-line:no-empty
	public connectedCallback(): void {

	}

	// tslint:disable-next-line:no-empty
	public disconnectedCallback(): void {

	}

	public HandleCreateClockFormSubmit(event: Event) {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root cannot be null");
		}

		event.preventDefault();
		const title = ProgressClockList.GetFormFieldValue(this.shadowRoot, "clockName");
		const segmentCount = Number.parseInt(ProgressClockList.GetFormFieldValue(this.shadowRoot, "clockSegments"), 10);
		const clock = new ProgressClock(title, segmentCount, 0);
		this.addClock(clock);
		return false;
	}

	public HandleRemoveClick(event: PointerEvent): void {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root cannot be null");
		}

		// get parent of button
		// that parent is the node to be deleted
		const eventParent = (event.target as HTMLElement).parentElement as HTMLElement;
		const clockList = this.shadowRoot.getElementById("clocklist") as HTMLOListElement;
		(event.target as HTMLElement).removeEventListener("pointerup", this.HandleRemoveClick);
		clockList.removeChild(eventParent);
	}

	private addClock(clock: ProgressClock): void {
		if (this.shadowRoot === null) {
			throw new Error("Shadow Root cannot be null");
		}

		const clockList = this.shadowRoot.getElementById("clocklist") as HTMLOListElement;
		const li = document.createElement("li");
		const removeButton = document.createElement("button");
		removeButton.innerText = "X";
		removeButton.addEventListener("pointerup", this.HandleRemoveClick.bind(this), false);
		li.appendChild(clock);
		li.appendChild(removeButton);
		clockList.appendChild(li);
	}
}

customElements.define("v-progress-clock-list", ProgressClockList);
