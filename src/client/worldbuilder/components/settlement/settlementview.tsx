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

		return (
			<div>
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
						{VUtils.prettyPrintRounded(this.props.Settlement.CityMilesSq)} ({cityDimensions}² miles)
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
						{VUtils.prettyPrintRounded(this.props.Settlement.CountrysideMilesSq)} ({countrysideDimensions}² miles)
					</dd>
					<dt>
						Villages
					</dt>
					<dd>
						{this.props.Settlement.SupportingVillages.toLocaleString()} ({avgVillagePop.toLocaleString()} avg people)
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
					<dt>
						Noble Families
					</dt>
					<dd>
						{this.props.Settlement.NobleFamilies.toLocaleString()}
					</dd>
					<dt>
						Clergy
					</dt>
					<dd>
						{this.props.Settlement.Clergy.toLocaleString()}
					</dd>
					<dt>
						Priests
					</dt>
					<dd>
						{this.props.Settlement.Priests.toLocaleString()}
					</dd>
					<dt>
						Guards
					</dt>
					<dd>
						{this.props.Settlement.LawOfficers.toLocaleString()}
					</dd>
				</dl>
				<dl>
					{this.props.Settlement.Services.map((service) => {
						return (
							<React.Fragment>
								<dt>
									{service.Name}
								</dt>
								<dd>
									{service.SupportValue}
								</dd>
							</React.Fragment>
						);
					})}
				</dl>
			</div>
		);
	}
}
