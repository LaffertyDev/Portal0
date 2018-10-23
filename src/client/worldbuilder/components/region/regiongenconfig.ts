
/**
 * Configuration settings for building a region, with tolerances
 */
export class RegionGenConfig {
	
	public AverageFarmSizeAcres: number; // 20 - 40
	public CityPeoplePerSqMile: number;
	public ClergyPerPriest: number;

	public HouseholdSize: number;
	public LivestockPerPerson: number;

	public PeoplePerCastle: number;
	public PeoplePerClergy: number;
	public PeoplePerNobleFamily: number;
	public PeoplePerOfficer: number;
	public PeoplePerRuinedCastle: number;
	public PeoplePerSqMileFarmland: number;
	public PercentageOfCastlesInOutskirts: number;
	public PercentageOfLivestockIsFowl: number;
	public RegionAgeYears: number;

	public RegionPopulation: number;
	public RegionSizeSqMiles: number;
	public WarehousesPerBuildingMultiplier: number;

	constructor() {
		this.LivestockPerPerson = 2.2;
		this.PeoplePerCastle = 50000;
		this.PeoplePerRuinedCastle = 5000000;
		this.PercentageOfLivestockIsFowl = 0.68;
		this.PercentageOfCastlesInOutskirts = 0.25;

		this.PeoplePerSqMileFarmland = 180;
		this.AverageFarmSizeAcres = 20; // 20 - 40

		this.PeoplePerNobleFamily = 200;
		this.PeoplePerOfficer = 150;
		this.PeoplePerClergy = 40;
		this.ClergyPerPriest = 25; // 25-30

		this.HouseholdSize = 5;
		this.WarehousesPerBuildingMultiplier = 1.4; // 1.0 - 1.4
		this.CityPeoplePerSqMile = 38500; // 61 per acre, 640 acres in a sq mile
		this.RegionPopulation = 6600000; // 
		this.RegionAgeYears = 1000;
		this.RegionSizeSqMiles = 10000; // ireland is 32.5k miles, duchy of normandy is 18.5k
	}
}
