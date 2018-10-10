import { RegionGenConfig } from "../region/regiongenconfig";
import Service from "../services/service";

/**
 * A settlement where humanoids live
 */
export default class Settlement {

	public CityMilesSq: number;
	public CityPopulation: number;
	public Clergy: number;
	public CountrysideMilesSq: number;
	public CountrysidePopulation: number;
	public LawOfficers: number;
	public NobleFamilies: number;
	public Priests: number;
	public Services: Service[];
	public TotalBuildings: number;

	constructor(cityPopulation: number, advancedSettings: RegionGenConfig) {
		this.CityPopulation = cityPopulation;

		// we need to support the countryside with the countryside -- so account for it
		const farmsPerMile = 640 / advancedSettings.AverageFarmSizeAcres;
		const averageDensity = farmsPerMile * advancedSettings.HouseholdSize;
		const supportingPopulationPerSqMile = advancedSettings.PeoplePerSqMileFarmland - averageDensity;
		const milesSqOfFarmlandToSupportCity = cityPopulation / supportingPopulationPerSqMile;
		const peopleFarmingToSupportCity = milesSqOfFarmlandToSupportCity * averageDensity;
		
		this.CountrysidePopulation = Math.floor(peopleFarmingToSupportCity);
		this.CountrysideMilesSq = milesSqOfFarmlandToSupportCity;

		this.CityMilesSq = cityPopulation / advancedSettings.CityPeoplePerSqMile;

		// people stats
		this.NobleFamilies = Math.floor(cityPopulation / advancedSettings.PeoplePerNobleFamily);
		this.LawOfficers = Math.floor(cityPopulation / advancedSettings.PeoplePerOfficer);
		this.Clergy = Math.floor(cityPopulation / advancedSettings.PeoplePerClergy);
		this.Priests = Math.floor(this.Clergy / advancedSettings.ClergyPerPriest);
		
		// building stats
		this.TotalBuildings = Math.floor(cityPopulation / advancedSettings.HouseholdSize * advancedSettings.WarehousesPerBuildingMultiplier);
		this.Services = [];

		const potentialServices = Service.GetServices();
		for (const service of potentialServices) {
			const numServices = Math.floor(this.CityPopulation / service.SupportValue);
			for (let y = 0; y < numServices; y++) {
				this.Services.push(new Service(service.Name, service.SupportValue));
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
