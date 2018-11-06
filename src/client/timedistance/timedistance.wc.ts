import { Load, ModifierMapping, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";

interface ITravelForm {
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

	public ComputeDistanceFromTime(timeDays: number, kmPerDay: number): number {
		return timeDays * kmPerDay;
	}

	public ComputeKilometersPerDay(details: ITravelForm): number {
		const methodBaseRange = ModifierMapping.GetMethodRange(details.Method);
		const loadModifier = ModifierMapping.GetLoadModifier(details.Load);
		const paceModifier = ModifierMapping.GetPaceModifier(details.Pace);
		const terrainModifier = ModifierMapping.GetTerrainModifier(details.Terrain);
		const weatherModifier = ModifierMapping.GetWeatherModifier(details.Weather);

		const bundledModifiers = loadModifier * paceModifier * terrainModifier * weatherModifier;
		const kmPerDay = methodBaseRange.GetResult() * bundledModifiers;
		return kmPerDay;
	}

	public ComputeTimeFromDistance(distanceKm: number, kmPerDay: number): number {
		return distanceKm / kmPerDay;
	}
}

customElements.define("v-time-distance", TimeDistance);
