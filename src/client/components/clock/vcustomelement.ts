
/**
 * https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 * 
 * https://www.webcomponents.org/community/articles/web-components-best-practices
 * 
 * https://developers.google.com/web/fundamentals/web-components/best-practices
 * 
 * Note: Remember to add in "observedAttributes"
 * 
 * Behaviors:
 * 
 * Order for callbacks:
 * 1. Constructor
 * 2. AttributeChangedCallback
 * 3. ConnectedCallback
 */
export interface IVCustomElement {
	/**
	 * Invoked when one of the custom element's attributes is added, removed, or changed.
	 */
	attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
	/**
	 * Invoked when the custom element is first connected to the document's DOM.
	 */
	connectedCallback(): void;

	/**
	 * Invoked when the custom element is disconnected from the document's DOM.
	 */
	disconnectedCallback(): void;

	/**
	 * Invoked when the custom element is moved to a new document.
	 * 
	 * https://stackoverflow.com/questions/50995139/when-does-webcomponent-adoptedcallback-fire
	 * 
	 * TL&DR, don't worry about implementing this
	 */
	// adoptedCallback(): void;

}

/**
 * Example Custom Element for Copying and Pasting:
 * 
 */

// import { IVCustomElement } from "./vcustomelement";

// const template = document.createElement("template");
// template.innerHTML = `
// 	<div>
// 	</div>
// `;

// const style = document.createElement("style");
// style.textContent = `
// `;

// export class MyCustomElement extends HTMLElement implements IVCustomElement {
// 	constructor() {
// 		super();

// 		const shadow = this.attachShadow({ mode: "open" });
// 		shadow.appendChild(style.cloneNode(true));
// 		shadow.appendChild(template.content.cloneNode(true));
// 	}

// 	// tslint:disable-next-line:no-empty
// 	public attributeChangedCallback(): void {

// 	}

// 	// tslint:disable-next-line:no-empty
// 	public connectedCallback(): void {

// 	}

// 	// tslint:disable-next-line:no-empty
// 	public disconnectedCallback(): void {

// 	}
// }

// customElements.define("my-custom-element", MyCustomElement);
