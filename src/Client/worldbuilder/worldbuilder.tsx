import * as React from "react";
import * as ReactDOM from "react-dom";
import Region from "./Region";
import Settlement from "./Settlement";

interface RegionFormProps {};
interface RegionFormState { 
    cityPop: number, 
    regionPop : number, 
    regionAreaAcres : number, 
    regionAgeYears : number 
};

class RegionForm extends React.Component<RegionFormProps, RegionFormState> {
    constructor(props) {
        super(props);
        // set initial state
        this.state = { cityPop: 1000, regionPop: 1000000, regionAreaAcres: 1000000, regionAgeYears: 1000 };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        let city = new Settlement(Number(this.state.cityPop));
        let region = new Region(Number(this.state.regionPop), this.state.regionAgeYears, this.state.regionAreaAcres);
        console.log(city);
        console.log(region);
        return false;
    }

    render() {
        return (
            <form action="javascript:void(0);" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="cityPop">City Population</label>
                    <input id="cityPop" type="number" defaultValue="1000"/>
                </div>
                <hr/>
                <div>
                    <label htmlFor="regionPop">Region Pop Population</label>
                    <input id="regionPop" type="number" defaultValue="10000000" />
                </div>  
                <div>
                    <label htmlFor="regionAgeYears">Region Age Years (older -> more castles)</label>
                    <input id="regionAgeYears" type="number" defaultValue="1000" />
                </div>  
                <div>
                    <label htmlFor="regionAreaAcres">Region Area Acres</label>
                    <input id="regionAreaAcres" type="number" defaultValue="1000000" />
                </div>  
                <button type="submit">Submit</button> (see dev console for details)
            </form>
        );
    }
}

ReactDOM.render(
    <RegionForm compiler="TypeScript" framework="React" />,
    document.getElementById("reactApp")
);