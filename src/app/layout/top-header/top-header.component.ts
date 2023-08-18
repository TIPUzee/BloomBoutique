import { Component } from '@angular/core';
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faCartShopping = faCartShopping;

  constructor(public themeService: ThemeService) {}
}
