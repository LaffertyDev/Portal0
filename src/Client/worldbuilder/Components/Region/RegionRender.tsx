import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegionModel } from "./Region";

interface RegionRenderProps extends React.Props<RegionRender> {
    region: RegionModel;
}

export default class RegionRender extends React.Component<RegionRenderProps, void> {
    constructor(props) {
        super(props);
    }

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