import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {BOOKS} from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css', '../../bootstrap.css'],
    providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {

    books: Array<Book> = BOOKS;
    selectedBook: Book;
    filter: Book = new Book(false);

    constructor(private titleize: TitleizePipe) { }

    ngOnInit() {
        this.books.forEach(book => {
            book.author = this.titleize.transform(book.author);
        });
    }

    selectBook(book: Book): void {
        console.log('selecting books', book);
        this.selectedBook = this.selectedBook === book ? null : book;

        // if (this.selectedBook === book) {
        //     this.selectedBook = null;
        // } else {
        //     this.selectedBook = book;
        // }
    }

    onCreate(event: Book): void {
        console.log('creating book', event);
        this.books.push(event);
    }

    clearFilter(): void {
        console.log('we are clearing filter');
        this.filter = new Book(false);
    }

}
