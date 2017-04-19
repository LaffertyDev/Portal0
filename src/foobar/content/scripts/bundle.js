/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Region = __webpack_require__(4);
var RegionGenConfig_1 = __webpack_require__(5);
/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
var RegionForm = (function (_super) {
    __extends(RegionForm, _super);
    function RegionForm(props) {
        var _this = _super.call(this, props) || this;
        // set initial state to default configuration
        _this.state = new RegionGenConfig_1.RegionGenConfig();
        //WRITING OUT THESE SUCKED AND THERE HAS TO BE A BETTER WAY
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleRegionPopulation = _this.handleRegionPopulation.bind(_this);
        _this.handleRegionSizeAcres = _this.handleRegionSizeAcres.bind(_this);
        _this.handleRegionAgeYears = _this.handleRegionAgeYears.bind(_this);
        _this.handleLivestockPerPerson = _this.handleLivestockPerPerson.bind(_this);
        _this.handlePeoplePerCastle = _this.handlePeoplePerCastle.bind(_this);
        _this.handlePeoplePerRuinedCastle = _this.handlePeoplePerRuinedCastle.bind(_this);
        _this.handlePercentageOfLivestockIsFowl = _this.handlePercentageOfLivestockIsFowl.bind(_this);
        _this.handlePercentageOfCastlesInOutskirts = _this.handlePercentageOfCastlesInOutskirts.bind(_this);
        _this.handleRegionPopulationDensity = _this.handleRegionPopulationDensity.bind(_this);
        _this.handlePeoplePerAcreFarmland = _this.handlePeoplePerAcreFarmland.bind(_this);
        _this.handleRegionPeoplePerAcre = _this.handleRegionPeoplePerAcre.bind(_this);
        _this.handlePeoplePerNobleFamily = _this.handlePeoplePerNobleFamily.bind(_this);
        _this.handlePeoplePerOfficer = _this.handlePeoplePerOfficer.bind(_this);
        _this.handlePeoplePerClergy = _this.handlePeoplePerClergy.bind(_this);
        _this.handleClergyPerPriest = _this.handleClergyPerPriest.bind(_this);
        _this.handleHouseholdSize = _this.handleHouseholdSize.bind(_this);
        _this.handleWarehousesPerBuildingMultiplier = _this.handleWarehousesPerBuildingMultiplier.bind(_this);
        _this.handleCityPeoplePerAcre = _this.handleCityPeoplePerAcre.bind(_this);
        _this.handleCityCountrysideRatio = _this.handleCityCountrysideRatio.bind(_this);
        _this.regionGenerator = new Region.RegionGenerator();
        return _this;
    }
    RegionForm.prototype.handleSubmit = function (event) {
        var region = this.regionGenerator.generate(this.state);
        this.props.onFormSubmit(region);
        event.preventDefault();
    };
    RegionForm.prototype.handleRegionPopulation = function (event) {
        this.setState({ RegionPopulation: event.target.value });
    };
    RegionForm.prototype.handleRegionSizeAcres = function (event) {
        this.setState({ RegionSizeAcres: event.target.value });
    };
    RegionForm.prototype.handleRegionAgeYears = function (event) {
        this.setState({ RegionAgeYears: event.target.value });
    };
    RegionForm.prototype.handleLivestockPerPerson = function (event) {
        this.setState({ LivestockPerPerson: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerCastle = function (event) {
        this.setState({ PeoplePerCastle: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerRuinedCastle = function (event) {
        this.setState({ PeoplePerRuinedCastle: event.target.value });
    };
    RegionForm.prototype.handlePercentageOfLivestockIsFowl = function (event) {
        this.setState({ PercentageOfLivestockIsFowl: event.target.value });
    };
    RegionForm.prototype.handlePercentageOfCastlesInOutskirts = function (event) {
        this.setState({ PercentageOfCastlesInOutskirts: event.target.value });
    };
    RegionForm.prototype.handleRegionPopulationDensity = function (event) {
        this.setState({ RegionPopulationDensity: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerAcreFarmland = function (event) {
        this.setState({ PeoplePerAcreFarmland: event.target.value });
    };
    RegionForm.prototype.handleRegionPeoplePerAcre = function (event) {
        this.setState({ RegionPeoplePerAcre: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerNobleFamily = function (event) {
        this.setState({ PeoplePerNobleFamily: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerOfficer = function (event) {
        this.setState({ PeoplePerOfficer: event.target.value });
    };
    RegionForm.prototype.handlePeoplePerClergy = function (event) {
        this.setState({ PeoplePerClergy: event.target.value });
    };
    RegionForm.prototype.handleClergyPerPriest = function (event) {
        this.setState({ ClergyPerPriest: event.target.value });
    };
    RegionForm.prototype.handleHouseholdSize = function (event) {
        this.setState({ HouseholdSize: event.target.value });
    };
    RegionForm.prototype.handleWarehousesPerBuildingMultiplier = function (event) {
        this.setState({ WarehousesPerBuildingMultiplier: event.target.value });
    };
    RegionForm.prototype.handleCityPeoplePerAcre = function (event) {
        this.setState({ CityPeoplePerAcre: event.target.value });
    };
    RegionForm.prototype.handleCityCountrysideRatio = function (event) {
        this.setState({ CityCountrysideRatio: event.target.value });
    };
    //I could pass a "Default" settings object to the form
    //I could have the form make a callback to this
    RegionForm.prototype.render = function () {
        var regionPop = this.state.RegionPopulation;
        var regionAreaAcres = this.state.RegionSizeAcres;
        var regionAgeYears = this.state.RegionAgeYears;
        //adv settings
        var livestockPerPerson = this.state.LivestockPerPerson;
        var peoplePerCastle = this.state.PeoplePerCastle;
        var peoplePerRuinedCastle = this.state.PeoplePerRuinedCastle;
        var percentageOfLivestockIsFowl = this.state.PercentageOfLivestockIsFowl;
        var percentageOfCastlesInOutskirts = this.state.PercentageOfCastlesInOutskirts;
        var regionPopulationDensity = this.state.RegionPopulationDensity;
        var peoplePerAcreFarmland = this.state.PeoplePerAcreFarmland;
        var regionPeoplePerAcre = this.state.RegionPeoplePerAcre;
        var peoplePerNobleFamily = this.state.PeoplePerNobleFamily;
        var peoplePerOfficer = this.state.PeoplePerOfficer;
        var peoplePerClergy = this.state.PeoplePerClergy;
        var clergyPerPriest = this.state.ClergyPerPriest;
        var householdSize = this.state.HouseholdSize;
        var warehousesPerBuildingMultiplier = this.state.WarehousesPerBuildingMultiplier;
        var cityPeoplePerAcre = this.state.CityPeoplePerAcre;
        var cityCountrysideRatio = this.state.CityCountrysideRatio;
        return (React.createElement("div", null,
            React.createElement("form", { action: "javascript:void(0);", onSubmit: this.handleSubmit },
                React.createElement("h3", null, "Advanced Region Settings"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "livestockPerPerson" }, "Livestock per Person"),
                        React.createElement("input", { type: "number", id: "livestockPerPerson", value: livestockPerPerson, onChange: this.handleLivestockPerPerson })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerCastle" }, "People per Castle"),
                        React.createElement("input", { type: "number", id: "peoplePerCastle", value: peoplePerCastle, onChange: this.handlePeoplePerCastle })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerRuinedCastle" }, "People per Ruined Castle"),
                        React.createElement("input", { type: "number", id: "peoplePerRuinedCastle", value: peoplePerRuinedCastle, onChange: this.handlePeoplePerRuinedCastle })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "percentageOfLivestockIsFowl" }, "Livestock Fowl %"),
                        React.createElement("input", { type: "number", id: "percentageOfLivestockIsFowl", value: percentageOfLivestockIsFowl, onChange: this.handlePercentageOfLivestockIsFowl })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "percentageOfCastlesInOutskirts" }, "Castle % in outskirts"),
                        React.createElement("input", { type: "number", id: "percentageOfCastlesInOutskirts", value: percentageOfCastlesInOutskirts, onChange: this.handlePercentageOfCastlesInOutskirts })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionPopulationDensity" }, "Region Population Density"),
                        React.createElement("input", { type: "number", id: "regionPopulationDensity", value: regionPopulationDensity, onChange: this.handleRegionPopulationDensity })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerAcreFarmland" }, "People per Acre Farmland"),
                        React.createElement("input", { type: "number", id: "peoplePerAcreFarmland", value: peoplePerAcreFarmland, onChange: this.handlePeoplePerAcreFarmland })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionPeoplePerAcre" }, "Region People per Acre"),
                        React.createElement("input", { type: "number", id: "regionPeoplePerAcre", value: regionPeoplePerAcre, onChange: this.handleRegionPeoplePerAcre })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerNobleFamily" }, "People per Noble Family"),
                        React.createElement("input", { type: "number", id: "peoplePerNobleFamily", value: peoplePerNobleFamily, onChange: this.handlePeoplePerNobleFamily })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerOfficer" }, "People per Officer"),
                        React.createElement("input", { type: "number", id: "peoplePerOfficer", value: peoplePerOfficer, onChange: this.handlePeoplePerOfficer })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerClergy" }, "People per Clergy"),
                        React.createElement("input", { type: "number", id: "peoplePerClergy", value: peoplePerClergy, onChange: this.handlePeoplePerClergy })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "clergyPerPriest" }, "Clergy per Priest"),
                        React.createElement("input", { type: "number", id: "clergyPerPriest", value: clergyPerPriest, onChange: this.handleClergyPerPriest })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "householdSize" }, "Household Size"),
                        React.createElement("input", { type: "number", id: "householdSize", value: householdSize, onChange: this.handleHouseholdSize })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "warehousesPerBuildingMultiplier" }, "Warehouses per Building Multiplier"),
                        React.createElement("input", { type: "number", id: "warehousesPerBuildingMultiplier", value: warehousesPerBuildingMultiplier, onChange: this.handleWarehousesPerBuildingMultiplier })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "cityPeoplePerAcre" }, "City People per Acre"),
                        React.createElement("input", { type: "number", id: "cityPeoplePerAcre", value: cityPeoplePerAcre, onChange: this.handleCityPeoplePerAcre })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "cityCountrysideRatio" }, "City Countryside Ratio"),
                        React.createElement("input", { type: "number", id: "cityCountrysideRatio", value: cityCountrysideRatio, onChange: this.handleCityCountrysideRatio }))),
                React.createElement("h3", null, "Define Region Parameters:"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionPop" }, "Region Pop Population"),
                        React.createElement("input", { id: "regionPop", type: "number", value: regionPop, onChange: this.handleRegionPopulation })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionAgeYears" }, "Region Age Years (older -> more castles)"),
                        React.createElement("input", { id: "regionAgeYears", type: "number", value: regionAgeYears, onChange: this.handleRegionAgeYears })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionAreaAcres" }, "Region Area Acres"),
                        React.createElement("input", { id: "regionAreaAcres", type: "number", value: regionAreaAcres, onChange: this.handleRegionPeoplePerAcre }))),
                React.createElement("button", { type: "submit" }, "Submit"),
                " (see dev console for details)")));
    };
    return RegionForm;
}(React.Component));
exports.default = RegionForm;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
var RegionRender = (function (_super) {
    __extends(RegionRender, _super);
    function RegionRender(props) {
        return _super.call(this, props) || this;
    }
    RegionRender.prototype.render = function () {
        return (React.createElement("div", { className: "laff-wb-region" },
            React.createElement("div", null,
                React.createElement("h3", null, "Region Info"),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "Age (Years): ",
                        this.props.region.Age.toLocaleString()),
                    React.createElement("span", null,
                        "Area (Acres): ",
                        this.props.region.AreaAcres.toLocaleString()),
                    React.createElement("span", null,
                        "Population: ",
                        this.props.region.Population.toLocaleString())),
                React.createElement("h3", null, "Livestock"),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "Total: ",
                        this.props.region.TotalLivestock.toLocaleString()),
                    React.createElement("span", null,
                        "Fowl: ",
                        this.props.region.Fowl.toLocaleString()),
                    React.createElement("span", null,
                        "Cows, Sheep, & Pigs: ",
                        this.props.region.BurdenBeasts.toLocaleString()))),
            React.createElement("div", null,
                React.createElement("h3", null, "Castle Info"),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "Total Castles: ",
                        this.props.region.TotalCastles.toLocaleString()),
                    React.createElement("span", null,
                        "Active Castles: ",
                        this.props.region.ActiveCastles.toLocaleString()),
                    React.createElement("span", null,
                        "Ruined Castles: ",
                        this.props.region.RuinedCastles.toLocaleString()))),
            React.createElement("div", null,
                React.createElement("h3", null, "Settlement Info"),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "#Cities: ",
                        this.props.region.Cities.length.toLocaleString()),
                    React.createElement("span", null,
                        "#Towns: ",
                        this.props.region.Towns.length.toLocaleString()),
                    React.createElement("span", null,
                        "#Villages: ",
                        this.props.region.Villages.length.toLocaleString())))));
    };
    return RegionRender;
}(React.Component));
exports.default = RegionRender;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Settlement_1 = __webpack_require__(7);
/**
 * A region on a map, or a kingdom / nation / state
 */
