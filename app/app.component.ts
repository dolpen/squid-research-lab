import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import {TypesComponent} from 'types.component';
import {GearTypeService} from 'services/gear-type.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-types></my-types>
    `,
    providers: [HTTP_PROVIDERS,GearTypeService],
    directives: [TypesComponent]
})
export class AppComponent {
    title = 'test';
}
