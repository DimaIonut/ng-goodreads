import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges,
  OnChanges,
  EventEmitter,
  Output
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { BookTableDataSource } from "./book-table-datasource";
import { BookModel } from "../shared/book-model";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.scss"]
})
export class BookTableComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() books: BookModel[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<BookModel>;
  dataSource: BookTableDataSource;

  @Output() deletedBook = new EventEmitter<BookModel>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["ISBN13", "originalTitle", "Actions"];

  constructor() {
    this.dataSource = new BookTableDataSource([]);
  }

  ngOnInit() {
    this._refresh(this.books);
  }

  _refresh(books: BookModel[]) {
    this.dataSource.books = books;
  }

  ngOnChanges(changes: SimpleChanges) {
    this._refresh([...changes.books.currentValue]);
  }

  onDeleteBook(book: BookModel) {
    this.deletedBook.emit(book);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
