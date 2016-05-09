import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'templates/dashboard.template.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class DashboardComponent {

}
