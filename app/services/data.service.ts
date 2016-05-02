import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from 'types/computed';

@Injectable()
export class GearDataService {
    constructor(
        private _gearService:GearService,
        private _gearTypeService:GearTypeService,
        private _gearBrandService:GearBrandService,
        private _gearPowerService:GearPowerService
    ) {}

    fetchBrands() {
        return Observable.forkJoin(
            this._gearBrandService.fetch(),
            this._gearPowerService.fetch()
        ).flatMap((results):ComputedGearBrand[] => {
            console.log(results);
            let bo = Observable.from(results[0]); // brands
            let po = Observable.from(results[1]); // powers
            return bo.map((b:GearBrand) => new ComputedGearBrand(
                    b,
                    po.filter(p => p.id == b.strong).take(1),
                    po.filter(p => p.id == b.weak).take(1)
            )).toArray();
        }
        )
    };
}
