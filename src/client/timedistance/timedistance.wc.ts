import { Load, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";

export interface ITravelSettings {
	Load: Load;
	Method: TravellingMethod;
	Pace: TravellingPace;
	Terrain: Terrain;
	Weather: Weather;
}

export class TimeDistance {
	constructor() {
		//
	}
}

customElements.define("v-time-distance", TimeDistance);
