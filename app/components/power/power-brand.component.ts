import {Component,Input} from 'angular2/core';
import {ComputedGearBrand} from 'types/computed';

@Component({
    selector: 'power-brand',
    templateUrl: 'templates/power-brand.template.html'
})
export class PowerBrandComponent {

    @Input()
    brands:ComputedGearBrand[];

}
