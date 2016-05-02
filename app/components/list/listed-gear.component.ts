import {Component,OnInit,Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear}       from 'types/gear';
import {GearService} from 'services/gear.service';
import {GearBrand} from "types/gear-brand";
import {GearPower} from "types/gear-power";
import {GearBrandService} from 'services/gear-brand.service';
import {GearPowerService} from 'services/gear-power.service';

@Component({
    selector: 'listed-gear',
    templateUrl: 'templates/listed-gear.template.html'
})
export class ListedGearComponent implements OnInit {
    @Input()
    gear:Gear;

    brand:GearBrand;
    main:GearPower;


    constructor(private _gearService:GearService,
                private _gearBrandService:GearBrandService,
                private _gearPowerService:GearPowerService) {
    }

    ngOnInit() {
        this._gearBrandService.findbyId(this.gear.brand).subscribe(result =>this.brand = result);
        this._gearPowerService.findbyId(this.gear.main).subscribe(result =>this.main = result);
    }
}
