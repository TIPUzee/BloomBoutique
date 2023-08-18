import { Component } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
})
export class ThemeTogglerComponent {
  constructor(public themeService: ThemeService) {}
}
