import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>App</h1>

    <a routerLink="home">Home</a>
    <a routerLink="foo">Foo</a>
    <a routerLink="bar">Bar</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
