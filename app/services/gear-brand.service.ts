import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {GearBrand}       from '../types/gear-brand';
import {Observable}     from 'rxjs/Observable';
import {JsonLoadService} from "./json-load.service";

@Injectable()
export class GearBrandService extends JsonLoadService<GearBrand[]> {

    static fetchUrl:string
        = "https://gist.githubusercontent.com/dolpen/e84eaabe11fd30ebfe8cd3b8f0f85316/raw/235f60aa6fc056889822bdc046180f2c5b4cbde5/gear_brands.json";

    // GearBrand[i] : id[i] のギアパワーが付きやすいブランド一覧
    private reverseByStrong:Observable<GearBrand[][]>;
    // GearBrand[i] : id[i] のギアパワーが付きにくいブランド一覧
    private reverseByWeak:Observable<GearBrand[][]>;


    constructor(protected _http:Http) {
        super(_http, GearBrandService.fetchUrl);
        this.reverseByStrong =
            this.fetch().flatMap(brands => { // Observable<GearBrand[]>
                return Observable.from(brands) // Observable<GearBrand>
                    .groupBy(b => b.strong)  // Observable<Observable<GearBrand>>
                    .flatMap(o => o.toArray()) // Observable<GearBrand[]>[]
                    .toArray(); // GearBrand[][]
            }).publishReplay(1).refCount();

        this.reverseByWeak =
            this.fetch().flatMap(brands => { // Observable<GearBrand[]>
                return Observable.from(brands) // Observable<GearBrand>
                    .groupBy(b => b.weak)  // Observable<Observable<GearBrand>>
                    .flatMap(o => o.toArray()) // Observable<GearBrand[]>[]
                    .toArray(); // GearBrand[][]
            }).publishReplay(1).refCount();
    }

    fetchByStrong():Observable<GearBrand[][]> {
        return this.reverseByStrong;
    }
    fetchByWeak():Observable<GearBrand[][]> {
        return this.reverseByWeak;
    }

}
