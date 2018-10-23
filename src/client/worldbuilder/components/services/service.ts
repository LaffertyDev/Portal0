
/**
 * A service is a business or town service that can be used. E.g., "Showmaker" is a service, "Gladiator Ring" is also a service
 * 
 * Huge code smells here
 */
export class Service {	
	constructor(public Name: string, public SupportValue: number) {

	}

	public static GetServices() {
		const potentialServices = [];
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
	}
}
