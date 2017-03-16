import * as React from "react";
import * as ReactDOM from "react-dom";
import {RegionModel} from "./Components/Region/Region";
import RegionRender from "./Components/Region/RegionRender";
import RegionForm from "./Components/Region/RegionForm";
import Settlement from "./Components/Settlement/Settlement";

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
                <RegionForm onFormSubmit={this.handleRegionSubmit}></RegionForm>
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