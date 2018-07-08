import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  selectedBook: Book = new Book();
  idxForEdit = 0;

  bookList: Book[] = [
    {
      "bookId": 1,
      "bookName": "Java",
      "author": "Oracle",
      "price" : 500
    },
    {
      "bookId": 2,
      "bookName": "Angular",
      "author": "Google",
      "price" : 700
    }
  ];

  // bookId: number = 1;
  // bookName: string = 'Java';
  // author: string = '';
  // price: number = 500;

  constructor() { 
    console.log("Always First...!");
  }

  ngOnInit() {
    console.log("Book List Component Initialized...");
    let tempBook:Book = new Book();
    tempBook.bookId = 3;
    tempBook.bookName = "Big Data",
    tempBook.author = "Cloudera";
    tempBook.price = 400;

    this.bookList.push(tempBook);
  } 

  sayHello(){
    console.log("Hello Radhe krishna...!");
  }

  setSelectedBook(book: Book){
    this.selectedBook = book;
  }

  edit(bookId:number,idx:number){
    this.idxForEdit = idx;
    this.selectedBook = this.bookList.find((book)=>book.bookId == bookId);    
  }

  update(bookId:number,bookName: string,price:number){
    console.log(bookId);
    this.selectedBook = this.bookList.find(
      (b)=>b.bookId == bookId
    );    
    this.selectedBook.bookName = bookName;
    this.selectedBook.price = price;
    //this.bookList[this.idxForEdit] = this.selectedBook;    
  }

  delete(idx:number):void {
    console.log(idx);
    this.bookList.splice(idx,1);
  }
}
