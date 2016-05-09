import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ComputedGearBrand} from "types/computed";
import {ComputedGearBrandService} from "services/computed.service";
import {ComputedGearPower} from "../../types/computed";
import {ComputedGearPowerService} from "../../services/computed.service";
import {PowerBrandComponent} from "./power-brand.component";

@Component({
    selector: 'power-list',
    templateUrl: 'templates/power-list.template.html',
    directives: [
        ROUTER_DIRECTIVES,PowerBrandComponent
    ]
})
export class PowerListComponent implements OnInit {

    powers:ComputedGearPower[];

    constructor(private _computedGearPowerService:ComputedGearPowerService) {
    }

    ngOnInit() {
        this._computedGearPowerService
            .excludesAny()
            .subscribe(results =>this.powers = results);
    }
}
