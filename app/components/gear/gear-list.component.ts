import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from '../../types/api';
import {GearTypeService} from '../../services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from '../../services/computed.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from '../../types/computed';
import {GearTableComponent} from "./gear-table.component";
import Optional from "../../libs/optional";


@Component({
    selector: 'gear-list',
    templateUrl: 'templates/gear-list.template.html',
    directives: [GearTableComponent]
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
        this._gearTypeService.fetch().subscribe(results => this.types = results);
        this._computedGearBrandService.fetch().subscribe(results => this.brands = results);
        this._computedGearPowerService.excludesAny().subscribe(results => this.powers = results);
        this.filterType = Optional<string>(this._routeParams.get('type')).getOrElse("-1");
        this.filterBrand = Optional<string>(this._routeParams.get('brand')).getOrElse("-1");
        this.filterMain = Optional<string>(this._routeParams.get('main')).getOrElse("-1");
        this._updateParam();
    }

    onChangeFilter() {
        this._updateParam();
    }

    private _updateParam() {
        let type = +this.filterType;
        let brand = +this.filterBrand;
        let main = +this.filterMain;
        this._computedGearService
            .filterByCondition(type, brand, main)
            .subscribe(results => this.filteredGears = results);
    }

}
