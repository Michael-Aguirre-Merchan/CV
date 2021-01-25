import { Component } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess';
  constructor(private ngxChessBoardService: NgxChessBoardService) { }
}


