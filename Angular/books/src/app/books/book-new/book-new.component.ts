import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css', '../../bootstrap.css']
})
export class BookNewComponent implements OnInit {
    book: Book = new Book();

    @Output()
    createBook = new EventEmitter<Book>();


    constructor() { }

    ngOnInit() {
    }

    onSubmit(event: Event, form: NgForm) {
        event.preventDefault();

        const { value, valid } = form;

        console.log('submitting form', this.book);

        // this.books.push(this.book);
        this.createBook.emit(this.book);

        this.book = new Book();

        form.reset();

        // console.log('books', this.books);
    }
}
