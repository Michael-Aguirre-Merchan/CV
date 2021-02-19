import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  edus = [

    { cert: 'Control Engineering', place: 'Universidad Nacional de Colombia', date: '2020 - 2026', detail: 'Academic bachelor graduate with honors. Group leader. Participant and winner of the Mathematics Olympics on several occasions. Organizer and Model United Nations (ONU) President.' },
    { cert: 'Academic Bachelor', place: 'Instituto San Carlos', date: '2014 - 2019', detail: 'A discipline that focuses on mathematically modeling a wide range of dynamic systems and designing controllers makes these systems behave in the desired way.' },
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}

  ];

  works = [

    { cert: 'Front-End Developer', place: '3Metas', date: '2019 - Today', detail: 'Junior web developer with experience in angular and databases. In charge of the preliminary UX and UI design from the Adobe XD tool. Experience in website development in Angular and WordPress.' },
    { cert: 'Programming Enthusiast', place: 'Self-Employee', date: '2019 - Today', detail: 'Website creation from scratch or via web builder with technologies as angular and SVG Animation. CI/CD with GitLab. Computer software documentation writer.' },
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
