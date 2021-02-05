import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent 
// implements AfterViewInit 
    {


  // @ViewChild('divToMeasure') divToMeasureElement!: ElementRef;

   public size:any;

  // ngAfterViewInit() {

  //   let divToMeasureWidth = this.divToMeasureElement.nativeElement.offsetWidth;

  //   console.log(divToMeasureWidth);

  //   this.size = divToMeasureWidth

  //   console.log(this.size)
     
  // }

     
  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
