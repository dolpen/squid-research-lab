import {Gear,GearType,GearBrand,GearPower} from 'types/api';

export class ComputedGearBrand {
    id:number;
    label:string;
    strong:GearPower;
    weak:GearPower;

    constructor(gearBrand:GearBrand) {
        this.id = gearBrand.id;
        this.label = gearBrand.label;
    }
}
export class ComputedGearPower {
    id:number;
    label:string;
    strongs:GearBrand[];
    weaks:GearBrand[];

    constructor(gearPower:GearPower) {
        this.id = gearPower.id;
        this.label = gearPower.label;
    }
}
export class ComputedGear {
    id:number;
    label:string;
    main:ComputedGearPower;
    type:GearType;
    brand:ComputedGearBrand;
    rarity:number;

    constructor(gear:Gear) {
        this.id = gear.id;
        this.label = gear.label;
        this.rarity = gear.rarity;
    }
}
