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

    power:GearPower;


    constructor(private _gearPowerService:GearPowerService) {

    }

    ngOnInit() {
        this._gearPowerService
            .findById(this.id)
            .subscribe(result =>this.power = result);
    }
}
