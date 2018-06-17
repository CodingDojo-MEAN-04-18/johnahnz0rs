import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookNewComponent } from './books/book-new/book-new.component';

import {TitleizePipe} from './titleize.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BookDetailComponent,
        BookListComponent,
        BookNewComponent,
        TitleizePipe,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
