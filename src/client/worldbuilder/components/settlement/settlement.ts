import { RegionGenConfig } from "../region/regiongenconfig";
import Service from "../services/service";

/**
 * A settlement where humanoids live
 */
export default class Settlement {

	public Services: any[];
	private CityAcres: number;
	private Clergy: number;
	private CountrysideAcres: number;
	private CountrysidePopulation: number;
	private LawOfficers: number;
	private NobleFamilies: number;
	private Priests: number;
	private TotalBuildings: number;
	private TotalPopulation: number;

	constructor(cityPopulation: number, advancedSettings: RegionGenConfig) {
		this.TotalPopulation = cityPopulation;

		this.CountrysidePopulation = cityPopulation / advancedSettings.CityCountrysideRatio;
		this.CountrysideAcres = this.CountrysidePopulation / advancedSettings.RegionPopulationDensity;
		this.CityAcres = cityPopulation / advancedSettings.CityPeoplePerAcre;

		// people stats
		this.NobleFamilies = cityPopulation / advancedSettings.PeoplePerNobleFamily;
		this.LawOfficers = cityPopulation / advancedSettings.PeoplePerOfficer;
		this.Clergy = cityPopulation / advancedSettings.PeoplePerClergy;
		this.Priests = this.Clergy / advancedSettings.ClergyPerPriest;
		
		// building stats
		this.TotalBuildings = cityPopulation / advancedSettings.HouseholdSize * advancedSettings.WarehousesPerBuildingMultiplier;
		this.Services = [];

		const potentialServices = Service.GetServices();
		for (const service of potentialServices) {
			const numServices = this.TotalPopulation / service.SupportValue;
			for (let y = 1; y < numServices; y++) {
				this.Services.push(new Service(service.Name, service.SupportValue));
			}
		}
	}
}
