import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import {BrandDetailComponent} from 'brand-detail.component';
import {PowerDetailComponent} from 'power-detail.component';
import {GearBrandService} from 'services/gear-brand.service';
import {GearPowerService} from 'services/gear-power.service';
import {GearTypeService} from 'services/gear-type.service';

/**
 * これはシェルコンポーネント。責務は以下の通り
 * * URLからのルーティング
 * * シングルトンサービス系のDI
 *
 * Component デコレータとクラス定義が離れるのは嫌なので、RouteConfig デコレータを上に持っていく
 */
@RouteConfig([
    {
        path: '/brand/:id',
        name: 'Brand',
        component: BrandDetailComponent
    },

    {
        path: '/power/:id',
        name: 'Power',
        component: PowerDetailComponent
    }
])
@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `,
    providers: [ROUTER_PROVIDERS,HTTP_PROVIDERS,GearBrandService,GearPowerService,GearTypeService],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title = 'test';
}
