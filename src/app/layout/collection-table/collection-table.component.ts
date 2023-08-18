import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss'],
})
export class CollectionTableComponent {
  layoutClass: string = '';
  layoutStyle: string = '';

  onChangeSortBy(val: any) {
    console.log(val);
  }
  onLayoutChange(event: [string, number]) {
    if (event[0] == 'rows') {
      this.layoutClass = `grid-${event[0]}`;
    } else {
      this.layoutClass = `grid-${event[0]}-${event[1]}`;
    }
    this.layoutStyle = event[0];
  }
}
