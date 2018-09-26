import { IRegionGenConfig } from "../region/regiongenconfig";
import Settlement from "../settlement/settlement";

/**
 * A region on a map, or a kingdom / nation / state
 */
export class RegionModel {

	/**
	 * The number of activate castles in the region, meaning occupied & used
	 */
	/**
	 * The number of activate castles in the region, meaning occupied & used
	 */
	public ActiveCastles!: number;

	/**
	 * The age of the region / Kingdom, in years (code smell)
	 */
	/**
	 * The age of the region / Kingdom, in years (code smell)
	 */
	public Age!: number;

	/**
	 * The size of the region, in acres
	 */
	/**
	 * The size of the region, in acres
	 */
	public AreaAcres!: number;

	/**
	 * The total number of cows/pigs/etc.. in the region
	 */
	/**
	 * The total number of cows/pigs/etc.. in the region
	 */
	public BurdenBeasts!: number;

	/**
	 * A list of large settlements inside of the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	/**
	 * A list of large settlements inside of the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	public Cities!: Settlement[];

	/**
	 * The total number of fowl (Chickens) in the region
	 */
	/**
	 * The total number of fowl (Chickens) in the region
	 */
	public Fowl!: number;
	/**
	 * The amount of people in the region
	 */
	/**
	 * The amount of people in the region
	 */
	public Population!: number;

	/**
	 * The total number of ruined or forgotten castles in the region
	 */
	/**
	 * The total number of ruined or forgotten castles in the region
	 */
	public RuinedCastles!: number;

	/**
	 * The sum of active & ruined castles
	 */
	/**
	 * The sum of active & ruined castles
	 */
	public TotalCastles!: number;

	/**
	 * The total amount of cultivated livestock in the region
	 */
	/**
	 * The total amount of cultivated livestock in the region
	 */
	public TotalLivestock!: number;

	/**
	 * A list of medium-sized settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	/**
	 * A list of medium-sized settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	public Towns!: Settlement[];

	/**
	 * A list of small settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	/**
	 * A list of small settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	public Villages!: Settlement[];
}

/**
 * Handles pulling in settings & dependencies to build a region
 */
// tslint:disable-next-line:max-classes-per-file
export class RegionGenerator {
	/**
	 * Creates and returns a region from the provided configuration
	 * @param regionGenConfiguration the configuration to build the region from
	 */
	public generate(regionGenConfiguration: IRegionGenConfig): RegionModel {
		const region = new RegionModel();
		region.Population = regionGenConfiguration.RegionPopulation;
		region.AreaAcres = regionGenConfiguration.RegionPeoplePerAcre;
		region.Age = regionGenConfiguration.RegionAgeYears;

		region.TotalLivestock = regionGenConfiguration.RegionPopulation * regionGenConfiguration.LivestockPerPerson;
		region.Fowl = region.TotalLivestock * regionGenConfiguration.PercentageOfLivestockIsFowl;
		region.BurdenBeasts = region.TotalLivestock - region.Fowl;

		region.RuinedCastles = regionGenConfiguration.RegionPopulation * Math.sqrt(regionGenConfiguration.RegionAgeYears) / 
			(regionGenConfiguration.PeoplePerRuinedCastle);
		region.ActiveCastles = regionGenConfiguration.RegionPopulation / regionGenConfiguration.PeoplePerCastle;
		region.TotalCastles = region.RuinedCastles + region.ActiveCastles;

		const castlesInOutskirts = region.TotalCastles * regionGenConfiguration.PercentageOfCastlesInOutskirts;
		const castlesInCivilization = region.TotalCastles - castlesInOutskirts;

		region.Cities = [];
		region.Towns = [];
		region.Villages = [];

		let totalCityPopulation = 0;
		let lastCityPopulation = Math.sqrt(regionGenConfiguration.RegionPopulation) * 14; // 2d4+10
		totalCityPopulation += lastCityPopulation;
		region.Cities.push(new Settlement(lastCityPopulation, regionGenConfiguration));
		lastCityPopulation = this.getRandomArbitrary(0.2, 0.8) * lastCityPopulation;
		while (lastCityPopulation > 8000) {
			totalCityPopulation += lastCityPopulation;
			region.Cities.push(new Settlement(lastCityPopulation, regionGenConfiguration));
			const populationReduction = this.getRandomArbitrary(0.1, 0.4);
			lastCityPopulation = lastCityPopulation * populationReduction;
		}

		let totalTownPopulation = 0;
		const numTowns = region.Cities.length * 8; // 2d8
		region.Towns = [];
		
		while (region.Towns.length < numTowns && (totalTownPopulation + totalCityPopulation) < regionGenConfiguration.RegionPopulation) {
			let townPopulation = this.getRandomArbitrary(1000, 8000); // town minimum, town maximum
			if (townPopulation + totalCityPopulation + totalTownPopulation > regionGenConfiguration.RegionPopulation) {
				townPopulation = regionGenConfiguration.RegionPopulation - totalTownPopulation - totalCityPopulation;
			}

			region.Towns.push(new Settlement(townPopulation, regionGenConfiguration));
			totalTownPopulation += townPopulation;
		}

		const totalVillagePopulation = regionGenConfiguration.RegionPopulation - (totalCityPopulation + totalTownPopulation);
		region.Villages = [];
		const numVillages = totalVillagePopulation / 175; // average village population (20 - 1000, or 50 - 300)
		for (let x = 0; x < numVillages; x++) {
			region.Villages.push(new Settlement(totalVillagePopulation / numVillages, regionGenConfiguration));
		}

		return region;
	}

	private getRandomArbitrary(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}
}
