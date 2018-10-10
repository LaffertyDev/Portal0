import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegionModel } from "./components/region/region";
import RegionForm from "./components/region/regionform";
import RegionRender from "./components/region/regionrender";

interface IWorldBuilderState {
	regions: RegionModel[];
}

class WorldBuilder extends React.Component<{}, IWorldBuilderState> {
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
				<h2>About This</h2>
				<div>
					<p>
						This app takes heavy inspiration from <a href="http://www222.pair.com/sjohn/blueroom/demog.htm">S. John Ross</a>.
					</p>
					<p>
						Middle ages (Medieval times) were <a href="https://en.wikipedia.org/wiki/Middle_Ages">from 5th century until 15th century</a>.
						For reference, here are some demographics that might provide context:
					</p>
					<ul>
						<li>
							France population in 1AD was 5.5 million. In 1226 it was 16 million (height of Medieval times) 
							<a href="https://en.wikipedia.org/wiki/Demographics_of_France">source</a>
						</li>
						<li>
							Paris population in 50AD was 80,000. In 1250 it was 160,000 
							<a href="https://en.wikipedia.org/wiki/Demographics_of_Paris">source</a>
						</li>
						<li>
							Byzantine Empire in 300AD was 17 million. In 1204 it was 9 million. 
							<a href="https://en.wikipedia.org/wiki/Population_of_the_Byzantine_Empire">source</a>
						</li>
						<li>
							The population of the biggest city in the world has fluctuated greatly through history.
							<a href="https://en.wikipedia.org/wiki/List_of_largest_cities_throughout_history">source</a>
						</li>
						<li>
							The area of countries is drastically different.
							<a href="https://en.wikipedia.org/wiki/List_of_European_countries_by_area">source</a>
						</li>
						<li>
							Urban densities were incredibly small. Cologne, with an urban population of 20,000 - 40,000
							had an area of <a href="https://forum.rpg.net/showthread.php?163295-Medieval-Cities-How-Big/page2&s=54889014167a5092710ac82f656ceeb5">4 kilometers²</a>
						</li>
					</ul>
				</div>
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
