import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";
import {Gear,GearType,GearBrand,GearPower} from 'types/api';

@Injectable()
export class GearTypeService extends JsonLoadService<GearType[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gear_types.json";

    constructor(protected _http:Http) {
        super(_http, GearTypeService.fetchUrl);
    }
    findById(id:number):Observable<GearType> {
        return this.fetch().flatMap(
            types => Observable.from(types).filter(type => type.id == id).take(1)
        );
    }
}

@Injectable()
export class GearPowerService extends JsonLoadService<GearPower[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gear_powers.json";

    constructor(protected _http:Http) {
        super(_http, GearPowerService.fetchUrl);
    }

    findById(id:number):Observable<GearPower> {
        return this.fetch().flatMap(
            powers => Observable.from(powers).filter(power => power.id == id).take(1)
        );
    }
    excludesAny():Observable<GearPower[]> {
        return this.fetch().flatMap(
            powers => Observable.from(powers).filter(power => power.id > 0).toArray()
        );
    }
}


@Injectable()
export class GearBrandService extends JsonLoadService<GearBrand[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/235f60aa6fc056889822bdc046180f2c5b4cbde5/gear_brands.json";


    constructor(protected _http:Http) {
        super(_http, GearBrandService.fetchUrl);

    }
    findById(id:number):Observable<GearBrand> {
        return this.fetch().flatMap(
            brands => Observable.from(brands).filter(brand => brand.id == id).take(1)
        );
    }

    findByStrong(id:number):Observable<GearBrand[]> {
        return this.fetch().flatMap(
            brands => Observable.from(brands).filter(brand => brand.strong == id).toArray()
        );
    }

    findByWeak(id:number):Observable<GearBrand[]> {
        return this.fetch().flatMap(
            brands => Observable.from(brands).filter(brand => brand.weak == id).toArray()
        );
    }

}

@Injectable()
export class GearService extends JsonLoadService<Gear[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/235f60aa6fc056889822bdc046180f2c5b4cbde5/gears.json";

    constructor(protected _http:Http) {
        super(_http, GearService.fetchUrl);
    }

    filterByCondition(type:number, brand:number, main:number):Observable<Gear[]> {
        return this.fetch().flatMap(
            gears => Observable
                .from(gears)
                .filter(gear => {
                    return (type < 0 || gear.type == type)
                        && (brand < 0 || gear.brand == brand)
                        && (main <= 0 || gear.main == main);
                })
                .toArray()
        );
    }
}
