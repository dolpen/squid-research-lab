import {Component,OnInit,Input} from 'angular2/core';
import {GearPower}       from 'types/gear-power';
import {GearPowerService} from 'services/gear-power.service';

@Component({
    selector: 'brand-power',
    templateUrl: 'templates/brand-power.template.html'
})
export class BrandPowerComponent implements OnInit {

    @Input()
    id:number;
    errorMessage:string;
    power:GearPower;


    constructor(private _gearPowerService:GearPowerService) {

    }

    ngOnInit() {
        this._gearPowerService
            .fetch()
            .subscribe(
                results =>this.power = results.length > this.id ? results[this.id] : null,
                error => this.errorMessage = <any>error
            );
    }
}
