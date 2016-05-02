import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {PowerBrandComponent} from './power-brand.component';

@Component({
    selector: 'power-detail',
    templateUrl: 'templates/power-detail.template.html',
    directives: [PowerBrandComponent]
})
export class PowerDetailComponent implements OnInit {

    power:GearPower;// 特定IDのギアパワー


    constructor(private _gearPowerService:GearPowerService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._gearPowerService
            .findById(id)
            .subscribe(result =>this.power = result);
    }
}
