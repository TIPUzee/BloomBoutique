import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private m_isDark: boolean = false;
  private m_bodyElement!: HTMLBodyElement;

  constructor() {
    this.m_bodyElement = document.getElementById('body') as HTMLBodyElement;
    if (this.m_bodyElement.classList.contains('dark')) {
      this.m_isDark = true;
    } else if (this.m_bodyElement.classList.contains('light')) {
      this.m_isDark = false;
    }
  }
  isDark(): boolean {
    return this.m_isDark;
  }
  changeTheme(): void {
    this.m_isDark = !this.m_isDark;
    if (this.m_isDark) {
      this.m_bodyElement.classList.add('dark');
      this.m_bodyElement.classList.remove('light');
    } else {
      this.m_bodyElement.classList.remove('dark');
      this.m_bodyElement.classList.add('light');
    }
  }
}
