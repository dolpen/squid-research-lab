export class GearMetadata{}


export class Gear {
    id:number;
    label:string;
    main:number;
    brand:number;
    rarity:number;
    type:number;
}
export class GearType {
    id: number;
    name: string;
    label: string;
}
export class GearPower extends GearMetadata{
    id: number;
    label: string;
}
export class GearBrand extends GearMetadata{
    id: number;
    label: string;
    strong: number;
    weak: number;
}
