require('./imports/polyfills');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './imports/app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
