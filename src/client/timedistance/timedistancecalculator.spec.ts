import { Load, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";
import { ITravelSettings } from "./timedistance.wc";
import { TimeDistanceCalculator } from "./timedistancecalculator";

describe("time distance calculator", () => {
	test("should output correct results", () => {
		// arrange
		const settings: ITravelSettings = {
			Load: Load.Medium,
			Method: TravellingMethod.Walking,
			Pace: TravellingPace.Normal,
			Terrain: Terrain.Medium,
			Weather: Weather.BlueSkies,
		};

		const tdc = new TimeDistanceCalculator();
		// act
		const kmPerDay = tdc.ComputeRangeModifier(settings);

		// assert
		expect(kmPerDay).toBe(0.81);
	});

	test("should determine time correctly", () => {
		// arrange
		const distanceKm = 20;
		const kmPerDay = 10;

		const tdc = new TimeDistanceCalculator();
		// act
		const daysTravelled = tdc.ComputeTimeFromDistance(distanceKm, kmPerDay);

		// assert
		expect(daysTravelled).toBe(2);
	});

	test("should determine distance correctly", () => {
		// arrange
		const daysTravelling = 6;
		const kmPerDay = 10;

		const tdc = new TimeDistanceCalculator();
		// act
		const distanceKm = tdc.ComputeDistanceFromTime(daysTravelling, kmPerDay);

		// assert
		expect(distanceKm).toBe(60);
	});
});
