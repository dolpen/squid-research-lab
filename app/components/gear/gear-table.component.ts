import {Component,Input} from '@angular/core';
import {Gear,GearType,GearBrand,GearPower} from '../../types/api';
import {GearTypeService} from '../../services/api.service';
import {ComputedGearService,ComputedGearBrandService,ComputedGearPowerService} from '../../services/computed.service';
import {ComputedGear,ComputedGearBrand,ComputedGearPower} from '../../types/computed';
import {GearElementComponent} from "./gear-element.component";
import Optional from "../../libs/optional";


@Component({
    selector: 'gear-table',
    templateUrl: 'templates/gear-table.template.html',
    directives: [GearElementComponent]
})
export class GearTableComponent {

    @Input()
    gears:ComputedGear[];

}
