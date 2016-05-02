import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {GearBrand}       from 'types/gear-brand';
import {GearBrandService} from 'services/gear-brand.service';
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
            .findbyId(id)
            .subscribe(result =>this.brand = result);
    }
}
