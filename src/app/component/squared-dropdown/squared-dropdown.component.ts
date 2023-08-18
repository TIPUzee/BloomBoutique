import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-squared-dropdown',
  templateUrl: './squared-dropdown.component.html',
  styleUrls: ['./squared-dropdown.component.scss'],
})
export class SquaredDropdownComponent implements OnInit {
  @Input({ required: true }) public label: string = 'No Label';
  @Input({ required: true }) public options: Array<[string, boolean]> = [
    ['No Options', false],
  ];
  @Input({ required: false }) public default_option_index: number = -1;
  @Input({ required: false }) public attach_to_right: boolean = false;
  @Input({ required: false }) public label_align_right: boolean = false;
  @Input({ required: false }) public btn_classes: string = '';
  @Input({ required: false }) public options_list_classes: string = '';
  @Input({ required: false }) public option_classes: string = '';

  @ViewChild('toggler') toggler!: ElementRef<HTMLDivElement>;
  @ViewChild('drop_down_wrapper')
  drop_down_wrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('select_menu_options_list')
  select_menu_options_list!: ElementRef<HTMLDivElement>;

  @Output() onChange = new EventEmitter<[string, number]>();

  constructor() {}

  updateLabel(option: string | null = null, i: number | null = null) {
    if (option && i && i >= 0) {
      if (this.label == option) return;
      this.label = option;
      this.onChange.emit([this.label, i]);
    } else if (this.default_option_index != -1) {
      this.label = this.options[this.default_option_index][0];
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // fix the initial width of the [select menu button]
    let toggler_width = this.toggler.nativeElement.offsetWidth;
    let options_list_width =
      this.select_menu_options_list.nativeElement.offsetWidth;
    let new_width = Math.max(toggler_width, options_list_width);

    this.toggler.nativeElement.style.width = new_width + 'px';

    // set min width of options list
    this.select_menu_options_list.nativeElement.style.minWidth =
      new_width + 'px';
    this.updateLabel();
  }

  select_option(option: string, i: number) {
    this.drop_down_wrapper.nativeElement.classList.remove('active');
    this.updateLabel(option, i);
  }
}
