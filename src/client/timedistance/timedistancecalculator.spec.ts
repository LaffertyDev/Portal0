import { Load, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";
import { ITravelSettings } from "./timedistance";
import { TimeDistanceCalculator } from "./timedistancecalculator";

describe("time distance calculator", () => {
	test("should output correct results", () => {
		// arrange
		const settings: ITravelSettings = {
			Load: Load.Medium,
			Method: TravellingMethod.Walking,
			Pace: TravellingPace.Normal,
			Terrain: Terrain.TravelledPath,
			Weather: Weather.BlueSkies,
		};

		// act
		const kmPerDay = TimeDistanceCalculator.ComputeRangeModifier(settings);

		// assert
		expect(kmPerDay).toBe(0.81);
	});

	test("should determine time correctly", () => {
		// arrange
		const distanceKm = 20;
		const kmPerDay = 10;

		// act
		const daysTravelled = TimeDistanceCalculator.ComputeTimeFromDistance(distanceKm, kmPerDay);

		// assert
		expect(daysTravelled).toBe(2);
	});

	test("should determine distance correctly", () => {
		// arrange
		const daysTravelling = 6;
		const kmPerDay = 10;

		// act
		const distanceKm = TimeDistanceCalculator.ComputeDistanceFromTime(daysTravelling, kmPerDay);

		// assert
		expect(distanceKm).toBe(60);
	});
});
