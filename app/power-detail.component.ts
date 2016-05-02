import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {GearBrand}       from 'types/gear-brand';
import {GearBrandService} from 'services/gear-brand.service';

@Component({
    selector: 'power-detail',
    templateUrl: 'templates/power-detail.template.html'
})
export class PowerDetailComponent implements OnInit {

    constructor(private _gearBrandService:GearBrandService, private _routeParams:RouteParams) {

    }
    ngOnInit() {
        this._gearBrandService
            .fetchByStrong()
            .subscribe(
                results => console.log(results)
            );
    }
}
