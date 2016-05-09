import {Component,Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ComputedGearPower} from '../../types/computed';

@Component({
    selector: 'brand-power',
    templateUrl: 'templates/brand-power.template.html',
    directives:[ROUTER_DIRECTIVES]
})
export class BrandPowerComponent {

    @Input()
    power:ComputedGearPower;

}
