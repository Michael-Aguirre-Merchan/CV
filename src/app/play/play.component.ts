import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardComponent, MoveChange } from 'ngx-chess-board';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval } from 'rxjs';

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
  pausable!: PausableObservable<number>;

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

    // console.log(newBoardSize);

    setTimeout(() => {

      var P1 = document.getElementById("player-1")
      var P2 = document.getElementById("player-2")

      P1!.style.height = newBoardSize + 'px'
      P2!.style.height = newBoardSize + 'px'

    }, 1);

    // this.shoot();
    this.pausable = interval(800)
      .pipe(pausable()) as PausableObservable<number>;
    this.pausable.subscribe(this.shoot.bind(this));
    this.pausable.pause();

    return newBoardSize

  }

  toggle() {
    if (this.paused) {
      this.pausable.resume();
    } else {
      this.pausable.pause();
    }
    this.paused = !this.paused;
  }

  shoot() {

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

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  public size = this.ngOnInit()

  public moveCallback(move: MoveChange): void {
    this.fen = this.boardManager.getFEN();
    console.log(this.fen);
    if (move.x === true) {

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
