import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear}       from 'types/gear';
import {GearService} from 'services/gear.service';
import {ListedGearComponent} from './listed-gear.component';

@Component({
    selector: 'gear-list',
    templateUrl: 'templates/gear-list.template.html',
    directives: [ListedGearComponent]
})
export class GearListComponent implements OnInit {

    gears:Gear[];

    constructor(private _gearService:GearService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        this._gearService.fetch().subscribe(results =>this.gears = results);
    }
}
