import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardComponent, MoveChange } from 'ngx-chess-board';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { interval } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  @ViewChild('board')
  boardManager!: NgxChessBoardComponent;

  public fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  paused = true;



  ngOnInit(): number {

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

    var colChess = document.getElementById("col-chess")

    setTimeout(() => {
      
      colChess!.style.height = newBoardSize + 30 + 'px'

    }, 1);
    

    if (screen.width > 767) {


      setTimeout(() => {

        var P1 = document.getElementById("player-1")
        var P2 = document.getElementById("player-2")

        P1!.style.height = newBoardSize + 'px'
        P2!.style.height = newBoardSize + 'px'

      }, 1);

    }

    // this.pausable = interval(800).pipe(pausable()) as PausableObservable<number>;
    // this.pausable.subscribe(this.shoot.bind(this));
    // this.pausable.pause();

    return newBoardSize

  }

  // pausable!: PausableObservable<number>;

  // toggle() {
  //   if (this.paused) {
  //     this.pausable.resume();
  //   } else {
  //     this.pausable.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // shoot() {
  //   this.confetti({
  //     angle: this.random(120, 170),
  //     spread: this.random(30, 50),
  //     // particleCount: this.random(40, 50),`
  //     particleCount: 250,
  //     origin: {
  //       y: 0.6
  //     }
  //   });
  // }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  public size = this.ngOnInit()

  reset() {

    this.boardManager.reset();
    document.getElementById("P")!.innerHTML = "0";
    document.getElementById("R")!.innerHTML = "0";
    document.getElementById("K")!.innerHTML = "0";
    document.getElementById("B")!.innerHTML = "0";
    document.getElementById("Q")!.innerHTML = "0";
    document.getElementById("p")!.innerHTML = "0";
    document.getElementById("r")!.innerHTML = "0";
    document.getElementById("k")!.innerHTML = "0";
    document.getElementById("b")!.innerHTML = "0";
    document.getElementById("q")!.innerHTML = "0";

  }

  undo() {
    this.boardManager.undo();
    this.fen = this.boardManager.getFEN();
  }

  public moveCallback(move: MoveChange): void {

    this.fen = this.boardManager.getFEN();

    // console.log(this.fen);
    if (move.x === true) {


      function countString(str, letter) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) == letter) {
            count += 1;
          }
        }
        return count;
      }

      var i = this.fen.indexOf(" ");
      var board = this.fen.substring(0, i)

      var result = countString(board, "P");
      var Pnum = 8 - result
      var P = Pnum.toString();
      document.getElementById("P")!.innerHTML = P;

      var result = countString(board, "R");
      var Rnum = 2 - result
      var R = Rnum.toString();
      document.getElementById("R")!.innerHTML = R;

      var result = countString(board, "N");
      var Nnum = 2 - result
      var N = Nnum.toString();
      document.getElementById("K")!.innerHTML = N;

      var result = countString(board, "B");
      var Bnum = 2 - result
      var B = Bnum.toString();
      document.getElementById("B")!.innerHTML = B;

      var result = countString(board, "Q");
      var Qnum = 1 - result
      var Q = Qnum.toString();
      document.getElementById("Q")!.innerHTML = Q;

      var result = countString(board, "p");
      var pnum = 8 - result
      var p = pnum.toString();
      document.getElementById("p")!.innerHTML = p;

      var result = countString(board, "r");
      var rnum = 2 - result
      var r = rnum.toString();
      document.getElementById("r")!.innerHTML = r;

      var result = countString(board, "n");
      var nnum = 2 - result
      var n = nnum.toString();
      document.getElementById("k")!.innerHTML = n;

      var result = countString(board, "b");
      var bnum = 2 - result
      var b = bnum.toString();
      document.getElementById("b")!.innerHTML = b;

      var result = countString(board, "q");
      var qnum = 1 - result
      var q = qnum.toString();
      document.getElementById("q")!.innerHTML = q;

      if (move.color === 'black') {

        this.confetti({
          angle: this.random(20, 70),
          spread: this.random(30, 50),
          // particleCount: this.random(40, 50),`
          particleCount: 250,
          origin: {
            y: 0.6
          }
        });

      }

      if (move.color === 'white') {

        this.confetti({
          angle: this.random(120, 170),
          spread: this.random(30, 50),
          // particleCount: this.random(40, 50),`
          particleCount: 250,
          origin: {
            y: 0.6
          }
        });

      }

    }

  }

}
