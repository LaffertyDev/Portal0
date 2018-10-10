import * as React from "react";
import { RegionModel } from "./region";
import { RegionGenConfig } from "./regiongenconfig";
import { RegionGenerator } from "./regiongenerator";

interface IRegionFormProp {
	onFormSubmit: (region: RegionModel) => any;
}

/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
export default class RegionForm extends React.Component<IRegionFormProp, RegionGenConfig> {
	public regionGenerator: RegionGenerator;

	constructor(props: IRegionFormProp) {
		super(props);
		// set initial state to default configuration
		this.state = new RegionGenConfig();

		// WRITING OUT THESE SUCKED AND THERE HAS TO BE A BETTER WAY
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRegionPopulation = this.handleRegionPopulation.bind(this);
		this.handleRegionSizeMilesSq = this.handleRegionSizeMilesSq.bind(this);
		this.handleRegionAgeYears = this.handleRegionAgeYears.bind(this);
		this.handleLivestockPerPerson = this.handleLivestockPerPerson.bind(this);
		this.handlePeoplePerCastle = this.handlePeoplePerCastle.bind(this);
		this.handlePeoplePerRuinedCastle = this.handlePeoplePerRuinedCastle.bind(this);
		this.handlePercentageOfLivestockIsFowl = this.handlePercentageOfLivestockIsFowl.bind(this);
		this.handlePercentageOfCastlesInOutskirts = this.handlePercentageOfCastlesInOutskirts.bind(this);
		this.handlepeoplePerFarmlandSqMiles = this.handlepeoplePerFarmlandSqMiles.bind(this);
		this.handleAverageFarmSizeAcres = this.handleAverageFarmSizeAcres.bind(this);
		this.handlePeoplePerNobleFamily = this.handlePeoplePerNobleFamily.bind(this);
		this.handlePeoplePerOfficer = this.handlePeoplePerOfficer.bind(this);
		this.handlePeoplePerClergy = this.handlePeoplePerClergy.bind(this);
		this.handleClergyPerPriest = this.handleClergyPerPriest.bind(this);
		this.handleHouseholdSize = this.handleHouseholdSize.bind(this);
		this.handleWarehousesPerBuildingMultiplier = this.handleWarehousesPerBuildingMultiplier.bind(this);
		this.handlecityPeoplePerMileSq = this.handlecityPeoplePerMileSq.bind(this);

		this.regionGenerator = new RegionGenerator();
	}
	public handleAverageFarmSizeAcres(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({AverageFarmSizeAcres: Number.parseInt(event.target.value, 10)});
	}
	public handlecityPeoplePerMileSq(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({CityPeoplePerSqMile: Number.parseInt(event.target.value, 10)});
	}
	public handleClergyPerPriest(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ClergyPerPriest: Number.parseInt(event.target.value, 10)});
	}
	public handleHouseholdSize(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({HouseholdSize: Number.parseInt(event.target.value, 10)});
	}

	public handleLivestockPerPerson(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({LivestockPerPerson: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerCastle(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerCastle: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerClergy(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerClergy: Number.parseInt(event.target.value, 10)});
	}
	public handlepeoplePerFarmlandSqMiles(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerSqMileFarmland: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerNobleFamily(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerNobleFamily: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerOfficer(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerOfficer: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerRuinedCastle(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerRuinedCastle: Number.parseInt(event.target.value, 10)});
	}
	public handlePercentageOfCastlesInOutskirts(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PercentageOfCastlesInOutskirts: Number.parseInt(event.target.value, 10)});
	}
	public handlePercentageOfLivestockIsFowl(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PercentageOfLivestockIsFowl: Number.parseInt(event.target.value, 10)});
	}

	public handleRegionAgeYears(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionAgeYears: Number.parseInt(event.target.value, 10)});
	}

	public handleRegionPopulation(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionPopulation: Number.parseInt(event.target.value, 10)});
	}

	public handleRegionSizeMilesSq(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionSizeSqMiles: Number.parseInt(event.target.value, 10)});
	}

	public handleSubmit(event: React.FormEvent<HTMLElement>) {
		const region = this.regionGenerator.generate(this.state);
		this.props.onFormSubmit(region);
		event.preventDefault();
	}

	public handleWarehousesPerBuildingMultiplier(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({WarehousesPerBuildingMultiplier: Number.parseInt(event.target.value, 10) });
	}

	// I could pass a "Default" settings object to the form
	// I could have the form make a callback to this

	public render() {
		const regionPop = this.state.RegionPopulation;
		const regionMilesSq = this.state.RegionSizeSqMiles;
		const regionAgeYears = this.state.RegionAgeYears;

		// adv settings
		const livestockPerPerson = this.state.LivestockPerPerson;
		const peoplePerCastle = this.state.PeoplePerCastle;
		const peoplePerRuinedCastle = this.state.PeoplePerRuinedCastle;
		const percentageOfLivestockIsFowl = this.state.PercentageOfLivestockIsFowl;
		const percentageOfCastlesInOutskirts = this.state.PercentageOfCastlesInOutskirts;
		const peoplePerFarmlandSqMiles = this.state.PeoplePerSqMileFarmland;
		const averageFarmSizeAcres = this.state.AverageFarmSizeAcres;
		const peoplePerNobleFamily = this.state.PeoplePerNobleFamily;
		const peoplePerOfficer = this.state.PeoplePerOfficer;
		const peoplePerClergy = this.state.PeoplePerClergy;
		const clergyPerPriest = this.state.ClergyPerPriest;
		const householdSize = this.state.HouseholdSize;
		const warehousesPerBuildingMultiplier = this.state.WarehousesPerBuildingMultiplier;
		const cityPeoplePerMileSq = this.state.CityPeoplePerSqMile;

		return (
			<div>
				<h2>About This</h2>
				<div>
					<p>
						This app takes heavy inspiration from <a href="http://www222.pair.com/sjohn/blueroom/demog.htm">S. John Ross</a>.
					</p>
					<p>
						Middle ages (Medieval times) were <a href="https://en.wikipedia.org/wiki/Middle_Ages">from 5th century until 15th century</a>.
						For reference, here are some demographics that might provide context:
					</p>
					<ul>
						<li>
							France population in 1AD was 5.5 million. In 1226 it was 16 million (height of Medieval times) 
							<a href="https://en.wikipedia.org/wiki/Demographics_of_France">source</a>
						</li>
						<li>
							Paris population in 50AD was 80,000. In 1250 it was 160,000 
							<a href="https://en.wikipedia.org/wiki/Demographics_of_Paris">source</a>
						</li>
						<li>
							Byzantine Empire in 300AD was 17 million. In 1204 it was 9 million. 
							<a href="https://en.wikipedia.org/wiki/Population_of_the_Byzantine_Empire">source</a>
						</li>
						<li>
							The population of the biggest city in the world has fluctuated greatly through history.
							<a href="https://en.wikipedia.org/wiki/List_of_largest_cities_throughout_history">source</a>
						</li>
						<li>
							The area of countries is drastically different.
							<a href="https://en.wikipedia.org/wiki/List_of_European_countries_by_area">source</a>
						</li>
					</ul>
				</div>
				<form action="javascript:void(0);" onSubmit={this.handleSubmit}>
					<h3>Region Parameters</h3>
					<fieldset>
						<div>
							<label htmlFor="regionPop">Region Total Population</label>
							<input id="regionPop" type="number" value={regionPop} onChange={this.handleRegionPopulation}/>
							<p>Population affects the number of castles, villages, towns, and cities</p>
						</div>
						<div>
							<label htmlFor="regionAgeYears">Region Age Years</label>
							<input id="regionAgeYears" type="number" value={regionAgeYears} onChange={this.handleRegionAgeYears}/>
							<p>Older regions have more ruined / abandoned castles</p>
						</div>
						<div>
							<label htmlFor="regionMilesSq">Region Area Size Miles²</label>
							<input id="regionMilesSq" type="number" value={regionMilesSq} onChange={this.handleRegionSizeMilesSq} />
							<p>Total size of the region, including inhospitable land</p>
						</div>  
					</fieldset>
					<h3>City Settings</h3>
					<fieldset>
						<div>
							<label htmlFor="warehousesPerBuildingMultiplier">Warehouses per Building Multiplier</label>
							<input type="number" id="warehousesPerBuildingMultiplier" 
								value={warehousesPerBuildingMultiplier} onChange={this.handleWarehousesPerBuildingMultiplier} />
							<p>Used in conjunction with people per household to determine storage requirements of the cities.</p>
						</div>
						<div>
							<label htmlFor="cityPeoplePerMileSq">City People per Miles²</label>
							<input type="number" id="cityPeoplePerMileSq" value={cityPeoplePerMileSq} onChange={this.handlecityPeoplePerMileSq} />
							<p>Greater value implies denser cities</p>
						</div>
					</fieldset>
					<h3>Profession Ratios</h3>
					<fieldset>
						<div>
							<label htmlFor="peoplePerNobleFamily">People per Noble Family</label>
							<input type="number" id="peoplePerNobleFamily" value={peoplePerNobleFamily} onChange={this.handlePeoplePerNobleFamily} />
							<p>Higher amounts imply fewer nobility, and vice-versa</p>
						</div>
						<div>
							<label htmlFor="peoplePerOfficer">People per Officer</label>
							<input type="number" id="peoplePerOfficer" value={peoplePerOfficer} onChange={this.handlePeoplePerOfficer} />
							<p>Higher amounts imply fewer officers, and vice-versa</p>
						</div>
						<div>
							<label htmlFor="peoplePerClergy">People per Clergy</label>
							<input type="number" id="peoplePerClergy" value={peoplePerClergy} onChange={this.handlePeoplePerClergy} />
							<p>Higher amounts imply fewer clergy, and vice-versa</p>
						</div>
						<div>
							<label htmlFor="clergyPerPriest">Clergy per Priest</label>
							<input type="number" id="clergyPerPriest" value={clergyPerPriest} onChange={this.handleClergyPerPriest} />
							<p>Higher amounts imply fewer priests, and vice-versa</p>
						</div>
					</fieldset>
					<h3>Population Density Settings</h3>
					<fieldset>
						<div>
							<label htmlFor="averageFarmSizeAcres">Average Farm Size Acres</label>
							<input type="number" id="averageFarmSizeAcres" value={averageFarmSizeAcres} onChange={this.handleAverageFarmSizeAcres} />
							<p>
								The average farm size is normally between 20 to 40 acres. Higher farm sizes allow more urban density and less sprawl.
								See <a href="https://rpg.stackexchange.com/questions/10123">here</a> for more details.
							</p>
						</div>
						<div>
							<label htmlFor="householdSize">Household Size</label>
							<input type="number" id="householdSize" value={householdSize} onChange={this.handleHouseholdSize} />
							<p>Average people per household. Used in determining building counts for cities.</p>
						</div>
					</fieldset>
					<h3>Castle Settings</h3>
					<fieldset>
						<div>
							<label htmlFor="peoplePerCastle">People per Castle</label>
							<input type="number" id="peoplePerCastle" value={peoplePerCastle} onChange={this.handlePeoplePerCastle} />
						</div>
						<div>
							<label htmlFor="peoplePerRuinedCastle">People per Ruined Castle</label>
							<input type="number" id="peoplePerRuinedCastle" value={peoplePerRuinedCastle} onChange={this.handlePeoplePerRuinedCastle} />
						</div>
						<div>
							<label htmlFor="percentageOfCastlesInOutskirts">Castle % in outskirts</label>
							<input type="number" id="percentageOfCastlesInOutskirts" value={percentageOfCastlesInOutskirts} onChange={this.handlePercentageOfCastlesInOutskirts} />
						</div>
					</fieldset>
					<h3>Farming Settings</h3>
					<fieldset>
						<div>
							<label htmlFor="livestockPerPerson">Livestock per Person</label>
							<input type="number" id="livestockPerPerson" value={livestockPerPerson} onChange={this.handleLivestockPerPerson} />
							<p>Medieval societies had a lot of animals, for work and food resources. This includes Cows, Sheeps, Pigs, Chickens, etc.</p>
						</div>
						<div>
							<label htmlFor="percentageOfLivestockIsFowl">Livestock Fowl Ratio</label>
							<input type="number" id="percentageOfLivestockIsFowl" value={percentageOfLivestockIsFowl} onChange={this.handlePercentageOfLivestockIsFowl} />
							<p>Medieval societies generally raised more fowl. Higher percentages imply more fowl. (Chickens, Turkeys, etc.)</p>
						</div>
						<div>
							<label htmlFor="peoplePerFarmlandSqMiles">People Per Mile² Farmland</label>
							<input type="number" id="peoplePerFarmlandSqMiles" value={peoplePerFarmlandSqMiles} onChange={this.handlepeoplePerFarmlandSqMiles} />
							<p>Greater values imply much more fertile farmland, and vice-versa. This accounts for common ailments such as plagues, droughts, etc.</p>
						</div>
					</fieldset>
					<button className="laff-btn laff-btn-primary" type="submit">Generate Region</button>
				</form>
			</div>
		);
	}
}
