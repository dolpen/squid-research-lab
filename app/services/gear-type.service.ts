import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {GearType}       from '../types/gear-type';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";

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