var RegionModel = (function () {
    function RegionModel() {
    }
    return RegionModel;
}());
exports.RegionModel = RegionModel;
/**
 * Handles pulling in settings & dependencies to build a region
 */
var RegionGenerator = (function () {
    function RegionGenerator() {
    }
    /**
     * Creates and returns a region from the provided configuration
     * @param regionGenConfiguration the configuration to build the region from
     */
    RegionGenerator.prototype.generate = function (regionGenConfiguration) {
        var region = new RegionModel();
        region.Population = regionGenConfiguration.RegionPopulation;
        region.AreaAcres = regionGenConfiguration.RegionPeoplePerAcre;
        region.Age = regionGenConfiguration.RegionAgeYears;
        region.TotalLivestock = regionGenConfiguration.RegionPopulation * regionGenConfiguration.LivestockPerPerson;
        region.Fowl = region.TotalLivestock * regionGenConfiguration.PercentageOfLivestockIsFowl;
        region.BurdenBeasts = region.TotalLivestock - region.Fowl;
        region.RuinedCastles = regionGenConfiguration.RegionPopulation * Math.sqrt(regionGenConfiguration.RegionAgeYears) / (regionGenConfiguration.PeoplePerRuinedCastle);
        region.ActiveCastles = regionGenConfiguration.RegionPopulation / regionGenConfiguration.PeoplePerCastle;
        region.TotalCastles = region.RuinedCastles + region.ActiveCastles;
        var castlesInOutskirts = region.TotalCastles * regionGenConfiguration.PercentageOfCastlesInOutskirts;
        var castlesInCivilization = region.TotalCastles - castlesInOutskirts;
        region.Cities = [];
        region.Towns = [];
        region.Villages = [];
        var totalCityPopulation = 0;
        var lastCityPopulation = Math.sqrt(regionGenConfiguration.RegionPopulation) * 14; //2d4+10
        totalCityPopulation += lastCityPopulation;
        region.Cities.push(new Settlement_1.default(lastCityPopulation, regionGenConfiguration));
        lastCityPopulation = this.getRandomArbitrary(0.2, 0.8) * lastCityPopulation;
        while (lastCityPopulation > 8000) {
            totalCityPopulation += lastCityPopulation;
            region.Cities.push(new Settlement_1.default(lastCityPopulation, regionGenConfiguration));
            var populationReduction = this.getRandomArbitrary(0.1, 0.4);
            lastCityPopulation = lastCityPopulation * populationReduction;
        }
        var totalTownPopulation = 0;
        var numTowns = region.Cities.length * 8; //2d8
        region.Towns = [];
        while (region.Towns.length < numTowns && (totalTownPopulation + totalCityPopulation) < regionGenConfiguration.RegionPopulation) {
            var townPopulation = this.getRandomArbitrary(1000, 8000); //town minimum, town maximum
            if (townPopulation + totalCityPopulation + totalTownPopulation > regionGenConfiguration.RegionPopulation) {
                townPopulation = regionGenConfiguration.RegionPopulation - totalTownPopulation - totalCityPopulation;
            }
            region.Towns.push(new Settlement_1.default(townPopulation, regionGenConfiguration));
            totalTownPopulation += townPopulation;
        }
        var totalVillagePopulation = regionGenConfiguration.RegionPopulation - (totalCityPopulation + totalTownPopulation);
        region.Villages = [];
        var numVillages = totalVillagePopulation / 175; //average village population (20 - 1000, or 50 - 300)
        for (var x = 0; x < numVillages; x++) {
            region.Villages.push(new Settlement_1.default(totalVillagePopulation / numVillages, regionGenConfiguration));
        }
        return region;
    };
    RegionGenerator.prototype.getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    return RegionGenerator;
}());
exports.RegionGenerator = RegionGenerator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration settings for building a region, with tolerances
 */
