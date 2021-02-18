import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  edus = [

    {cert: 'Academic Bachelor', place: 'Instituto San Carlos', date: '2014 - 2019', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    {cert: 'Control Engineering', place: 'Universidad Nacional de Colombia', date: '2020 - 2026', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}

  ];

  works = [

    {cert: 'Front-End Developer', place: '3Metas', date: '2019 - Today', detail: 'Junior web developer with experience in angular and databases. In charge of the preliminary UX and UI design from the Adobe XD tool. Experience in websites development in Angular and WordPress.'},
    {cert: 'Freelancer', place: '', date: '2019 - Today', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
    // {cert: 'List-based media object', place: 'Example Place', date: '0/0/0000', detail: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
