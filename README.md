# Lazy Loading Angular's NgModules with Meteor 1.5

## module.dynamicImport

Meteor transpiles `import()` into `module.dynamicImport()`.

Since in TS we can't use `import()` syntax, let's use the transpiled form.

```ts
import('./component').then((MyComponent) => {
  console.log(MyComponent);
});
```

```ts
module.dynamicImport('./component').then((MyComponent) => {
  console.log(MyComponent);
});
```

## Routing example

Usage of dynamic imports with Angular Router:

```ts
import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// function that returns a Promise with a NgModule
export function loadBarModule() {
  return module.dynamicImport('./bar/bar.module').then(({BarModule}) => BarModule);
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // Angular Router's loadChildren method expects a function that returns a Promise
      { path: 'foo', loadChildren: loadFooModule }, // use loadBarModule function
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
```



