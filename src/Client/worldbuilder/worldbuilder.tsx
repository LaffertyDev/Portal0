import * as React from "react";
import * as ReactDOM from "react-dom";
import Region from "./Region";
import Settlement from "./Settlement";

interface RegionRenderProps extends React.Props<RegionRender> {
    region: Region;
}

interface RegionFormState { 
    cityPop: number, 
    regionPop : number, 
    regionAreaAcres : number, 
    regionAgeYears : number 
};

class RegionRender extends React.Component<RegionRenderProps, void> {
    render() {
        return (
            <div>
                <div>
                    <h3>Region Info</h3>
                    <p>Age (Years): {this.props.region.Age.toString()}</p>
                    <p>Area (Acres): {this.props.region.AreaAcres.toString()}</p>
                    <p>Population: {this.props.region.Population.toString()}</p>
                    <p>LiveStock: {this.props.region.TotalLivestock.toString()}</p>
                    <p>Fowl: {this.props.region.Fowl.toString()}</p>
                    <p>Cows, Sheep, &amp; Pigs: {this.props.region.BurdenBeasts.toString()}</p>
                </div>
                <div>
                    <h3>Castle Info</h3>
                    <p>Total Castles: {this.props.region.TotalCastles.toString()}</p>
                    <p>Active Castles: {this.props.region.ActiveCastles.toString()}</p>
                    <p>Ruined Castles: {this.props.region.RuinedCastles.toString()}</p>
                </div>
                <div>
                    <h3>Settlement Info</h3>
                    <p>#Cities: {this.props.region.Cities.length.toString()}</p>
                    <p>#Towns: {this.props.region.Towns.length.toString()}</p>
                    <p>#Villages: {this.props.region.Villages.length.toString()}</p>
                </div>
            </div>
        );
    }
}

class RegionForm extends React.Component<void, RegionFormState> {
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
        console.log(city);
        console.log(region);    
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

class WorldBuilder extends React.Component<void, void> {
    regions: Region[];
    constructor(props) {
        super(props);
        this.regions = [];
        this.regions.push(new Region(1000000, 1000, 1000000));
    }

    render() {
        return (
            <div>
                <RegionForm></RegionForm>
                {
                    this.regions.map(function(region, ind) {
                        return <RegionRender region={region} key={ind}></RegionRender>;
                    })
                }
            </div>
        );
    }
}

ReactDOM.render(
    <WorldBuilder />,
    document.getElementById("reactApp")
);