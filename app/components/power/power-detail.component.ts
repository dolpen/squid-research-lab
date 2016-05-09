import {Component,OnInit} from '@angular/core';
import {Routes, RouteSegment,  RouteTree, OnActivate, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {Gear,GearType,GearBrand,GearPower} from '../../types/api';
import {ComputedGearPower} from '../../types/computed';
import {ComputedGearPowerService} from '../../services/computed.service';
import {PowerBrandComponent} from './power-brand.component';
import {ComputedGear} from '../../types/computed';
import {ComputedGearService} from '../../services/computed.service';
import {GearTableComponent} from '../gear/gear-table.component';

@Component({
    selector: 'power-detail',
    templateUrl: 'templates/power-detail.template.html',
    directives: [PowerBrandComponent, GearTableComponent]
})
export class PowerDetailComponent implements OnActivate {

    power:ComputedGearPower;// 特定IDのギアパワー
    gears:ComputedGear[];

    constructor(private _computedGearService:ComputedGearService,
                private _computedGearPowerService:ComputedGearPowerService) {
    }

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree) {
        let id = +curr.getParam('id');
        this._computedGearPowerService
            .findById(id)
            .subscribe(result =>this.power = result);
        this._computedGearService
            .filterByCondition(-1, -1, id)
            .subscribe(results => this.gears = results);
    }
}
