import { RegionGenConfig } from "../region/regiongenconfig";
import Service from "../services/service";

/**
 * A settlement where humanoids live
 */
export default class Settlement {

	public CityAcres: number;
	public Clergy: number;
	public CountrysideAcres: number;
	public CountrysidePopulation: number;
	public LawOfficers: number;
	public NobleFamilies: number;
	public Priests: number;
	public Services: Service[];
	public TotalBuildings: number;
	public TotalPopulation: number;

	constructor(cityPopulation: number, advancedSettings: RegionGenConfig) {
		this.TotalPopulation = cityPopulation;

		this.CountrysidePopulation = Math.floor(cityPopulation / advancedSettings.CityCountrysideRatio);
		this.CountrysideAcres = Math.floor(this.CountrysidePopulation / advancedSettings.RegionPopulationDensity);
		this.CityAcres = Math.floor(cityPopulation / advancedSettings.CityPeoplePerAcre);

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
			const numServices = Math.floor(this.TotalPopulation / service.SupportValue);
			for (let y = 0; y < numServices; y++) {
				this.Services.push(new Service(service.Name, service.SupportValue));
			}
		}
	}
}
