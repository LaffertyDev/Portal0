import { RegionGenConfig } from "../region/regiongenconfig";
import { SettlementService } from "../settlementservices/settlementservice";

/**
 * A settlement where humanoids live
 */
export class Settlement {

	public CityMilesSq: number;
	public CityPopulation: number;
	public CountrysideMilesSq: number;
	public CountrysidePopulation: number;
	public Services: SettlementService[];
	public SupportingVillages: number;
	public TotalBuildings: number;

	constructor(cityPopulation: number, advancedSettings: RegionGenConfig) {
		this.CityPopulation = cityPopulation;

		// we need to support the countryside with the countryside -- so account for it
		// currently this DOES NOT account for "Supporting People" within Villages
		// i.e. priests, noblefolk, and their retinue
		const farmsPerMile = 640 / advancedSettings.AverageFarmSizeAcres;
		const averageDensity = farmsPerMile * advancedSettings.HouseholdSize;
		const supportingPopulationPerSqMile = advancedSettings.PeoplePerSqMileFarmland - averageDensity;
		const milesSqOfFarmlandToSupportCity = cityPopulation / supportingPopulationPerSqMile;
		const peopleFarmingToSupportCity = milesSqOfFarmlandToSupportCity * averageDensity;
		
		this.CountrysidePopulation = Math.floor(peopleFarmingToSupportCity);
		this.CountrysideMilesSq = milesSqOfFarmlandToSupportCity;
		this.SupportingVillages = Math.floor(this.CountrysideMilesSq / 3); // average one village every 3 sq miles
		// village range from 100 - 1000
		// village density was ~ 1 every square mile

		this.CityMilesSq = cityPopulation / advancedSettings.CityPeoplePerSqMile;

		// building stats
		this.TotalBuildings = Math.floor(cityPopulation / advancedSettings.HouseholdSize * advancedSettings.WarehousesPerBuildingMultiplier);
		this.Services = [];

		const potentialServices = SettlementService.GetServices();
		for (const service of potentialServices) {
			const numServices = Math.floor(this.CityPopulation / service.SupportValue);
			for (let y = 0; y < numServices; y++) {
				this.Services.push(new SettlementService(service.Name, service.SupportValue));
			}
		}
	}

	public GetTotalPopulation(): number {
		return this.CityPopulation + this.CountrysidePopulation;
	}

	public GetTotalSizeAcres(): number {
		return this.CityMilesSq + this.CountrysideMilesSq;
	}
}
