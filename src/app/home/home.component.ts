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

    setTimeout(() => {
      this.boardManager.setFEN('5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 40');
    }, 2);

    if (newBoardSize < 400) {

      newBoardSize = 400

    }

    return newBoardSize

  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  reset() {

    this.boardManager.reset();
    this.boardManager.setFEN('5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 40');

  }

  undo() {
    this.boardManager.undo();
    this.fen = this.boardManager.getFEN();
}

  public moveCallback(move: MoveChange): void {
    this.fen = this.boardManager.getFEN();

    console.log(this.fen);
    console.log(move.move);

    if (move.checkmate === true) {

      setTimeout(() => {

        this.confetti({
          spread: 100,
          particleCount: 500,
          origin: {
            y: 0.6
          }
        });

      }, 500);

    }

    if (move.move === "c5c1") {

      setTimeout(() => {

        this.boardManager.move('d3d1')
        this.boardManager.move('h3f1')
        this.boardManager.move('f3f1')

      }, 1000);

    }

    if (move.move === "c5c3") {

      setTimeout(() => {

        this.boardManager.move('d3c3')

      }, 1000);

    }

    if (move.move === "g5h3") {

      setTimeout(() => {

        this.boardManager.move('c3h3')
        this.boardManager.move('d3h3')

      }, 1000);


    }

    if (this.fen === "5r1k/1pN1R1pp/1Pb5/n1b1P3/7N/7Q/7P/1R4K1 w - - 0 4") {

      setTimeout(() => {

        this.boardManager.move('h3e3')

      }, 1000);

    }

    if (move.move === "g5f3") {

      setTimeout(() => {

        this.boardManager.move('d3f3')

      }, 1000);

    }

  }

  public size = this.ngOnInit()

}

