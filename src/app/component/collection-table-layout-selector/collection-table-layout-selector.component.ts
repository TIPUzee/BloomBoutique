import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-collection-table-layout-selector',
  templateUrl: './collection-table-layout-selector.component.html',
  styleUrls: ['./collection-table-layout-selector.component.scss'],
})
export class CollectionTableLayoutSelectorComponent implements OnInit {
  @Input({ required: true }) defaultLayout: [string, number] = ['columns', 2];
  @Output() onChange = new EventEmitter<[string, number]>();

  @ViewChild('main', { static: true }) mainElement!: ElementRef<HTMLDivElement>;

  called: number = 0;
  curr_active_element!: HTMLDivElement;

  onLayoutChange(event: Event) {
    let target: HTMLDivElement = event.target as HTMLDivElement;
    if (target.classList.contains('active')) {
      return;
    }

    let layoutType: string;
    if (target.classList.contains('flex-row')) {
      layoutType = 'columns';
    } else if (target.classList.contains('flex-column')) {
      layoutType = 'rows';
    } else {
      console.error('[Error] : Invalid Collection Table Layout.');
      return;
    }

    let layout: [string, number] = [layoutType, target.childElementCount];
    this.curr_active_element.classList.remove('active');
    target.classList.add('active');
    this.curr_active_element = target;
    this.onChange.emit(layout);
  }

  ngOnInit() {
    this.checkDefault();
  }

  checkDefault() {
    console.warn('Default', this.defaultLayout);
    if (!this.mainElement || !this.mainElement.nativeElement) {
      return;
    }
    let found = false;
    for (
      let i = 0, child = this.mainElement.nativeElement.children[i];
      i < this.mainElement.nativeElement.children.length;
      i++, child = this.mainElement.nativeElement.children[i]
    ) {
      if (this.defaultLayout[0] == 'rows') {
        if (child.classList.contains('flex-column')) {
          child.classList.add('active');
          this.curr_active_element = child as HTMLDivElement;
          found = true;
          break;
        }
      } else if (this.defaultLayout[0] == 'columns') {
        if (
          child.classList.contains('flex-row') &&
          child.childElementCount == this.defaultLayout[1]
        ) {
          child.classList.add('active');
          this.curr_active_element = child as HTMLDivElement;
          found = true;
          break;
        }
      } else {
        console.error('[Error] : Invalid Collection Table Default Layout.');
        return;
      }
    }
    if (!found) {
      console.error(
        '[Error] : Invalid Collection Table Default Layout. Element not found.'
      );
      return;
    }
    this.onChange.emit(this.defaultLayout);
  }
}
