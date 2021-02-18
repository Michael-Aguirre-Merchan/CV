import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  

ngOnInit(): number {

  let newBoardSize: number;
  var screenUsed:number;

  if (screen.width >= 1200) {

    screenUsed = 0.37485
    
  } 
  
 if (screen.width < 1200 && screen.width >= 768) {

    screenUsed = 0.45
    
  }

 if (screen.width < 768) {
   
  screenUsed = 0.7

 } 

  newBoardSize = screen.width * screenUsed!;

  console.log(newBoardSize);

  return newBoardSize
}


    public size = this.ngOnInit()
  
  constructor () {}
  
}
