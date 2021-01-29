import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cards = [
    {id: 1, title: 'Personal Info', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 1'},
    {id: 2, title: 'Skills', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 2'},
    {id: 3, title: 'Interests', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 3'},
    {id: 4, title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 4'},
    {id: 5, title: 'Other Certifications', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 5'},
    {id: 6, title: 'Other Participations', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 6'}
      ];
  
  reads = [

    {id: 'card1', title: 'Personal Info', text: 'Lorem ipsum dolor sit amet, consetetur'},
    {id: 'card2', title: 'Skills', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'},
    {id: 'card3', title: 'Interests', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'},
    {id: 'card4', title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'},
    {id: 'card5', title: 'Other Certifications', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'},
    {id: 'card6', title: 'Other Participations', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'}

  ]
 
  constructor() {

   }

  ngOnInit(): void {
  }

  moreCardCode(read:any) {

    var a:any;
    var b:any;

    a = document.getElementById(read.id);
    b = document.getElementById("card-deck");
    
    b.style.display = "flex";
    a.style.display = "none"

  }

  cardCode(card:any) {
    var x:any; 
    var y:any;
    var z:any;

    z = 'card'+card.id

    x = document.getElementById("card-deck");
    y = document.getElementById(z);

      if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none"
      } else {
        x.style.display = "none";
        y.style.display = "block"
      }
    };

}
