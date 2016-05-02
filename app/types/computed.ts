import {Gear,GearType,GearBrand,GearPower} from 'types/api';

export class ComputedGearBrand {
    id: number;
    label: string;
    strong: GearPower;
    weak: GearPower;

    constructor(gearBrand:GearBrand,strong:GearPower,weak:GearPower){
        this.id = gearBrand.id;
        this.label = gearBrand.label;
        this.strong = strong;
        this.weak = weak;
    }
}
export class ComputedGearPower {
    id: number;
    label: string;
    strongs: GearBrand[];
    weaks: GearBrand[];

    constructor(gearPower:GearPower,strongs:GearBrand[],weaks:GearBrand[]){
        this.id = gearPower.id;
        this.label = gearPower.label;
        this.strongs = strongs;
        this.weaks = weaks;
    }
}
export class ComputedGear {
    id:number;
    label:string;
    main:ComputedGearPower;
    type:GearType;
    brand:ComputedGearBrand;
    rarity:number;
}
