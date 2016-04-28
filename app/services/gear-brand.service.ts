import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {GearBrand}       from '../types/gear-brand';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class GearBrandService extends JsonLoadService<GearBrand[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gear_brands.json";

    constructor(protected _http:Http) {
        super(_http, GearBrandService.fetchUrl);
    }


}
