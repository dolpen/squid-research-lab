import {Component,OnInit,Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from '../../types/computed';

@Component({
    selector: '[gear]',
    templateUrl: 'templates/gear-element.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class GearElementComponent {
    @Input('gear')
    gear:ComputedGear;
}
