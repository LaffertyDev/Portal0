import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegionModel } from "./components/region/region";
import { RegionForm } from "./components/region/regionform";
import { RegionRender } from "./components/region/regionrender";

interface IWorldBuilderState {
	regions: RegionModel[];
}

export class WorldBuilder extends React.Component<{}, IWorldBuilderState> {
	constructor(props: object) {
		super(props);
		this.state = {regions: []};
		this.handleRegionSubmit = this.handleRegionSubmit.bind(this);
	}

	public handleRegionSubmit(region: RegionModel): void {
		this.setState({regions: this.state.regions.concat([region])});
	}

	public render() {
		return (
			<div>
				<RegionForm onFormSubmit={this.handleRegionSubmit}></RegionForm>
				<hr/>
				{
					this.state.regions.map((region, ind) => {
						return <RegionRender region={region} key={ind}></RegionRender>;
					})
				}
			</div>
		);
	}
}

ReactDOM.render(    
	React.createElement(WorldBuilder),
	document.getElementById("reactApp"),
);
