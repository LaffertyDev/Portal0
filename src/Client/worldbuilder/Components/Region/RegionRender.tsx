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
            <div className="laff-wb-region">
                <div>
                    <h3>Region Info</h3>
                    <p>
                        <span>
                            Age (Years): {this.props.region.Age.toString()}
                        </span>
                        <span>
                            Area (Acres): {this.props.region.AreaAcres.toString()}
                        </span>
                        <span>
                            Population: {this.props.region.Population.toString()}
                        </span>
                    </p>
                    <h3>Livestock</h3>
                    <p>
                        <span>
                            Total: {this.props.region.TotalLivestock.toString()}
                        </span>
                        <span>
                            Fowl: {this.props.region.Fowl.toString()}
                        </span>
                        <span>
                            Cows, Sheep, &amp; Pigs: {this.props.region.BurdenBeasts.toString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Castle Info</h3>
                    <p>
                        <span>
                            Total Castles: {this.props.region.TotalCastles.toString()}
                        </span>
                        <span>
                            Active Castles: {this.props.region.ActiveCastles.toString()}
                        </span>
                        <span>
                            Ruined Castles: {this.props.region.RuinedCastles.toString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Settlement Info</h3>
                    <p>
                        <span>
                            #Cities: {this.props.region.Cities.length.toString()}
                        </span>
                        <span>
                            #Towns: {this.props.region.Towns.length.toString()}
                        </span>
                        <span>
                            #Villages: {this.props.region.Villages.length.toString()}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}