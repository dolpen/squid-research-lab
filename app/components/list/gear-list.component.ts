import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearTypeService} from 'services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from 'services/computed.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from 'types/computed';
import {ListedGearComponent} from './listed-gear.component';

@Component({
    selector: 'gear-list',
    templateUrl: 'templates/gear-list.template.html',
    directives: [ListedGearComponent]
})
export class GearListComponent implements OnInit {

    types:GearType[];
    powers:ComputedGearPower[];
    brands:ComputedGearBrand[];

    filterType:string = "-1";
    filterBrand:string = "-1";
    filterMain:string = "-1";

    filteredGears:ComputedGear[];


    constructor(private _computedGearService:ComputedGearService,
                private _gearTypeService:GearTypeService,
                private _computedGearBrandService:ComputedGearBrandService,
                private _computedGearPowerService:ComputedGearPowerService,
                private _routeParams:RouteParams) { // あとで使う
    }

    ngOnInit() {
        this._computedGearService.fetch().subscribe(results => this.filteredGears = results);
        this._gearTypeService.fetch().subscribe(results => this.types = results);
        this._computedGearBrandService.fetch().subscribe(results => this.brands = results);
        this._computedGearPowerService.excludesAny().subscribe(results => this.powers = results);
    }

    onChangeFilter() {
        let type = +this.filterType;
        let brand = +this.filterBrand;
        let main = +this.filterMain;

        this._computedGearService
            .filterByCondition(type, brand, main)
            .subscribe(results => this.filteredGears = results);
    }
}
