import {Component,Input} from 'angular2/core';
import {ComputedGearBrand} from 'types/computed';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'power-brand',
    templateUrl: 'templates/power-brand.template.html',
    directives:[ROUTER_DIRECTIVES]
})
export class PowerBrandComponent {

    @Input()
    brands:ComputedGearBrand[];

}
