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
}

@Injectable()
export class GearPowerService extends JsonLoadService<GearPower[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gear_powers.json";

    constructor(protected _http:Http) {
        super(_http, GearPowerService.fetchUrl);
    }
}


@Injectable()
export class GearBrandService extends JsonLoadService<GearBrand[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/235f60aa6fc056889822bdc046180f2c5b4cbde5/gear_brands.json";


    constructor(protected _http:Http) {
        super(_http, GearBrandService.fetchUrl);

    }

}

@Injectable()
export class GearService extends JsonLoadService<Gear[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/235f60aa6fc056889822bdc046180f2c5b4cbde5/gears.json";

    constructor(protected _http:Http) {
        super(_http, GearService.fetchUrl);
    }

}
