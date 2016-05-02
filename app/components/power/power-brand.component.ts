import {Component,OnInit,Input} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {GearBrand}       from 'types/gear-brand';
import {GearBrandService} from 'services/gear-brand.service';

@Component({
    selector: 'power-brand',
    templateUrl: 'templates/power-brand.template.html'
})
export class PowerBrandComponent implements OnInit {

    @Input()
    id:number;
    @Input()
    strong:boolean;

    brands:GearBrand[];

    constructor(private _gearBrandService:GearBrandService) {
    }

    ngOnInit() {
        (this.strong
                ? this._gearBrandService.findbyStrong(this.id)
                : this._gearBrandService.findbyWeak(this.id)
        ).subscribe(
            results =>this.brands = results
        )
    }
}
