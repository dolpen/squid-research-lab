import {Component,Input} from 'angular2/core';
import {ComputedGearPower} from 'types/computed';

@Component({
    selector: 'brand-power',
    templateUrl: 'templates/brand-power.template.html'
})
export class BrandPowerComponent {

    @Input()
    power:ComputedGearPower;

}
