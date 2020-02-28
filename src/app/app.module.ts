import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchFilterPipe } from "./shared/search-filter.pipe";
import { SearchBoxComponent } from "./search-box/search-box.component";

@NgModule({
  declarations: [AppComponent, SearchFilterPipe, SearchBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
