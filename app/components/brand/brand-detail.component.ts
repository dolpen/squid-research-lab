import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {BrandPowerComponent} from './brand-power.component';
import {ComputedGearBrand} from "types/computed";
import {ComputedGearBrandService} from "services/computed.service";
import {GearTableComponent} from "../gear/gear-table.component";
import {ComputedGear} from "../../types/computed";
import {ComputedGearService} from "../../services/computed.service";

@Component({
    selector: 'brand-detail',
    templateUrl: 'templates/brand-detail.template.html',
    directives: [BrandPowerComponent,GearTableComponent]
})
export class BrandDetailComponent implements OnInit {

    brand:ComputedGearBrand;
    gears:ComputedGear[];

    constructor(private _computedGearService:ComputedGearService,
                private _computedGearBrandService:ComputedGearBrandService,
                private _routeParams:RouteParams) {

    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._computedGearBrandService
            .findById(id)
            .subscribe(result => this.brand = result);
        this._computedGearService
            .filterByCondition(-1, id, -1)
            .subscribe(results => this.gears = results);
    }
}
