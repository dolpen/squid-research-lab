import {Component,OnInit,Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';

@Component({
    selector: '[listedGear]',
    templateUrl: 'templates/listed-gear.template.html'
})
export class ListedGearComponent implements OnInit {
    @Input('listedGear')
    gear:Gear;

    type:GearType;
    brand:GearBrand;
    main:GearPower;


    constructor(private _gearService:GearService,
                private _gearTypeService:GearTypeService,
                private _gearBrandService:GearBrandService,
                private _gearPowerService:GearPowerService) {
    }

    ngOnInit() {
        this._gearTypeService.findById(this.gear.type).subscribe(result =>this.type = result);
        this._gearBrandService.findById(this.gear.brand).subscribe(result =>this.brand = result);
        this._gearPowerService.findById(this.gear.main).subscribe(result =>this.main = result);
    }
}
