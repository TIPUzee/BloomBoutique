import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input({ required: true }) public label: string = 'No Label';
  @Input({ required: true }) public options: Array<[string, boolean]> = [
    ['No Options', false],
  ];
  @Input({ required: false }) public default_option_index: number = -1;
  @Input({ required: false }) public attach_to_right: boolean = false;
  @Input({ required: false }) public label_align_right: boolean = false;

  @ViewChild('toggler') toggler!: ElementRef<HTMLDivElement>;
  @ViewChild('drop_down_wrapper')
  drop_down_wrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('select_menu_options_list')
  select_menu_options_list!: ElementRef<HTMLDivElement>;

  constructor() {}

  updateLabel(option: string | null = null) {
    if (option) this.label = option;
    else if (this.default_option_index != -1)
      this.label = this.options[this.default_option_index][0];
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // fix the initial width of the [select menu button]
    this.toggler.nativeElement.style.width =
      this.toggler.nativeElement.offsetWidth + 'px';

    // set min width of options list
    this.select_menu_options_list.nativeElement.style.minWidth =
      this.toggler.nativeElement.offsetWidth + 'px';
    this.updateLabel();
  }

  select_option(option: string) {
    this.drop_down_wrapper.nativeElement.classList.remove('active');
    this.updateLabel(option);
  }
}
