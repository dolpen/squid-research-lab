import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Gear}       from '../types/gear';
import {JsonLoadService} from "./json-load.service";

@Injectable()
export class GearService extends JsonLoadService<Gear[]> {

    static fetchUrl:string
        = "https://gist.github.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gears.json";

    constructor(protected _http:Http) {
        super(_http, GearService.fetchUrl);
    }

}
