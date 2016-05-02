import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from 'types/computed';

@Injectable()
export class GearDataService {
    constructor(private _gearService:GearService,
                private _gearTypeService:GearTypeService,
                private _gearBrandService:GearBrandService,
                private _gearPowerService:GearPowerService) {
    }

    fetchBrands():Observable<ComputedGearBrand[]> {
        return Observable.zip(
            this._gearBrandService.fetch(),
            this._gearPowerService.fetch()
        ).flatMap((results) => {
                let bo = Observable.from(results[0]); // brands
                let po = Observable.from(results[1]); // powers
                return bo.map((b:GearBrand):ComputedGearBrand => {
                    var ret = new ComputedGearBrand(b);
                    po.filter(p => p.id == b.strong).take(1).subscribe(p => ret.strong = p);
                    po.filter(p => p.id == b.weak).take(1).subscribe(p => ret.weak = p);
                    return ret;
                }).toArray();
            }
        ).publishReplay(1).refCount();
    };

    fetchPowers():Observable<ComputedGearPower[]> {
        return Observable.zip(
            this._gearBrandService.fetch(),
            this._gearPowerService.fetch()
        ).flatMap((results) => {
                let bo = Observable.from(results[0]); // brands
                let po = Observable.from(results[1]); // powers
                return po.map((p:GearPower):ComputedGearPower => {
                    var ret = new ComputedGearPower(p);
                    bo.filter(b => b.strong == p.id).toArray().subscribe(b => ret.strongs = b);
                    bo.filter(b => b.weak == p.id).toArray().subscribe(b => ret.weaks = b);
                    return ret;
                }).toArray();
            }
        ).publishReplay(1).refCount();
    };


    fetchGears():Observable<ComputedGear[]> {
        return Observable.zip(
            this._gearService.fetch(),
            this.fetchBrands(),
            this.fetchPowers(),
            this._gearTypeService.fetch()
        ).flatMap((results) => {
                let go = Observable.from(results[0]); // gears
                let bo = Observable.from(results[1]); // brands
                let po = Observable.from(results[2]); // powers
                let to = Observable.from(results[3]); // types
                return go.map((g:Gear):ComputedGear => {
                    var ret = new ComputedGear(g);
                    bo.filter(b => b.id == g.brand).take(1).subscribe(b => ret.brand = b);
                    po.filter(p => p.id == g.main).take(1).subscribe(p => ret.main = p);
                    to.filter(t => t.id == g.type).take(1).subscribe(t => ret.type = t);
                    return ret;
                }).toArray();
            }
        ).publishReplay(1).refCount();
    };
}
