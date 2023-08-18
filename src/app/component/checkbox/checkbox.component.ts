import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input({ required: true }) id: number | string = 'null';
  @Input({ required: true }) name: string = 'null';
  @Input({ required: true }) checked: boolean = false;
  @Input({ required: true }) label: string = 'No label';

  changeState() {
    this.checked = !this.checked;
  }
}
