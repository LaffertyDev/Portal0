import Settlement from "../Settlement/Settlement";
import {AdvancedSettings} from "../Region/AdvancedSettings";

export class RegionModel {
    Population: number;
    AreaAcres : number;
    Age : number;
    TotalLivestock : number;
    Fowl : number;
    BurdenBeasts : number;
    RuinedCastles : number;
    ActiveCastles : number;
    TotalCastles : number;
    Cities : Settlement[];
    Towns : Settlement[];
    Villages : Settlement[];

    constructor() {
        
    }
}

export class RegionGenerator {
    constructor() {

    }

    generate(regionPopulation: number, regionAgeYears: number, regionAreaAcres: number, advancedSettings: AdvancedSettings) : RegionModel {
        let region = new RegionModel();
        region.Population = regionPopulation;
        region.AreaAcres = regionAreaAcres;
        region.Age = regionAgeYears;

        region.TotalLivestock = regionPopulation * advancedSettings.LivestockPerPerson;
        region.Fowl = region.TotalLivestock * advancedSettings.PercentageOfLivestockIsFowl;
        region.BurdenBeasts = region.TotalLivestock - region.Fowl;

        region.RuinedCastles = regionPopulation * Math.sqrt(regionAgeYears) / (advancedSettings.PeoplePerRuinedCastle);
        region.ActiveCastles = regionPopulation / advancedSettings.PeoplePerCastle;
        region.TotalCastles = region.RuinedCastles + region.ActiveCastles;

        let castlesInOutskirts = region.TotalCastles * advancedSettings.PercentageOfCastlesInOutskirts;
        let castlesInCivilization = region.TotalCastles - castlesInOutskirts;

        region.Cities = [];
        region.Towns = [];
        region.Villages = [];

        let totalCityPopulation = 0;
        let lastCityPopulation = Math.sqrt(regionPopulation) * 14; //2d4+10
        totalCityPopulation += lastCityPopulation;
        region.Cities.push(new Settlement(lastCityPopulation, advancedSettings));
        lastCityPopulation = this.getRandomArbitrary(0.2, 0.8) * lastCityPopulation;
        while(lastCityPopulation > 8000) {
            totalCityPopulation += lastCityPopulation;
            region.Cities.push(new Settlement(lastCityPopulation, advancedSettings));
            let populationReduction = this.getRandomArbitrary(0.1, 0.4);
            lastCityPopulation = lastCityPopulation * populationReduction;
        }

        let totalTownPopulation = 0;
        let numTowns = region.Cities.length * 8; //2d8
        region.Towns = [];
        
        while(region.Towns.length < numTowns && (totalTownPopulation + totalCityPopulation) < regionPopulation) {
            let townPopulation = this.getRandomArbitrary(1000, 8000); //town minimum, town maximum
            if(townPopulation + totalCityPopulation + totalTownPopulation > regionPopulation) {
                townPopulation = regionPopulation - totalTownPopulation - totalCityPopulation;
            }

            region.Towns.push(new Settlement(townPopulation, advancedSettings));
            totalTownPopulation += townPopulation;
        }

        let totalVillagePopulation = regionPopulation - (totalCityPopulation + totalTownPopulation);
        region.Villages = [];
        let numVillages = totalVillagePopulation / 175; //average village population (20 - 1000, or 50 - 300)
        for(let x = 0; x < numVillages; x++) {
            region.Villages.push(new Settlement(totalVillagePopulation / numVillages, advancedSettings));
        }

        return region;
    }

    private getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}