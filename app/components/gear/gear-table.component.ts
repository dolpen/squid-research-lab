import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Gear,GearType,GearBrand,GearPower} from '../../types/api';
import {GearTypeService} from '../../services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from '../../services/computed.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from '../../types/computed';
import {GearElementComponent} from "./gear-element.component";
import Optional from "../../libs/optional";
import {Input} from "angular2/core";


@Component({
    selector: 'gear-table',
    templateUrl: 'templates/gear-table.template.html',
    directives: [GearElementComponent]
})
export class GearTableComponent {

    @Input()
    gears:ComputedGear[];

}
