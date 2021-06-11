import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cards = [
    { id: 1, title: 'About Me', text: 'Motivated second semester college student with an exemplary academic record and an aspiration to advance in the software industry. I have an innate capacity for leadership and strategic thinking.In addition, during my studies and extracurricular activities I have developed other skills, which make me an excellent asset to your company.' },
    // { id: 4, title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 4' },
    { id: 6, title: 'Other Participations', text: 'UdeA Biotechnology Course, Journalism Team Leader, Mathematics Group Leader Tutor, Organizer and Model United Nations (UN) President, 3 participations (2 times winner) math Olympics, Philosophy Forum Delegate, Children with Cancer Foundation Volunteer' },
    { id: 5, title: 'Other Certifications', text: 'English Certification from Colombo Americano, TOEFL exam certification, Angular: From cero to expert, Google mobile app development certification' },
    { id: 2, title: 'Skills', text: 'English, Japanese, Html, Wordpress, Angular, Adobe XD' },
    { id: 3, title: 'Interests', text: 'Travel, Read, Program Write' },
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  moreCardCode(card: any) {

    var a: any;
    var b: any;
    var c: any;

    a = document.getElementById(card.id);
    b = document.getElementById("card-deck");
    // c = document.getElementById("footer")

    // c.style.opacity = 0
    setTimeout(function () {
      b.style.display = "flex";
      a.style.display = "none"
    }, 1500);

    a.style.opacity = 0

    setTimeout(function () {
      b.style.opacity = 1
      // c.style.opacity = 1
      // c.style.position = "absolute";
      // c.style.width = "91.6666666667%";
      // c.style.bottom = "0";
    }, 2000);

  }

  cardCode(card: any) {

    var x: any;
    var y: any;
    var z: any;
    var yz: any;

    console.log(card.id);
    
    x = document.getElementById("card-deck");
    y = document.getElementById(card.id);
    // yz = document.getElementById("footer");

    setTimeout(function () {
      x.style.display = "none";
      y.style.display = "block"
    }, 1500);

    // yz.style.opacity = 0
    x.style.opacity = 0

    setTimeout(function () {
      // yz.style.opacity = 1
      y.style.opacity = 1
      // yz.style.position = "fixed";
      // yz.style.width = document.getElementById(card.id)!.offsetWidth + 30 + 'px';
    }, 2000);

    // yz.style.bottom = "2%";
    // yz.style.width = "74%";

  };

}