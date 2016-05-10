import {Component,Input} from '@angular/core';
import {ComputedGearBrand} from '../../types/computed';
import {ROUTER_DIRECTIVES} from '@angular/router';




@Component({
    selector: 'power-brand',
    templateUrl: 'templates/power-brand.template.html',
    directives:[ROUTER_DIRECTIVES]
})
export class PowerBrandComponent {

    @Input()
    brands:ComputedGearBrand[];

}
