import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardComponent, PieceIconInput, MoveChange } from 'ngx-chess-board'
import { HostListener } from "@angular/core";
declare const animation: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('board')
  boardManager!: NgxChessBoardComponent;

  public fen = '5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 40';
  public darkTileColor = 'rgba(29, 55, 79, 0.3)';
  public lightTileColor = 'rgba(248, 150, 34, 0.3)';

  icons: PieceIconInput = {
    blackBishopUrl: 'assets/svg/black/bishop.svg',
    blackKingUrl: 'assets/svg/black/king.svg',   // Put path to every icon like above
    blackKnightUrl: 'assets/svg/black/knight.svg',
    blackPawnUrl: 'assets/svg/black/pawn.svg',
    blackQueenUrl: 'assets/svg/black/queen.svg',
    blackRookUrl: 'assets/svg/black/castle.svg',
    whiteBishopUrl: 'assets/svg/white/bishop.svg',
    whiteKingUrl: 'assets/svg/white/king.svg',
    whiteKnightUrl: 'assets/svg/white/knight.svg',
    whitePawnUrl: 'assets/svg/white/pawn.svg',
    whiteQueenUrl: 'assets/svg/white/queen.svg',
    whiteRookUrl: 'assets/svg/white/castle.svg'
  };
  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(): number {
    var screenWidth = window.innerWidth;
    console.log(screenWidth);

    return screenWidth
  }

  ngOnInit(): number {

    animation()

    let newBoardSize: number;
    var screenUsed: number;

    if (screen.width >= 1700) {

      screenUsed = 0.32

    }

    if (screen.width < 1700) {

      screenUsed = 0.757 * 0.5

    }

    if (screen.width < 1200 && screen.width >= 768) {

      screenUsed = 0.48

    }

    if (screen.width < 768) {

      screenUsed = 0.8

    }

    newBoardSize = (this.getScreenSize() * screenUsed!) - 30;

    setTimeout(() => {
      this.boardManager.setFEN('5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 58');
    }, 2);

    return newBoardSize

  }

  public size = this.ngOnInit()

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  reset() {

    this.boardManager.reset();
    this.boardManager.setFEN('5r1k/1pN1R1pp/1Pb5/n1r1P1n1/7N/b2Q4/7P/1R4K1 b - - 0 58');

  }

  undo() {
    this.boardManager.undo();
    this.fen = this.boardManager.getFEN();
  }

  public moveCallback(move: MoveChange): void {
    this.fen = this.boardManager.getFEN();

    console.log(this.fen);
    console.log(move);

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



}

