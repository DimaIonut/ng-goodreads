import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Search } from "../shared/search.model";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = "Search...";
  searchTerm: string = "";
  @Output() searchFired = new EventEmitter<Search>();

  onChange(value) {
    this.searchTerm = value;
  }

  onSearch() {
    this.searchFired.emit({ searchTerm: this.searchTerm });
  }
}
