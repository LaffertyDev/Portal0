import { VUtils } from "../worldbuilder/utils";
import { Load, ModifierMapping, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";
import { TimeDistanceCalculator } from "./timedistancecalculator";

export interface ITravelSettings {
	Load: Load;
	Method: TravellingMethod;
	Pace: TravellingPace;
	Terrain: Terrain;
	Weather: Weather;
}

export class TimeDistance {
	constructor() {
		const form = document.getElementById("travelform") as HTMLFormElement;
		const formInputs = form.querySelectorAll("input");
		for (const formInput of formInputs) {
			formInput.addEventListener("change", this.HandleFormChange.bind(this));
		}

		this.HandleFormChange();
	}

	private HandleFormChange() {
		const formData = new FormData(document.getElementById("travelform") as HTMLFormElement);
		const isDeterminingDistance = formData.get("timedistancepicker") !== "Distance";
		const isKm = formData.get("distancemeasurement") === "Kilometers";
		const distance = formData.get("distanceinput");
		const daysTravelled = formData.get("timeinput");
		const weather = formData.get("travelweather");
		const method = formData.get("travelmethod");
		const load = formData.get("travelcapacity");
		const pace = formData.get("travelspeed");
		const difficulty = formData.get("traveldifficulty");

		if (typeof(weather) !== "string") {
			throw new Error();
		}
		if (typeof(method) !== "string") {
			throw new Error();
		}
		if (typeof(load) !== "string") {
			throw new Error();
		}
		if (typeof(pace) !== "string") {
			throw new Error();
		}
		if (typeof(difficulty) !== "string") {
			throw new Error();
		}

		const timeInput = document.getElementById("timeinput") as HTMLElement;
		const distanceInput = document.getElementById("distanceinput") as HTMLElement;
		if (isDeterminingDistance) {
			// We know time, hide the distance input
			timeInput.style.display = null;
			distanceInput.style.display = "none";
		} else {
			// hide distance output
			timeInput.style.display = "none";
			distanceInput.style.display = null;
		}
		const distanceUnitSpan = document.getElementById("distance_unit") as HTMLElement;
		distanceUnitSpan.innerText = isKm ? "km" : "miles";

		const parsedWeather = Number.parseInt(weather as string, 10) as Weather;
		const parsedMethod = Number.parseInt(method as string, 10) as TravellingMethod;
		const parsedLoad = Number.parseInt(load as string, 10) as Load;
		const parsedPace = Number.parseInt(pace as string, 10) as TravellingPace;
		const parsedTerrain = Number.parseInt(difficulty as string, 10) as Terrain;

		const calculator = new TimeDistanceCalculator();
		const modifier = calculator.ComputeRangeModifier({
			Load: parsedLoad,
			Method: parsedMethod,
			Pace: parsedPace,
			Terrain: parsedTerrain,
			Weather: parsedWeather,
		});

		const kmPerDay = ModifierMapping.GetMethodRange(parsedMethod).GetResult(false) * modifier;

		let parsedDistanceKM: number;
		let parsedDaysTravelled: number;
		if (isDeterminingDistance) {
			parsedDaysTravelled = Number.parseFloat(daysTravelled as string);
			parsedDistanceKM =  calculator.ComputeDistanceFromTime(parsedDaysTravelled, kmPerDay);
		} else {
			parsedDistanceKM = Number.parseFloat(distance as string);
			if (!isKm) {
				// user typed in miles, but we treat base is km
				// so convert their mile input to KM
				parsedDistanceKM = parsedDistanceKM * 1.609;
			}
			parsedDaysTravelled = calculator.ComputeTimeFromDistance(parsedDistanceKM, kmPerDay);
		}

		this.synchronizedistancetime(parsedDistanceKM, isKm, parsedDaysTravelled);
	}

	private synchronizedistancetime(distanceKm: number, isMetric: boolean, time: number): void {
		const standardizedDistance = VUtils.prettyPrintRounded(isMetric ? distanceKm : distanceKm * 0.621371);
		const outputElement = document.getElementById("tdoutput") as HTMLOutputElement;
		const standardizedTime = VUtils.prettyPrintRounded(time);
		outputElement.innerText = `
			My destination is ${ standardizedDistance } ${ isMetric ? "km" : "miles" } away and it will take ${ standardizedTime } days to get there.`;
	}

	public static prettyPrintRounded(val: number, decimalPrecision: number = 3): string {
		return parseFloat(val.toFixed(decimalPrecision)).toLocaleString();
	}
}

const td = new TimeDistance();
