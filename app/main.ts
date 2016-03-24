import {bootstrap}    from 'angular2/platform/browser';
import {APP_BASE_HREF,ROUTER_PROVIDERS} from "angular2/router";
import {HeroService} from "./hero.service";
import {AppComponent} from './app.component';
import {provide} from "angular2/core";
import {enableProdMode} from 'angular2/core'

enableProdMode();
//enableProdMode(); // enable production mode and thus disable debugging information

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService,
    provide(APP_BASE_HREF, {useValue : '/' })
    //bind(APP_BASE_HREF).toValue(location.pathname)
])
    .catch(err => console.error(err));

