
/**
 * Configuration settings for building a region, with tolerances
 */
export class RegionGenConfig {
	
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
	public RegionSizeAcres: number;
	public WarehousesPerBuildingMultiplier: number;

	constructor() {
		this.LivestockPerPerson = 2.2;
		this.PeoplePerCastle = 50000;
		this.PeoplePerRuinedCastle = 5000000;
		this.PercentageOfLivestockIsFowl = 0.68;
		this.PercentageOfCastlesInOutskirts = 0.25;

		this.PeoplePerAcreFarmland = 180;
		this.RegionPeoplePerAcre = 30; // 30 - 120

		this.PeoplePerNobleFamily = 200;
		this.PeoplePerOfficer = 150;
		this.PeoplePerClergy = 40;
		this.ClergyPerPriest = 25; // 25-30

		this.HouseholdSize = 5;
		this.WarehousesPerBuildingMultiplier = 1.4; // 1.0 - 1.4
		this.CityPeoplePerAcre = 61;
		this.RegionPopulation = 1000000;
		this.RegionAgeYears = 1000000;
		this.RegionSizeAcres = 1000;
	}
}
