import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { BookModel } from "./shared/book-model";
import { BookService } from "./services/book.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng-goodreads";
  gplonfire: boolean = true;
  searchTitle: string = "";
  books: BookModel[] = [];

  doSearch(event) {
    this.searchTitle = event.searchTerm;
  }

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.refreshContent();
  }

  deleteBook(book) {
    this.bookService.deleteBook(book).subscribe(() => {
      this.refreshContent();
    });
  }

  refreshContent() {
    this.bookService.fetchBook().subscribe(books => {
      this.books = books;
    });
  }
}
