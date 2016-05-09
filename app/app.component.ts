import {Routes, RouteSegment,  Tree, OnActivate, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {Component} from '@angular/core';
import {Http,HTTP_PROVIDERS} from '@angular/http';
import {GearService,GearBrandService,GearPowerService,GearTypeService} from "./services/api.service";
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from "./services/computed.service";
import {BrandListComponent} from "./components/brand/brand-list.component";
import {PowerListComponent} from "./components/power/power-list.component";
import {BrandDetailComponent} from "./components/brand/brand-detail.component";
import {PowerDetailComponent} from "./components/power/power-detail.component";
import {GearListComponent} from "./components/gear/gear-list.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

/**
 * これはシェルコンポーネント。責務は以下の通り
 * * URLからのルーティング
 * * シングルトンサービス系のDI
 *
 * Component デコレータとクラス定義が離れるのは嫌なので、RouteConfig デコレータを上に持っていく
 */
@Routes([
    {
        path: '/',
        component: DashboardComponent
    },
    {
        path: '/gear',
        component: GearListComponent
    },
    {
        path: '/brand/:id',
        component: BrandDetailComponent
    },
    {
        path: '/brand',
        component: BrandListComponent
    },
    {
        path: '/power/:id',
        component: PowerDetailComponent
    },
    {
        path: '/power',
        component: PowerListComponent
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
