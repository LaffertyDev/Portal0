import Settlement from "../settlement/settlement";
import { RegionModel } from "./region";
import { IRegionGenConfig } from "./regiongenconfig";

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

		// the total population of the region
		region.Population = regionGenConfiguration.RegionPopulation;

		// the total size of the region
		region.AreaAcres = regionGenConfiguration.RegionSizeAcres;

		region.Age = regionGenConfiguration.RegionAgeYears;

		region.TotalLivestock = regionGenConfiguration.RegionPopulation * regionGenConfiguration.LivestockPerPerson;
		region.Fowl = region.TotalLivestock * regionGenConfiguration.PercentageOfLivestockIsFowl;
		region.BurdenBeasts = region.TotalLivestock - region.Fowl;

		region.CastlesRuined = Math.floor(
			regionGenConfiguration.RegionPopulation * Math.sqrt(regionGenConfiguration.RegionAgeYears) / 
			(regionGenConfiguration.PeoplePerRuinedCastle));
		region.CastlesActive = Math.floor(regionGenConfiguration.RegionPopulation / regionGenConfiguration.PeoplePerCastle);
		region.CastlesTotal = region.CastlesRuined + region.CastlesActive;

		region.CastlesInOutskirts = region.CastlesTotal * regionGenConfiguration.PercentageOfCastlesInOutskirts;

		region.Cities = [];
		region.Towns = [];
		region.Villages = [];

		let totalCityPopulation = 0;
		let lastCityPopulation = Math.sqrt(regionGenConfiguration.RegionPopulation) * 14; // 2d4+10
		totalCityPopulation += lastCityPopulation;
		region.Cities.push(new Settlement(lastCityPopulation, regionGenConfiguration));
		lastCityPopulation = this.getRandomArbitraryInteger(0.2, 0.8) * lastCityPopulation;
		while (lastCityPopulation > 8000) {
			totalCityPopulation += lastCityPopulation;
			region.Cities.push(new Settlement(lastCityPopulation, regionGenConfiguration));
			const populationReduction = this.getRandomArbitraryInteger(0.1, 0.4);
			lastCityPopulation = lastCityPopulation * populationReduction;
		}

		let totalTownPopulation = 0;
		const numTowns = region.Cities.length * 8; // 2d8
		region.Towns = [];
		
		while (region.Towns.length < numTowns && (totalTownPopulation + totalCityPopulation) < regionGenConfiguration.RegionPopulation) {
			let townPopulation = this.getRandomArbitraryInteger(1000, 8000); // town minimum, town maximum
			if (townPopulation + totalCityPopulation + totalTownPopulation > regionGenConfiguration.RegionPopulation) {
				townPopulation = regionGenConfiguration.RegionPopulation - totalTownPopulation - totalCityPopulation;
			}

			region.Towns.push(new Settlement(townPopulation, regionGenConfiguration));
			totalTownPopulation += townPopulation;
		}

		const totalVillagePopulation = regionGenConfiguration.RegionPopulation - (totalCityPopulation + totalTownPopulation);
		region.Villages = [];
		const numVillages = Math.floor(totalVillagePopulation / 175); // average village population (20 - 1000, or 50 - 300)
		for (let x = 0; x < numVillages; x++) {
			region.Villages.push(new Settlement(Math.floor(totalVillagePopulation / numVillages), regionGenConfiguration));
		}

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
