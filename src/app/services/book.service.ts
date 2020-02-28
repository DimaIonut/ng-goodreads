import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { BookModel } from "../shared/book-model";
import { retry, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occured: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("Ooops something went wrong");
  }

  fetchBook() {
    return this.http
      .get<BookModel[]>("/books", httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteBook(book: BookModel) {
    return this.http
      .delete("/books/" + book.id, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }
}
