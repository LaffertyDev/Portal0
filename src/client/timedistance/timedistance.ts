import { Load, ModifierMapping, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";
import { TimeDistanceCalculator } from "./timedistancecalculator";

export interface ITravelSettings {
	Load: Load;
	Method: TravellingMethod;
	Pace: TravellingPace;
	Terrain: Terrain;
	Weather: Weather;
}

const formTemplate = // html
`
<form id="travelform">
	<fieldset>
		<legend>Unit of Measurement</legend>
		<ul>
			<li>
				<label for="milesunit">
					Miles
				</label>
				<input name="distancemeasurement" id="milesunit" type="radio" value="Miles" />
			</li>
			<li>
				<label for="kilometersunit">
					Kilometers
				</label>
				<input name="distancemeasurement" id="kilome tersunit" type="radio" value="Kilometers" checked />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>Time or Distance</legend>
		<ul>
			<li>
				<label for="distanceinput">
					How far is your destination?
				</label>
				<input name="distanceinput" id="distanceinput" type="number" placeholder="Enter a Distance" step="0.1" min="0"
				 value="80" />
			</li>
			<li>
				<label for="timeinput">
					How long does it take to get there?
				</label>
				<input name="timeinput" id="timeinput" type="number" placeholder="Enter a Time" step="0.1" min="0" value="4" />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>How are you travelling?</legend>
		<ul>
			<li>
				<label for="speedwalking">
					Walking
				</label>
				<input name="travelmethod" id="speedwalking" type="radio" value="0" checked />
			</li>
			<li>
				<label for="speedhorse">
					Horseback
				</label>
				<input name="travelmethod" id="speedhorse" type="radio" value="1" />
			</li>
			<li>
				<label for="speedhorsefresh">
					Horseback (Fresh Horses)
				</label>
				<input name="travelmethod" id="speedhorsefresh" type="radio" value="2" />
			</li>
			<li>
				<label for="speedboat">
					Boat
				</label>
				<input name="travelmethod" id="speedboat" type="radio" value="3" />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>How quickly are you travelling</legend>
		<ul>
			<li>
				<label for="speedslow">
					Slow
				</label>
				<input name="travelspeed" id="speedslow" type="radio" value="0" />
			</li>
			<li>
				<label for="speednormal">
					Normal
				</label>
				<input name="travelspeed" id="speednormal" type="radio" value="1" checked />
			</li>
			<li>
				<label for="speedfast">
					Fast
				</label>
				<input name="travelspeed" id="speedfast" type="radio" value="2" />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>How difficult is the terrain?</legend>
		<ul>
			<li>
				<label for="difficultyeasy">
					Paved Road
				</label>
				<input name="traveldifficulty" id="difficultyeasy" type="radio" value="0" checked />
			</li>
			<li>
				<label for="difficultynormal">
					Travelled Path
				</label>
				<input name="traveldifficulty" id="difficultynormal" type="radio" value="1" />
			</li>
			<li>
				<label for="difficultyhard">
					Wilderness
				</label>
				<input name="traveldifficulty" id="difficultyhard" type="radio" value="2" />
			</li>
			<li>
				<label for="difficultyveryhard">
					Mountainous
				</label>
				<input name="traveldifficulty" id="difficultyveryhard" type="radio" value="3" />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>How heavy are you travelling?</legend>
		<ul>
			<li>
				<label for="weightlight">
					Small Pack
				</label>
				<input name="travelcapacity" id="weightlight" type="radio" value="0" />
			</li>
			<li>
				<label for="weightnormal">
					Adventure
				</label>
				<input name="travelcapacity" id="weightnormal" type="radio" value="1" checked />
			</li>
			<li>
				<label for="weighthigh">
					Small Caravan
				</label>
				<input name="travelcapacity" id="weighthigh" type="radio" value="2" />
			</li>
			<li>
				<label for="weightveryhigh">
					Large Caravan
				</label>
				<input name="travelcapacity" id="weightveryhigh" type="radio" value="3" />
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>Weather</legend>
		<ul>
			<li>
				<label for="weatherclear">
					Blue Skies
				</label>
				<input name="travelweather" id="weatherclear" type="radio" value="0" checked />
			</li>
			<li>
				<label for="weatherrain">
					Rain
				</label>
				<input name="travelweather" id="weatherrain" type="radio" value="1" />
			</li>
			<li>
				<label for="weathersnow">
					Snow
				</label>
				<input name="travelweather" id="weathersnow" type="radio" value="2" />
			</li>
			<li>
				<label for="weatherextreme">
					Extreme
				</label>
				<input name="travelweather" id="weatherextreme" type="radio" value="3" />
			</li>
		</ul>
	</fieldset>
</form>

`;

export class TimeDistance extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		const template = document.createElement("template");
		template.innerHTML = formTemplate;
		shadow.appendChild(template.content.cloneNode(true));

		const form = shadow.getElementById("travelform") as HTMLFormElement;
		const formInputs = form.querySelectorAll("input");
		for (const formInput of formInputs) {
			formInput.addEventListener("change", this.HandleFormChange.bind(this));
		}
	}

	private HandleFormChange(change: Event) {
		if (this.shadowRoot === null) {
			throw new Error();
		}
		const formData = new FormData(this.shadowRoot.getElementById("travelform") as HTMLFormElement);
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
		if (this.shadowRoot === null) {
			throw new Error();
		}
		const distanceInput = this.shadowRoot.getElementById("distanceinput") as HTMLInputElement;
		distanceInput.value = TimeDistance.prettyPrintRounded(distance, 1);
		const timeInput = this.shadowRoot.getElementById("timeinput") as HTMLInputElement;
		timeInput.value = TimeDistance.prettyPrintRounded(time, 1);
	}

	public static prettyPrintRounded(val: number, decimalPrecision: number = 3): string {
		return parseFloat(val.toFixed(decimalPrecision)).toLocaleString();
	}
}

customElements.define("v-time-distance", TimeDistance);
