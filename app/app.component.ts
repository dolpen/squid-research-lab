import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import {BrandDetailComponent} from 'components/brand/brand-detail.component';
import {PowerDetailComponent} from 'components/power/power-detail.component';
import {GearListComponent} from 'components/gear/gear-list.component';
import {DashboardComponent} from 'components/dashboard/dashboard.component';
import {GearService,GearBrandService,GearPowerService,GearTypeService} from 'services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from 'services/computed.service';
import {BrandListComponent} from "./components/brand/brand-list.component";
import {PowerListComponent} from "./components/power/power-list.component";

/**
 * これはシェルコンポーネント。責務は以下の通り
 * * URLからのルーティング
 * * シングルトンサービス系のDI
 *
 * Component デコレータとクラス定義が離れるのは嫌なので、RouteConfig デコレータを上に持っていく
 */
@RouteConfig([
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/gear',
        name: 'GearList',
        component: GearListComponent
    },
    {
        path: '/brand',
        name: 'BrandList',
        component: BrandListComponent
    },
    {
        path: '/brand/:id',
        name: 'BrandDetail',
        component: BrandDetailComponent
    },
    {
        path: '/power',
        name: 'PowerList',
        component: PowerListComponent
    },
    {
        path: '/power/:id',
        name: 'PowerDetail',
        component: PowerDetailComponent
    }
])
@Component({
    selector: 'app',
    templateUrl: 'templates/app.template.html',
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
    title = 'イカギア';
}
