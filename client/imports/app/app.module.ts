import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function loadFooModule() {
  return module.dynamicImport('./foo/foo.module').then(({FooModule}) => FooModule);
}

export function loadBarModule() {
  return module.dynamicImport('./bar/bar.module').then(({BarModule}) => BarModule);
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'foo', loadChildren: loadFooModule },
      { path: 'bar', loadChildren: loadBarModule },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
