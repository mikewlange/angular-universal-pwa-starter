/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';
import { NotFound404Component } from './features/not-found404.component';

// routes not seen here include:
//     auth module routes

export const routes: Routes = [
    { path: '', loadChildren: './features/home/home.module#HomeModule' },
    {
        path: 'about',
        loadChildren: './features/about/about.module#AboutModule',
    },
    { path: 'blog', loadChildren: './features/blog/blog.module#BlogModule' },
    { path: '**', component: NotFound404Component },
];
