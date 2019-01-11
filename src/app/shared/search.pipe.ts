import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Customer[], searchText: string): Customer[] {
    if (!items) {return []; }
    if (!searchText) { return items; }

    return items.filter( str => {
      return str.firstName.toLowerCase().includes(searchText.toLowerCase());
    });
   }
}
