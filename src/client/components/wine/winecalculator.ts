export class WineCalculator {
	/**
	 * Converts a Normalized S.G. measurement into Degrees Brix
	 * @param normalizedSpecificGravity to 20degrees celsius/20degrees celsius normalized quantity
	 */
	ConvertSpecificGravityToBrix(normalizedSpecificGravity: number): number {
		if (normalizedSpecificGravity > 1.17874) {
			console.warn("Specific Gravity estimate is inaccurate past this value");
		}

		// https://en.wikipedia.org/wiki/Brix
		return (182.4601 * Math.pow(normalizedSpecificGravity, 3)) - (775.7821 * Math.pow(normalizedSpecificGravity, 2)) + (1262.7794 * normalizedSpecificGravity) - 669.5622;
	}
}

// UNKNOWNS

// What is the "basis" of Specific Gravity hydrometers?
	// They are "Calibrated" at 60 deg F... but over what?
		// Either 20deg C or 4deg C
	// How do I convert from the calibrated temp to the "real" temp of my must?

// How accurate are S.G. readings for g/L of sugar in the must?

// Vines to Wines assumes s.g. basis of 59 deg F... but the formulae are still off
