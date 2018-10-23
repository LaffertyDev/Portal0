import Settlement from "../settlement/settlement";
import { RegionModel } from "./region";
import { RegionGenConfig } from "./regiongenconfig";

/**
 * Handles pulling in settings & dependencies to build a region
 */
// tslint:disable-next-line:max-classes-per-file
export class RegionGenerator {
	/**
	 * Creates and returns a region from the provided configuration
	 * @param regionGenConfiguration the configuration to build the region from
	 */
	public generate(regionGenConfiguration: RegionGenConfig): RegionModel {
		const region = new RegionModel();
		region.AreaSqMiles = regionGenConfiguration.RegionSizeSqMiles;
		region.Age = regionGenConfiguration.RegionAgeYears;

		// Generate Farming Details
		region.TotalLivestock = regionGenConfiguration.RegionPopulation * regionGenConfiguration.LivestockPerPerson;
		region.Fowl = region.TotalLivestock * regionGenConfiguration.PercentageOfLivestockIsFowl;
		region.BurdenBeasts = region.TotalLivestock - region.Fowl;

		// Generate Castle Details
		region.CastlesRuined = Math.floor(
			regionGenConfiguration.RegionPopulation * Math.sqrt(regionGenConfiguration.RegionAgeYears) / 
			(regionGenConfiguration.PeoplePerRuinedCastle));
		region.CastlesActive = Math.floor(regionGenConfiguration.RegionPopulation / regionGenConfiguration.PeoplePerCastle);
		region.CastlesTotal = region.CastlesRuined + region.CastlesActive;
		region.CastlesInOutskirts = region.CastlesTotal * regionGenConfiguration.PercentageOfCastlesInOutskirts;

		// Generate Settlement Details
		region.Cities = [];
		region.Towns = [];
		// step 1, determine actual settlement population
		// step 2, determine outskirts settlement population

		let totalGeneratedPopulation = 0;
		let totalCountrysidePopulation = 0;
		let lastCityPopulation = Math.floor(Math.sqrt(regionGenConfiguration.RegionPopulation)) * (this.getRandomArbitraryInteger(2, 8) + 10);
		const capitol = new Settlement(lastCityPopulation, regionGenConfiguration);
		totalGeneratedPopulation += capitol.GetTotalPopulation();
		region.Cities.push(capitol);
		lastCityPopulation = this.getRandomArbitraryInteger(0.2, 0.8) * lastCityPopulation;
		while (lastCityPopulation > 8000) {
			const city = new Settlement(lastCityPopulation, regionGenConfiguration);
			region.Cities.push(city);
			const populationReduction = this.getRandomArbitraryInteger(0.1, 0.4);
			lastCityPopulation = lastCityPopulation * populationReduction;
			totalGeneratedPopulation += city.GetTotalPopulation();
			totalCountrysidePopulation += city.CountrysidePopulation;
		}

		const numTowns = region.Cities.length * this.getRandomArbitraryInteger(2, 16);
		region.Towns = [];
		
		while (region.Towns.length < numTowns && totalGeneratedPopulation < regionGenConfiguration.RegionPopulation) {
			let townPopulation = this.getRandomArbitraryInteger(1000, 8000); // town minimum, town maximum
			if (townPopulation + totalGeneratedPopulation > regionGenConfiguration.RegionPopulation) {
				townPopulation = regionGenConfiguration.RegionPopulation - totalGeneratedPopulation;
			}

			const settlement = new Settlement(townPopulation, regionGenConfiguration);
			region.Towns.push(settlement);
			totalGeneratedPopulation += settlement.GetTotalPopulation();
			totalCountrysidePopulation += settlement.CountrysidePopulation;
		}

		/**
		 * Order goes:
		 * 
		 * 1. Metropolis(12,000+)
		 * 2. City		(8,000 - 12,000)
		 * 3. Town		(1,000 - 8,000)
		 * 4. Village 	(100 - 1,000) (175)
		 * 5. Hamlet	(cluster of farmhouses)
		 */
		return region;
	}

	private buildCities(): void {
		//
	}

	private buildRemainingVillages(): void {
		//
	}
	private buildTowns(): void {
		//
	}

	private getRandomArbitraryInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min);
	}
}
