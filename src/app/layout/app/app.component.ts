import { Component } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BloomBoutique';
  bg = '/assets/img/bg.png';
  constructor(private utils: UtilsService) {}
}
