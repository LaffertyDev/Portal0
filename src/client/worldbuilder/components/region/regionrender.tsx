import * as React from "react";
import Settlement from "../settlement/settlement";
import SettlementRender from "../settlement/settlementrender";
import { RegionModel } from "./region";

interface IRegionRenderProps extends React.Props<RegionRender> {
	region: RegionModel;
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export default class RegionRender extends React.Component<IRegionRenderProps, {}> {
	constructor(props: IRegionRenderProps) {
		super(props);
	}

	public render() {
		const settlements: Settlement[] = this.props.region.Cities.concat(this.props.region.Towns);
		const farmland = settlements.map((x) => x.CountrysideMilesSq).reduce(this.sum, 0);
		const urbanArea = settlements.map((x) => x.CityMilesSq).reduce(this.sum, 0);
		const cityDwellers = settlements.map((x) => x.CityPopulation).reduce(this.sum, 0);
		const ruralDwellers = settlements.map((x) => x.CountrysidePopulation).reduce(this.sum, 0);
		const totalPopulation = ruralDwellers + cityDwellers;
		const untamedWilderness = this.props.region.AreaSqMiles - (farmland + urbanArea);

		return (
			<div className="laff-wb-region">
				<div>
					<h3>Region Info</h3>
					<ul>
						<li>
							Age (Years): {this.props.region.Age.toLocaleString()}
						</li>
						<li>
							Area: {this.props.region.AreaSqMiles.toLocaleString()} Miles^2
						</li>
						<li>
							Urban Area: { urbanArea.toPrecision(3) } Miles^2 ({urbanArea / this.props.region.AreaSqMiles}%)
						</li>
						<li>
							Farmland: { farmland.toPrecision(3) } Miles^2 ({farmland / this.props.region.AreaSqMiles}%)
						</li>
						<li>
							Untamed Wilderness: {(untamedWilderness).toPrecision(3)} Miles^2 ({untamedWilderness / this.props.region.AreaSqMiles}%)
						</li>
					</ul>
					<h3>Population Stats</h3>
					<ul>
						<li>
							People: { cityDwellers + ruralDwellers }
						</li>
						<li>
							City Dwellers: { cityDwellers }	({cityDwellers / totalPopulation}%)
						</li>
						<li>
							Rural Dwellers: { ruralDwellers } ({ruralDwellers / totalPopulation}%)
						</li>
						<li>
							Avg Population Density: { totalPopulation / this.props.region.AreaSqMiles } People / Mi²
						</li>
					</ul>
					<h3>Livestock</h3>
					<ul>
						<li>
							Total: {this.props.region.TotalLivestock.toLocaleString()}
						</li>
						<li>
							Fowl: {this.props.region.Fowl.toLocaleString()}
						</li>
						<li>
							Cows, Sheep, &amp; Pigs: {this.props.region.BurdenBeasts.toLocaleString()}
						</li>
					</ul>
				</div>
				<div>
					<h3>Castle Info</h3>
					<ul>
						<li>
							Total Castles: {this.props.region.CastlesTotal.toLocaleString()}
						</li>
						<li>
							Active Castles: {this.props.region.CastlesActive.toLocaleString()}
						</li>
						<li>
							Ruined Castles: {this.props.region.CastlesRuined.toLocaleString()}
						</li>
					</ul>
				</div>
				<div>
					<h3>Settlement Info</h3>
					<ul>
						<li>
							#Cities: {this.props.region.Cities.length.toLocaleString()}
						</li>
						<li>
							#Towns: {this.props.region.Towns.length.toLocaleString()}
						</li>
					</ul>
					<SettlementRender Settlements={settlements}></SettlementRender>
				</div>
			</div>
		);
	}

	private stringify(val: number): string {
		return parseFloat(val.toPrecision(3)).toLocaleString();
	}

	private sum(a: number, b: number): number {
		return a + b;
	}
}
