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
    
    setTimeout( function(){
    b.style.display = "flex";
    a.style.display = "none"
  }, 1500 );

  a.style.opacity = 0

  setTimeout( function(){
    b.style.opacity = 1
  }, 2000 );
  }

  cardCode(card:any) {
    var x:any; 
    var y:any;
    var z:any;

    z = 'card'+card.id

    x = document.getElementById("card-deck");
    y = document.getElementById(z);

    setTimeout( function(){
      x.style.display = "none";
      y.style.display = "block"
    }, 1500 );
      
      // t.style.animation = "myfirst 5s linear forwards";
      x.style.opacity = 0

      setTimeout( function(){
        y.style.opacity = 1
      }, 2000 );
      
    };

    animationTest(card:any) {

      

      

//       var element = document.getElementsByName("element");
//       var values= '';
//       for(var i=0; i<element.length; i++) {
//         // console.log(element[i].id);
//         // var test = element[i].id;
//         // console.log(test);
        
//         // if(element[i].id === card.id) {
//       values+= element[i].id;
//     // }
// }
// console.log(values);
// var val = [1, 2, 3, 4, 5, 6]
// for( var i = 0; i < val.length; i++){ 
                                   
//    if ( val[i] === card.id) { 
//        val.splice(i, 1); 
//        i--; 
//    }   
//  }
//  console.log(val);
//  var valu:any
//  valu = val.map(String)
//  var elements:any
// //  console.log(elements);
 
//  for( var x = 0; x < valu.length; x++ ) {
//   elements+= document.getElementById(valu[x])!.id
//   ;
// }
// console.log(elements);

 
    }

}