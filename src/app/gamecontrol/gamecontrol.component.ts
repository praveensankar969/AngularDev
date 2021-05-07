import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  increment: number =0;
  startPressed:boolean = true;
  interval:any;

  @Output() alertIncrement = new EventEmitter<number>();

  constructor() {
    
   }

  ngOnInit(): void {
  }

  StartButtonClicked (){
    this.startPressed = true;
    //while(this.startPressed){
      this.interval = setInterval(() =>{
        this.increment++;
        this.alertIncrement.emit(this.increment);
        console.log(this.increment);
       },1000);
       
   // }
    
  }

  StopButtonClicked (){
    this.startPressed=false;
    clearInterval(this.interval);
  }
}
