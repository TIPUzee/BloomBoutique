import { Directive, ElementRef, HostListener } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Directive({
  selector: '[appRearrangeMenuOnFocusWithin]',
})
export class RearrangeMenuOnFocusWithinDirective {
  constructor(private elementHost: ElementRef, private utils: UtilsService) {}

  @HostListener('focusin')
  setInputFocus(): void {
    this.rearrange(this.elementHost);
  }

  @HostListener('mouseenter')
  setInputFocusOut(): void {
    this.rearrange(this.elementHost);
  }

  rearrange(e: ElementRef) {
    const wrapper = e.nativeElement as HTMLDivElement;
    const btn = wrapper.firstChild as HTMLDivElement;
    const sub_menu: HTMLDivElement = btn.nextElementSibling as HTMLDivElement;
    if (!sub_menu) return;

    const w = parseInt(window.getComputedStyle(sub_menu).width, 10);
    const x = this.utils.getXPositionCenter(btn);
    const padding = 20;
    const end_limit = this.utils.getAvailableWindowWidth() - padding;
    const start_limit = 0 + padding;
    let sub_start = x - w / 2;
    let sub_end = x + w / 2;
    if (sub_start < start_limit) {
      sub_start = start_limit;
      sub_end = Math.min(w, end_limit);
    } else if (sub_end > end_limit) {
      sub_start = Math.max(start_limit, end_limit - w);
      sub_end = end_limit;
    }
    sub_menu.style.left = `-${this.utils.getXPositionStart(btn) - sub_start}px`;
    sub_menu.classList.remove('d-none');
    const arrow: HTMLDivElement = sub_menu.querySelector(
      '.arrow'
    ) as HTMLDivElement;
    arrow.style.left = `${x - sub_start}px`;
    arrow.classList.remove('top-50');
  }
}
