import * as React from "react";
import { VUtils } from "../../utils";
import { Settlement } from "./settlement";

interface ISettlementProps {
	Settlement: Settlement;
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class SettlementView extends React.Component<ISettlementProps, {}> {
	constructor(props: ISettlementProps) {
		super(props);
	}

	public render() {
		const cityDimensions = Math.sqrt(this.props.Settlement.CityMilesSq).toPrecision(3).toLocaleString();
		const countrysideDimensions = Math.sqrt(this.props.Settlement.CountrysideMilesSq).toPrecision(3).toLocaleString();
		const avgVillagePop = Math.floor(this.props.Settlement.CountrysidePopulation / this.props.Settlement.SupportingVillages).toLocaleString();

		const cityAreaRadius = VUtils.GetRadiusFromArea(this.props.Settlement.CityMilesSq);
		const regionAreaRadius = VUtils.GetRadiusFromArea(this.props.Settlement.CountrysideMilesSq);
		const villageCoordinates = [];
		const villageDimension = Math.sqrt(this.props.Settlement.CountrysideMilesSq / this.props.Settlement.SupportingVillages);
		const villagesPerRow = Math.ceil(Math.sqrt(this.props.Settlement.SupportingVillages));
		let y = 0;
		for (let x = 0; x < this.props.Settlement.SupportingVillages; x++) {
			if (x !== 0 && x % villagesPerRow === 0) {
				y++;
			}

			villageCoordinates.push({
				R: 0.1,
				X: (x % villagesPerRow) * villageDimension,
				Y: y * villageDimension,
			});
		}

		return (
			<div className="laff-column">
				<h3>Town Stats</h3>
				<dl>
					<dt>
						Population
					</dt>
					<dd>
						{this.props.Settlement.CityPopulation.toLocaleString()}
					</dd>
					<dt>
						City Area Miles²
					</dt>
					<dd>
						{`${VUtils.prettyPrintRounded(this.props.Settlement.CityMilesSq)} (${cityDimensions}² miles)` }
					</dd>
					<dt>
						Countryside Population
					</dt>
					<dd>
						{this.props.Settlement.CountrysidePopulation.toLocaleString()}
					</dd>
					<dt>
						Countryside Area Miles²
					</dt>
					<dd>
						{`${VUtils.prettyPrintRounded(this.props.Settlement.CountrysideMilesSq)} (${countrysideDimensions}² miles)` }
					</dd>
					<dt>
						Villages
					</dt>
					<dd>
						{ `${this.props.Settlement.SupportingVillages.toLocaleString()} (${avgVillagePop.toLocaleString()} avg people)` }
					</dd>
					<dt>
						Services
					</dt>
					<dd>
						{this.props.Settlement.Services.length.toLocaleString()}
					</dd>
					<dt>
						Total Buildings
					</dt>
					<dd>
						{this.props.Settlement.TotalBuildings.toLocaleString()}
					</dd>
				</dl>
				<h3>Town Professions</h3>
				<dl>
					{ 
						[...VUtils.groupBy(this.props.Settlement.Services, ((service) => service.Name))].sort((a, b) => {
							if (a[0] < b[0]) {
								return -1;
							} else {
								return 1;
							}
						}).map((service) => {
						return (
							<React.Fragment>
								<dt>
									{ service[0] }
								</dt>
								<dd>
									{ service[1].length }
								</dd>
							</React.Fragment>
						);
					})}
				</dl>
				<svg viewBox="0 0 100 100">
					<circle cx={regionAreaRadius} cy={regionAreaRadius} r={regionAreaRadius} stroke="red" stroke-width="0" fill="green"/>
					<circle cx={regionAreaRadius} cy={regionAreaRadius} r={cityAreaRadius} stroke="black" stroke-width="0" fill="black"/>
					{villageCoordinates.map((coord) => {
						return <circle cx={coord.X} cy={coord.Y} r={coord.R} fill="blue" />;
					})		
					}
				</svg>
			</div>
		);
	}
}
