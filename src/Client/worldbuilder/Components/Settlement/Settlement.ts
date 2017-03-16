import Service from "../Services/Service";
import {AdvancedSettings} from "../Region/AdvancedSettings";

/**
 * A settlement where humanoids live
 */
export default class Settlement {
    private TotalPopulation : number;
    private CountrysidePopulation : number;
    private CountrysideAcres : number;
    private CityAcres : number;
    private NobleFamilies : number;
    private LawOfficers : number;
    private Clergy : number;
    private Priests : number;
    private TotalBuildings : number;

    Services : any[];

    constructor(cityPopulation, advancedSettings: AdvancedSettings) {
        this.TotalPopulation = cityPopulation;

        this.CountrysidePopulation = cityPopulation / advancedSettings.CityCountrysideRatio;
        this.CountrysideAcres = this.CountrysidePopulation / advancedSettings.RegionPopulationDensity;
        this.CityAcres = cityPopulation / advancedSettings.CityPeoplePerAcre;

        //people stats
        this.NobleFamilies = cityPopulation / advancedSettings.PeoplePerNobleFamily;
        this.LawOfficers = cityPopulation / advancedSettings.PeoplePerOfficer;
        this.Clergy = cityPopulation / advancedSettings.PeoplePerClergy;
        this.Priests = this.Clergy / advancedSettings.ClergyPerPriest;
        
        //building stats
        this.TotalBuildings = cityPopulation / advancedSettings.HouseholdSize * advancedSettings.WarehousesPerBuildingMultiplier;
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