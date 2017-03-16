import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Region from "./Region";
import {AdvancedSettings} from "./AdvancedSettings";
import AdvancedSettingsForm from "./AdvancedSettingsForm";
import Settlement from "../Settlement/Settlement";

interface RegionFormState { 
    regionPop : number, 
    regionAreaAcres : number, 
    regionAgeYears : number 
};

interface RegionFormProp {
    onFormSubmit: (region: Region.RegionModel) => any;
}

export default class RegionForm extends React.Component<RegionFormProp, RegionFormState> {
    regionGenerator : Region.RegionGenerator;

    constructor(props) {
        super(props);
        // set initial state
        this.state = { regionPop: 1000000, regionAreaAcres: 1000000, regionAgeYears: 1000 };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleRegionPopChange = this.handleRegionPopChange.bind(this);

        this.regionGenerator = new Region.RegionGenerator();
    }


    handleSubmit(event) {
        let region = this.regionGenerator.generate(Number(this.state.regionPop), this.state.regionAgeYears, this.state.regionAreaAcres, new AdvancedSettings());
        this.props.onFormSubmit(region);
        event.preventDefault();
    }

    handleAgeChange(event) {
        this.setState({regionAgeYears: event.target.value});
    }

    handleRegionPopChange(event) {
        this.setState({regionPop: event.target.value});
    }

    handleRegionAcreChange(event) {
        this.setState({regionAreaAcres: event.target.value});
    }

    render() {
        return (
            <div>
                <form action="javascript:void(0);" onSubmit={this.handleSubmit}>
                    <AdvancedSettingsForm />
                    <hr/>
                    <div>
                        <label htmlFor="regionPop">Region Pop Population</label>
                        <input type="number" value={this.state.regionPop} onChange={this.handleRegionPopChange}/>
                    </div>  
                    <div>
                        <label htmlFor="regionAgeYears">Region Age Years (older -> more castles)</label>
                        <input type="number" value={this.state.regionAgeYears} onChange={this.handleAgeChange}/>
                    </div>  
                    <div>
                        <label htmlFor="regionAreaAcres">Region Area Acres</label>
                        <input type="number" value={this.state.regionAreaAcres} onChange={this.handleRegionAcreChange} />
                    </div>  
                    <button type="submit">Submit</button> (see dev console for details)
                </form>
            </div>
        );
    }
}