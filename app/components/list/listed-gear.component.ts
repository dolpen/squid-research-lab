import {Component,OnInit,Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ComputedGear} from "types/computed";

@Component({
    selector: '[listedGear]',
    templateUrl: 'templates/listed-gear.template.html'
})
export class ListedGearComponent {
    @Input('listedGear')
    gear:ComputedGear
}
