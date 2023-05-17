interface PlanetInt {
    name:string
    overview:{
        content:string,
        source:string
    }
    structure:{
        content:string,
        source:string
    }
    geology:{
        content:string,
        source:string
    }
    rotation:string
    revolution:string
    radius:string
    temperature:string
    images:{
        planet:string,
        internal:string,
        geology:string
    }

}

class Planet implements PlanetInt{
    geology: { content: string; source: string };
    images: { planet: string; internal: string; geology: string };
    name: string;
    overview: { content: string; source: string };
    radius: string;
    revolution: string;
    rotation: string;
    structure: { content: string; source: string };
    temperature: string;
    
    constructor(name:string,overview:{ content: string; source: string },structure:{ content: string; source: string },geology:{ content: string; source: string },rotation:string,revolution:string,radius:string,temperature:string,images:{ planet: string; internal: string; geology: string }) {
        this.name = name;
        this.overview = overview;
        this.structure = structure;
        this.geology = geology;
        this.rotation = rotation;
        this.revolution = revolution;
        this.radius = radius;
        this.temperature = temperature;
        this.images = images;

    }

}
export default Planet;