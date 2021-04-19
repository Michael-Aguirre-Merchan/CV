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

  num(n: number): Array<number> {
    return Array(n);
  }

  counting(fen: any) {

    function countString(str, letter) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
          count += 1;
        }
      }
      return count;
    }

    var i = fen.indexOf(" ");
    var board = fen.substring(0, i)

    var result = countString(board, "P");
    var Pnum = 8 - result
    var P = Pnum.toString();
    document.getElementById("P")!.innerHTML = P;
    let PCount: number = Pnum
    while (PCount > 0) {
      var pieceNumber = PCount - 1
      var name = 'WhitePawn' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      PCount -= 1
    }

    var result = countString(board, "R");
    var Rnum = 2 - result
    var R = Rnum.toString();
    document.getElementById("R")!.innerHTML = R;
    let RCount: number = Rnum
    while (RCount > 0) {
      var pieceNumber = RCount - 1
      var name = 'WhiteRook' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      RCount -= 1
    }

    var result = countString(board, "N");
    var Nnum = 2 - result
    var N = Nnum.toString();
    document.getElementById("K")!.innerHTML = N;
    let NCount: number = Nnum
    while (NCount > 0) {
      var pieceNumber = NCount - 1
      var name = 'WhiteKnight' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      NCount -= 1
    }

    var result = countString(board, "B");
    var Bnum = 2 - result
    var B = Bnum.toString();
    document.getElementById("B")!.innerHTML = B;
    let BCount: number = Bnum
    while (BCount > 0) {
      var pieceNumber = BCount - 1
      var name = 'WhiteBishop' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      BCount -= 1
    }

    var result = countString(board, "Q");
    var Qnum = 1 - result
    var Q = Qnum.toString();
    document.getElementById("Q")!.innerHTML = Q;
    let QCount: number = Qnum
    while (QCount > 0) {
      var pieceNumber = QCount - 1
      var name = 'WhiteQueen' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      QCount -= 1
    }

    var result = countString(board, "p");
    var pnum = 8 - result
    var p = pnum.toString();
    document.getElementById("p")!.innerHTML = p;
    let pCount: number = pnum
    while (pCount > 0) {
      var pieceNumber = pCount - 1
      var name = 'BlackPawn' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      pCount -= 1
    }

    var result = countString(board, "r");
    var rnum = 2 - result
    var r = rnum.toString();
    document.getElementById("r")!.innerHTML = r;
    let rCount: number = rnum
    while (rCount > 0) {
      var pieceNumber = rCount - 1
      var name = 'BlackRook' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      rCount -= 1
    }

    var result = countString(board, "n");
    var nnum = 2 - result
    var n = nnum.toString();
    document.getElementById("k")!.innerHTML = n;
    let nCount: number = nnum
    while (nCount > 0) {
      var pieceNumber = nCount - 1
      var name = 'BlackKnight' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      nCount -= 1
    }

    var result = countString(board, "b");
    var bnum = 2 - result
    var b = bnum.toString();
    document.getElementById("b")!.innerHTML = b;
    let bCount: number = bnum
    while (bCount > 0) {
      var pieceNumber = bCount - 1
      var name = 'BlackBishop' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      bCount -= 1
    }

    var result = countString(board, "q");
    var qnum = 1 - result
    var q = qnum.toString();
    document.getElementById("q")!.innerHTML = q;
    let qCount: number = qnum
    while (qCount > 0) {
      var pieceNumber = qCount - 1
      var name = 'BlackQueen' + pieceNumber
      document.getElementById(name)!.classList.remove('no-display');
      document.getElementById(name)!.classList.add('p-2');
      qCount -= 1
    }
  }

  deleting() {

    var deletePawns = 7
    while (deletePawns != -1) {
      var name = 'WhitePawn' + deletePawns
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deletePawns -= 1
    }

    var deleteRooks = 1
    while (deleteRooks != -1) {
      var name = 'WhiteRook' + deleteRooks
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleteRooks -= 1
    }

    var deleteKnights = 1
    while (deleteKnights != -1) {
      var name = 'WhiteKnight' + deleteKnights
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleteKnights -= 1
    }

    var deleteBishops = 1
    while (deleteBishops != -1) {
      var name = 'WhiteBishop' + deleteBishops
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleteBishops -= 1
    }

    var deleteQueens = 0
    while (deleteQueens != -1) {
      var name = 'WhiteQueen' + deleteQueens
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleteQueens -= 1
    }

    var deletepawns = 7
    while (deletepawns != -1) {
      var name = 'BlackPawn' + deletepawns
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deletepawns -= 1
    }

    var deleterooks = 1
    while (deleterooks != -1) {
      var name = 'BlackRook' + deleterooks
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleterooks -= 1
    }

    var deletebishops = 1
    while (deletebishops != -1) {
      var name = 'BlackBishop' + deletebishops
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deletebishops -= 1
    }

    var deleteknights = 1
    while (deleteknights != -1) {
      var name = 'BlackKnight' + deleteknights
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deleteknights -= 1
    }

    var deletequeens = 0
    while (deletequeens != -1) {
      var name = 'BlackQueen' + deletequeens
      if (document.getElementById(name)! != null) {
        document.getElementById(name)!.classList.remove('p-2');
        document.getElementById(name)!.classList.add('no-display');
      }
      deletequeens -= 1
    }


  }

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

        P1!.style.minHeight = newBoardSize + 'px'
        P2!.style.minHeight = newBoardSize + 'px'

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
    this.fen = this.boardManager.getFEN();
    this.deleting();

  }

  undo() {
    this.boardManager.undo();
    this.fen = this.boardManager.getFEN();
    this.deleting();
    this.counting(this.fen)
  }

  public moveCallback(move: MoveChange): void {

    this.fen = this.boardManager.getFEN();

    // console.log(this.fen);
    if (move.x === true) {

      this.counting(this.fen)

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
