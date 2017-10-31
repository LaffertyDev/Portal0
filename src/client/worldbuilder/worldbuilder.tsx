import * as React from "react";
import * as ReactDOM from "react-dom";
import {RegionModel} from "./components/region/region";
import RegionRender from "./components/region/regionrender";
import RegionForm from "./components/region/regionform";
import Settlement from "./components/settlement/settlement";

interface WorldBuilderState {
    regions: RegionModel[];
}

class WorldBuilder extends React.Component<{}, WorldBuilderState> {
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
    React.createElement(WorldBuilder),
    document.getElementById("reactApp")
);