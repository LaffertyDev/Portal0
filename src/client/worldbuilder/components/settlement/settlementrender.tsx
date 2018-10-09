import * as React from "react";
import Settlement from "./settlement";

interface ISettlementRenderProps {
	Settlements: Settlement[];
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export default class SettlementRender extends React.Component<ISettlementRenderProps, {}> {
	constructor(props: ISettlementRenderProps) {
		super(props);
	}

	public render() {
		return (
			<table>
				<thead>
					<tr>
						<td>Population</td>
						<td>City Acres</td>
						<td>Countryside Population</td>
						<td>Countryside Acres</td>
						<td>Services</td>
						<td>Total Buildings</td>
						<td>Noble Families</td>
						<td>Clergy</td>
						<td>Priests</td>
						<td>Law Officers</td>
					</tr>
				</thead>
				<tbody>
					{ this.props.Settlements.sort((a, b) => b.TotalPopulation - a.TotalPopulation).map((settlement) => {
						return (
							<tr>
								<td>
									{ settlement.TotalPopulation }
								</td>
								<td>
									{ settlement.CityAcres.toLocaleString() }
								</td>
								<td>
									{ settlement.CountrysidePopulation.toLocaleString() }
								</td>
								<td>
									{ settlement.CountrysideAcres.toLocaleString() }
								</td>
								<td>
									{ settlement.Services.length.toLocaleString() }
								</td>
								<td>
									{ settlement.TotalBuildings.toLocaleString() }
								</td>
								<td>
									{ settlement.NobleFamilies.toLocaleString() }
								</td>
								<td>
									{ settlement.Clergy.toLocaleString() }
								</td>
								<td>
									{ settlement.Priests.toLocaleString() }
								</td>
								<td>
									{ settlement.LawOfficers.toLocaleString() }
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
