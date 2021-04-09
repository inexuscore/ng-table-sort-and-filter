import { Component, QueryList, ViewChildren } from '@angular/core';
import { Country, dataset } from './data';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './sortable-header.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter: string;
  data: Array<Country> = dataset;
  countries: Array<Country> = dataset;

  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = this.data;
    } else {
      this.countries = [...this.data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
