class City {
    constructor(cityPopulation) {
        const PEOPLE_PER_NOBLEFAMILY = 200;
        const PEOPLE_PER_OFFICER = 150;
        const PEOPLE_PER_CLERGY = 40;
        const CLERGY_PER_PRIEST = 25; //25-30
        const HOUSEHOLD_SIZE = 5; //5-6
        const WAREHOUSES_PER_BUILDING = 1.4; //1.0 - 1.4 for warehouses, docks, etc..)
        const CITY_PEOPLE_PER_ACRE = 61; //61 people per acre
        const CITY_COUNTRYSIDE_RATIO = (PEOPLE_PER_ACRE_FARM - REGION_POPULATION_DENSITY);

        this.TotalPopulation = cityPopulation;

        this.CountrysidePopulation = cityPopulation / CITY_COUNTRYSIDE_RATIO;
        this.CountrysideAcres = this.CountrysidePopulation / REGION_POPULATION_DENSITY;
        this.CityAcres = cityPopulation / CITY_PEOPLE_PER_ACRE;

        //people stats
        this.NobleFamilies = cityPopulation / PEOPLE_PER_NOBLEFAMILY;
        this.LawOfficers = cityPopulation / PEOPLE_PER_OFFICER;
        this.Clergy = cityPopulation / PEOPLE_PER_CLERGY;
        this.Priests = this.Clergy / CLERGY_PER_PRIEST;
        
        //building stats
        this.TotalBuildings = cityPopulation / HOUSEHOLD_SIZE * WAREHOUSES_PER_BUILDING;
        this.Services = [];

        let potentialServices = Service.GetServices();
        for(let service of potentialServices) {
            let numServices = this.TotalPopulation / service.SupportValue;
            for(let y = 1; y < numServices; y++) {
                this.Services.push(new Service(service.Name, service.SupportValue));
            }
        }
    }
}