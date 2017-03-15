import * as React from "react";
import * as ReactDOM from "react-dom";
import Region from "./Region";
import Settlement from "../Settlement/Settlement";

interface RegionFormState { 
    cityPop: number, 
    regionPop : number, 
    regionAreaAcres : number, 
    regionAgeYears : number 
};

interface RegionFormProp {
    onFormSubmit: (region: Region) => any;
}

export default class RegionForm extends React.Component<RegionFormProp, RegionFormState> {
    constructor(props) {
        super(props);
        // set initial state
        this.state = { cityPop: 1000, regionPop: 1000000, regionAreaAcres: 1000000, regionAgeYears: 1000 };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleCityPopChange = this.handleCityPopChange.bind(this);
        this.handleRegionPopChange = this.handleRegionPopChange.bind(this);
    }


    handleSubmit(event) {
        let city = new Settlement(Number(this.state.cityPop));
        let region = new Region(Number(this.state.regionPop), this.state.regionAgeYears, this.state.regionAreaAcres);
        this.props.onFormSubmit(region);
        event.preventDefault();
    }

    handleAgeChange(event) {
        this.setState({regionAgeYears: event.target.value});
    }

    handleCityPopChange(event) {
        this.setState({cityPop: event.target.value});
    }

    handleRegionPopChange(event) {
        this.setState({regionPop: event.target.value});
    }

    handleRegionAcreChange(event) {
        this.setState({regionAreaAcres: event.target.value});
    }

    render() {
        return (
            <form action="javascript:void(0);" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="cityPop">City Population</label>
                    <input type="number" value={this.state.cityPop} onChange={this.handleCityPopChange}/>
                </div>
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
        );
    }
}