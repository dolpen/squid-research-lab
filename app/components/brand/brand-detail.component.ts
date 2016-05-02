import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {BrandPowerComponent} from './brand-power.component';

@Component({
    selector: 'brand-detail',
    templateUrl: 'templates/brand-detail.template.html',
    directives: [BrandPowerComponent]
})
export class BrandDetailComponent implements OnInit {

    brand:GearBrand;

    constructor(private _gearBrandService:GearBrandService, private _routeParams:RouteParams) {

    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._gearBrandService
            .findById(id)
            .subscribe(result =>this.brand = result);
    }
}
