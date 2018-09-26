export interface ITileCoordinate {
    toString(): string;
}

export class HexCoordinate implements ITileCoordinate {
    constructor(public longitude: number, public latitude: number, public rLatitude: number) {
        
    }

    toString(): string {
        return `long: ${this.longitude}, lat: ${this.latitude}, rLat: ${this.rLatitude}`;
    }
}

// export class SquareCoordinate implements ITileCoordinate {

// }

// export class TriangleCoordinate implements ITileCoordinate {

// }