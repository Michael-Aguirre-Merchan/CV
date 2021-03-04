import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardComponent, MoveChange } from 'ngx-chess-board'
declare const animation: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fen = '5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 40';

  @ViewChild('board')
    boardManager!: NgxChessBoardComponent;

  ngOnInit(): number {

    // console.log(this.fen);
    

    animation()

    let newBoardSize: number;
    var screenUsed: number;

    if (screen.width >= 1200) {

      screenUsed = 0.757 * 0.5

    }

    if (screen.width < 1200 && screen.width >= 768) {

      screenUsed = 0.48

    }

    if (screen.width < 768) {

      screenUsed = 0.8

    }

    newBoardSize = (screen.width * screenUsed!) - 30;

    // console.log(newBoardSize);

    setTimeout(() => {
      this.boardManager.setFEN('5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 40');
    }, 2);

    if (newBoardSize < 400) {

      newBoardSize = 400
      
    }
    
    return newBoardSize

  }
  public moveCallback(move: MoveChange): void {
    this.fen = this.boardManager.getFEN();
    console.log(move);
    
}

  public size = this.ngOnInit()
  

}
