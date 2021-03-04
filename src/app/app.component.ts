import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChessBoardService } from 'ngx-chess-board';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chess';

  constructor(private ngxChessBoardService: NgxChessBoardService, public router: Router) { }

  loaded = true

  ngOnInit(): void {

    var url = window.document.location.pathname

    if (url == "/") {

      this.loaded = false

      var body: any

      body = document.getElementById("body")

      body.style.display = "none"

      setTimeout(() => {

        this.loaded = true

        body.style.display = "block"


      }, 5050);
    }

  }

  openMenu() {

    // var element = document.getElementById("positionMenu")!

    // var pos = element.getBoundingClientRect();
    // console.log(pos.top, pos.right, pos.bottom, pos.left);

    var ab: any;
    var ad: any;

    ab = document.getElementById("responsiveMenu")
    ad = document.getElementById("body")


    ad.style.display = "block";
    ad.style.backgroundColor = "rgba(0,0,0,0.5)";
    ad.style.marginLeft = "0";
    ab.style.display = "block";
    // ab.style.left = pos.left+'px'

    // ab.style.margin = "0"
    // ab.style.top = pos.top+'px'
    // ab.style.borderRadius = "0" 

  }

  closeMenu() {

    var ac: any;
    var ae: any;

    ac = document.getElementById("responsiveMenu")
    ae = document.getElementById("body")

    ac.style.display = "none";

    ae.style.display = "none";
    ae.style.backgroundColor = "transparent";
    ae.style.marginLeft = "200px"

  }


}


