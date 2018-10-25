
/**
 * A service is a business or town service that can be used. E.g., "Showmaker" is a service, "Gladiator Ring" is also a service
 * 
 * Huge code smells here
 */
export class SettlementService {	
	constructor(public Name: string, public SupportValue: number) {

	}

	public static GetServices() {
		const potentialServices = [];
		potentialServices.push(new SettlementService("Noble Families", 200));
		potentialServices.push(new SettlementService("Officers", 150));
		potentialServices.push(new SettlementService("Clergy", 40));
		potentialServices.push(new SettlementService("Priests", 1000));
		potentialServices.push(new SettlementService("Shoemakers", 150));
		potentialServices.push(new SettlementService("Furriers", 250));
		potentialServices.push(new SettlementService("Maidservants", 250));
		potentialServices.push(new SettlementService("Tailors", 250));
		potentialServices.push(new SettlementService("Barbers", 350));
		potentialServices.push(new SettlementService("Jewelers", 400));
		potentialServices.push(new SettlementService("Taverns/Restaurants", 400));
		potentialServices.push(new SettlementService("Old-Clothes", 400));
		potentialServices.push(new SettlementService("Pastrycooks", 500));
		potentialServices.push(new SettlementService("Masons", 500));
		potentialServices.push(new SettlementService("Weavers", 600));
		potentialServices.push(new SettlementService("Chandlers", 700));
		potentialServices.push(new SettlementService("Mercers", 700));
		potentialServices.push(new SettlementService("Coopers", 700));
		potentialServices.push(new SettlementService("Bakers", 800));
		potentialServices.push(new SettlementService("Watercarriers", 850));
		potentialServices.push(new SettlementService("Scabbardmakers", 850));
		potentialServices.push(new SettlementService("Wine-Sellers", 900));
		potentialServices.push(new SettlementService("Hatmakers", 950));
		potentialServices.push(new SettlementService("Saddlers", 1000));
		potentialServices.push(new SettlementService("Chicken Butchers", 1000));
		potentialServices.push(new SettlementService("Pursemakers", 1100));
		potentialServices.push(new SettlementService("Woodsellers", 2400));
		potentialServices.push(new SettlementService("Reagent Shops", 2800));
		potentialServices.push(new SettlementService("Bookbinders", 3000));

		potentialServices.push(new SettlementService("Butchers", 1200));
		potentialServices.push(new SettlementService("Fishmongers", 1200));
		potentialServices.push(new SettlementService("Beer-Sellers", 1400));
		potentialServices.push(new SettlementService("Buckle Makers", 1400));
		potentialServices.push(new SettlementService("Plasterers", 1400));
		potentialServices.push(new SettlementService("Spice Merchants", 1400));
		potentialServices.push(new SettlementService("Blacksmiths", 1500));
		potentialServices.push(new SettlementService("Painters", 1500));
		potentialServices.push(new SettlementService("Unlicensed Doctors", 350));
		potentialServices.push(new SettlementService("Licensed Doctors", 1700));
		potentialServices.push(new SettlementService("Roofers", 1800));
		potentialServices.push(new SettlementService("Locksmiths", 1900));
		potentialServices.push(new SettlementService("Bathers", 1900));
		potentialServices.push(new SettlementService("Ropemakers", 1900));
		potentialServices.push(new SettlementService("Inns", 2000));
		potentialServices.push(new SettlementService("Tanners", 2000));
		potentialServices.push(new SettlementService("Copyists", 2000));
		potentialServices.push(new SettlementService("Sculptors", 2000));
		potentialServices.push(new SettlementService("Rugmakers", 2000));
		potentialServices.push(new SettlementService("Harness-Makers", 2000));
		potentialServices.push(new SettlementService("Bleachers", 2100));
		potentialServices.push(new SettlementService("Hay Merchants", 2300));
		potentialServices.push(new SettlementService("Cutlers", 2300));
		potentialServices.push(new SettlementService("Glovemakers", 2400));
		potentialServices.push(new SettlementService("Woodcarvers", 2400));
		potentialServices.push(new SettlementService("Booksellers", 6300));
		potentialServices.push(new SettlementService("Illuminators", 3900));

		return potentialServices;
	}
}
