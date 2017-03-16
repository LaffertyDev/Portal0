import * as RegionConst from "../../Constants";
import Settlement from "../Settlement/Settlement";

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

    generate(regionPopulation, regionAgeYears, regionAreaAcres) : RegionModel {
        const LIVESTOCK_PER_PERSON = 2.2;
        const PEOPLE_PER_CASTLE = 50000;
        const PEOPLE_PER_RUINEDCASTLE = 5000000;
        const FOWL_PERCENTAGE = 0.68;
        const OUTSKIRT_CASTLE_PERCENTAGE = 0.25;

        let region = new RegionModel();
        region.Population = regionPopulation;
        region.AreaAcres = regionAreaAcres;
        region.Age = regionAgeYears;

        region.TotalLivestock = regionPopulation * LIVESTOCK_PER_PERSON;
        region.Fowl = region.TotalLivestock * FOWL_PERCENTAGE;
        region.BurdenBeasts = region.TotalLivestock - region.Fowl;

        region.RuinedCastles = regionPopulation * Math.sqrt(regionAgeYears) / (PEOPLE_PER_RUINEDCASTLE);
        region.ActiveCastles = regionPopulation / PEOPLE_PER_CASTLE;
        region.TotalCastles = region.RuinedCastles + region.ActiveCastles;

        let castlesInOutskirts = region.TotalCastles * OUTSKIRT_CASTLE_PERCENTAGE;
        let castlesInCivilization = region.TotalCastles - castlesInOutskirts;

        region.Cities = [];
        region.Towns = [];
        region.Villages = [];

        let totalCityPopulation = 0;
        let lastCityPopulation = Math.sqrt(regionPopulation) * 14; //2d4+10
        totalCityPopulation += lastCityPopulation;
        region.Cities.push(new Settlement(lastCityPopulation));
        lastCityPopulation = this.getRandomArbitrary(0.2, 0.8) * lastCityPopulation;
        while(lastCityPopulation > 8000) {
            totalCityPopulation += lastCityPopulation;
            region.Cities.push(new Settlement(lastCityPopulation));
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

            region.Towns.push(new Settlement(townPopulation));
            totalTownPopulation += townPopulation;
        }

        let totalVillagePopulation = regionPopulation - (totalCityPopulation + totalTownPopulation);
        region.Villages = [];
        let numVillages = totalVillagePopulation / 175; //average village population (20 - 1000, or 50 - 300)
        for(let x = 0; x < numVillages; x++) {
            region.Villages.push(new Settlement(totalVillagePopulation / numVillages));
        }

        return region;
    }

    private getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}