var RegionGenConfig = (function () {
    function RegionGenConfig() {
        this.LivestockPerPerson = 2.2;
        this.PeoplePerCastle = 50000;
        this.PeoplePerRuinedCastle = 5000000;
        this.PercentageOfLivestockIsFowl = 0.68;
        this.PercentageOfCastlesInOutskirts = 0.25;
        this.RegionPopulationDensity = 30; //30-180
        this.PeoplePerAcreFarmland = 180;
        this.RegionPeoplePerAcre = 30; //30 - 120
        this.PeoplePerNobleFamily = 200;
        this.PeoplePerOfficer = 150;
        this.PeoplePerClergy = 40;
        this.ClergyPerPriest = 25; //25-30
        this.HouseholdSize = 5;
        this.WarehousesPerBuildingMultiplier = 1.4; //1.0 - 1.4
        this.CityPeoplePerAcre = 61;
        this.CityCountrysideRatio = this.CityPeoplePerAcre - this.RegionPeoplePerAcre;
        this.RegionPopulation = 1000000;
        this.RegionAgeYears = 1000000;
        this.RegionSizeAcres = 1000;
    }
    return RegionGenConfig;
}());
exports.RegionGenConfig = RegionGenConfig;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A service is a business or town service that can be used. E.g., "Showmaker" is a service, "Gladiator Ring" is also a service
 *
 * Huge code smells here
 */
