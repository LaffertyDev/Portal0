import * as RegionConst from "./Constants";
import Settlement from "./Settlement";

export default class Region {
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


    constructor(regionPopulation, regionAgeYears, regionAreaAcres) {
        const LIVESTOCK_PER_PERSON = 2.2;
        const PEOPLE_PER_CASTLE = 50000;
        const PEOPLE_PER_RUINEDCASTLE = 5000000;
        const FOWL_PERCENTAGE = 0.68;
        const OUTSKIRT_CASTLE_PERCENTAGE = 0.25;

        this.Population = regionPopulation;
        this.AreaAcres = regionAreaAcres;
        this.Age = regionAgeYears;

        this.TotalLivestock = regionPopulation * LIVESTOCK_PER_PERSON;
        this.Fowl = this.TotalLivestock * FOWL_PERCENTAGE;
        this.BurdenBeasts = this.TotalLivestock - this.Fowl;

        this.RuinedCastles = regionPopulation * Math.sqrt(regionAgeYears) / (PEOPLE_PER_RUINEDCASTLE);
        this.ActiveCastles = regionPopulation / PEOPLE_PER_CASTLE;
        this.TotalCastles = this.RuinedCastles + this.ActiveCastles;

        let castlesInOutskirts = this.TotalCastles * OUTSKIRT_CASTLE_PERCENTAGE;
        let castlesInCivilization = this.TotalCastles - castlesInOutskirts;

        this.Cities = [];
        this.Towns = [];
        this.Villages = [];

        let totalCityPopulation = 0;
        let lastCityPopulation = Math.sqrt(regionPopulation) * 14; //2d4+10
        totalCityPopulation += lastCityPopulation;
        this.Cities.push(new Settlement(lastCityPopulation));
        lastCityPopulation = getRandomArbitrary(0.2, 0.8) * lastCityPopulation;
        while(lastCityPopulation > 8000) {
            totalCityPopulation += lastCityPopulation;
            this.Cities.push(new Settlement(lastCityPopulation));
            let populationReduction = getRandomArbitrary(0.1, 0.4);
            lastCityPopulation = lastCityPopulation * populationReduction;
        }

        let totalTownPopulation = 0;
        let numTowns = this.Cities.length * 8; //2d8
        this.Towns = [];
        
        while(this.Towns.length < numTowns && (totalTownPopulation + totalCityPopulation) < regionPopulation) {
            let townPopulation = getRandomArbitrary(1000, 8000); //town minimum, town maximum
            if(townPopulation + totalCityPopulation + totalTownPopulation > regionPopulation) {
                townPopulation = regionPopulation - totalTownPopulation - totalCityPopulation;
            }

            this.Towns.push(new Settlement(townPopulation));
            totalTownPopulation += townPopulation;
        }

        let totalVillagePopulation = regionPopulation - (totalCityPopulation + totalTownPopulation);
        this.Villages = [];
        let numVillages = totalVillagePopulation / 175; //average village population (20 - 1000, or 50 - 300)
        for(let x = 0; x < numVillages; x++) {
            this.Villages.push(new Settlement(totalVillagePopulation / numVillages));
        }

        console.log('Region: ' + regionPopulation + ' Town/City/Village: ' + (totalTownPopulation + totalCityPopulation + totalVillagePopulation))
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
