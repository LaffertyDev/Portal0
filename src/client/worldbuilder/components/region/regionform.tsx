import * as React from "react";
import { RegionModel } from "./region";
import { IRegionGenConfig, RegionGenConfig } from "./regiongenconfig";
import { RegionGenerator } from "./regiongenerator";

interface IRegionFormProp {
	onFormSubmit: (region: RegionModel) => any;
}

/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
export default class RegionForm extends React.Component<IRegionFormProp, IRegionGenConfig> {
	public regionGenerator: RegionGenerator;

	constructor(props: IRegionFormProp) {
		super(props);
		// set initial state to default configuration
		this.state = new RegionGenConfig();

		// WRITING OUT THESE SUCKED AND THERE HAS TO BE A BETTER WAY
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRegionPopulation = this.handleRegionPopulation.bind(this);
		this.handleRegionSizeAcres = this.handleRegionSizeAcres.bind(this);
		this.handleRegionAgeYears = this.handleRegionAgeYears.bind(this);
		this.handleLivestockPerPerson = this.handleLivestockPerPerson.bind(this);
		this.handlePeoplePerCastle = this.handlePeoplePerCastle.bind(this);
		this.handlePeoplePerRuinedCastle = this.handlePeoplePerRuinedCastle.bind(this);
		this.handlePercentageOfLivestockIsFowl = this.handlePercentageOfLivestockIsFowl.bind(this);
		this.handlePercentageOfCastlesInOutskirts = this.handlePercentageOfCastlesInOutskirts.bind(this);
		this.handleRegionPopulationDensity = this.handleRegionPopulationDensity.bind(this);
		this.handlePeoplePerAcreFarmland = this.handlePeoplePerAcreFarmland.bind(this);
		this.handleRegionPeoplePerAcre = this.handleRegionPeoplePerAcre.bind(this);
		this.handlePeoplePerNobleFamily = this.handlePeoplePerNobleFamily.bind(this);
		this.handlePeoplePerOfficer = this.handlePeoplePerOfficer.bind(this);
		this.handlePeoplePerClergy = this.handlePeoplePerClergy.bind(this);
		this.handleClergyPerPriest = this.handleClergyPerPriest.bind(this);
		this.handleHouseholdSize = this.handleHouseholdSize.bind(this);
		this.handleWarehousesPerBuildingMultiplier = this.handleWarehousesPerBuildingMultiplier.bind(this);
		this.handleCityPeoplePerAcre = this.handleCityPeoplePerAcre.bind(this);
		this.handleCityCountrysideRatio = this.handleCityCountrysideRatio.bind(this);

		this.regionGenerator = new RegionGenerator();
	}
	public handleCityCountrysideRatio(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({CityCountrysideRatio: Number.parseInt(event.target.value, 10)});
	}
	public handleCityPeoplePerAcre(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({CityPeoplePerAcre: Number.parseInt(event.target.value, 10)});
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
	public handlePeoplePerAcreFarmland(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerAcreFarmland: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerCastle(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerCastle: Number.parseInt(event.target.value, 10)});
	}
	public handlePeoplePerClergy(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({PeoplePerClergy: Number.parseInt(event.target.value, 10)});
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
	public handleRegionPeoplePerAcre(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionPeoplePerAcre: Number.parseInt(event.target.value, 10)});
	}

	public handleRegionPopulation(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionPopulation: Number.parseInt(event.target.value, 10)});
	}
	public handleRegionPopulationDensity(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionPopulationDensity: Number.parseInt(event.target.value, 10)});
	}

	public handleRegionSizeAcres(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({RegionSizeAcres: Number.parseInt(event.target.value, 10)});
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
		const regionAreaAcres = this.state.RegionSizeAcres;
		const regionAgeYears = this.state.RegionAgeYears;

		// adv settings
		const livestockPerPerson = this.state.LivestockPerPerson;
		const peoplePerCastle = this.state.PeoplePerCastle;
		const peoplePerRuinedCastle = this.state.PeoplePerRuinedCastle;
		const percentageOfLivestockIsFowl = this.state.PercentageOfLivestockIsFowl;
		const percentageOfCastlesInOutskirts = this.state.PercentageOfCastlesInOutskirts;
		const regionPopulationDensity = this.state.RegionPopulationDensity;
		const peoplePerAcreFarmland = this.state.PeoplePerAcreFarmland;
		const regionPeoplePerAcre = this.state.RegionPeoplePerAcre;
		const peoplePerNobleFamily = this.state.PeoplePerNobleFamily;
		const peoplePerOfficer = this.state.PeoplePerOfficer;
		const peoplePerClergy = this.state.PeoplePerClergy;
		const clergyPerPriest = this.state.ClergyPerPriest;
		const householdSize = this.state.HouseholdSize;
		const warehousesPerBuildingMultiplier = this.state.WarehousesPerBuildingMultiplier;
		const cityPeoplePerAcre = this.state.CityPeoplePerAcre;
		const cityCountrysideRatio = this.state.CityCountrysideRatio;

		return (
			<div>
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
							<p>Older regions have more castles</p>
						</div>
						<div>
							<label htmlFor="regionAreaAcres">Region Avg Population Per Acre</label>
							<input id="regionAreaAcres" type="number" value={regionAreaAcres} onChange={this.handleRegionSizeAcres} />
							<p>Higher density implies more hospitable land, and vice-versa</p>
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
							<label htmlFor="cityCountrysideRatio">City Countryside Ratio</label>
							<input type="number" id="cityCountrysideRatio" value={cityCountrysideRatio} onChange={this.handleCityCountrysideRatio} />
							<p>People in city per people in countryside. Indicates city centralization</p>
						</div>
						<div>
							<label htmlFor="cityPeoplePerAcre">City People per Acre</label>
							<input type="number" id="cityPeoplePerAcre" value={cityPeoplePerAcre} onChange={this.handleCityPeoplePerAcre} />
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
					<h3>Population Settings</h3>
					<fieldset>
						<div>
							<label htmlFor="regionPopulationDensity">Countryside Population Density</label>
							<input type="number" id="regionPopulationDensity" value={regionPopulationDensity} onChange={this.handleRegionPopulationDensity} />
							<p>Greater densities make the countryside area smaller per city</p>
						</div>
						<div>
							<label htmlFor="peoplePerAcreFarmland">People per Acre Farmland</label>
							<input type="number" id="peoplePerAcreFarmland" value={peoplePerAcreFarmland} onChange={this.handlePeoplePerAcreFarmland} />
							<p>Greater values imply much more fertile farmland, and vice-versa</p>
						</div>
						<div>
							<label htmlFor="regionPeoplePerAcre">Region People per Acre</label>
							<input type="number" id="regionPeoplePerAcre" value={regionPeoplePerAcre} onChange={this.handleRegionPeoplePerAcre} />
							<p>The average population density for the region as a whole. Higher densities imply much more friendly environments</p>
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
					</fieldset>
					<button className="laff-btn laff-btn-primary" type="submit">Generate Region</button>
				</form>
			</div>
		);
	}
}
