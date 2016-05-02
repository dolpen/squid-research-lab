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
        this._gearBrandService
            .fetch()
            .flatMap(brands => {
                    return Observable
                        .from(brands)
                        .filter(b =>
                            (this.strong && b.strong == this.id)
                            || (!this.strong && b.weak == this.id)
                        )
                        .toArray(); // GearBrand[][]
                }
            )
            .subscribe(results =>this.brands = results)
    }
}
