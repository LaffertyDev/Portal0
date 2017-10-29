export class Critter {
    private Name : string; //definitely
    private ScientificName : string; //definitely
    //private Geneology: string;

    //prokaryote [bacteria, archaea], eukaryote [protists, animals, fungi, plants]
    //private Effects : Effect[]; //think "This infects people by going up their nostrils and causing brain hemhoraging"

    //private DiseaseVector
            
    //private Limbs : Limb[];
    //private Organs : Organ[];
    //private Traits: Trait[];

    //mass: number; //miligrams
    //shape
        //sphere #radius
        //spiral 
        //rod #

    //habitat
    
    //resistance to autoimmune response and man-made chemicals
    //temperature range

    //reproducability
    //lethality
    //durability #calculated from temp, reproduce, and availability of food source
    //contagiousness #calculated from environment, vector

    constructor() {

    }
}
class Limb {
    //https://www.quora.com/Is-bacteria-multicellular
    //flagellum
    //ribosomes
    //nucleoid
    //inclusion
    //cytoplasm
    //capsule
    //cell wall
    //cell membrane
    //plasmid
    //Pili
}

class Organ {
    //what is the difference between a limb and an organ?
}

class Trait {
    //
}

class Effect {
    //severity
    //
}

class Virus {
    //monocellular
}

class Bacteria {
    //monocellular
}

class Fungus {
    //multicellular
}

export class DrawingPiece implements IDrawingPiece2d {
    private x: number;
    private y: number;

    constructor(xOffset: number, yOffset: number) {
        this.x = xOffset;
        this.y = yOffset;
    }

    Draw(canvas: CanvasRenderingContext2D): void {
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = "blue";
        canvas.lineWidth = 2;
        canvas.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        canvas.stroke();
        canvas.restore();
    }
}

interface IDrawingPiece2d {
    Draw(canvas: CanvasRenderingContext2D): void;
}