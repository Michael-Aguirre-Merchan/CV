import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private httpClient: HttpClient,
    private fileSaverService: FileSaverService,) { }

  onDown() {
    this.httpClient.get("assets/CV.pdf", {
      observe: 'response',
      responseType: 'blob'
    }).subscribe(res => {
      this.fileSaverService.save(res.body!, "Michael Aguirre - CV.pdf");
    });
    return;
  }

}
