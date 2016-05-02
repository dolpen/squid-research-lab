import {Component,OnInit,Input} from 'angular2/core';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {GearDataService} from 'services/data.service'

@Component({
    selector: 'power-brand',
    templateUrl: 'templates/power-brand.template.html'
})
export class PowerBrandComponent implements OnInit {

    @Input()
    id:number;
    @Input()
    strong:boolean;

    brands:GearBrand[];

    constructor(private _gearBrandService:GearBrandService) {
    }

    ngOnInit() {
        (this.strong
                ? this._gearBrandService.findByStrong(this.id)
                : this._gearBrandService.findByWeak(this.id)
        ).subscribe(
            results =>this.brands = results
        )
    }
}
