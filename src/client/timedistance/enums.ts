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
				return new NumericRange(10, 15);
			case TravellingMethod.Horseback:
				return new NumericRange(20, 30);
			case TravellingMethod.HorsebackFreshHorses:
				return new NumericRange(30, 45);
			case TravellingMethod.Boat:
				return new NumericRange(24, 48);
		}
	}

	public static GetTerrainModifier(terrain: Terrain): number {
		switch (terrain) {
			case Terrain.Easy:
				return 1;
			case Terrain.Medium:
				return 0.9;
			case Terrain.Hard:
				return 0.8;
			case Terrain.Extreme:
				return 0.5;
		}
	}

	public static GetWeatherModifier(weather: Weather): number {
		switch (weather) {
			case Weather.BlueSkies:
				return 1;
			case Weather.Rain:
				return 0.9;
			case Weather.Snow:
				return 0.66;
			case Weather.Extreme:
				return 0.50;
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
	Easy,
	/**
	 * Some wilderness travel, less calm seas
	 * -10%
	 */
	Medium,
	/**
	 * Mostly wilderness travel, stormy seas
	 * -33%
	 */
	Hard,
	/**
	 * Mountain traversal, hurricane seas
	 * -50%
	 */
	Extreme,
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
