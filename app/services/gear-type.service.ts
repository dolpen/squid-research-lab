import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {GearType}       from '../types/gear-type';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class GearTypeService {
    constructor(private http:Http) {
    }

    private _fetchUrl
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/6d4dadd5a659be4b6da2ab437ef253c48f796b73/gear_types.json";

    fetchAll():Promise<GearType[]> {
        return this.http.get(this._fetchUrl)
            .catch(this.handleError)
            .map(this.extractData)
            .toPromise();
    }


    private extractData(res:Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
