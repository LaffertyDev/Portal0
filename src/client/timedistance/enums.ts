import { NumericRange } from "./range";

export class ModifierMapping {
	public static GetLoadModifier(load: Load): number {
		switch (load) {
			case Load.Light:
				return 1;
			case Load.Medium:
				return 0.9;
			case Load.Heavy:
				return 0.8;
			case Load.VeryHeavy:
				return 0.7;
		}
	}
	
	public static GetPaceModifier(pace: TravellingPace): number {
		switch (pace) {
			case TravellingPace.Slow:
				return 0.5;
			case TravellingPace.Normal:
				return 1;
			case TravellingPace.Fast:
				return 1.5;
		}
	}

	public static GetMethodRange(method: TravellingMethod): NumericRange {
		switch (method) {
			case TravellingMethod.Walking:
				// https://writemedieval.livejournal.com/4706.html
				// assuming average of 2-3 mph for 8 hours a day
				// people DID NOT travel at night
				return new NumericRange(15, 25);
			case TravellingMethod.Horseback:
				return new NumericRange(25, 35);
			case TravellingMethod.HorsebackFreshHorses:
				return new NumericRange(30, 50);
			case TravellingMethod.Boat:
				return new NumericRange(24, 48);
		}
	}

	public static GetTerrainModifier(terrain: Terrain): number {
		switch (terrain) {
			case Terrain.PavedRoad:
				return 1;
			case Terrain.TravelledPath:
				return 0.9;
			case Terrain.Wilderness:
				return 0.8;
			case Terrain.Mountainous:
				return 0.5;
		}
	}

	public static GetWeatherModifier(weather: Weather): number {
		switch (weather) {
			case Weather.BlueSkies:
				return 1;
			case Weather.Rain:
				return 0.7;
			case Weather.Snow:
				// snow is both very difficult to traverse in AND it reduces active daylight significantly
				return 0.5;
			case Weather.Extreme:
				return 0.333;
		}
	}
}

export enum TravellingPace {
	/**
	 * -50%, +comfort, +weight capacity, +stealth
	 */
	Slow,
	/**
	 * -0%
	 */
	Normal,
	/**
	 * +50%, -comfort, -weight, -stealth
	 */
	Fast,
}

export enum Load {
	/**
	 * A small pack, 0%
	 */
	Light,
	/**
	 * Adventuring gear, normal equipment, -10%
	 */
	Medium,
	/**
	 * Small trade caravan, -20%
	 */
	Heavy,
	/**
	 * Large trade caravan, -33%
	 */
	VeryHeavy,
}

export enum Terrain {
	/**
	 * Extremely well travelled road, calm seas
	 * -0%
	 */
	PavedRoad,
	/**
	 * Some wilderness travel, less calm seas
	 * -10%
	 */
	TravelledPath,
	/**
	 * Mostly wilderness travel, stormy seas
	 * -33%
	 */
	Wilderness,
	/**
	 * Mountain traversal, hurricane seas
	 * -50%
	 */
	Mountainous,
}

export enum TravellingMethod {
	/**
	 * 10-15 mmiles / day on average
	 */
	Walking,
	/**
	 * 30 - 40 miles / day on average
	 */
	Horseback,
	/**
	 * 20-30 miles
	 */
	HorsebackFreshHorses,
	/**
	 * 24-48 nautical miles / day on average
	 * 4-6 knots with wind
	 * 2-4 knots against the wind
	 */
	Boat,
}

export enum Weather {
	/**
	 * -0%
	 */
	BlueSkies,
	/**
	 * -10%
	 */
	Rain,
	/**
	 * -33%
	 */
	Snow,
	/**
	 * -50%
	 */
	Extreme,
}
