import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {GearBrand}       from '../types/gear-brand';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";

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
