import {Component} from 'angular2/core';
import {DashboardComponent} from "./dashboard.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>My Angular 2!</h1>
    <h4>{{title}}</h4>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    {path: '/', redirectTo: ['Dashboard'] },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent}
])
export class AppComponent {
    public title = 'Tour of Heroes';
}
