import { Load, Terrain, TravellingMethod, TravellingPace, Weather } from "./enums";

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
		<label for="milesunit">
			Miles
		</label>
		<input name="distancemeasurement" id="milesunit" type="radio" value="Miles" />
		<label for="kilometersunit">
			Kilometers
		</label>
		<input name="distancemeasurement" id="kilome tersunit" type="radio" value="Kilometers" checked />
	</fieldset>
	<fieldset>
		<legend>Time or Distance</legend>
		<label for="distanceinput">
			How far is your destination?
		</label>
		<input name="distanceinput" id="distanceinput" type="number" placeholder="Enter a Distance" />
		<label for="timeinput">
			How long does it take to get there?
		</label>
		<input name="timeinput" id="timeinput" type="number" placeholder="Enter a Time" />
	</fieldset>
	<fieldset>
		<legend>How are you travelling?</legend>
		<label for="speedwalking">
			Walking
		</label>
		<input name="travelmethod" id="speedwalking" type="radio" value="Walking" checked/>
		<label for="speedhorse">
			Horseback
		</label>
		<input name="travelmethod" id="speedhorse" type="radio" value="Horseback" />
		<label for="speedhorsefresh">
			Horseback (Fresh Horses)
		</label>
		<input name="travelmethod" id="speedhorsefresh" type="radio" value="HorsebackFreshHorses" />
		<label for="speedboat">
			Boat
		</label>
		<input name="travelmethod" id="speedboat" type="radio" value="Boat" />
	</fieldset>
	<fieldset>
		<legend>How quickly are you travelling</legend>
		<label for="speedslow">
			Slow
		</label>
		<input name="travelspeed" id="speedslow" type="radio" value="Slow" />
		<label for="speednormal">
			Normal
		</label>
		<input name="travelspeed" id="speednormal" type="radio" value="Normal" checked/>
		<label for="speedfast">
			Fast
		</label>
		<input name="travelspeed" id="speedfast" type="radio" value="Fast" />
	</fieldset>
	<fieldset>
		<legend>How difficult is the terrain?</legend>
		<label for="difficultyeasy">
			Paved Road
		</label>
		<input name="traveldifficulty" id="difficultyeasy" type="radio" value="Easy" checked />
		<label for="difficultynormal">
			Travelled Path
		</label>
		<input name="traveldifficulty" id="difficultynormal" type="radio" value="Normal" />
		<label for="difficultyhard">
			Wilderness
		</label>
		<input name="traveldifficulty" id="difficultyhard" type="radio" value="Hard" />
		<label for="difficultyveryhard">
			Mountainous
		</label>
		<input id="difficultyveryhard" type="radio" value="VeryHard" />
	</fieldset>
	<fieldset>
		<legend>How heavy are you travelling?</legend>
		<label for="weightlight">
			Small Pack
		</label>
		<input name="travelcapacity" id="weightlight" type="radio" value="Light" />
		<label for="weightnormal">
			Adventure
		</label>
		<input name="travelcapacity" id="weightnormal" type="radio" value="Normal" checked/>
		<label for="weighthigh">
			Small Caravan
		</label>
		<input name="travelcapacity" id="weighthigh" type="radio" value="High" />
		<label for="weightveryhigh">
			Large Caravan
		</label>
		<input name="travelcapacity" id="weightveryhigh" type="radio" value="VeryHigh" />
	</fieldset>
	<fieldset>
		<legend>Weather</legend>
		<label for="weatherclear">
			Blue Skies
		</label>
		<input name="travelweather" id="weatherclear" type="radio" value="Clear" checked />
		<label for="weatherrain">
			Rain
		</label>
		<input name="travelweather" id="weatherrain" type="radio" value="Rain" />
		<label for="weathersnow">
			Snow
		</label>
		<input name="travelweather" id="weathersnow" type="radio" value="Snow" />
		<label for="weatherextreme">
			Extreme
		</label>
		<input name="travelweather" id="weatherextreme" type="radio" value="Extreme" />
	</fieldset>
</form>`;

export class TimeDistance extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		const template = document.createElement("template");
		template.innerHTML = formTemplate;
		shadow.appendChild(template);

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
		
		console.log(isKm, weather, method, load, pace, difficulty);
	}
}

customElements.define("v-time-distance", TimeDistance);
