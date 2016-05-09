import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {ComputedGearPower} from "types/computed";
import {ComputedGearPowerService} from "services/computed.service";
import {PowerBrandComponent} from './power-brand.component';
import {ComputedGear} from "../../types/computed";
import {ComputedGearService} from "../../services/computed.service";
import {GearTableComponent} from "../gear/gear-table.component";

@Component({
    selector: 'power-detail',
    templateUrl: 'templates/power-detail.template.html',
    directives: [PowerBrandComponent,GearTableComponent]
})
export class PowerDetailComponent implements OnInit {

    power:ComputedGearPower;// 特定IDのギアパワー
    gears:ComputedGear[];

    constructor(private _computedGearService:ComputedGearService,
                private _computedGearPowerService:ComputedGearPowerService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._computedGearPowerService
            .findById(id)
            .subscribe(result =>this.power = result);
        this._computedGearService
            .filterByCondition(-1, -1, id)
            .subscribe(results => this.gears = results);
    }
}
