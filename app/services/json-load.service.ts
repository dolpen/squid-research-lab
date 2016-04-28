import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export class JsonLoadService<T> {

    private _hotObservable:Observable<T>;

    constructor(protected _http:Http, protected _fetchUrl:string) {
        this._initObservable();
    }

    private _initObservable():void {
        this._hotObservable = this._http.get(this._fetchUrl)
            .map(r => r.json()) // Response -> Json<T>
            .catch(e => Observable.throw(e.message || 'Server error'))
            .publishReplay(1)
            .refCount(); // hot!
    }

    fetch():Observable<T> {
        return this._hotObservable;
    }
}
