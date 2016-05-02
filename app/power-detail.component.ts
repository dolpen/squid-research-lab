import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {GearPower}       from 'types/gear-power';
import {GearPowerService} from 'services/gear-power.service';
import {PowerBrandComponent} from './power-brand.component';

@Component({
    selector: 'power-detail',
    templateUrl: 'templates/power-detail.template.html',
    directives:[PowerBrandComponent]
})
export class PowerDetailComponent implements OnInit {

    power:GearPower;// 特定IDのギアパワー


    constructor(private _gearPowerService:GearPowerService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._gearPowerService
            .fetch()
            .subscribe(
                results =>this.power = results.length > id ? results[id] : null
            );
    }
}
