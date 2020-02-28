import { Pipe, PipeTransform } from "@angular/core";
import { BookModel } from "./book-model";

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: BookModel[], args?: string): BookModel[] {
    if (args) {
      return (value || []).filter((item: BookModel) => {
        return item.originalTitle.toLowerCase().includes(args.toLowerCase());
      });
    }
    return value;
  }
}
