import {Component,Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ComputedGearPower} from 'types/computed';

@Component({
    selector: 'brand-power',
    templateUrl: 'templates/brand-power.template.html',
    directives:[ROUTER_DIRECTIVES]
})
export class BrandPowerComponent {

    @Input()
    power:ComputedGearPower;

}
