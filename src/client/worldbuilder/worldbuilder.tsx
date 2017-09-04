import * as React from "react";
import * as ReactDOM from "react-dom";
import {RegionModel} from "./components/region/region";
import RegionRender from "./components/region/regionrender";
import RegionForm from "./components/region/regionform";
import Settlement from "./components/settlement/settlement";
import Map from "./components/map/map";

interface WorldBuilderState {
    regions: RegionModel[];
}

class WorldBuilder extends React.Component<void, WorldBuilderState> {
    constructor(props) {
        super(props);
        this.state = {regions: []};
        this.handleRegionSubmit = this.handleRegionSubmit.bind(this);
    }

    handleRegionSubmit(region: RegionModel) : void {
        this.setState({regions: this.state.regions.concat([region])});
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Map</h3>
                    <Map></Map>
                </div>
                <RegionForm onFormSubmit={this.handleRegionSubmit}></RegionForm>
                <hr/>
                {
                    this.state.regions.map(function(region, ind) {
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