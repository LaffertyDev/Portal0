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
	}

	private HandleFormChange(change: Event) {
		const formData = new FormData(document.getElementById("travelform") as HTMLFormElement);
		const isKm = formData.get("distancemeasurement") === "Kilometers";
		const isDeterminingDistance = true;
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

		const kmPerDay = ModifierMapping.GetMethodRange(parsedMethod).GetResult() * modifier;

		let distance: number;
		let daysTravelled: number;

		if (isDeterminingDistance) {
			daysTravelled = Number.parseFloat(formData.get("timeinput") as string);
			distance =  calculator.ComputeDistanceFromTime(daysTravelled, kmPerDay);
		} else {
			distance = Number.parseFloat(formData.get("distancemeasurement") as string);
			daysTravelled = calculator.ComputeTimeFromDistance(distance, kmPerDay);
		}

		if (!isKm) {
			distance = distance * 0.621371; // KM to mile conversion
		}
		
		this.synchronizedistancetime(distance, daysTravelled);
	}

	private synchronizedistancetime(distance: number, time: number): void {
		const distanceInput = document.getElementById("distanceinput") as HTMLInputElement;
		distanceInput.value = TimeDistance.prettyPrintRounded(distance, 1);
		const timeInput = document.getElementById("timeinput") as HTMLInputElement;
		timeInput.value = TimeDistance.prettyPrintRounded(time, 1);
	}

	public static prettyPrintRounded(val: number, decimalPrecision: number = 3): string {
		return parseFloat(val.toFixed(decimalPrecision)).toLocaleString();
	}
}

const td = new TimeDistance();
