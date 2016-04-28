import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export class JsonLoadService<T> {

    protected _hotObservable:Observable<T>;

    constructor(protected _http:Http, protected _fetchUrl:string) {
        this._initObservable(_fetchUrl);
    }

    private _initObservable(_fetchUrl:string):void {
        this._hotObservable = this._http.get(_fetchUrl)
            .map(r => r.json()) // Response -> Json<T>
            .catch(e => Observable.throw(e.message || 'Server error'))
            .publishReplay(1)
            .refCount(); // hot!
    }

    fetchAll():Observable<T> {
        return this._hotObservable;
    }
}
