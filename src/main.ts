import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app/app';
import {APP_ROUTES} from "./app/app.routes";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(App, [
    {provide: 'API', useValue: `https://starwars-json-server-aikiidixsl.now.sh`},
    APP_ROUTES,
    HTTP_PROVIDERS])
    .catch(err => console.log(err));