import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-collection-table-cell',
  templateUrl: './collection-table-cell.component.html',
  styleUrls: ['./collection-table-cell.component.scss'],
})
export class CollectionTableCellComponent {
  @Input({ required: true }) layoutStyle: string = 'columns';
  @Input({ required: true }) vendor: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: false }) discount: number = 0;

  constructor(public utilsService: UtilsService) {}
}
