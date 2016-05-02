import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {ListedGearComponent} from './listed-gear.component';
import {GearDataService} from 'services/data.service'

@Component({
    selector: 'gear-list',
    templateUrl: 'templates/gear-list.template.html',
    directives: [ListedGearComponent]
})
export class GearListComponent implements OnInit {

    gears:Gear[];
    types:GearType[];
    powers:GearPower[];
    brands:GearBrand[];


    filteredGears:Gear[];
    filterType:string = "-1";
    filterBrand:string = "-1";
    filterMain:string = "-1";


    constructor(private _gearService:GearService,
                private _gearTypeService:GearTypeService,
                private _gearBrandService:GearBrandService,
                private _gearPowerService:GearPowerService,
                private _gearDataService:GearDataService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        this._gearService.fetch().subscribe(results => this.filteredGears = results);
        this._gearTypeService.fetch().subscribe(results => this.types = results);
        this._gearBrandService.fetch().subscribe(results => this.brands = results);
        this._gearPowerService.excludesAny().subscribe(results => this.powers = results);
        this._gearDataService.fetchGears().subscribe(results => console.log(results));
    }

    onChangeFilter() {
        let type = +this.filterType;
        let brand = +this.filterBrand;
        let main = +this.filterMain;
        console.log("find " + type + " " + brand + " " + main);
        this._gearService.filterByCondition(type, brand, main).subscribe(
            results => {
                console.log(results);
                this.filteredGears = results
            }
        );
    }
}
