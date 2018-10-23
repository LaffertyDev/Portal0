import * as React from "react";
import { VUtils } from "../../utils";
import { Settlement } from "./settlement";
import { SettlementView } from "./settlementview";

interface IRegionSummaryProps {
	Settlements: Settlement[];
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class RegionSummary extends React.Component<IRegionSummaryProps, {}> {
	constructor(props: IRegionSummaryProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td>Population</td>
							<td>City Miles²</td>
							<td>Countryside Population</td>
							<td>Countryside Miles²</td>
							<td>Villages</td>
							<td>Services</td>
							<td>Total Buildings</td>
							<td>Noble Families</td>
							<td>Clergy</td>
							<td>Priests</td>
							<td>Law Officers</td>
						</tr>
					</thead>
					<tbody>
						{this.props.Settlements.sort((a, b) => b.CityPopulation - a.CityPopulation).map((settlement) => {
							const cityDimensions = Math.sqrt(settlement.CityMilesSq).toPrecision(3).toLocaleString();
							const countrysideDimensions = Math.sqrt(settlement.CountrysideMilesSq).toPrecision(3).toLocaleString();
							const avgVillagePop = Math.floor(settlement.CountrysidePopulation / settlement.SupportingVillages).toLocaleString();

							return (
								<tr>
									<td>
										{settlement.CityPopulation.toLocaleString()}
									</td>
									<td>
										{VUtils.prettyPrintRounded(settlement.CityMilesSq)} ({cityDimensions}² miles)
								</td>
									<td>
										{settlement.CountrysidePopulation.toLocaleString()}
									</td>
									<td>
										{VUtils.prettyPrintRounded(settlement.CountrysideMilesSq)} ({countrysideDimensions}² miles)
								</td>
									<td>
										{settlement.SupportingVillages.toLocaleString()} ({avgVillagePop.toLocaleString()} avg people)
								</td>
									<td>
										{settlement.Services.length.toLocaleString()}
									</td>
									<td>
										{settlement.TotalBuildings.toLocaleString()}
									</td>
									<td>
										{settlement.NobleFamilies.toLocaleString()}
									</td>
									<td>
										{settlement.Clergy.toLocaleString()}
									</td>
									<td>
										{settlement.Priests.toLocaleString()}
									</td>
									<td>
										{settlement.LawOfficers.toLocaleString()}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<hr />
				<div>
					{this.props.Settlements.map((settlement) => {
						return <SettlementView Settlement={settlement}></SettlementView>;
					})}
				</div>
			</div>
		);
	}
}