var Service = (function () {
    function Service(name, supportValue) {
        this.Name = name;
        this.SupportValue = supportValue;
    }
    Service.GetServices = function () {
        var potentialServices = [];
        potentialServices.push(new Service("Showmakers", 150));
        potentialServices.push(new Service("Furriers", 250));
        potentialServices.push(new Service("Maidservants", 250));
        potentialServices.push(new Service("Tailors", 250));
        potentialServices.push(new Service("Barbers", 350));
        potentialServices.push(new Service("Jewelers", 400));
        potentialServices.push(new Service("Taverns/Restaurants", 400));
        potentialServices.push(new Service("Old-Clothes", 400));
        potentialServices.push(new Service("Pastrycooks", 500));
        potentialServices.push(new Service("Masons", 500));
        potentialServices.push(new Service("Weavers", 600));
        potentialServices.push(new Service("Chandlers", 700));
        potentialServices.push(new Service("Mercers", 700));
        potentialServices.push(new Service("Coopers", 700));
        potentialServices.push(new Service("Bakers", 800));
        potentialServices.push(new Service("Watercarriers", 850));
        potentialServices.push(new Service("Scabbardmakers", 850));
        potentialServices.push(new Service("Wine-Sellers", 900));
        potentialServices.push(new Service("Hatmakers", 950));
        potentialServices.push(new Service("Saddlers", 1000));
        potentialServices.push(new Service("Chicken Butchers", 1000));
        potentialServices.push(new Service("Pursemakers", 1100));
        potentialServices.push(new Service("Woodsellers", 2400));
        potentialServices.push(new Service("Reagent Shops", 2800));
        potentialServices.push(new Service("Bookbinders", 3000));
        potentialServices.push(new Service("Butchers", 1200));
        potentialServices.push(new Service("Fishmongers", 1200));
        potentialServices.push(new Service("Beer-Sellers", 1400));
        potentialServices.push(new Service("Buckle Makers", 1400));
        potentialServices.push(new Service("Plasterers", 1400));
        potentialServices.push(new Service("Spice Merchants", 1400));
        potentialServices.push(new Service("Blacksmiths", 1500));
        potentialServices.push(new Service("Painters", 1500));
        potentialServices.push(new Service("Unlicensed Doctors", 350));
        potentialServices.push(new Service("Licensed Doctors", 1700));
        potentialServices.push(new Service("Roofers", 1800));
        potentialServices.push(new Service("Locksmiths", 1900));
        potentialServices.push(new Service("Bathers", 1900));
        potentialServices.push(new Service("Ropemakers", 1900));
        potentialServices.push(new Service("Inns", 2000));
        potentialServices.push(new Service("Tanners", 2000));
        potentialServices.push(new Service("Copyists", 2000));
        potentialServices.push(new Service("Sculptors", 2000));
        potentialServices.push(new Service("Rugmakers", 2000));
        potentialServices.push(new Service("Harness-Makers", 2000));
        potentialServices.push(new Service("Bleachers", 2100));
        potentialServices.push(new Service("Hay Merchants", 2300));
        potentialServices.push(new Service("Cutlers", 2300));
        potentialServices.push(new Service("Glovemakers", 2400));
        potentialServices.push(new Service("Woodcarvers", 2400));
        potentialServices.push(new Service("Booksellers", 6300));
        potentialServices.push(new Service("Illuminators", 3900));
        return potentialServices;
    };
    return Service;
}());
exports.default = Service;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = __webpack_require__(6);
/**
 * A settlement where humanoids live
 */
