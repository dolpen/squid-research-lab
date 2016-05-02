import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Gear}       from '../types/gear';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";

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
