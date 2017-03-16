import * as React from "react";
import * as ReactDOM from "react-dom";
import * as AdvancedSettings from "./AdvancedSettings";

export default class AdvancedSettingsForm extends React.Component<void, AdvancedSettings.IAdvancedSettings> {
    constructor(props) {
        super(props);

        this.state = new AdvancedSettings.AdvancedSettings();

        this.handleAdvancedSettingsChange = this.handleAdvancedSettingsChange.bind(this);
    }

    handleAdvancedSettingsChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <h3>Advanced Region Settings</h3>
                <div>
                    <label htmlFor="LivestockPerPerson">Livestock per Person</label>
                    <input type="number" name="LivestockPerPerson" value={this.state.LivestockPerPerson} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PeoplePerCastle">PeoplePerCastle</label>
                    <input type="number" name="PeoplePerCastle" value={this.state.PeoplePerCastle} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PeoplePerRuinedCastle">PeoplePerRuinedCastle</label>
                    <input type="number" name="PeoplePerRuinedCastle" value={this.state.PeoplePerRuinedCastle} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PercentageOfLivestockIsFowl">PercentageOfLivestockIsFowl</label>
                    <input type="number" name="PercentageOfLivestockIsFowl" value={this.state.PercentageOfLivestockIsFowl} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PercentageOfCastlesInOutskirts">PercentageOfCastlesInOutskirts</label>
                    <input type="number" name="PercentageOfCastlesInOutskirts" value={this.state.PercentageOfCastlesInOutskirts} onChange={this.handleAdvancedSettingsChange} />
                </div>

                <div>
                    <label htmlFor="PeoplePerAcreFarmland">PeoplePerAcreFarmland</label>
                    <input type="number" name="PeoplePerAcreFarmland" value={this.state.PeoplePerAcreFarmland} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="RegionPeoplePerAcre">RegionPeoplePerAcre</label>
                    <input type="number" name="RegionPeoplePerAcre" value={this.state.RegionPeoplePerAcre} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PeoplePerNobleFamily">PeoplePerNobleFamily</label>
                    <input type="number" name="PeoplePerNobleFamily" value={this.state.PeoplePerNobleFamily} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PeoplePerOfficer">PeoplePerOfficer</label>
                    <input type="number" name="PeoplePerOfficer" value={this.state.PeoplePerOfficer} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="PeoplePerClergy">PeoplePerClergy</label>
                    <input type="number" name="PeoplePerClergy" value={this.state.PeoplePerClergy} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="ClergyPerPriest">ClergyPerPriest</label>
                    <input type="number" name="ClergyPerPriest" value={this.state.ClergyPerPriest} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="HouseholdSize">HouseholdSize</label>
                    <input type="number" name="HouseholdSize" value={this.state.HouseholdSize} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="WarehousesPerBuildingMultiplier">WarhousesPerBuildingMultiplier</label>
                    <input type="number" name="WarehousesPerBuildingMultiplier" value={this.state.WarehousesPerBuildingMultiplier} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="CityPeoplePerAcre">CityPeoplePerAcre</label>
                    <input type="number" name="CityPeoplePerAcre" value={this.state.CityPeoplePerAcre} onChange={this.handleAdvancedSettingsChange} />
                </div>
                <div>
                    <label htmlFor="CityCountrysideRatio">CityCountrysideRatio</label>
                    <input type="number" name="CityCountrysideRatio" value={this.state.CityCountrysideRatio} onChange={this.handleAdvancedSettingsChange} />
                </div>
            </div>
        );
    }
}