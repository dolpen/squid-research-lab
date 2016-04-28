import {Component,OnInit} from 'angular2/core';
import {GearType}       from 'types/gear-type';
import {GearTypeService} from 'services/gear-type.service';

@Component({
    selector: 'my-types',
    template: `<ul>
    <li *ngFor="#gearType of gearTypes">
        <span>{{gearType.id}}</span> {{gearType.label}}
    </li>
</ul>
    `
})
export class TypesComponent implements OnInit {

    errorMessage:string;
    gearTypes:GearType[];

    constructor(private _gearTypeService:GearTypeService) {

    }

    ngOnInit() {
        this._gearTypeService
            .fetch()
            .then(
                results => this.gearTypes = results
            );
    }
}
