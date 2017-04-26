import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Region from "./region";
import {RegionGenConfig} from "./regiongenconfig";
import {IRegionGenConfig} from "./regiongenconfig";
import Settlement from "../settlement/settlement";

interface RegionFormProp {
    onFormSubmit: (region: Region.RegionModel) => any;
}

/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
export default class RegionForm extends React.Component<RegionFormProp, IRegionGenConfig> {
    regionGenerator : Region.RegionGenerator;

    constructor(props) {
        super(props);
        // set initial state to default configuration
        this.state = new RegionGenConfig();

        //WRITING OUT THESE SUCKED AND THERE HAS TO BE A BETTER WAY
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

        this.regionGenerator = new Region.RegionGenerator();
    }

    handleSubmit(event) {
        let region = this.regionGenerator.generate(this.state);
        this.props.onFormSubmit(region);
        event.preventDefault();
    }

    handleRegionPopulation(event) {
        this.setState({RegionPopulation: event.target.value});
    }

    handleRegionSizeAcres(event) {
        this.setState({RegionSizeAcres: event.target.value});
    }

    handleRegionAgeYears(event) {
        this.setState({RegionAgeYears: event.target.value});
    }

    handleLivestockPerPerson(event) {
        this.setState({LivestockPerPerson: event.target.value});
    }
    handlePeoplePerCastle(event) {
        this.setState({PeoplePerCastle: event.target.value});
    }
    handlePeoplePerRuinedCastle(event) {
        this.setState({PeoplePerRuinedCastle: event.target.value});
    }
    handlePercentageOfLivestockIsFowl(event) {
        this.setState({PercentageOfLivestockIsFowl: event.target.value});
    }
    handlePercentageOfCastlesInOutskirts(event) {
        this.setState({PercentageOfCastlesInOutskirts: event.target.value});
    }
    handleRegionPopulationDensity(event) {
        this.setState({RegionPopulationDensity: event.target.value});
    }
    handlePeoplePerAcreFarmland(event) {
        this.setState({PeoplePerAcreFarmland: event.target.value});
    }
    handleRegionPeoplePerAcre(event) {
        this.setState({RegionPeoplePerAcre: event.target.value});
    }
    handlePeoplePerNobleFamily(event) {
        this.setState({PeoplePerNobleFamily: event.target.value});
    }
    handlePeoplePerOfficer(event) {
        this.setState({PeoplePerOfficer: event.target.value});
    }
    handlePeoplePerClergy(event) {
        this.setState({PeoplePerClergy: event.target.value});
    }
    handleClergyPerPriest(event) {
        this.setState({ClergyPerPriest: event.target.value});
    }
    handleHouseholdSize(event) {
        this.setState({HouseholdSize: event.target.value});
    }
    handleWarehousesPerBuildingMultiplier(event) {
        this.setState({WarehousesPerBuildingMultiplier: event.target.value});
    }
    handleCityPeoplePerAcre(event) {
        this.setState({CityPeoplePerAcre: event.target.value});
    }
    handleCityCountrysideRatio(event) {
        this.setState({CityCountrysideRatio: event.target.value});
    }

    //I could pass a "Default" settings object to the form
    //I could have the form make a callback to this