var Settlement = (function () {
    function Settlement(cityPopulation, advancedSettings) {
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
        var potentialServices = Service_1.default.GetServices();
        for (var _i = 0, potentialServices_1 = potentialServices; _i < potentialServices_1.length; _i++) {
            var service = potentialServices_1[_i];
            var numServices = this.TotalPopulation / service.SupportValue;
            for (var y = 1; y < numServices; y++) {
                this.Services.push(new Service_1.default(service.Name, service.SupportValue));
            }
        }
    }
    return Settlement;
}());
exports.default = Settlement;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var RegionRender_1 = __webpack_require__(2);
var RegionForm_1 = __webpack_require__(1);
var WorldBuilder = (function (_super) {
    __extends(WorldBuilder, _super);
    function WorldBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { regions: [] };
        _this.handleRegionSubmit = _this.handleRegionSubmit.bind(_this);
        return _this;
    }
    WorldBuilder.prototype.handleRegionSubmit = function (region) {
        this.setState({ regions: this.state.regions.concat([region]) });
    };
    WorldBuilder.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(RegionForm_1.default, { onFormSubmit: this.handleRegionSubmit }),
            React.createElement("hr", null),
            this.state.regions.map(function (region, ind) {
                return React.createElement(RegionRender_1.default, { region: region, key: ind });
            })));
    };
    return WorldBuilder;
}(React.Component));
ReactDOM.render(React.createElement(WorldBuilder, null), document.getElementById("reactApp"));


/***/ })
/******/ ]);