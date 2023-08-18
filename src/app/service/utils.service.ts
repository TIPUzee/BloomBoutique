import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getAvailableWindowWidth(): number {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;

    document.body.removeChild(outer);

    return window.innerWidth - scrollbarWidth;
  }

  getXPositionCenter(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    return centerX;
  }

  getXPositionStart(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    return x;
  }

  getCurrencyCode(): string {
    return 'Rs. ';
  }
}
