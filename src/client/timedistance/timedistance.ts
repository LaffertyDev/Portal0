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
	public static Init() {
		const form = document.getElementById("travelform") as HTMLFormElement;
		const formInputs = form.querySelectorAll("input");
		for (const formInput of formInputs) {
			formInput.addEventListener("change", TimeDistance.HandleFormChange);
		}

		TimeDistance.HandleFormChange();
	}

	public static HandleFormChange() {
		const formData = new FormData(document.getElementById("travelform") as HTMLFormElement);
		const isKm = formData.get("distancemeasurement") === "Kilometers";
		const isDeterminingDistance = formData.get("timedistancepicker") !== "Distance";

		const travelSettings = TimeDistance.GetTravelSettingsFromForm(formData);

		// everything below this is pure
		const kmPerDay = TimeDistance.GetKmPerDay(travelSettings);

		let parsedDistanceKM: number;
		let parsedDaysTravelled: number;
		if (isDeterminingDistance) {
			const daysTravelled = formData.get("timeinput");
			parsedDaysTravelled = Number.parseFloat(daysTravelled as string);
			parsedDistanceKM = TimeDistanceCalculator.ComputeDistanceFromTime(parsedDaysTravelled, kmPerDay);
		} else {
			const distance = formData.get("distanceinput");
			parsedDistanceKM = Number.parseFloat(distance as string);
			if (!isKm) {
				// user typed in miles, but we treat base is km
				// so convert their mile input to KM
				parsedDistanceKM = parsedDistanceKM * 1.609;
			}
			parsedDaysTravelled = TimeDistanceCalculator.ComputeTimeFromDistance(parsedDistanceKM, kmPerDay);
		}

		// everything above is pure
		TimeDistance.synchronizedistancetime(parsedDistanceKM, isKm, parsedDaysTravelled, isDeterminingDistance);
	}

	private static GetKmPerDay(travelSettings: ITravelSettings): number {
		return ModifierMapping.GetMethodRange(travelSettings.Method).GetResult(false) * TimeDistanceCalculator.ComputeRangeModifier(travelSettings);
	}

	private static GetTravelSettingsFromForm(formData: FormData): ITravelSettings {
		const weather = formData.get("travelweather");
		const method = formData.get("travelmethod");
		const load = formData.get("travelcapacity");
		const pace = formData.get("travelspeed");
		const difficulty = formData.get("traveldifficulty");

		if (typeof (weather) !== "string") {
			throw new Error();
		}
		if (typeof (method) !== "string") {
			throw new Error();
		}
		if (typeof (load) !== "string") {
			throw new Error();
		}
		if (typeof (pace) !== "string") {
			throw new Error();
		}
		if (typeof (difficulty) !== "string") {
			throw new Error();
		}

		const parsedWeather = Number.parseInt(weather as string, 10) as Weather;
		const parsedMethod = Number.parseInt(method as string, 10) as TravellingMethod;
		const parsedLoad = Number.parseInt(load as string, 10) as Load;
		const parsedPace = Number.parseInt(pace as string, 10) as TravellingPace;
		const parsedTerrain = Number.parseInt(difficulty as string, 10) as Terrain;

		return {
			Load: parsedLoad,
			Method: parsedMethod,
			Pace: parsedPace,
			Terrain: parsedTerrain,
			Weather: parsedWeather,
		};
	}

	private static synchronizedistancetime(distanceKm: number, isMetric: boolean, timeDays: number, isDeterminingDistance: boolean): void {
		// synchronize km / miles
		const distanceUnitSpan = document.getElementById("distance_unit") as HTMLElement;
		distanceUnitSpan.innerText = isMetric ? "km" : "miles";

		// synchronize time / distance input
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

		const outputElement = document.getElementById("tdoutput") as HTMLOutputElement;
		if (!isNaN(distanceKm) && !isNaN(timeDays) && distanceKm >= 0 && timeDays >= 0) {
			outputElement.style.visibility = null;
			// synchronize output
			const standardizedDistance = VUtils.prettyPrintRounded(isMetric ? distanceKm : distanceKm * 0.621371);
			const standardizedTime = VUtils.prettyPrintRounded(timeDays);
			// tslint:disable-next-line:max-line-length
			outputElement.innerHTML = `My destination is <strong>${standardizedDistance} ${isMetric ? "km" : "miles"}</strong> away and it will take <strong>${standardizedTime} days</strong> to get there.`;
		} else {
			outputElement.style.visibility = "hidden";
		}
	}
}

TimeDistance.Init();
