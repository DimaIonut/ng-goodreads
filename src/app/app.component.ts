import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-goodreads";
  gplonfire: boolean = true;
  searchTitle: string = "";

  doSearch(event) {
    this.searchTitle = event.searchTerm;
  }

  books = [
    {
      id: "9780439023480",
      ISBN: "439023483",
      ISBN13: "9780439023480",
      authors: "Suzanne Collins",
      originalTitle: "The Hunger Games",
      originalPublicationYear: 2008,
      averageRating: 4.34,
      languageCode: "eng",
      smallImageUrl:
        "https://images.gr-assets.com/books/1447303603s/2767052.jpg"
    },
    {
      id: "9780439554930",
      ISBN: "439554934",
      ISBN13: "9780439554930",
      authors: "J.K. Rowling, Mary GrandPré",
      originalTitle: "Harry Potter and the Philosopher's Stone",
      originalPublicationYear: 1997,
      averageRating: 4.44,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1474154022s/3.jpg"
    },
    {
      id: "9780316015840",
      ISBN: "316015849",
      ISBN13: "9780316015840",
      authors: "Stephenie Meyer",
      originalTitle: "Twilight",
      originalPublicationYear: 2005,
      averageRating: 3.57,
      languageCode: "en-US",
      smallImageUrl: "https://images.gr-assets.com/books/1361039443s/41865.jpg"
    },
    {
      id: "9780061120080",
      ISBN: "61120081",
      ISBN13: "9780061120080",
      authors: "Harper Lee",
      originalTitle: "To Kill a Mockingbird",
      originalPublicationYear: 1960,
      averageRating: 4.25,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1361975680s/2657.jpg"
    },
    {
      id: "9780743273560",
      ISBN: "743273567",
      ISBN13: "9780743273560",
      authors: "F. Scott Fitzgerald",
      originalTitle: "The Great Gatsby",
      originalPublicationYear: 1925,
      averageRating: 3.89,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1490528560s/4671.jpg"
    },
    {
      id: "9780525478810",
      ISBN: "525478817",
      ISBN13: "9780525478810",
      authors: "John Green",
      originalTitle: "The Fault in Our Stars",
      originalPublicationYear: 2012,
      averageRating: 4.26,
      languageCode: "eng",
      smallImageUrl:
        "https://images.gr-assets.com/books/1360206420s/11870085.jpg"
    },
    {
      id: "9780618260300",
      ISBN: "618260307",
      ISBN13: "9780618260300",
      authors: "J.R.R. Tolkien",
      originalTitle: "The Hobbit or There and Back Again",
      originalPublicationYear: 1937,
      averageRating: 4.25,
      languageCode: "en-US",
      smallImageUrl: "https://images.gr-assets.com/books/1372847500s/5907.jpg"
    },
    {
      id: "9780316769170",
      ISBN: "316769177",
      ISBN13: "9780316769170",
      authors: "J.D. Salinger",
      originalTitle: "The Catcher in the Rye",
      originalPublicationYear: 1951,
      averageRating: 3.79,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1398034300s/5107.jpg"
    },
    {
      id: "9781416524790",
      ISBN: "1416524797",
      ISBN13: "9781416524790",
      authors: "Dan Brown",
      originalTitle: "Angels \u0026 Demons ",
      originalPublicationYear: 2000,
      averageRating: 3.85,
      languageCode: "en-CA",
      smallImageUrl: "https://images.gr-assets.com/books/1303390735s/960.jpg"
    },
    {
      id: "9780679783270",
      ISBN: "679783261",
      ISBN13: "9780679783270",
      authors: "Jane Austen",
      originalTitle: "Pride and Prejudice",
      originalPublicationYear: 1813,
      averageRating: 4.24,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1320399351s/1885.jpg"
    },
    {
      id: "9781594480000",
      ISBN: "1594480001",
      ISBN13: "9781594480000",
      authors: "Khaled Hosseini",
      originalTitle: "The Kite Runner ",
      originalPublicationYear: 2003,
      averageRating: 4.26,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1484565687s/77203.jpg"
    },
    {
      id: "9780062024040",
      ISBN: "62024035",
      ISBN13: "9780062024040",
      authors: "Veronica Roth",
      originalTitle: "Divergent",
      originalPublicationYear: 2011,
      averageRating: 4.24,
      languageCode: "eng",
      smallImageUrl:
        "https://images.gr-assets.com/books/1328559506s/13335037.jpg"
    },
    {
      id: "9780451524940",
      ISBN: "451524934",
      ISBN13: "9780451524940",
      authors: "George Orwell, Erich Fromm, Celâl Üster",
      originalTitle: "Nineteen Eighty-Four",
      originalPublicationYear: 1949,
      averageRating: 4.14,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1348990566s/5470.jpg"
    },
    {
      id: "9780452284240",
      ISBN: "452284244",
      ISBN13: "9780452284240",
      authors: "George Orwell",
      originalTitle: "Animal Farm: A Fairy Story",
      originalPublicationYear: 1945,
      averageRating: 3.87,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1424037542s/7613.jpg"
    }
  ];
}
