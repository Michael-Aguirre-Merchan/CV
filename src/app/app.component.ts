import { Component } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess';

  openMenu() {

    var element = document.getElementById("positionMenu")!

    var pos = element.getBoundingClientRect();
    // console.log(pos.top, pos.right, pos.bottom, pos.left);

    var ab:any;
    var ad:any;
    var p:any;

    ab = document.getElementById("responsiveMenu")
    ad = document.getElementById("body")
    
    
    // ab.style.marginLeft = "250px";
    ad.style.backgroundColor = "rgba(0,0,0,0.5)";
    
    ab.style.width = "250px";
    ab.style.left = pos.left+'px'
    ab.style.margin = "0"
    // ab.style.top = pos.top+'px'
    ab.style.borderRadius = "0" 
    
  }
  
  closeMenu() {

    var ac:any;
    var ae: any;
    
    ac = document.getElementById("responsiveMenu")
    ae = document.getElementById("body")

    ac.style.width = "0";

    ae.style.backgroundColor = "transparent";
    
  } 

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  
}


