import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromBooks from './books';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: fromBooks.BookListComponent,
        children: [
            {
                path: 'new',
                pathMatch: 'full',
                component: fromBooks.BookNewComponent
            },
            {
                path: ':bookID',
                pathMatch: 'full',
                component: fromBooks.BookDetailComponent
            }
        ]
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}