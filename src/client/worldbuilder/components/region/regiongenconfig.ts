
/**
 * Configuration settings for building a region, with tolerances
 */
export interface IRegionGenConfig {
	CityCountrysideRatio: number;
	
	CityPeoplePerAcre: number;
	ClergyPerPriest: number;

	HouseholdSize: number;
	// region advanced settings
	LivestockPerPerson: number;

	PeoplePerAcreFarmland: number;
	PeoplePerCastle: number;
	PeoplePerClergy: number;

	// city advanced settings
	PeoplePerNobleFamily: number;
	PeoplePerOfficer: number;
	PeoplePerRuinedCastle: number;
	PercentageOfCastlesInOutskirts: number;
	PercentageOfLivestockIsFowl: number;
	RegionAgeYears: number;

	/**
	 * 
	 */
	RegionPeoplePerAcre: number; // 30-120

	RegionPopulation: number;
	RegionPopulationDensity: number;

	/**
	 * This is the total size of the region, in acres
	 */
	RegionSizeAcres: number;
	WarehousesPerBuildingMultiplier: number;
}

/**
 * Configuration settings for building a region, with tolerances
 */
export class RegionGenConfig implements IRegionGenConfig {
	public CityCountrysideRatio: number;
	
	public CityPeoplePerAcre: number;
	public ClergyPerPriest: number;

	public HouseholdSize: number;
	// region advanced settings
	public LivestockPerPerson: number;

	public PeoplePerAcreFarmland: number;
	public PeoplePerCastle: number;
	public PeoplePerClergy: number;

	// city advanced settings
	public PeoplePerNobleFamily: number;
	public PeoplePerOfficer: number;
	public PeoplePerRuinedCastle: number;
	public PercentageOfCastlesInOutskirts: number;
	public PercentageOfLivestockIsFowl: number;
	public RegionAgeYears: number;
	public RegionPeoplePerAcre: number; // 30-120

	public RegionPopulation: number;
	public RegionPopulationDensity: number;
	public RegionSizeAcres: number;
	public WarehousesPerBuildingMultiplier: number;

	constructor() {
		this.LivestockPerPerson = 2.2;
		this.PeoplePerCastle = 50000;
		this.PeoplePerRuinedCastle = 5000000;
		this.PercentageOfLivestockIsFowl = 0.68;
		this.PercentageOfCastlesInOutskirts = 0.25;
		this.RegionPopulationDensity = 30; // 30-180

		this.PeoplePerAcreFarmland = 180;
		this.RegionPeoplePerAcre = 30; // 30 - 120

		this.PeoplePerNobleFamily = 200;
		this.PeoplePerOfficer = 150;
		this.PeoplePerClergy = 40;
		this.ClergyPerPriest = 25; // 25-30

		this.HouseholdSize = 5;
		this.WarehousesPerBuildingMultiplier = 1.4; // 1.0 - 1.4
		this.CityPeoplePerAcre = 61;

		this.CityCountrysideRatio = this.CityPeoplePerAcre - this.RegionPeoplePerAcre;

		this.RegionPopulation = 1000000;
		this.RegionAgeYears = 1000000;
		this.RegionSizeAcres = 1000;
	}
}
