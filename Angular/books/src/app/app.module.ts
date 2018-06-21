import { BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import * as fromBooks from './books';

import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';

import { BookService } from './services/book.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ...fromBooks.components,
        TitleizePipe,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
