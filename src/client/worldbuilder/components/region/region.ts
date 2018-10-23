import Settlement from "../settlement/settlement";

/**
 * A region on a map, or a kingdom / nation / state
 */
export class RegionModel {
	/**
	 * The age of the region / Kingdom, in years (code smell)
	 */
	public Age!: number;

	/**
	 * The size of the region, in sq miles
	 */
	public AreaSqMiles!: number;

	/**
	 * The total number of cows/pigs/etc.. in the region
	 */
	public BurdenBeasts!: number;

	/**
	 * The number of activate castles in the region, meaning occupied & used
	 */
	public CastlesActive!: number;

	public get CastlesInCivilized(): number {
		return this.CastlesTotal - this.CastlesInOutskirts;
	}

	public CastlesInOutskirts!: number;
	

	/**
	 * The total number of ruined or forgotten castles in the region
	 */
	public CastlesRuined!: number;

	/**
	 * The sum of active & ruined castles
	 */
	public CastlesTotal!: number;

	/**
	 * A list of large settlements inside of the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	public Cities!: Settlement[];

	/**
	 * The total number of fowl (Chickens) in the region
	 */
	public Fowl!: number;

	/**
	 * The total amount of cultivated livestock in the region
	 */
	public TotalLivestock!: number;

	/**
	 * A list of medium-sized settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
	 */
	public Towns!: Settlement[];

	public GetBigSettlements(): Settlement[] {
		return this.Cities.concat(this.Towns);
	}
}
