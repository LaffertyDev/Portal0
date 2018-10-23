import * as React from "react";
import { VUtils } from "../../utils";
import { RegionSummary } from "../settlement/regionsummary";
import { Settlement } from "../settlement/settlement";
import { RegionModel } from "./region";

interface IRegionRenderProps extends React.Props<RegionRender> {
	region: RegionModel;
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class RegionRender extends React.Component<IRegionRenderProps, {}> {
	constructor(props: IRegionRenderProps) {
		super(props);
	}

	public render() {
		const settlements: Settlement[] = this.props.region.Cities.concat(this.props.region.Towns);
		const farmland = settlements.map((x) => x.CountrysideMilesSq).reduce(VUtils.sum, 0);
		const urbanArea = settlements.map((x) => x.CityMilesSq).reduce(VUtils.sum, 0);
		const cityDwellers = settlements.map((x) => x.CityPopulation).reduce(VUtils.sum, 0);
		const ruralDwellers = settlements.map((x) => x.CountrysidePopulation).reduce(VUtils.sum, 0);
		const totalPopulation = ruralDwellers + cityDwellers;
		const untamedWilderness = this.props.region.AreaSqMiles - (farmland + urbanArea);

		return (
			<div className="laff-wb-region">
				<div>
					<h3>Region Info</h3>
					<ul>
						<li>
							Age (Years): { this.props.region.Age.toLocaleString() }
						</li>
						<li>
							Area: { this.props.region.AreaSqMiles.toLocaleString() } Miles^2
						</li>
						<li>
							Urban Area: { VUtils.prettyPrintRounded(urbanArea) } Miles^2 ({ VUtils.prettyPrintPercent(urbanArea / this.props.region.AreaSqMiles) }%)
						</li>
						<li>
							Farmland: { VUtils.prettyPrintRounded(farmland) } Miles^2 ({ VUtils.prettyPrintPercent(farmland / this.props.region.AreaSqMiles) }%)
						</li>
						<li>
							Untamed Wilderness: 
							{ VUtils.prettyPrintRounded(untamedWilderness) } Miles^2 (
							{ VUtils.prettyPrintPercent(untamedWilderness / this.props.region.AreaSqMiles) }%)
						</li>
					</ul>
					<h3>Population Stats</h3>
					<ul>
						<li>
							People: { (cityDwellers + ruralDwellers).toLocaleString() }
						</li>
						<li>
							City Dwellers: { cityDwellers.toLocaleString() }	({ VUtils.prettyPrintPercent(cityDwellers / totalPopulation) }%)
						</li>
						<li>
							Rural Dwellers: { ruralDwellers.toLocaleString() } ({ VUtils.prettyPrintPercent(ruralDwellers / totalPopulation) }%)
						</li>
						<li>
							Avg Population Density: { Math.round(totalPopulation / this.props.region.AreaSqMiles).toLocaleString() } People / Mi²
						</li>
					</ul>
					<h3>Livestock</h3>
					<ul>
						<li>
							Total: { this.props.region.TotalLivestock.toLocaleString() }
						</li>
						<li>
							Fowl: { this.props.region.Fowl.toLocaleString() }
						</li>
						<li>
							Cows, Sheep, &amp; Pigs: { this.props.region.BurdenBeasts.toLocaleString() }
						</li>
					</ul>
				</div>
				<div>
					<h3>Castle Info</h3>
					<ul>
						<li>
							Total Castles: { this.props.region.CastlesTotal.toLocaleString() }
						</li>
						<li>
							Active Castles: { this.props.region.CastlesActive.toLocaleString() }
						</li>
						<li>
							Ruined Castles: { this.props.region.CastlesRuined.toLocaleString() }
						</li>
					</ul>
				</div>
				<div>
					<h3>Settlement Info</h3>
					<ul>
						<li>
							#Cities: { this.props.region.Cities.length.toLocaleString() }
						</li>
						<li>
							#Towns: { this.props.region.Towns.length.toLocaleString() }
						</li>
					</ul>
					<RegionSummary Settlements={settlements}></RegionSummary>
				</div>
			</div>
		);
	}
}
