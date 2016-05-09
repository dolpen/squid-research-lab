import {Component,OnInit,Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from "../../types/computed";

@Component({
    selector: '[gear]',
    templateUrl: 'templates/gear-element.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class GearElementComponent {
    @Input('gear')
    gear:ComputedGear;
}
