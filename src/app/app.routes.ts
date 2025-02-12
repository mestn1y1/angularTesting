import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AngularComponent } from './components/angular/angular.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TypescriptComponent } from './components/typescript/typescript.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Це звичайний імпорт
  // { path: 'home', component: HomeComponent },
  // {
  //   path: 'angular',
  //   component: AngularComponent
  // },
  // { path: 'typescript', component: TypescriptComponent },
  // { path: 'javascript', component: JavascriptComponent },
  // { path: 'rxjs', component: RxjsComponent },
  // { path: '**', component: NotFoundPageComponent },

  // LAZYLOADING IMPORT
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'angular',
    loadComponent: () =>
      import('./components/angular/angular.component').then(
        (c) => c.AngularComponent
      ),
  },
  {
    path: 'typescript',
    loadComponent: () =>
      import('./components/typescript/typescript.component').then(
        (c) => c.TypescriptComponent
      ),
  },
  {
    path: 'javascript',
    loadComponent: () =>
      import('./components/javascript/javascript.component').then(
        (c) => c.JavascriptComponent
      ),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./components/rxjs/rxjs.component').then((c) => c.RxjsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
];
