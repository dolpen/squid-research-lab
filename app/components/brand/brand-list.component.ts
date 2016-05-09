import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BrandPowerComponent} from './brand-power.component';
import {ComputedGearBrand} from '../../types/computed';
import {ComputedGearBrandService} from '../../services/computed.service';

@Component({
    selector: 'brand-list',
    templateUrl: 'templates/brand-list.template.html',
    directives: [
        BrandPowerComponent,
        ROUTER_DIRECTIVES
    ]
})
export class BrandListComponent implements OnInit {

    brands:ComputedGearBrand[];

    constructor(private _computedGearBrandService:ComputedGearBrandService) {
    }

    ngOnInit() {
        this._computedGearBrandService
            .fetch()
            .subscribe(results =>this.brands = results);
    }
}