    render() {
        const regionPop = this.state.RegionPopulation;
        const regionAreaAcres = this.state.RegionSizeAcres;
        const regionAgeYears = this.state.RegionAgeYears;

        //adv settings
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
                    <h3>Advanced Region Settings</h3>
                    <fieldset>
                        <div>
                            <label htmlFor="livestockPerPerson">Livestock per Person</label>
                            <input type="number" id="livestockPerPerson" value={livestockPerPerson} onChange={this.handleLivestockPerPerson} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerCastle">People per Castle</label>
                            <input type="number" id="peoplePerCastle" value={peoplePerCastle} onChange={this.handlePeoplePerCastle} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerRuinedCastle">People per Ruined Castle</label>
                            <input type="number" id="peoplePerRuinedCastle" value={peoplePerRuinedCastle} onChange={this.handlePeoplePerRuinedCastle} />
                        </div>
                        <div>
                            <label htmlFor="percentageOfLivestockIsFowl">Livestock Fowl %</label>
                            <input type="number" id="percentageOfLivestockIsFowl" value={percentageOfLivestockIsFowl} onChange={this.handlePercentageOfLivestockIsFowl} />
                        </div>
                        <div>
                            <label htmlFor="percentageOfCastlesInOutskirts">Castle % in outskirts</label>
                            <input type="number" id="percentageOfCastlesInOutskirts" value={percentageOfCastlesInOutskirts} onChange={this.handlePercentageOfCastlesInOutskirts} />
                        </div>
                        <div>
                            <label htmlFor="regionPopulationDensity">Region Population Density</label>
                            <input type="number" id="regionPopulationDensity" value={regionPopulationDensity} onChange={this.handleRegionPopulationDensity} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerAcreFarmland">People per Acre Farmland</label>
                            <input type="number" id="peoplePerAcreFarmland" value={peoplePerAcreFarmland} onChange={this.handlePeoplePerAcreFarmland} />
                        </div>
                        <div>
                            <label htmlFor="regionPeoplePerAcre">Region People per Acre</label>
                            <input type="number" id="regionPeoplePerAcre" value={regionPeoplePerAcre} onChange={this.handleRegionPeoplePerAcre} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerNobleFamily">People per Noble Family</label>
                            <input type="number" id="peoplePerNobleFamily" value={peoplePerNobleFamily} onChange={this.handlePeoplePerNobleFamily} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerOfficer">People per Officer</label>
                            <input type="number" id="peoplePerOfficer" value={peoplePerOfficer} onChange={this.handlePeoplePerOfficer} />
                        </div>
                        <div>
                            <label htmlFor="peoplePerClergy">People per Clergy</label>
                            <input type="number" id="peoplePerClergy" value={peoplePerClergy} onChange={this.handlePeoplePerClergy} />
                        </div>
                        <div>
                            <label htmlFor="clergyPerPriest">Clergy per Priest</label>
                            <input type="number" id="clergyPerPriest" value={clergyPerPriest} onChange={this.handleClergyPerPriest} />
                        </div>
                        <div>
                            <label htmlFor="householdSize">Household Size</label>
                            <input type="number" id="householdSize" value={householdSize} onChange={this.handleHouseholdSize} />
                        </div>
                        <div>
                            <label htmlFor="warehousesPerBuildingMultiplier">Warehouses per Building Multiplier</label>
                            <input type="number" id="warehousesPerBuildingMultiplier" value={warehousesPerBuildingMultiplier} onChange={this.handleWarehousesPerBuildingMultiplier} />
                        </div>
                        <div>
                            <label htmlFor="cityPeoplePerAcre">City People per Acre</label>
                            <input type="number" id="cityPeoplePerAcre" value={cityPeoplePerAcre} onChange={this.handleCityPeoplePerAcre} />
                        </div>
                        <div>
                            <label htmlFor="cityCountrysideRatio">City Countryside Ratio</label>
                            <input type="number" id="cityCountrysideRatio" value={cityCountrysideRatio} onChange={this.handleCityCountrysideRatio} />
                        </div>
                    </fieldset>
                    <h3>Define Region Parameters:</h3>
                    <fieldset>
                        <div>
                            <label htmlFor="regionPop">Region Pop Population</label>
                            <input id="regionPop" type="number" value={regionPop} onChange={this.handleRegionPopulation}/>
                        </div>
                        <div>
                            <label htmlFor="regionAgeYears">Region Age Years (older -> more castles)</label>
                            <input id="regionAgeYears" type="number" value={regionAgeYears} onChange={this.handleRegionAgeYears}/>
                        </div>  
                        <div>
                            <label htmlFor="regionAreaAcres">Region Area Acres</label>
                            <input id="regionAreaAcres" type="number" value={regionAreaAcres} onChange={this.handleRegionPeoplePerAcre} />
                        </div>  
                    </fieldset>
                    <button className="laff-btn laff-btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}