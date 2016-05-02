import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";
import {Gear,GearType,GearBrand,GearPower} from 'types/api';
import {GearService,GearTypeService,GearBrandService,GearPowerService} from 'services/api.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from 'types/computed';



@Injectable()
export class ComputedGearPowerService {

    private _hotObservable:Observable<ComputedGearPower[]>;

    constructor(private _gearBrandService:GearBrandService, private _gearPowerService:GearPowerService) {
        this._initObservable()
    }

    private _initObservable():void {
        this._hotObservable = Observable.zip(
            this._gearBrandService.fetch(),
            this._gearPowerService.fetch()
        ).flatMap((results) => { // brands
                let bo = Observable.from(results[0]);
                let po = Observable.from(results[1]); // powers
                return po.map((p:GearPower):ComputedGearPower => {
                    var ret = new ComputedGearPower(p);
                    bo.filter(b => b.strong == p.id).toArray().subscribe(b => ret.strongs = b);
                    bo.filter(b => b.weak == p.id).toArray().subscribe(b => ret.weaks = b);
                    return ret;
                }).toArray();
            }
        ).publishReplay(1).refCount();
    }

    fetch():Observable<ComputedGearPower[]> {
        return this._hotObservable;
    };

    findById(id:number):Observable<ComputedGearPower> {
        return this.fetch().flatMap(
            brands => Observable.from(brands).filter(brand => brand.id == id).take(1)
        );
    }

    excludesAny():Observable<ComputedGearPower[]> {
        return this.fetch().flatMap(
            powers => Observable.from(powers).filter(power => power.id > 0).toArray()
        );
    }
}


@Injectable()
export class ComputedGearBrandService {
    private _hotObservable:Observable<ComputedGearBrand[]>;

    constructor(private _gearBrandService:GearBrandService, private _gearPowerService:GearPowerService) {
        this._initObservable()
    }

    private _initObservable():void {
        this._hotObservable = Observable.zip(
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
    }

    fetch():Observable<ComputedGearBrand[]> {
        return this._hotObservable;
    };

    findById(id:number):Observable<ComputedGearBrand> {
        return this.fetch().flatMap(
            brands => Observable.from(brands).filter(brand => brand.id == id).take(1)
        );
    }

}


@Injectable()
export class ComputedGearService {

    private _hotObservable:Observable<ComputedGear[]>;

    constructor(private _gearService:GearService,
                private _gearTypeService:GearTypeService,
                private _computedGearBrandService:ComputedGearBrandService,
                private _computedGearPowerService:ComputedGearPowerService) {
        this._initObservable()
    }

    private _initObservable():void {
        this._hotObservable = Observable.zip(
            this._gearService.fetch(),
            this._computedGearBrandService.fetch(),
            this._computedGearPowerService.fetch(),
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
    }

    fetch():Observable<ComputedGear[]> {
        return this._hotObservable;
    };

    filterByCondition(type:number, brand:number, main:number):Observable<ComputedGear[]> {
        return this.fetch().flatMap(
            gears => Observable
                .from(gears)
                .filter(gear => {
                    return (type < 0 || gear.type.id == type)
                        && (brand < 0 || gear.brand.id == brand)
                        && (main <= 0 || gear.main.id == main);
                })
                .toArray()
        );
    }
}
