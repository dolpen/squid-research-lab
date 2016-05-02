import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import {BrandDetailComponent} from 'components/brand/brand-detail.component';
import {PowerDetailComponent} from 'components/power/power-detail.component';
import {GearListComponent} from 'components/list/gear-list.component';
import {GearService,GearBrandService,GearPowerService,GearTypeService} from 'services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from 'services/computed.service';

/**
 * これはシェルコンポーネント。責務は以下の通り
 * * URLからのルーティング
 * * シングルトンサービス系のDI
 *
 * Component デコレータとクラス定義が離れるのは嫌なので、RouteConfig デコレータを上に持っていく
 */
@RouteConfig([
    {
        path: '/list',
        name: 'GearList',
        component: GearListComponent,
        useAsDefault: true
    },
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
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        GearService,
        GearBrandService,
        GearPowerService,
        GearTypeService,
        ComputedGearService,
        ComputedGearBrandService,
        ComputedGearPowerService
    ],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    title = 'test';
}
