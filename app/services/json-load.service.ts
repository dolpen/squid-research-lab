import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export class JsonLoadService<T> {

    private _hotObservable:Observable<T>;

    constructor(protected _http:Http, protected _fetchUrl:string) {
        this._initObservable();
    }

    private _initObservable():void {
        this._hotObservable = this._http.get(this._fetchUrl)
            .map(r => r.json()) // Response -> Json<T>
            .publishReplay(1)
            .refCount(); // hot!
    }

    fetch():Promise<T> {
        return this._hotObservable.toPromise();
    }
}
